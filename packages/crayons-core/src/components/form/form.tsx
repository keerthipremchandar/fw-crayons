/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, Prop, State, Element, h, Method } from '@stencil/core';
import {
  FormValues,
  FormConfig,
  FormTouched,
  FormErrors,
  FormUtils,
} from './form-declaration';
import {
  getElementValue,
  validateYupSchema,
  prepareDataForValidation,
  yupToFormErrors,
} from './form-util';

@Component({
  tag: 'fw-form',
  shadow: true,
})
export class Form implements FormConfig {
  @Element() el!: any;

  private controls: any;

  @Prop() initialValues?: any = {};
  @Prop() initialErrors?: any = {};
  @Prop() validate?: any = () => {};
  @Prop() formSchema?: any = {};
  @Prop() validationSchema?: any = {};

  /** Tells Form to validate the form on each input's onInput event */
  @Prop() validateOnInput? = true;
  /** Tells Form to validate the form on each input's onBlur event */
  @Prop() validateOnBlur? = true;

  @State() isValid = false;
  @State() isValidating = false;
  @State() isSubmitting = false;

  @State() focused: keyof FormValues = null;
  @State() values: FormValues = {} as any;
  @State() touched: FormTouched<FormValues> = {} as any;
  @State() errors: FormErrors<FormValues> = {} as any;

  componentWillLoad() {
    this.values = this.initialValues;

    for (const field of Object.keys(this.values)) {
      this.errors[field] = null;
      this.touched[field] = false;
    }

    this.errors = { ...this.errors, ...this.initialErrors };

    Object.keys(this.initialErrors).forEach((f) => (this.touched[f] = true));

    console.log({ errors: this.errors });
  }

  // get Form Controls and pass props to children
  componentDidLoad() {
    this.controls = this.getFormControls();
    this.passPropsToChildren(this.controls);
  }

  // pass props to form-control children
  componentWillUpdate() {
    console.log('Component will update and re-render');
    if (!this.controls) {
      this.controls = this.getFormControls();
    }
    this.passPropsToChildren(this.controls);
  }

  setSubmitting = (value: boolean) => {
    this.isSubmitting = value;
  };

  handleSubmit = async (event: Event) => {
    event?.preventDefault();
    event?.stopPropagation();

    this.isSubmitting = true;

    let isValid = false;

    await this.handleValidation();

    console.log({ errors: this.errors });

    const keys = [...Object.keys(this.values), ...Object.keys(this.errors)];

    let touchedState = {};
    keys.forEach((k) => (touchedState = { ...touchedState, [k]: true }));
    // on clicking submit, mark all fields as touched
    this.touched = { ...this.touched, ...touchedState };

    isValid = !this.errors || Object.keys(this.errors).length === 0;

    console.log({ values: this.values });

    console.log('is Valid Form ', isValid);

    this.isSubmitting = false;

    return { values: this.values, isValid };
  };

  handleReset = (event?: Event) => {
    event?.preventDefault();
    event?.stopPropagation();
    this.isSubmitting = false;
    this.values = this.initialValues;
    this.errors = {};
    this.touched = {};
    this.focused = null;
  };

  handleValidation = async () => {
    console.log('handle validation');

    this.isValidating = true;

    let validationErrors = {};
    if (this.validationSchema && Object.keys(this.validationSchema).length) {
      const pr = validateYupSchema(
        prepareDataForValidation(this.values),
        this.validationSchema
      );
      try {
        await pr;
        validationErrors = {}; // reset errors if no errors from validation
      } catch (err) {
        validationErrors = yupToFormErrors(err);
      }
    } else if (this.validate && typeof this.validate === 'function') {
      try {
        const errors = (await this.validate(this.values)) || {};
        validationErrors = errors || {};
      } catch (err) {
        console.error(`Error in calling validate function ${err.message}`);
        validationErrors = {};
      }
    }

    this.errors = validationErrors;

    this.isValidating = false;
  };

  handleInput =
    (field: string, inputType: string) =>
    async (event: Event, ref: any): Promise<void> => {
      //const target = event?.target;
      const value = getElementValue(inputType, event, ref);

      this.values = { ...this.values, [field]: value };

      /** Validate, if user wants to validateOnInput */
      if (this.validateOnInput) this.handleValidation();
    };

  handleBlur =
    (field: string, inputType: string) => (event: Event, ref: any) => {
      if (this.focused) this.focused = null;
      if (!this.touched[field])
        this.touched = { ...this.touched, [field]: true };
      const value: any = getElementValue(inputType, event, ref);

      this.values = { ...this.values, [field]: value };
      /** Validate, if user wants to validateOnInput */
      if (this.validateOnBlur) this.handleValidation();
    };

  handleFocus =
    (field: string, _inputType: string) => (_event: Event, _ref: any) => {
      this.focused = field;
    };

  private getFormControls() {
    let children = [];
    children = Array.from([
      ...this.el.shadowRoot.querySelectorAll('*'),
      ...this.el.querySelectorAll('*'),
    ]).filter((el: HTMLElement) =>
      ['fw-form-control'].includes(el.tagName.toLowerCase())
    );
    return children;
  }

  private passPropsToChildren(controls) {
    controls.forEach((f) => {
      this.passPropsToChild(f);
    });
  }

  private passPropsToChild(f) {
    const error = this.errors[(f as any).name];
    const touched = this.touched[(f as any).name];
    (f as any).controlProps = this.composedUtils();
    if (error) (f as any).error = error;
    else (f as any).error = '';
    if (touched) (f as any).touched = true;
    else (f as any).touched = false;
  }

  private composedUtils = (): FormUtils<FormValues, keyof FormValues> => {
    const inputProps = (field, inputType) => ({
      name: field,
      type: inputType,
      handleInput: this.handleInput(field, inputType),
      handleChange: this.handleInput(field, inputType),
      handleBlur: this.handleBlur(field, inputType),
      handleFocus: this.handleFocus(field, inputType),
      id: `input-${field}`,
      value: this.values[field],
    });

    const radioProps = (field, inputType) => ({
      ...inputProps(field, inputType),
      type: inputType,
      id: `input-${field}--radio-${this.values[field]}`,
      value: this.values[field],
    });

    const checkboxProps = (field, inputType) => ({
      ...inputProps(field, inputType),
      type: inputType,
      checked: !!this.values[field],
    });

    const selectProps = (field, inputType) => ({
      type: 'text',
      name: field,
      id: `input-${field}`,
      handleChange: this.handleInput(field, inputType),
      handleBlur: this.handleBlur(field, inputType),
      value:
        inputType === 'multi_select' // for multiselect pass Array
          ? this.values[field]?.map((v) => v.value || v) || []
          : Array.isArray(this.values[field]) // single select but the value is an array, pass 0th index
          ? this.values[field]?.map((v) => v.value || v)[0] || ''
          : this.values[field] || '',
    });

    const labelProps = (field, value) => ({
      htmlFor: !value ? `input-${field}` : `input-${field}--radio-${value}`,
    });

    const formProps = {
      action: 'javascript:void(0);',
      onSubmit: this.handleSubmit,
      onReset: this.handleReset,
    };

    return {
      inputProps,
      selectProps,
      checkboxProps,
      radioProps,
      labelProps,
      formProps,
    };
  };

  @Method()
  async setFieldValue(fieldObj) {
    Object.entries(fieldObj)?.forEach(([field, value]) => {
      this.values = { ...this.values, [field]: value };
      this.touched = { ...this.touched, [field]: true };
    });
    if (this.validateOnBlur || this.validateOnInput)
      await this.handleValidation();
  }

  @Method()
  async setFieldErrors(errorObj) {
    Object.entries(errorObj)?.forEach(([field, value]) => {
      this.errors = { ...this.errors, [field]: value as string };
      this.touched = { ...this.touched, [field]: true };
    });
  }

  @Method()
  async doSubmit(e) {
    this.handleSubmit(e);
  }

  @Method()
  async doReset(e) {
    this.handleReset(e);
  }

  renderCustomComponent(componentName: string, props: any) {
    let template: JSX.Element;
    if (window.customElements?.get(componentName)) {
      const CustomComponent = `${componentName}`;
      let slotText: JSX.Element;
      if (props.slotText) {
        slotText = props.slotText;
        delete props.slotText;
      }
      template = <CustomComponent {...props}>{slotText}</CustomComponent>;
    } else {
      template = null;
    }
    return template;
  }

  render() {
    const utils: FormUtils<FormValues, keyof FormValues> = this.composedUtils();

    return (
      <form id='fw_form_wrapper' {...utils.formProps}>
        {this.formSchema && Object.keys(this.formSchema).length > 0 ? (
          this.formSchema?.fields
            ?.sort((a, b) => a.position - b.position)
            .map((field) => {
              return (
                <fw-form-control
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  label={field.label}
                  choices={field.choices}
                  controlProps={utils}
                >
                  {field.type === 'CUSTOM' &&
                    this.renderCustomComponent(
                      field.component,
                      field.componentProps
                    )}
                </fw-form-control>
              );
            })
        ) : (
          <slot></slot>
        )}
      </form>
    );
  }
}
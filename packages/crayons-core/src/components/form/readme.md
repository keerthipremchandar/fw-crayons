# fw-form



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                                   | Type      | Default     |
| ------------------ | ------------------- | ------------------------------------------------------------- | --------- | ----------- |
| `formSchema`       | `form-schema`       |                                                               | `any`     | `undefined` |
| `initialErrors`    | `initial-errors`    |                                                               | `any`     | `{}`        |
| `initialValues`    | `initial-values`    |                                                               | `any`     | `{}`        |
| `validate`         | `validate`          |                                                               | `any`     | `() => {}`  |
| `validateOnBlur`   | `validate-on-blur`  | Tells Form to validate the form on each input's onBlur event  | `boolean` | `true`      |
| `validateOnInput`  | `validate-on-input` | Tells Form to validate the form on each input's onInput event | `boolean` | `true`      |
| `validationSchema` | `validation-schema` |                                                               | `any`     | `{}`        |


## Methods

### `doReset(e: any) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `doSubmit(e: any) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `setFieldErrors(errorObj: any) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `setFieldValue(fieldObj: any) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [fw-form-wrapper](../form-wrapper)

### Depends on

- [fw-form-control](../form-control)

### Graph
```mermaid
graph TD;
  fw-form --> fw-form-control
  fw-form-control --> fw-input
  fw-form-control --> fw-textarea
  fw-form-control --> fw-datepicker
  fw-form-control --> fw-checkbox
  fw-form-control --> fw-radio-group
  fw-form-control --> fw-radio
  fw-form-control --> fw-select
  fw-form-control --> fw-timepicker
  fw-input --> fw-icon
  fw-icon --> fw-toast-message
  fw-toast-message --> fw-spinner
  fw-toast-message --> fw-icon
  fw-datepicker --> fw-popover
  fw-datepicker --> fw-input
  fw-datepicker --> fw-select
  fw-datepicker --> fw-select-option
  fw-datepicker --> fw-button
  fw-select --> fw-tag
  fw-select --> fw-popover
  fw-select --> fw-button
  fw-select --> fw-spinner
  fw-select --> fw-icon
  fw-select --> fw-list-options
  fw-tag --> fw-avatar
  fw-tag --> fw-icon
  fw-button --> fw-spinner
  fw-button --> fw-icon
  fw-list-options --> fw-select-option
  fw-list-options --> fw-input
  fw-select-option --> fw-icon
  fw-select-option --> fw-checkbox
  fw-select-option --> fw-avatar
  fw-timepicker --> fw-select
  fw-timepicker --> fw-select-option
  fw-form-wrapper --> fw-form
  style fw-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

Built with ❤ at Freshworks
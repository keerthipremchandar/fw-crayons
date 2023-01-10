System.register(["./p-6fb516eb.system.js"],(function(e){"use strict";var t,r,a,n;return{setters:[function(e){t=e.b;r=e.a;a=e.c;n=e.d}],execute:function(){var i={lessThanXSeconds:{one:"më pak se një sekondë",other:"më pak se {{count}} sekonda"},xSeconds:{one:"1 sekondë",other:"{{count}} sekonda"},halfAMinute:"gjysëm minuti",lessThanXMinutes:{one:"më pak se një minute",other:"më pak se {{count}} minuta"},xMinutes:{one:"1 minutë",other:"{{count}} minuta"},aboutXHours:{one:"rreth 1 orë",other:"rreth {{count}} orë"},xHours:{one:"1 orë",other:"{{count}} orë"},xDays:{one:"1 ditë",other:"{{count}} ditë"},aboutXWeeks:{one:"rreth 1 javë",other:"rreth {{count}} javë"},xWeeks:{one:"1 javë",other:"{{count}} javë"},aboutXMonths:{one:"rreth 1 muaj",other:"rreth {{count}} muaj"},xMonths:{one:"1 muaj",other:"{{count}} muaj"},aboutXYears:{one:"rreth 1 vit",other:"rreth {{count}} vite"},xYears:{one:"1 vit",other:"{{count}} vite"},overXYears:{one:"mbi 1 vit",other:"mbi {{count}} vite"},almostXYears:{one:"pothuajse 1 vit",other:"pothuajse {{count}} vite"}};function o(e,t,r){r=r||{};var a;if(typeof i[e]==="string"){a=i[e]}else if(t===1){a=i[e].one}else{a=i[e].other.replace("{{count}}",t)}if(r.addSuffix){if(r.comparison>0){return"në "+a}else{return a+" më parë"}}return a}var m={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"};var s={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"};var d={full:"{{date}} 'në' {{time}}",long:"{{date}} 'në' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};var h={date:t({formats:m,defaultWidth:"full"}),time:t({formats:s,defaultWidth:"full"}),dateTime:t({formats:d,defaultWidth:"full"})};var u={lastWeek:"'të' eeee 'e shkuar në' p",yesterday:"'dje në' p",today:"'sot në' p",tomorrow:"'nesër në' p",nextWeek:"eeee 'at' p",other:"P"};function v(e,t,r,a){return u[e]}var l={narrow:["P","M"],abbreviated:["PK","MK"],wide:["Para Krishtit","Mbas Krishtit"]};var f={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["4-mujori I","4-mujori II","4-mujori III","4-mujori IV"]};var b={narrow:["J","S","M","P","M","Q","K","G","S","T","N","D"],abbreviated:["Jan","Shk","Mar","Pri","Maj","Qer","Kor","Gus","Sht","Tet","Nën","Dhj"],wide:["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"]};var j={narrow:["D","H","M","M","E","P","S"],short:["Di","Hë","Ma","Më","En","Pr","Sh"],abbreviated:["Die","Hën","Mar","Mër","Enj","Pre","Sht"],wide:["Dielë","Hënë","Martë","Mërkurë","Enjte","Premte","Shtunë"]};var c={narrow:{am:"p",pm:"m",midnight:"m",noon:"d",morning:"mëngjes",afternoon:"dite",evening:"mbrëmje",night:"natë"},abbreviated:{am:"PD",pm:"MD",midnight:"mesnëtë",noon:"drek",morning:"mëngjes",afternoon:"mbasdite",evening:"mbrëmje",night:"natë"},wide:{am:"p.d.",pm:"m.d.",midnight:"mesnëtë",noon:"drek",morning:"mëngjes",afternoon:"mbasdite",evening:"mbrëmje",night:"natë"}};var g={narrow:{am:"p",pm:"m",midnight:"m",noon:"d",morning:"në mëngjes",afternoon:"në mbasdite",evening:"në mbrëmje",night:"në mesnatë"},abbreviated:{am:"PD",pm:"MD",midnight:"mesnatë",noon:"drek",morning:"në mëngjes",afternoon:"në mbasdite",evening:"në mbrëmje",night:"në mesnatë"},wide:{am:"p.d.",pm:"m.d.",midnight:"mesnatë",noon:"drek",morning:"në mëngjes",afternoon:"në mbasdite",evening:"në mbrëmje",night:"në mesnatë"}};function p(e,t){var r=Number(e);var a=t||{};var n=String(a.unit);if(n==="hour")return r;if(r===1)return r+"-rë";if(r===4)return r+"t";return r+"-të"}var M={ordinalNumber:p,era:r({values:l,defaultWidth:"wide"}),quarter:r({values:f,defaultWidth:"wide",argumentCallback:function e(t){return Number(t)-1}}),month:r({values:b,defaultWidth:"wide"}),day:r({values:j,defaultWidth:"wide"}),dayPeriod:r({values:c,defaultWidth:"wide",formattingValues:g,defaultFormattingWidth:"wide"})};var k=/^(\d+)(-rë|-të|t|)?/i;var w=/\d+/i;var P={narrow:/^(p|m)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(para krishtit|mbas krishtit)/i};var y={any:[/^b/i,/^(p|m)/i]};var W={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]-mujori (i{1,3}|iv)/i};var S={any:[/1/i,/2/i,/3/i,/4/i]};var D={narrow:/^[jsmpqkftnd]/i,abbreviated:/^(jan|shk|mar|pri|maj|qer|kor|gus|sht|tet|nën|dhj)/i,wide:/^(janar|shkurt|mars|prill|maj|qershor|korrik|gusht|shtator|tetor|nëntor|dhjetor)/i};var x={narrow:[/^j/i,/^s/i,/^m/i,/^p/i,/^m/i,/^q/i,/^k/i,/^g/i,/^s/i,/^t/i,/^n/i,/^d/i],any:[/^ja/i,/^shk/i,/^mar/i,/^pri/i,/^maj/i,/^qer/i,/^kor/i,/^gu/i,/^sht/i,/^tet/i,/^n/i,/^d/i]};var q={narrow:/^[dhmeps]/i,short:/^(di|hë|ma|më|en|pr|sh)/i,abbreviated:/^(die|hën|mar|mër|enj|pre|sht)/i,wide:/^(dielë|hënë|martë|mërkurë|enjte|premte|shtunë)/i};var E={narrow:[/^d/i,/^h/i,/^m/i,/^m/i,/^e/i,/^p/i,/^s/i],any:[/^d/i,/^h/i,/^ma/i,/^më/i,/^e/i,/^p/i,/^s/i]};var I={narrow:/^(p|m|me|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i,any:/^([pm]\.?\s?d\.?|drek|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i};var X={any:{am:/^p/i,pm:/^m/i,midnight:/^me/i,noon:/^dr/i,morning:/mëngjes/i,afternoon:/mbasdite/i,evening:/mbrëmje/i,night:/natë/i}};var K={ordinalNumber:a({matchPattern:k,parsePattern:w,valueCallback:function e(t){return parseInt(t,10)}}),era:n({matchPatterns:P,defaultMatchWidth:"wide",parsePatterns:y,defaultParseWidth:"any"}),quarter:n({matchPatterns:W,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"any",valueCallback:function e(t){return t+1}}),month:n({matchPatterns:D,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any"}),day:n({matchPatterns:q,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),dayPeriod:n({matchPatterns:I,defaultMatchWidth:"any",parsePatterns:X,defaultParseWidth:"any"})};var N=e("default",{code:"sq",formatDistance:o,formatLong:h,formatRelative:v,localize:M,match:K,options:{weekStartsOn:1,firstWeekContainsDate:1}})}}}));
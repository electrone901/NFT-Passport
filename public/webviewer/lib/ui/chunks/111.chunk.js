(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1094:function(e,t,r){e.exports=function(e){"use strict";var t=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(e);function r(e){return e>1&&e<5&&1!=~~(e/10)}function n(e,t,n,a){var o=e+" ";switch(n){case"s":return t||a?"pár sekúnd":"pár sekundami";case"m":return t?"minúta":a?"minútu":"minútou";case"mm":return t||a?o+(r(e)?"minúty":"minút"):o+"minútami";case"h":return t?"hodina":a?"hodinu":"hodinou";case"hh":return t||a?o+(r(e)?"hodiny":"hodín"):o+"hodinami";case"d":return t||a?"deň":"dňom";case"dd":return t||a?o+(r(e)?"dni":"dní"):o+"dňami";case"M":return t||a?"mesiac":"mesiacom";case"MM":return t||a?o+(r(e)?"mesiace":"mesiacov"):o+"mesiacmi";case"y":return t||a?"rok":"rokom";case"yy":return t||a?o+(r(e)?"roky":"rokov"):o+"rokmi"}}var a={name:"sk",weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),months:"január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),monthsShort:"jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"pred %s",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n}};return t.default.locale(a,null,!0),a}(r(30))}}]);
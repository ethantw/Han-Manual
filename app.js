window.Yijun=function(e,t){return{id:function(t,r){return(r||e).getElementById(t)},tag:function(t,r){return this.makeArray((r||e).getElementsByTagName(t))},qsa:function(t,r){return this.makeArray((r||e).querySelectorAll(t))},create:function(t,r){var t="!"===t?e.createDocumentFragment():""===t?e.createTextNode(r||""):e.createElement(t);try{if(r){t.className=r}}catch(n){}return t},clone:function(e,t){return e.cloneNode(t||true)},remove:function(e,t){return(t||e.parentNode).removeChild(e)},setAttr:function(e,r){var n=r.length;if(typeof r!=="object"){return}if(typeof r[0]==="object"&&"name"in r[0]){for(var i=0;i<n;i++){if(r[i].value!==t){e.setAttribute(r[i].name,r[i].value)}}}else{for(var a in r){if(r.hasOwnProperty(a)&&r[a]!==t){e.setAttribute(a,r[a])}}}return e},isIgnorable:function(e){return e.nodeName==="WBR"||e.nodeType===Node.COMMENT_NODE},makeArray:function(e){return Array.prototype.slice.call(e)},extend:function(e,t){var r=typeof e==="object"||typeof e==="function"||typeof t==="object";if(!r){return}for(var n in t){if(t.hasOwnProperty(n)){e[n]=t[n]}}return e}}}(window.document);var hljs=new function(){function e(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,t){var r=e&&e.exec(t);return r&&r.index==0}function n(e){var t=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);t=t.map(function(e){return e.replace(/^lang(uage)?-/,"")});return t.filter(function(e){return y(e)||/no(-?)highlight/.test(e)})[0]}function i(e,t){var r={};for(var n in e){r[n]=e[n]}if(t){for(var n in t){r[n]=t[n]}}return r}function a(e){var r=[];(function n(e,i){for(var a=e.firstChild;a;a=a.nextSibling){if(a.nodeType==3){i+=a.nodeValue.length}else{if(a.nodeType==1){r.push({event:"start",offset:i,node:a});i=n(a,i);if(!t(a).match(/br|hr|img|input/)){r.push({event:"stop",offset:i,node:a})}}}}return i})(e,0);return r}function o(r,n,i){var a=0;var o="";var s=[];function c(){if(!r.length||!n.length){return r.length?r:n}if(r[0].offset!=n[0].offset){return r[0].offset<n[0].offset?r:n}return n[0].event=="start"?r:n}function l(r){function n(t){return" "+t.nodeName+'="'+e(t.value)+'"'}o+="<"+t(r)+Array.prototype.map.call(r.attributes,n).join("")+">"}function u(e){o+="</"+t(e)+">"}function d(e){(e.event=="start"?l:u)(e.node)}while(r.length||n.length){var f=c();o+=e(i.substr(a,f[0].offset-a));a=f[0].offset;if(f==r){s.reverse().forEach(u);do{d(f.splice(0,1)[0]);f=c()}while(f==r&&f.length&&f[0].offset==a);s.reverse().forEach(l)}else{if(f[0].event=="start"){s.push(f[0].node)}else{s.pop()}d(f.splice(0,1)[0])}}return o+e(i.substr(a))}function s(e){function t(e){return e&&e.source||e}function r(r,n){return RegExp(t(r),"m"+(e.cI?"i":"")+(n?"g":""))}function n(a,o){if(a.compiled){return}a.compiled=true;a.k=a.k||a.bK;if(a.k){var s={};var c=function(t,r){if(e.cI){r=r.toLowerCase()}r.split(" ").forEach(function(e){var r=e.split("|");s[r[0]]=[t,r[1]?Number(r[1]):1]})};if(typeof a.k=="string"){c("keyword",a.k)}else{Object.keys(a.k).forEach(function(e){c(e,a.k[e])})}a.k=s}a.lR=r(a.l||/\b[A-Za-z0-9_]+\b/,true);if(o){if(a.bK){a.b="\\b("+a.bK.split(" ").join("|")+")\\b"}if(!a.b){a.b=/\B|\b/}a.bR=r(a.b);if(!a.e&&!a.eW){a.e=/\B|\b/}if(a.e){a.eR=r(a.e)}a.tE=t(a.e)||"";if(a.eW&&o.tE){a.tE+=(a.e?"|":"")+o.tE}}if(a.i){a.iR=r(a.i)}if(a.r===undefined){a.r=1}if(!a.c){a.c=[]}var l=[];a.c.forEach(function(e){if(e.v){e.v.forEach(function(t){l.push(i(e,t))})}else{l.push(e=="self"?a:e)}});a.c=l;a.c.forEach(function(e){n(e,a)});if(a.starts){n(a.starts,o)}var u=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(t).filter(Boolean);a.t=u.length?r(u.join("|"),true):{exec:function(e){return null}}}n(e)}function c(t,n,i,a){function o(e,t){for(var n=0;n<t.c.length;n++){if(r(t.c[n].bR,e)){return t.c[n]}}}function u(e,t){if(r(e.eR,t)){return e}if(e.eW){return u(e.parent,t)}}function d(e,t){return!i&&r(t.iR,e)}function b(e,t){var r=E.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(r)&&e.k[r]}function h(e,t,r,n){var i=n?"":f.classPrefix,a='<span class="'+i,o=r?"":"</span>";a+=e+'">';return a+t+o}function p(){if(!k.k){return e(C)}var t="";var r=0;k.lR.lastIndex=0;var n=k.lR.exec(C);while(n){t+=e(C.substr(r,n.index-r));var i=b(k,n);if(i){L+=i[1];t+=h(i[0],e(n[0]))}else{t+=e(n[0])}r=k.lR.lastIndex;n=k.lR.exec(C)}return t+e(C.substr(r))}function m(){if(k.sL&&!g[k.sL]){return e(C)}var t=k.sL?c(k.sL,C,true,x):l(C);if(k.r>0){L+=t.r}if(k.subLanguageMode=="continuous"){x=t.top}return h(t.language,t.value,false,true)}function v(){return k.sL!==undefined?m():p()}function N(t,r){var n=t.cN?h(t.cN,"",true):"";if(t.rB){M+=n;C=""}else{if(t.eB){M+=e(r)+n;C=""}else{M+=n;C=r}}k=Object.create(t,{parent:{value:k}})}function w(t,r){C+=t;if(r===undefined){M+=v();return 0}var n=o(r,k);if(n){M+=v();N(n,r);return n.rB?0:r.length}var i=u(k,r);if(i){var a=k;if(!(a.rE||a.eE)){C+=r}M+=v();do{if(k.cN){M+="</span>"}L+=k.r;k=k.parent}while(k!=i.parent);if(a.eE){M+=e(r)}C="";if(i.starts){N(i.starts,"")}return a.rE?0:r.length}if(d(r,k)){throw new Error('Illegal lexeme "'+r+'" for mode "'+(k.cN||"<unnamed>")+'"')}C+=r;return r.length||1}var E=y(t);if(!E){throw new Error('Unknown language: "'+t+'"')}s(E);var k=a||E;var x;var M="";for(var A=k;A!=E;A=A.parent){if(A.cN){M=h(A.cN,"",true)+M}}var C="";var L=0;try{var B,_,S=0;while(true){k.t.lastIndex=S;B=k.t.exec(n);if(!B){break}_=w(n.substr(S,B.index-S),B[0]);S=B.index+_}w(n.substr(S));for(var A=k;A.parent;A=A.parent){if(A.cN){M+="</span>"}}return{r:L,value:M,language:t,top:k}}catch(R){if(R.message.indexOf("Illegal")!=-1){return{r:0,value:e(n)}}else{throw R}}}function l(t,r){r=r||f.languages||Object.keys(g);var n={r:0,value:e(t)};var i=n;r.forEach(function(e){if(!y(e)){return}var r=c(e,t,false);r.language=e;if(r.r>i.r){i=r}if(r.r>n.r){i=n;n=r}});if(i.language){n.second_best=i}return n}function u(e){if(f.tabReplace){e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,t,r,n){return t.replace(/\t/g,f.tabReplace)})}if(f.useBR){e=e.replace(/\n/g,"<br>")}return e}function d(e){var t=n(e);if(/no(-?)highlight/.test(t)){return}var r;if(f.useBR){r=document.createElementNS("http://www.w3.org/1999/xhtml","div");r.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")}else{r=e}var i=r.textContent;var s=t?c(t,i,true):l(i);var d=a(r);if(d.length){var b=document.createElementNS("http://www.w3.org/1999/xhtml","div");b.innerHTML=s.value;s.value=o(d,a(b),i)}s.value=u(s.value);e.innerHTML=s.value;e.className+=" hljs "+(!t&&s.language||"");e.result={language:s.language,re:s.r};if(s.second_best){e.second_best={language:s.second_best.language,re:s.second_best.r}}}var f={classPrefix:"hljs-",tabReplace:null,useBR:false,languages:undefined};function b(e){f=i(f,e)}function h(){if(h.called){return}h.called=true;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,d)}function p(){addEventListener("DOMContentLoaded",h,false);addEventListener("load",h,false)}var g={};var m={};function v(e,t){var r=g[e]=t(this);if(r.aliases){r.aliases.forEach(function(t){m[t]=e})}}function N(){return Object.keys(g)}function y(e){return g[e]||g[m[e]]}this.highlight=c;this.highlightAuto=l;this.fixMarkup=u;this.highlightBlock=d;this.configure=b;this.initHighlighting=h;this.initHighlightingOnLoad=p;this.registerLanguage=v;this.listLanguages=N;this.getLanguage=y;this.inherit=i;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BNR="\\b(0b[01]+)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\[\\s\\S]",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE]};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE]};this.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/};this.CLCM={cN:"comment",b:"//",e:"$",c:[this.PWM]};this.CBCM={cN:"comment",b:"/\\*",e:"\\*/",c:[this.PWM]};this.HCM={cN:"comment",b:"#",e:"$",c:[this.PWM]};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.BNM={cN:"number",b:this.BNR,r:0};this.CSSNM={cN:"number",b:this.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0};this.RM={cN:"regexp",b:/\//,e:/\/[gim]*/,i:/\n/,c:[this.BE,{b:/\[/,e:/\]/,r:0,c:[this.BE]}]};this.TM={cN:"title",b:this.IR,r:0};this.UTM={cN:"title",b:this.UIR,r:0}};hljs.registerLanguage("json",function(e){var t={literal:"true false null"};var r=[e.QSM,e.CNM];var n={cN:"value",e:",",eW:true,eE:true,c:r,k:t};var i={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:true,eE:true,c:[e.BE],i:"\\n",starts:n}],i:"\\S"};var a={b:"\\[",e:"\\]",c:[e.inherit(n,{cN:null})],i:"\\S"};r.splice(r.length,0,i,a);return{c:r,k:t,i:"\\S"}});hljs.registerLanguage("http",function(e){return{i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:true,e:"$",c:[{cN:"string",b:" ",e:" ",eB:true,eE:true}]},{cN:"attribute",b:"^\\w",e:": ",eE:true,i:"\\n|\\s|=",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:"",eW:true}}]}});hljs.registerLanguage("makefile",function(e){var t={cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]};return{aliases:["mk","mak"],c:[e.HCM,{b:/^\w+\s*\W*=/,rB:true,r:0,starts:{cN:"constant",e:/\s*\W*=/,eE:true,starts:{e:/$/,r:0,c:[t]}}},{cN:"title",b:/^[\w]+:\s*$/},{cN:"phony",b:/^\.PHONY:/,e:/$/,k:".PHONY",l:/[\.\w]+/},{b:/^\t+/,e:/$/,r:0,c:[e.QSM,t]}]}});hljs.registerLanguage("diff",function(e){return{aliases:["patch"],c:[{cN:"chunk",r:10,v:[{b:/^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/},{b:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{b:/^\-\-\- +\d+,\d+ +\-\-\-\-$/}]},{cN:"header",v:[{b:/Index: /,e:/$/},{b:/=====/,e:/=====$/},{b:/^\-\-\-/,e:/$/},{b:/^\*{3} /,e:/$/},{b:/^\+\+\+/,e:/$/},{b:/\*{5}/,e:/\*{5}$/}]},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}});hljs.registerLanguage("xml",function(e){var t="[A-Za-z0-9\\._:-]+";var r={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"};var n={eW:true,i:/</,r:0,c:[r,{cN:"attribute",b:t,r:0},{b:"=",r:0,c:[{cN:"value",v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:true,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[n],starts:{e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[n],starts:{e:"</script>",rE:true,sL:"javascript"}},{b:"<%",e:"%>",sL:"vbscript"},r,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:/[^ \/><\n\t]+/,r:0},n]}]}});hljs.registerLanguage("css",function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*";var r={cN:"function",b:t+"\\(",rB:true,eE:true,e:"\\("};return{cI:true,i:"[=/|']",c:[e.CBCM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:true,eE:true,r:0,c:[r,e.ASM,e.QSM,e.CSSNM]}]},{cN:"tag",b:t,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[e.CBCM,{cN:"rule",b:"[^\\s]",rB:true,e:";",eW:true,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:true,i:"[^\\s]",starts:{cN:"value",eW:true,eE:true,c:[r,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]}]}]}});hljs.registerLanguage("coffeescript",function(e){var t={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",reserved:"case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",built_in:"npm require console print module global window document"};var r="[A-Za-z$_][0-9A-Za-z$_]*";var n=e.inherit(e.TM,{b:r});var i={cN:"subst",b:/#\{/,e:/}/,k:t};var a=[e.BNM,e.inherit(e.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[e.BE]},{b:/'/,e:/'/,c:[e.BE]},{b:/"""/,e:/"""/,c:[e.BE,i]},{b:/"/,e:/"/,c:[e.BE,i]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[i,e.HCM]},{b:"//[gim]*",r:0},{b:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]},{cN:"property",b:"@"+r},{b:"`",e:"`",eB:true,eE:true,sL:"javascript"}];i.c=a;return{aliases:["coffee","cson","iced"],k:t,i:/\/\*/,c:a.concat([{cN:"comment",b:"###",e:"###"},e.HCM,{cN:"function",b:"(^\\s*|\\B)("+r+"\\s*=\\s*)?(\\(.*\\))?\\s*\\B[-=]>",e:"[-=]>",rB:true,c:[n,{cN:"params",b:"\\([^\\(]",rB:true,c:[{b:/\(/,e:/\)/,k:t,c:["self"].concat(a)}]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:true,i:/[:="\[\]]/,c:[n]},n]},{cN:"attribute",b:r+":",e:":",rB:true,eE:true,r:0}])}});hljs.registerLanguage("scss",function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*";var r={cN:"variable",b:"(\\$"+t+")\\b"};var n={cN:"function",b:t+"\\(",rB:true,eE:true,e:"\\("};var i={cN:"hexcolor",b:"#[0-9A-Fa-f]+"};var a={cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:true,i:"[^\\s]",starts:{cN:"value",eW:true,eE:true,c:[n,i,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"important",b:"!important"}]}};return{cI:true,i:"[=/|']",c:[e.CLCM,e.CBCM,n,{cN:"id",b:"\\#[A-Za-z0-9_-]+",r:0},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"tag",b:"\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",r:0},{cN:"pseudo",b:":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"},{cN:"pseudo",b:"::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"},r,{cN:"attribute",b:"\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",i:"[^\\s]"},{cN:"value",b:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{cN:"value",b:":",e:";",c:[n,r,i,e.CSSNM,e.QSM,e.ASM,{cN:"important",b:"!important"}]},{cN:"at_rule",b:"@",e:"[{;]",k:"mixin include extend for if else each while charset import debug media page content font-face namespace warn",c:[n,r,e.QSM,e.ASM,i,e.CSSNM,{cN:"preprocessor",b:"\\s[A-Za-z0-9_.-]+",r:0}]}]}});hljs.registerLanguage("markdown",function(e){return{aliases:["md","mkdown","mkd"],c:[{cN:"header",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"blockquote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"`.+?`"},{b:"^( {4}|	)",e:"$",r:0}]},{cN:"horizontal_rule",b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:true,c:[{cN:"link_label",b:"\\[",e:"\\]",eB:true,rE:true,r:0},{cN:"link_url",b:"\\]\\(",e:"\\)",eB:true,eE:true},{cN:"link_reference",b:"\\]\\[",e:"\\]",eB:true,eE:true}],r:10},{b:"^\\[.+\\]:",rB:true,c:[{cN:"link_reference",b:"\\[",e:"\\]:",eB:true,eE:true,starts:{cN:"link_url",e:"$"}}]}]}});hljs.registerLanguage("javascript",function(e){return{aliases:["js"],k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document"},c:[{cN:"pi",b:/^\s*('|")use strict('|")/,r:10},e.ASM,e.QSM,e.CLCM,e.CBCM,e.CNM,{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{b:/</,e:/>;/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,eE:true,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[e.CLCM,e.CBCM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+e.IR,r:0}]}});void function(e,t,r,n){var i=Number(16);var a=t.documentElement,o=t.body;var s=t.querySelector("body.manual article.main-content"),c=t.title,l=s.querySelector("h1").innerHTML;t.title=l+" — "+c;r.qsa("h2, h3, h4, h5, h6",s).forEach(function(e,t){var n=e.lastChild,i=n.nodeValue,a=n.parentNode,o=r.create("a","heading-anchor");e.setAttribute("id","sec-"+t);if(n&&n.nodeType===Node.COMMENT_NODE&&/\s?\#[\w\_\-]+\s?/.test(i)){e.setAttribute("id",i.replace(/\s?\#([\w\_\-]+)\s?/i,"$1"));r.remove(n,a)}i=e.getAttribute("id");o.innerHTML="點此獲取本節網址";o.addEventListener("click",function(e){e.preventDefault();location.hash=i});r.setAttr(o,{hidden:"hidden",title:"點此獲取本節網址",href:"#"+i});a.appendChild(o)});r.qsa("div.info, .example, pre, table",s).forEach(function(e,t){if(!e.getAttribute("id")){e.setAttribute("id","info-"+t)}});var u=r.qsa("nav.layout ol ol"),d=1e3,f=new RegExp("/manual/?$","i").test(location.href.replace(location.hash,"")),b=function(){var e;o.scrollTop=1;e=o.scrollTop==1?o:a;e.scrollTop=0;return e}();function h(e){return new RegExp("^"+location.href.replace(location.hash,"").replace(/\/$/,""),"i").test(e)}function p(e,r){var n=e?t.querySelector(e)||null:null,a=r!==false?function(){location.hash=e}:null;if(!n){return}g(n.offsetTop+1.5*i,100,a)}function g(e,t,r){if(t<=0){if(r){r()}return}var n=b.scrollTop,i=e-n,a=i/t*10;setTimeout(function(){b.scrollTop=n+a;g(e,t-10,r||null)},10)}u.forEach(function(e){e.addEventListener("click",function(e){var t=e.target&&e.target.nodeName==="A"?e.target:null;if(!e.metaKey&&t&&!f&&h(t.href)){e.preventDefault();if(t.hash){p(t.hash)}else{g(0,70,function(){location.hash=""})}}},true)});void["hashchange","DOMContentLoaded"].forEach(function(t){e.addEventListener(t,function(){setTimeout(function(){p(location.hash,false)},100)})});var m=t.querySelector("nav.layout"),v=3.5*i;e.addEventListener("scroll",function(){if(b.scrollTop>=v&&o.getAttribute("data-js-fixed-nav")!==true){o.setAttribute("data-js-fixed-nav",true)}else{o.removeAttribute("data-js-fixed-nav")}});void["mousewheel","DOMMouseScroll"].forEach(function(e){t.addEventListener(e,function(e){m.addEventListener("mouseover",function(){e.preventDefault()})})});e.addEventListener("DOMContentLoaded",function(){var e=m.offsetHeight+2*i;s.style.minHeight=e+"px"});var N=r.qsa(".itff",s);N.forEach(function(e,t){var n=e.innerHTML,i=r.create("iframe"),a,o,s,c;e.style.height=e.offsetHeight+"px";e.innerHTML="";i.setAttribute("src","/itff.html");e.appendChild(i);a=i.contentWindow;a.addEventListener("DOMContentLoaded",function(){o=i.contentDocument;ifroot=o.documentElement;s=o.body;c=r.create("div","wrapper");c.innerHTML=n;s.replaceChild(c,r.id("replacee",o));a.Han.init()})});if(typeof hljs!=="undefined"){hljs.initHighlightingOnLoad()}}(window,window.document,Yijun);
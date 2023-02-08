var VueformMultiselect=function(e,l){"use strict";function a(e){return-1!==[null,void 0].indexOf(e)}function t(l,t,n){const{object:u,valueProp:r,mode:o}=e.toRefs(l),i=e.getCurrentInstance().proxy,s=n.iv,c=e=>u.value||a(e)?e:Array.isArray(e)?e.map((e=>e[r.value])):e[r.value],d=e=>a(e)?"single"===o.value?{}:[]:e;return{update:e=>{s.value=d(e);const l=c(e);t.emit("change",l,i),t.emit("input",l),t.emit("update:modelValue",l)}}}function n(l,a){const{value:t,modelValue:n,mode:u,valueProp:r}=e.toRefs(l),o=e.ref("single"!==u.value?[]:{}),i=n&&void 0!==n.value?n:t,s=e.computed((()=>"single"===u.value?o.value[r.value]:o.value.map((e=>e[r.value])))),c=e.computed((()=>"single"!==u.value?o.value.map((e=>e[r.value])).join(","):o.value[r.value]));return{iv:o,internalValue:o,ev:i,externalValue:i,textValue:c,plainValue:s}}function u(l,a,t){const{regex:n}=e.toRefs(l),u=e.getCurrentInstance().proxy,r=t.isOpen,o=t.open,i=e.ref(null),s=e.ref(null);return e.watch(i,(e=>{!r.value&&e&&o(),a.emit("search-change",e,u)})),{search:i,input:s,clearSearch:()=>{i.value=""},handleSearchInput:e=>{i.value=e.target.value},handleKeypress:e=>{if(n&&n.value){let l=n.value;"string"==typeof l&&(l=new RegExp(l)),e.key.match(l)||e.preventDefault()}},handlePaste:e=>{if(n&&n.value){let l=(e.clipboardData||window.clipboardData).getData("Text"),a=n.value;"string"==typeof a&&(a=new RegExp(a)),l.split("").every((e=>!!e.match(a)))||e.preventDefault()}a.emit("paste",e,u)}}}function r(l,a,t){const{groupSelect:n,mode:u,groups:r,disabledProp:o}=e.toRefs(l),i=e.ref(null),s=e=>{void 0===e||null!==e&&e[o.value]||r.value&&e&&e.group&&("single"===u.value||!n.value)||(i.value=e)};return{pointer:i,setPointer:s,clearPointer:()=>{s(null)}}}function o(e,l=!0){return l?String(e).toLowerCase().trim():String(e).normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase().trim()}function i(l,t,n){const{options:u,mode:r,trackBy:i,limit:s,hideSelected:c,createTag:d,createOption:v,label:p,appendNewTag:m,appendNewOption:f,multipleLabel:h,object:g,loading:b,delay:y,resolveOnLoad:S,minChars:k,filterResults:L,clearOnSearch:O,clearOnSelect:C,valueProp:w,canDeselect:E,max:B,strict:V,closeOnSelect:x,groups:T,reverse:q,infinite:N,groupOptions:P,groupHideEmpty:_,groupSelect:I,onCreate:R,disabledProp:D,searchStart:M}=e.toRefs(l),A=e.getCurrentInstance().proxy,z=n.iv,j=n.ev,H=n.search,$=n.clearSearch,K=n.update,F=n.pointer,G=n.clearPointer,W=n.focus,U=n.deactivate,J=n.close,Q=e.ref([]),X=e.ref([]),Y=e.ref(!1),Z=e.ref(null),ee=e.ref(N.value&&-1===s.value?10:s.value),le=e.computed((()=>d.value||v.value||!1)),ae=e.computed((()=>void 0!==m.value?m.value:void 0===f.value||f.value)),te=e.computed((()=>{if(T.value){let e=X.value||[],l=[];return e.forEach((e=>{Ne(e[P.value]).forEach((a=>{l.push(Object.assign({},a,e[D.value]?{[D.value]:!0}:{}))}))})),l}{let e=Ne(X.value||[]);return Q.value.length&&(e=e.concat(Q.value)),e}})),ne=e.computed((()=>T.value?Te((X.value||[]).map(((e,l)=>{const a=Ne(e[P.value]);return{...e,index:l,group:!0,[P.value]:qe(a,!1).map((l=>Object.assign({},l,e[D.value]?{[D.value]:!0}:{}))),__VISIBLE__:qe(a).map((l=>Object.assign({},l,e[D.value]?{[D.value]:!0}:{})))}}))):[])),ue=e.computed((()=>{let e=te.value;return q.value&&(e=e.reverse()),de.value.length&&(e=de.value.concat(e)),qe(e)})),re=e.computed((()=>{let e=ue.value;return ee.value>0&&(e=e.slice(0,ee.value)),e})),oe=e.computed((()=>{switch(r.value){case"single":return!a(z.value[w.value]);case"multiple":case"tags":return!a(z.value)&&z.value.length>0}})),ie=e.computed((()=>void 0!==h&&void 0!==h.value?h.value(z.value,A):z.value&&z.value.length>1?`${z.value.length} options selected`:"1 option selected")),se=e.computed((()=>!te.value.length&&!Y.value&&!de.value.length)),ce=e.computed((()=>te.value.length>0&&0==re.value.length&&(H.value&&T.value||!T.value))),de=e.computed((()=>!1!==le.value&&H.value?-1!==Ve(H.value)?[]:[{[w.value]:H.value,[p.value]:H.value,[ve.value]:H.value,__CREATE__:!0}]:[])),ve=e.computed((()=>i.value||p.value)),pe=e.computed((()=>{switch(r.value){case"single":return null;case"multiple":case"tags":return[]}})),me=e.computed((()=>b.value||Y.value)),fe=e=>{switch("object"!=typeof e&&(e=Be(e)),r.value){case"single":K(e);break;case"multiple":case"tags":K(z.value.concat(e))}t.emit("select",ge(e),e,A)},he=e=>{switch("object"!=typeof e&&(e=Be(e)),r.value){case"single":ye();break;case"tags":case"multiple":K(Array.isArray(e)?z.value.filter((l=>-1===e.map((e=>e[w.value])).indexOf(l[w.value]))):z.value.filter((l=>l[w.value]!=e[w.value])))}t.emit("deselect",ge(e),e,A)},ge=e=>g.value?e:e[w.value],be=e=>{he(e)},ye=()=>{t.emit("clear",A),K(pe.value)},Se=e=>{if(void 0!==e.group)return"single"!==r.value&&(Ee(e[P.value])&&e[P.value].length);switch(r.value){case"single":return!a(z.value)&&z.value[w.value]==e[w.value];case"tags":case"multiple":return!a(z.value)&&-1!==z.value.map((e=>e[w.value])).indexOf(e[w.value])}},ke=e=>!0===e[D.value],Le=()=>!(void 0===B||-1===B.value||!oe.value&&B.value>0)&&z.value.length>=B.value,Oe=e=>{switch(e.__CREATE__&&delete(e={...e}).__CREATE__,r.value){case"single":if(e&&Se(e))return void(E.value&&he(e));e&&Ce(e),C.value&&$(),x.value&&(G(),J()),e&&fe(e);break;case"multiple":if(e&&Se(e))return void he(e);if(Le())return;e&&(Ce(e),fe(e)),C.value&&$(),c.value&&G(),x.value&&J();break;case"tags":if(e&&Se(e))return void he(e);if(Le())return;e&&Ce(e),C.value&&$(),e&&fe(e),c.value&&G(),x.value&&J()}x.value||W()},Ce=e=>{void 0===Be(e[w.value])&&le.value&&(t.emit("tag",e[w.value],A),t.emit("option",e[w.value],A),ae.value&&xe(e),$())},we=e=>void 0===e.find((e=>!Se(e)&&!e[D.value])),Ee=e=>void 0===e.find((e=>!Se(e))),Be=e=>te.value[te.value.map((e=>String(e[w.value]))).indexOf(String(e))],Ve=(e,l=!0)=>te.value.map((e=>parseInt(e[ve.value])==e[ve.value]?parseInt(e[ve.value]):e[ve.value])).indexOf(parseInt(e)==e?parseInt(e):e),xe=e=>{Q.value.push(e)},Te=e=>_.value?e.filter((e=>H.value?e.__VISIBLE__.length:e[P.value].length)):e.filter((e=>!H.value||e.__VISIBLE__.length)),qe=(e,l=!0)=>{let a=e;return H.value&&L.value&&(a=a.filter((e=>M.value?o(e[ve.value],V.value).startsWith(o(H.value,V.value)):-1!==o(e[ve.value],V.value).indexOf(o(H.value,V.value))))),c.value&&l&&(a=a.filter((e=>!(e=>-1!==["tags","multiple"].indexOf(r.value)&&c.value&&Se(e))(e)))),a},Ne=e=>{let l=e;var a;return a=l,"[object Object]"===Object.prototype.toString.call(a)&&(l=Object.keys(l).map((e=>{let a=l[e];return{[w.value]:e,[ve.value]:a,[p.value]:a}}))),l=l.map((e=>"object"==typeof e?e:{[w.value]:e,[ve.value]:e,[p.value]:e})),l},Pe=()=>{a(j.value)||(z.value=Re(j.value))},_e=e=>(Y.value=!0,new Promise(((l,a)=>{u.value(H.value,A).then((l=>{X.value=l||[],"function"==typeof e&&e(l),Y.value=!1})).catch((e=>{console.error(e),X.value=[],Y.value=!1})).finally((()=>{l()}))}))),Ie=()=>{if(oe.value)if("single"===r.value){let e=Be(z.value[w.value]);if(void 0!==e){let l=e[p.value];z.value[p.value]=l,g.value&&(j.value[p.value]=l)}}else z.value.forEach(((e,l)=>{let a=Be(z.value[l][w.value]);if(void 0!==a){let e=a[p.value];z.value[l][p.value]=e,g.value&&(j.value[l][p.value]=e)}}))},Re=e=>a(e)?"single"===r.value?{}:[]:g.value?e:"single"===r.value?Be(e)||{}:e.filter((e=>!!Be(e))).map((e=>Be(e))),De=()=>{Z.value=e.watch(H,(e=>{e.length<k.value||!e&&0!==k.value||(Y.value=!0,O.value&&(X.value=[]),setTimeout((()=>{e==H.value&&u.value(H.value,A).then((l=>{e!=H.value&&H.value||(X.value=l,F.value=re.value.filter((e=>!0!==e[D.value]))[0]||null,Y.value=!1)})).catch((e=>{console.error(e)}))}),y.value))}),{flush:"sync"})};if("single"!==r.value&&!a(j.value)&&!Array.isArray(j.value))throw new Error(`v-model must be an array when using "${r.value}" mode`);return u&&"function"==typeof u.value?S.value?_e(Pe):1==g.value&&Pe():(X.value=u.value,Pe()),y.value>-1&&De(),e.watch(y,((e,l)=>{Z.value&&Z.value(),e>=0&&De()})),e.watch(j,(e=>{if(a(e))z.value=Re(e);else switch(r.value){case"single":(g.value?e[w.value]!=z.value[w.value]:e!=z.value[w.value])&&(z.value=Re(e));break;case"multiple":case"tags":(function(e,l){const a=l.slice().sort();return e.length===l.length&&e.slice().sort().every((function(e,l){return e===a[l]}))})(g.value?e.map((e=>e[w.value])):e,z.value.map((e=>e[w.value])))||(z.value=Re(e))}}),{deep:!0}),e.watch(u,((e,a)=>{"function"==typeof l.options?S.value&&(!a||e&&e.toString()!==a.toString())&&_e():(X.value=l.options,Object.keys(z.value).length||Pe(),Ie())})),e.watch(p,Ie),{pfo:ue,fo:re,filteredOptions:re,hasSelected:oe,multipleLabelText:ie,eo:te,extendedOptions:te,fg:ne,filteredGroups:ne,noOptions:se,noResults:ce,resolving:Y,busy:me,offset:ee,select:fe,deselect:he,remove:be,selectAll:()=>{"single"!==r.value&&fe(re.value)},clear:ye,isSelected:Se,isDisabled:ke,isMax:Le,getOption:Be,handleOptionClick:e=>{if(!ke(e))return R&&R.value&&!Se(e)&&e.__CREATE__&&(delete(e={...e}).__CREATE__,(e=R.value(e,A))instanceof Promise)?(Y.value=!0,void e.then((e=>{Y.value=!1,Oe(e)}))):void Oe(e)},handleGroupClick:e=>{if(!ke(e)&&"single"!==r.value&&I.value){switch(r.value){case"multiple":case"tags":we(e[P.value])?he(e[P.value]):fe(e[P.value].filter((e=>-1===z.value.map((e=>e[w.value])).indexOf(e[w.value]))).filter((e=>!e[D.value])).filter(((e,l)=>z.value.length+1+l<=B.value||-1===B.value)))}x.value&&U()}},handleTagRemove:(e,l)=>{0===l.button?be(e):l.preventDefault()},refreshOptions:e=>{_e(e)},resolveOptions:_e,refreshLabels:Ie}}function s(l,a,t){const{valueProp:n,showOptions:u,searchable:r,groupLabel:o,groups:i,mode:s,groupSelect:c,disabledProp:d}=e.toRefs(l),v=t.fo,p=t.fg,m=t.handleOptionClick,f=t.handleGroupClick,h=t.search,g=t.pointer,b=t.setPointer,y=t.clearPointer,S=t.multiselect,k=t.isOpen,L=e.computed((()=>v.value.filter((e=>!e[d.value])))),O=e.computed((()=>p.value.filter((e=>!e[d.value])))),C=e.computed((()=>"single"!==s.value&&c.value)),w=e.computed((()=>g.value&&g.value.group)),E=e.computed((()=>R(g.value))),B=e.computed((()=>{const e=w.value?g.value:R(g.value),l=O.value.map((e=>e[o.value])).indexOf(e[o.value]);let a=O.value[l-1];return void 0===a&&(a=x.value),a})),V=e.computed((()=>{let e=O.value.map((e=>e.label)).indexOf(w.value?g.value[o.value]:R(g.value)[o.value])+1;return O.value.length<=e&&(e=0),O.value[e]})),x=e.computed((()=>[...O.value].slice(-1)[0])),T=e.computed((()=>g.value.__VISIBLE__.filter((e=>!e[d.value]))[0])),q=e.computed((()=>{const e=E.value.__VISIBLE__.filter((e=>!e[d.value]));return e[e.map((e=>e[n.value])).indexOf(g.value[n.value])-1]})),N=e.computed((()=>{const e=R(g.value).__VISIBLE__.filter((e=>!e[d.value]));return e[e.map((e=>e[n.value])).indexOf(g.value[n.value])+1]})),P=e.computed((()=>[...B.value.__VISIBLE__.filter((e=>!e[d.value]))].slice(-1)[0])),_=e.computed((()=>[...x.value.__VISIBLE__.filter((e=>!e[d.value]))].slice(-1)[0])),I=()=>{b(L.value[0]||null)},R=e=>O.value.find((l=>-1!==l.__VISIBLE__.map((e=>e[n.value])).indexOf(e[n.value]))),D=()=>{let e=S.value.querySelector("[data-pointed]");if(!e)return;let l=e.parentElement.parentElement;i.value&&(l=w.value?e.parentElement.parentElement.parentElement:e.parentElement.parentElement.parentElement.parentElement),e.offsetTop+e.offsetHeight>l.clientHeight+l.scrollTop&&(l.scrollTop=e.offsetTop+e.offsetHeight-l.clientHeight),e.offsetTop<l.scrollTop&&(l.scrollTop=e.offsetTop)};return e.watch(h,(e=>{r.value&&(e.length&&u.value?I():y())})),e.watch(k,(l=>{if(l){let l=S.value.querySelectorAll("[data-selected]")[0];if(!l)return;let a=l.parentElement.parentElement;e.nextTick((()=>{a.scrollTop>0||(a.scrollTop=l.offsetTop)}))}})),{pointer:g,canPointGroups:C,isPointed:e=>!(!g.value||!(!e.group&&g.value[n.value]==e[n.value]||void 0!==e.group&&g.value[o.value]==e[o.value]))||void 0,setPointerFirst:I,selectPointer:()=>{g.value&&!0!==g.value[d.value]&&(w.value?f(g.value):m(g.value))},forwardPointer:()=>{if(null===g.value)b((i.value&&C.value?O.value[0]:L.value[0])||null);else if(i.value&&C.value){let e=w.value?T.value:N.value;void 0===e&&(e=V.value),b(e||null)}else{let e=L.value.map((e=>e[n.value])).indexOf(g.value[n.value])+1;L.value.length<=e&&(e=0),b(L.value[e]||null)}e.nextTick((()=>{D()}))},backwardPointer:()=>{if(null===g.value){let e=L.value[L.value.length-1];i.value&&C.value&&(e=_.value,void 0===e&&(e=x.value)),b(e||null)}else if(i.value&&C.value){let e=w.value?P.value:q.value;void 0===e&&(e=w.value?B.value:E.value),b(e||null)}else{let e=L.value.map((e=>e[n.value])).indexOf(g.value[n.value])-1;e<0&&(e=L.value.length-1),b(L.value[e]||null)}e.nextTick((()=>{D()}))}}}function c(l,a,t){const{disabled:n}=e.toRefs(l),u=e.getCurrentInstance().proxy,r=e.ref(!1);return{isOpen:r,open:()=>{r.value||n.value||(r.value=!0,a.emit("open",u))},close:()=>{r.value&&(r.value=!1,a.emit("close",u))}}}function d(l,a,t){const{searchable:n,disabled:u,clearSearchInput:r}=e.toRefs(l),o=t.input,i=t.open,s=t.close,c=t.clearSearch,d=t.isOpen,v=e.ref(null),p=e.ref(null),m=e.ref(!1),f=e.ref(!1),h=e.computed((()=>n.value||u.value?-1:0)),g=()=>{n.value&&o.value.blur(),v.value.blur()},b=(e=!0)=>{u.value||(m.value=!0,e&&i())},y=()=>{m.value=!1,setTimeout((()=>{m.value||(s(),r.value&&c())}),1)};return{multiselect:v,tags:p,tabindex:h,isActive:m,mouseClicked:f,blur:g,focus:()=>{n.value&&!u.value&&o.value.focus()},activate:b,deactivate:y,handleFocusIn:()=>{b(f.value)},handleFocusOut:()=>{y()},handleCaretClick:()=>{y(),g()},handleMousedown:e=>{f.value=!0,d.value&&(e.target.isEqualNode(v.value)||e.target.isEqualNode(p.value))?setTimeout((()=>{y()}),0):document.activeElement.isEqualNode(v.value)&&!d.value&&b(),setTimeout((()=>{f.value=!1}),0)}}}function v(l,a,t){const{mode:n,addTagOn:u,openDirection:r,searchable:o,showOptions:i,valueProp:s,groups:c,addOptionOn:d,createTag:v,createOption:p,reverse:m}=e.toRefs(l),f=e.getCurrentInstance().proxy,h=t.iv,g=t.update,b=t.search,y=t.setPointer,S=t.selectPointer,k=t.backwardPointer,L=t.forwardPointer,O=t.multiselect,C=t.tags,w=t.isOpen,E=t.open,B=t.blur,V=t.fo,x=e.computed((()=>v.value||p.value||!1)),T=e.computed((()=>void 0!==u.value?u.value:void 0!==d.value?d.value:["enter"])),q=()=>{"tags"===n.value&&!i.value&&x.value&&o.value&&!c.value&&y(V.value[V.value.map((e=>e[s.value])).indexOf(b.value)])};return{handleKeydown:e=>{let l,t;switch(a.emit("keydown",e,f),-1!==["ArrowLeft","ArrowRight","Enter"].indexOf(e.key)&&"tags"===n.value&&(l=[...O.value.querySelectorAll("[data-tags] > *")].filter((e=>e!==C.value)),t=l.findIndex((e=>e===document.activeElement))),e.key){case"Backspace":if("single"===n.value)return;if(o.value&&-1===[null,""].indexOf(b.value))return;if(0===h.value.length)return;g([...h.value].slice(0,-1));break;case"Enter":if(e.preventDefault(),-1!==t&&void 0!==t)return g([...h.value].filter(((e,l)=>l!==t))),void(t===l.length-1&&(l.length-1?l[l.length-2].focus():o.value?C.value.querySelector("input").focus():O.value.focus()));if(-1===T.value.indexOf("enter")&&x.value)return;q(),S();break;case" ":if(!x.value&&!o.value)return e.preventDefault(),q(),void S();if(!x.value)return!1;if(-1===T.value.indexOf("space")&&x.value)return;e.preventDefault(),q(),S();break;case"Tab":case";":case",":if(-1===T.value.indexOf(e.key.toLowerCase())||!x.value)return;q(),S(),e.preventDefault();break;case"Escape":B();break;case"ArrowUp":if(e.preventDefault(),!i.value)return;w.value||E(),k();break;case"ArrowDown":if(e.preventDefault(),!i.value)return;w.value||E(),L();break;case"ArrowLeft":if(o.value&&C.value.querySelector("input").selectionStart||e.shiftKey||"tags"!==n.value||!h.value||!h.value.length)return;e.preventDefault(),-1===t?l[l.length-1].focus():t>0&&l[t-1].focus();break;case"ArrowRight":if(-1===t||e.shiftKey||"tags"!==n.value||!h.value||!h.value.length)return;e.preventDefault(),l.length>t+1?l[t+1].focus():o.value?C.value.querySelector("input").focus():o.value||O.value.focus()}},handleKeyup:e=>{a.emit("keyup",e,f)},preparePointer:q}}function p(l,a,t){const{classes:n,disabled:u,openDirection:r,showOptions:o}=e.toRefs(l),i=t.isOpen,s=t.isPointed,c=t.isSelected,d=t.isDisabled,v=t.isActive,p=t.canPointGroups,m=t.resolving,f=t.fo,h=e.computed((()=>({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",singleLabel:"multiselect-single-label",singleLabelText:"multiselect-single-label-text",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",inifinite:"multiselect-inifite",inifiniteSpinner:"multiselect-inifite-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",group:"multiselect-group",groupLabel:"multiselect-group-label",groupLabelPointable:"is-pointable",groupLabelPointed:"is-pointed",groupLabelSelected:"is-selected",groupLabelDisabled:"is-disabled",groupLabelSelectedPointed:"is-selected is-pointed",groupLabelSelectedDisabled:"is-selected is-disabled",groupOptions:"multiselect-group-options",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",spacer:"multiselect-spacer",...n.value}))),g=e.computed((()=>!!(i.value&&o.value&&(!m.value||m.value&&f.value.length))));return{classList:e.computed((()=>{const e=h.value;return{container:[e.container].concat(u.value?e.containerDisabled:[]).concat(g.value&&"top"===r.value?e.containerOpenTop:[]).concat(g.value&&"top"!==r.value?e.containerOpen:[]).concat(v.value?e.containerActive:[]),spacer:e.spacer,singleLabel:e.singleLabel,singleLabelText:e.singleLabelText,multipleLabel:e.multipleLabel,search:e.search,tags:e.tags,tag:[e.tag].concat(u.value?e.tagDisabled:[]),tagRemove:e.tagRemove,tagRemoveIcon:e.tagRemoveIcon,tagsSearchWrapper:e.tagsSearchWrapper,tagsSearch:e.tagsSearch,tagsSearchCopy:e.tagsSearchCopy,placeholder:e.placeholder,caret:[e.caret].concat(i.value?e.caretOpen:[]),clear:e.clear,clearIcon:e.clearIcon,spinner:e.spinner,inifinite:e.inifinite,inifiniteSpinner:e.inifiniteSpinner,dropdown:[e.dropdown].concat("top"===r.value?e.dropdownTop:[]).concat(i.value&&o.value&&g.value?[]:e.dropdownHidden),options:[e.options].concat("top"===r.value?e.optionsTop:[]),group:e.group,groupLabel:l=>{let a=[e.groupLabel];return s(l)?a.push(c(l)?e.groupLabelSelectedPointed:e.groupLabelPointed):c(l)&&p.value?a.push(d(l)?e.groupLabelSelectedDisabled:e.groupLabelSelected):d(l)&&a.push(e.groupLabelDisabled),p.value&&a.push(e.groupLabelPointable),a},groupOptions:e.groupOptions,option:(l,a)=>{let t=[e.option];return s(l)?t.push(c(l)?e.optionSelectedPointed:e.optionPointed):c(l)?t.push(d(l)?e.optionSelectedDisabled:e.optionSelected):(d(l)||a&&d(a))&&t.push(e.optionDisabled),t},noOptions:e.noOptions,noResults:e.noResults,fakeInput:e.fakeInput}})),showDropdown:g}}function m(l,a,t){const{limit:n,infinite:u}=e.toRefs(l),r=t.isOpen,o=t.offset,i=t.search,s=t.pfo,c=t.eo,d=e.ref(null),v=e.ref(null),p=e.computed((()=>o.value<s.value.length)),m=l=>{const{isIntersecting:a,target:t}=l[0];if(a){const l=t.offsetParent,a=l.scrollTop;o.value+=-1==n.value?10:n.value,e.nextTick((()=>{l.scrollTop=a}))}},f=()=>{r.value&&o.value<s.value.length?d.value.observe(v.value):!r.value&&d.value&&d.value.disconnect()};return e.watch(r,(()=>{u.value&&f()})),e.watch(i,(()=>{u.value&&(o.value=n.value,f())}),{flush:"post"}),e.watch(c,(()=>{u.value&&f()}),{immediate:!1,flush:"post"}),e.onMounted((()=>{window&&window.IntersectionObserver&&(d.value=new IntersectionObserver(m))})),{hasMore:p,infiniteLoader:v}}function f(l,a,t){const{placeholder:n,id:u,valueProp:r,label:o,mode:i,groupLabel:s}=e.toRefs(l),c=t.pointer;t.iv,t.hasSelected,t.multipleLabelText,t.isOpen;const d=e.ref(null),v=e.computed((()=>{let e=[];return u&&u.value&&e.push(u.value),e.push("multiselect-options"),e.join("-")})),p=e.computed((()=>{let e=[];if(u&&u.value&&e.push(u.value),c.value)return e.push(c.value.group?"multiselect-group":"multiselect-option"),e.push(c.value.group?c.value.index:c.value[r.value]),e.join("-")})),m=e.computed((()=>n.value)),f=e.computed((()=>"single"!==i.value));return e.onMounted((()=>{if(u&&u.value&&document&&document.querySelector){let e=document.querySelector(`[for="${u.value}"]`);d.value=e?e.innerText:null}})),{ariaOwns:v,ariaPlaceholder:m,ariaMultiselectable:f,ariaActiveDescendant:p,ariaOptionId:e=>{let l=[];return u&&u.value&&l.push(u.value),l.push("multiselect-option"),l.push(e[r.value]),l.join("-")},ariaOptionLabel:e=>{let l=[];return l.push(e[o.value]),l.join(" ")},ariaGroupId:e=>{let l=[];return u&&u.value&&l.push(u.value),l.push("multiselect-group"),l.push(e.index),l.join("-")},ariaGroupLabel:e=>{let l=[];return l.push(e[s.value]),l.join(" ")},ariaTagLabel:e=>`${e} ❎`}}var h={name:"Multiselect",components:{SimpleBar:l.SimpleBar},emits:["paste","open","close","select","deselect","input","search-change","tag","option","update:modelValue","change","clear","keydown","keyup","scrollBottomReached"],mounted(){console.log(this.$refs.scrollView),this.$refs.scrollView.simplebarInstance.value.getScrollElement().addEventListener("scroll",(e=>{const{scrollHeight:l,scrollTop:a,clientHeight:t}=e.target;l-Math.round(a)===t&&this.$emit("scrollBottomReached")}),{passive:!0})},props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:void 0},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},clearSearchInput:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:void 0},createOption:{type:Boolean,required:!1,default:void 0},appendNewTag:{type:Boolean,required:!1,default:void 0},appendNewOption:{type:Boolean,required:!1,default:void 0},addTagOn:{type:Array,required:!1,default:void 0},addOptionOn:{type:Array,required:!1,default:void 0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0},autocomplete:{type:String,required:!1},groups:{type:Boolean,required:!1,default:!1},groupLabel:{type:String,required:!1,default:"label"},groupOptions:{type:String,required:!1,default:"options"},groupHideEmpty:{type:Boolean,required:!1,default:!1},groupSelect:{type:Boolean,required:!1,default:!0},inputType:{type:String,required:!1,default:"text"},attrs:{required:!1,type:Object,default:()=>({})},onCreate:{required:!1,type:Function},disabledProp:{type:String,required:!1,default:"disabled"},searchStart:{type:Boolean,required:!1,default:!1},reverse:{type:Boolean,required:!1,default:!1},regex:{type:[Object,String,RegExp],required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},infinite:{type:Boolean,required:!1,default:!1},aria:{required:!1,type:Object,default:()=>({})}},setup:(e,l)=>function(e,l,a,t={}){return a.forEach((a=>{a&&(t={...t,...a(e,l,t)})})),t}(e,l,[n,r,c,u,t,d,i,m,s,v,p,f])};const g=["tabindex","id","dir","aria-owns","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable","role"],b=["type","modelValue","value","autocomplete","id","aria-owns","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable"],y=["onKeyup","aria-label"],S=["onClick"],k=["type","modelValue","value","id","autocomplete","aria-owns","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable"],L=["innerHTML"],O=["innerHTML"],C=["id"],w={key:0,class:"listsimplebar"},E=["id","aria-label","aria-selected"],B=["data-pointed","onMouseenter","onClick"],V=["innerHTML"],x=["aria-label"],T=["data-pointed","data-selected","onMouseenter","onClick","id","aria-selected","aria-label"],q=["innerHTML"],N={key:1,class:"listsimplebar"},P=["data-pointed","data-selected","onMouseenter","onClick","id","aria-selected","aria-label"],_=["innerHTML"],I=["innerHTML"],R=["innerHTML"],D=["value"],M=["name","value"],A=["name","value"];return h.render=function(l,a,t,n,u,r){const o=e.resolveComponent("SimpleBar");return e.openBlock(),e.createElementBlock("div",e.mergeProps({ref:"multiselect",tabindex:l.tabindex,class:l.classList.container,id:t.searchable?void 0:t.id,dir:t.rtl?"rtl":void 0,onFocusin:a[9]||(a[9]=(...e)=>l.handleFocusIn&&l.handleFocusIn(...e)),onFocusout:a[10]||(a[10]=(...e)=>l.handleFocusOut&&l.handleFocusOut(...e)),onKeydown:a[11]||(a[11]=(...e)=>l.handleKeydown&&l.handleKeydown(...e)),onKeyup:a[12]||(a[12]=(...e)=>l.handleKeyup&&l.handleKeyup(...e)),onMousedown:a[13]||(a[13]=(...e)=>l.handleMousedown&&l.handleMousedown(...e)),"aria-owns":t.searchable?void 0:l.ariaOwns,"aria-placeholder":t.searchable?void 0:l.ariaPlaceholder,"aria-expanded":t.searchable?void 0:l.isOpen,"aria-activedescendant":t.searchable?void 0:l.ariaActiveDescendant,"aria-multiselectable":t.searchable?void 0:l.ariaMultiselectable,role:t.searchable?void 0:"listbox"},t.searchable?{}:t.aria),[e.createCommentVNode(" Search "),"tags"!==t.mode&&t.searchable&&!t.disabled?(e.openBlock(),e.createElementBlock("input",e.mergeProps({key:0,type:t.inputType,modelValue:l.search,value:l.search,class:l.classList.search,autocomplete:t.autocomplete,id:t.searchable?t.id:void 0,onInput:a[0]||(a[0]=(...e)=>l.handleSearchInput&&l.handleSearchInput(...e)),onKeypress:a[1]||(a[1]=(...e)=>l.handleKeypress&&l.handleKeypress(...e)),onPaste:a[2]||(a[2]=e.withModifiers(((...e)=>l.handlePaste&&l.handlePaste(...e)),["stop"])),ref:"input","aria-owns":l.ariaOwns,"aria-placeholder":l.ariaPlaceholder,"aria-expanded":l.isOpen,"aria-activedescendant":l.ariaActiveDescendant,"aria-multiselectable":l.ariaMultiselectable,role:"listbox"},{...t.attrs,...t.aria}),null,16,b)):e.createCommentVNode("v-if",!0),e.createCommentVNode(" Tags (with search) "),"tags"==t.mode?(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(l.classList.tags),"data-tags":""},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.iv,((a,n,u)=>e.renderSlot(l.$slots,"tag",{option:a,handleTagRemove:l.handleTagRemove,disabled:t.disabled},(()=>[(e.openBlock(),e.createElementBlock("span",{class:e.normalizeClass(l.classList.tag),tabindex:"-1",onKeyup:e.withKeys((e=>l.handleTagRemove(a,e)),["enter"]),key:u,"aria-label":l.ariaTagLabel(a[t.label])},[e.createTextVNode(e.toDisplayString(a[t.label])+" ",1),t.disabled?e.createCommentVNode("v-if",!0):(e.openBlock(),e.createElementBlock("span",{key:0,class:e.normalizeClass(l.classList.tagRemove),onClick:e=>l.handleTagRemove(a,e)},[e.createElementVNode("span",{class:e.normalizeClass(l.classList.tagRemoveIcon)},null,2)],10,S))],42,y))])))),256)),e.createElementVNode("div",{class:e.normalizeClass(l.classList.tagsSearchWrapper),ref:"tags"},[e.createCommentVNode(" Used for measuring search width "),e.createElementVNode("span",{class:e.normalizeClass(l.classList.tagsSearchCopy)},e.toDisplayString(l.search),3),e.createCommentVNode(" Actual search input "),t.searchable&&!t.disabled?(e.openBlock(),e.createElementBlock("input",e.mergeProps({key:0,type:t.inputType,modelValue:l.search,value:l.search,class:l.classList.tagsSearch,id:t.searchable?t.id:void 0,autocomplete:t.autocomplete,onInput:a[3]||(a[3]=(...e)=>l.handleSearchInput&&l.handleSearchInput(...e)),onKeypress:a[4]||(a[4]=(...e)=>l.handleKeypress&&l.handleKeypress(...e)),onPaste:a[5]||(a[5]=e.withModifiers(((...e)=>l.handlePaste&&l.handlePaste(...e)),["stop"])),ref:"input","aria-owns":l.ariaOwns,"aria-placeholder":l.ariaPlaceholder,"aria-expanded":l.isOpen,"aria-activedescendant":l.ariaActiveDescendant,"aria-multiselectable":l.ariaMultiselectable,role:"listbox"},{...t.attrs,...t.aria}),null,16,k)):e.createCommentVNode("v-if",!0)],2)],2)):e.createCommentVNode("v-if",!0),e.createCommentVNode(" Single label "),"single"==t.mode&&l.hasSelected&&!l.search&&l.iv?e.renderSlot(l.$slots,"singlelabel",{key:2,value:l.iv},(()=>[e.createElementVNode("div",{class:e.normalizeClass(l.classList.singleLabel),"aria-hidden":"true"},[e.createElementVNode("span",{class:e.normalizeClass(l.classList.singleLabelText),innerHTML:l.iv[t.label]},null,10,L)],2)])):e.createCommentVNode("v-if",!0),e.createCommentVNode(" Multiple label "),"multiple"==t.mode&&l.hasSelected&&!l.search?e.renderSlot(l.$slots,"multiplelabel",{key:3,values:l.iv},(()=>[e.createElementVNode("div",{class:e.normalizeClass(l.classList.multipleLabel),innerHTML:l.multipleLabelText,"aria-hidden":"true"},null,10,O)])):e.createCommentVNode("v-if",!0),e.createCommentVNode(" Placeholder "),!t.placeholder||l.hasSelected||l.search?e.createCommentVNode("v-if",!0):e.renderSlot(l.$slots,"placeholder",{key:4},(()=>[e.createElementVNode("div",{class:e.normalizeClass(l.classList.placeholder),"aria-hidden":"true"},e.toDisplayString(t.placeholder),3)])),e.createCommentVNode(" Spinner "),t.loading||l.resolving?e.renderSlot(l.$slots,"spinner",{key:5},(()=>[e.createElementVNode("span",{class:e.normalizeClass(l.classList.spinner),"aria-hidden":"true"},null,2)])):e.createCommentVNode("v-if",!0),e.createCommentVNode(" Clear "),l.hasSelected&&!t.disabled&&t.canClear&&!l.busy?e.renderSlot(l.$slots,"clear",{key:6,clear:l.clear},(()=>[e.createElementVNode("span",{tabindex:"0",role:"button","aria-label":"❎",class:e.normalizeClass(l.classList.clear),onClick:a[6]||(a[6]=(...e)=>l.clear&&l.clear(...e)),onKeyup:a[7]||(a[7]=e.withKeys(((...e)=>l.clear&&l.clear(...e)),["enter"]))},[e.createElementVNode("span",{class:e.normalizeClass(l.classList.clearIcon)},null,2)],34)])):e.createCommentVNode("v-if",!0),e.createCommentVNode(" Caret "),t.caret&&t.showOptions?e.renderSlot(l.$slots,"caret",{key:7},(()=>[e.createElementVNode("span",{class:e.normalizeClass(l.classList.caret),onClick:a[8]||(a[8]=(...e)=>l.handleCaretClick&&l.handleCaretClick(...e))},null,2)])):e.createCommentVNode("v-if",!0),e.createCommentVNode(" Options "),e.createElementVNode("div",{class:e.normalizeClass(l.classList.dropdown),tabindex:"-1"},[e.renderSlot(l.$slots,"beforelist",{options:l.fo}),e.createElementVNode("ul",{class:e.normalizeClass(l.classList.options),style:{"max-height":"15rem"},id:l.ariaOwns,role:"listbox"},[t.groups?(e.openBlock(),e.createElementBlock("div",w,[e.createVNode(o,{ref:"scrollView",class:"px-0 py-0 w-full h-full relative overflow-y-auto inline-block pr-4"},{default:e.withCtx((()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.fg,((a,n,u)=>(e.openBlock(),e.createElementBlock("li",{class:e.normalizeClass(l.classList.group),key:u,id:l.ariaGroupId(a),"aria-label":l.ariaGroupLabel(a),"aria-selected":l.isSelected(a),role:"option"},[e.createElementVNode("div",{class:e.normalizeClass(l.classList.groupLabel(a)),"data-pointed":l.isPointed(a),onMouseenter:e=>l.setPointer(a,n),onClick:e=>l.handleGroupClick(a)},[e.renderSlot(l.$slots,"grouplabel",{group:a,isSelected:l.isSelected,isPointed:l.isPointed},(()=>[e.createElementVNode("span",{innerHTML:a[t.groupLabel]},null,8,V)]))],42,B),e.createElementVNode("ul",{class:e.normalizeClass(l.classList.groupOptions),"aria-label":l.ariaGroupLabel(a),role:"group"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a.__VISIBLE__,((n,u,r)=>(e.openBlock(),e.createElementBlock("li",{class:e.normalizeClass(l.classList.option(n,a)),"data-pointed":l.isPointed(n),"data-selected":l.isSelected(n)||void 0,key:r,onMouseenter:e=>l.setPointer(n),onClick:e=>l.handleOptionClick(n),id:l.ariaOptionId(n),"aria-selected":l.isSelected(n),"aria-label":l.ariaOptionLabel(n),role:"option"},[e.renderSlot(l.$slots,"option",{option:n,isSelected:l.isSelected,isPointed:l.isPointed,search:l.search},(()=>[e.createElementVNode("span",{innerHTML:n[t.label]},null,8,q)]))],42,T)))),128))],10,x)],10,E)))),128))])),_:3},512)])):(e.openBlock(),e.createElementBlock("div",N,[e.createVNode(o,{ref:"scrollView",class:"px-0 py-0 w-full h-full relative overflow-y-auto inline-block pr-4"},{default:e.withCtx((()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.fo,((a,n,u)=>(e.openBlock(),e.createElementBlock("li",{class:e.normalizeClass(l.classList.option(a)),"data-pointed":l.isPointed(a),"data-selected":l.isSelected(a)||void 0,key:u,onMouseenter:e=>l.setPointer(a),onClick:e=>l.handleOptionClick(a),id:l.ariaOptionId(a),"aria-selected":l.isSelected(a),"aria-label":l.ariaOptionLabel(a),role:"option"},[e.renderSlot(l.$slots,"option",{option:a,isSelected:l.isSelected,isPointed:l.isPointed,search:l.search},(()=>[e.createElementVNode("span",{innerHTML:a[t.label]},null,8,_)]))],42,P)))),128))])),_:3},512)]))],10,C),l.noOptions?e.renderSlot(l.$slots,"nooptions",{key:0},(()=>[e.createElementVNode("div",{class:e.normalizeClass(l.classList.noOptions),innerHTML:t.noOptionsText},null,10,I)])):e.createCommentVNode("v-if",!0),l.noResults?e.renderSlot(l.$slots,"noresults",{key:1},(()=>[e.createElementVNode("div",{class:e.normalizeClass(l.classList.noResults),innerHTML:t.noResultsText},null,10,R)])):e.createCommentVNode("v-if",!0),t.infinite&&l.hasMore?(e.openBlock(),e.createElementBlock("div",{key:2,class:e.normalizeClass(l.classList.inifinite),ref:"infiniteLoader"},[e.renderSlot(l.$slots,"infinite",{},(()=>[e.createElementVNode("span",{class:e.normalizeClass(l.classList.inifiniteSpinner)},null,2)]))],2)):e.createCommentVNode("v-if",!0),e.renderSlot(l.$slots,"afterlist",{options:l.fo})],2),e.createCommentVNode(" Hacky input element to show HTML5 required warning "),t.required?(e.openBlock(),e.createElementBlock("input",{key:8,class:e.normalizeClass(l.classList.fakeInput),tabindex:"-1",value:l.textValue,required:""},null,10,D)):e.createCommentVNode("v-if",!0),e.createCommentVNode(" Native input support "),t.nativeSupport?(e.openBlock(),e.createElementBlock(e.Fragment,{key:9},["single"==t.mode?(e.openBlock(),e.createElementBlock("input",{key:0,type:"hidden",name:t.name,value:void 0!==l.plainValue?l.plainValue:""},null,8,M)):(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:1},e.renderList(l.plainValue,((l,a)=>(e.openBlock(),e.createElementBlock("input",{type:"hidden",name:`${t.name}[]`,value:l,key:a},null,8,A)))),128))],64)):e.createCommentVNode("v-if",!0),e.createCommentVNode(" Create height for empty input "),e.createElementVNode("div",{class:e.normalizeClass(l.classList.spacer)},null,2)],16,g)},h.__file="src/Multiselect.vue",h}(Vue,simplebarVue3);

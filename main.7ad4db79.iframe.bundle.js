(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{466:function(module,exports,__webpack_require__){__webpack_require__(467),__webpack_require__(623),__webpack_require__(624),__webpack_require__(833),__webpack_require__(834),__webpack_require__(840),__webpack_require__(835),__webpack_require__(841),__webpack_require__(836),__webpack_require__(837),__webpack_require__(842),__webpack_require__(839),__webpack_require__(843),module.exports=__webpack_require__(823)},534:function(module,exports){},624:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(329)},823:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(329).configure)([__webpack_require__(824),__webpack_require__(825)],module,!1)}).call(this,__webpack_require__(188)(module))},824:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=824},825:function(module,exports,__webpack_require__){var map={"./index.stories.tsx":838};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=825},828:function(module,exports,__webpack_require__){var api=__webpack_require__(829),content=__webpack_require__(830);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},830:function(module,exports,__webpack_require__){(exports=__webpack_require__(831)(!1)).push([module.i,"button {\n  margin: 0;\n  background-color: rgb(21, 74, 229);\n  cursor: pointer;\n  border-radius: 36px;\n  font-weight: 600;\n  border: 1px solid rgb(21, 74, 229);\n  padding: 12px 48px;\n  color: rgb(243, 244, 245);\n  font-size: 16px;\n  line-height: 24px;\n}\n\nbutton:hover {\n  background-color: rgb(79, 119, 235);\n  border-color: rgb(79, 119, 235);\n}\n",""]),module.exports=exports},838:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Base",(function(){return index_stories_Base}));__webpack_require__(15);var react=__webpack_require__(0),esm=__webpack_require__(105),lib=(__webpack_require__(826),__webpack_require__(5),__webpack_require__(8),__webpack_require__(7),__webpack_require__(18),__webpack_require__(14),__webpack_require__(11),__webpack_require__(16),__webpack_require__(13),__webpack_require__(6),__webpack_require__(25),__webpack_require__(446)),lib_default=__webpack_require__.n(lib);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var noop=function noop(){},jsx_runtime=(__webpack_require__(828),__webpack_require__(117)),GoCardlessDropinButton_GoCardlessDropinButton=function GoCardlessDropinButton(options){var open=function useGoCardlessDropin(options){var initialiseURL=options.initialiseURL||"https://pay.gocardless.com/billing/static/dropin/v2/initialise.js",_useScript2=_slicedToArray(lib_default()({src:window.GoCardlessDropin?null:initialiseURL,checkForExisting:!0}),2),loading=_useScript2[0],scriptLoadError=_useScript2[1],_useState2=_slicedToArray(Object(react.useState)(scriptLoadError),2),error=_useState2[0],setError=_useState2[1],_useState4=_slicedToArray(Object(react.useState)(void 0),2),handler=_useState4[0],setHandler=_useState4[1];return Object(react.useEffect)((function(){window.GoCardlessDropin&&!loading&&(scriptLoadError?setError(scriptLoadError):window.GoCardlessDropin?(handler&&handler.exit(),setHandler(window.GoCardlessDropin.create(options))):setError(new ErrorEvent("error loading GoCardless Dropin initialise script from "+initialiseURL+": failed to find window.GoCardlessDropin after load!")))}),[loading,scriptLoadError,options.billingRequestFlowID,setError]),{error:null===error?void 0:error,ready:!!handler,exit:(null==handler?void 0:handler.exit)||noop,open:(null==handler?void 0:handler.open)||noop}}(Object.assign({},options)).open;return Object(jsx_runtime.jsxs)("button",{type:"button",onClick:function onClick(){return open()},children:["Start Dropin for ",Object(jsx_runtime.jsx)("code",{children:options.billingRequestFlowID})," in"," ",Object(jsx_runtime.jsx)("code",{children:options.environment})]})};GoCardlessDropinButton_GoCardlessDropinButton.displayName="GoCardlessDropinButton";try{GoCardlessDropinButton_GoCardlessDropinButton.displayName="GoCardlessDropinButton",GoCardlessDropinButton_GoCardlessDropinButton.__docgenInfo={description:"",displayName:"GoCardlessDropinButton",props:{onSuccess:{defaultValue:null,description:"onSuccess receives the Billing Request that has been worked.\n\nThis is called when the flow exits successfully. Depending on how the flow\nwas configured, it may have completed successfully but not fulfilled the\nBilling Request- it is incumbent on the integrator to check the status of\nthe request before assuming it has been fulfilled.",name:"onSuccess",required:!0,type:{name:"GoCardlessDropinOnSuccess"}},onExit:{defaultValue:null,description:"onExit should take two arguments: an error object and a metadata object.\n\nThe onExit callback is called when the customer left the flow before\ncompletion. This can happen because either they have voluntarily abandoned\nthe flow, or because an unrecoverable error occurred.\n\nThe error object is null if no error was encountered. At the time of\nwriting no additional object property is documented.\n\nThe metadata object is always not null. At the time of writing no\nadditional object properties are documented.",name:"onExit",required:!0,type:{name:"GoCardlessDropinOnExit"}},billingRequestFlowID:{defaultValue:null,description:"Billing Request Flow ID that has been created in the backend, intended to\nbe worked by the Dropin.",name:"billingRequestFlowID",required:!0,type:{name:"string"}},environment:{defaultValue:null,description:"Environment name, one of live or sandbox.",name:"environment",required:!0,type:{name:"string"}},domain:{defaultValue:null,description:"Domain override if using a custom environment (for internal use only).",name:"domain",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/GoCardlessDropinButton.tsx#GoCardlessDropinButton"]={docgenInfo:GoCardlessDropinButton_GoCardlessDropinButton.__docgenInfo,name:"GoCardlessDropinButton",path:"src/GoCardlessDropinButton.tsx#GoCardlessDropinButton"})}catch(__react_docgen_typescript_loader_error){}var index_stories_Base=function Base(_ref){var billingRequestFlowID=_ref.billingRequestFlowID,environment=_ref.environment;return Object(jsx_runtime.jsx)(GoCardlessDropinButton_GoCardlessDropinButton,{billingRequestFlowID:billingRequestFlowID,environment:environment,onSuccess:Object(esm.action)("onSuccess"),onExit:Object(esm.action)("onExit")})};index_stories_Base.displayName="Base",index_stories_Base.args={billingRequestFlowID:"BRF123",environment:"sandbox"};__webpack_exports__.default={title:"Dropin/GoCardlessDropinButton",component:index_stories_Base,argTypes:{billingRequestFlowID:{control:"text"},environment:{control:{type:"select"},options:["sandbox","live"]}}};index_stories_Base.parameters=Object.assign({storySource:{source:'({\n  billingRequestFlowID,\n  environment,\n}: {\n  billingRequestFlowID: string;\n  environment: string;\n}) => {\n  return (\n    <GoCardlessDropinButton\n      billingRequestFlowID={billingRequestFlowID}\n      environment={environment}\n      onSuccess={action("onSuccess")}\n      onExit={action("onExit")}\n    />\n  );\n}'}},index_stories_Base.parameters);try{index_stories_Base.displayName="Base",index_stories_Base.__docgenInfo={description:"",displayName:"Base",props:{billingRequestFlowID:{defaultValue:null,description:"",name:"billingRequestFlowID",required:!0,type:{name:"string"}},environment:{defaultValue:null,description:"",name:"environment",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.stories.tsx#Base"]={docgenInfo:index_stories_Base.__docgenInfo,name:"Base",path:"src/index.stories.tsx#Base"})}catch(__react_docgen_typescript_loader_error){}},843:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(22),__webpack_require__(5),__webpack_require__(47),__webpack_require__(412),__webpack_require__(820),__webpack_require__(45),__webpack_require__(821),__webpack_require__(822),__webpack_require__(411);var client_api=__webpack_require__(851),types=__webpack_require__(849),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(types.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[466,2,3]]]);
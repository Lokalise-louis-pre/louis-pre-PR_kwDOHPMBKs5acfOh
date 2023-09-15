"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[9093],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs");__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"./src/components/Alert/Alert.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>Alert_stories,error:()=>error,info:()=>info,onClose:()=>onClose,success:()=>success,warning:()=>warning});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),addon_actions_dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Alert_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Alert/Alert.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Alert_module.Z,options);const Alert_Alert_module=Alert_module.Z&&Alert_module.Z.locals?Alert_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Alert=({status="warning",onClose,children,...props})=>(0,jsx_runtime.jsx)("div",{className:Alert_Alert_module.container,"data-variant":status,...props,children:(0,jsx_runtime.jsx)("div",{className:Alert_Alert_module.content,children})});Alert.displayName="Alert";try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{status:{defaultValue:{value:"warning"},description:"Changes the alert background color.",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},onClose:{defaultValue:null,description:"Function to close the alert. When a function is passed the component will render a close button.",name:"onClose",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the alert.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Alert/Alert.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"src/components/Alert/Alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}const Template=({onCloseFunction,onClose,...args})=>(0,jsx_runtime.jsx)(Alert,{onClose:onCloseFunction?(0,addon_actions_dist.aD)("onClose"):void 0,...args});const warning=Template.bind({});warning.storyName="Warning",warning.args={children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"warning"},warning.parameters={storySource:{source:'({\n  onCloseFunction,\n  onClose,\n  ...args\n}) => {\n  return <Alert onClose={onCloseFunction ? action("onClose") : undefined} {...args} />;\n}'}};const info=Template.bind({});info.storyName="Info",info.args={children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"info"},info.parameters={storySource:{source:'({\n  onCloseFunction,\n  onClose,\n  ...args\n}) => {\n  return <Alert onClose={onCloseFunction ? action("onClose") : undefined} {...args} />;\n}'}};const success=Template.bind({});success.storyName="Success",success.args={children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"success"},success.parameters={storySource:{source:'({\n  onCloseFunction,\n  onClose,\n  ...args\n}) => {\n  return <Alert onClose={onCloseFunction ? action("onClose") : undefined} {...args} />;\n}'}};const error=Template.bind({});error.storyName="Error",error.args={children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"error"},error.parameters={storySource:{source:'({\n  onCloseFunction,\n  onClose,\n  ...args\n}) => {\n  return <Alert onClose={onCloseFunction ? action("onClose") : undefined} {...args} />;\n}'}};const onClose=Template.bind({});onClose.storyName="onClose",onClose.args={children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"warning",onCloseFunction:!0},onClose.parameters={storySource:{source:'({\n  onCloseFunction,\n  onClose,\n  ...args\n}) => {\n  return <Alert onClose={onCloseFunction ? action("onClose") : undefined} {...args} />;\n}'}};const componentMeta={title:"Components/Alert",parameters:{controls:{sort:"requiredFirst"}},component:Alert,args:{onCloseFunction:!1},argTypes:{onCloseFunction:{name:"Pass onClose function?",control:{type:"boolean"}}},tags:["stories-mdx"],includeStories:["warning","info","success","error","onClose"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",code:"code",h3:"h3",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Alert",component:Alert,parameters:{controls:{sort:"requiredFirst"}},args:{onCloseFunction:!1},argTypes:{onCloseFunction:{name:"Pass onClose function?",control:{type:"boolean"}}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"alert",children:"Alert"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#figma-design-file",children:"Figma Design File"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Alert is used to highlight an important message. Often used in combination with a Modal to ask for user confirmation."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Alert exports 2 components:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Alert"}),": Main component."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"AlertLink"}),": Link that is meant to be used within ",(0,jsx_runtime.jsx)(_components.code,{children:"Alert"}),"."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { Alert, AlertLink } from '@lokalise/louis';\n\nexport default () => (\n\t<Alert>\n\t\tAn important alert message.\n\t\t<AlertLink href=\"#\">Alert link</AlertLink>\n\t</Alert>\n);\n"})}),"\n",(0,jsx_runtime.jsx)("h2",{id:"figma-design-file",children:"Figma Design File"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4032%3A36154",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Source File | Alert"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{}),"\n",(0,jsx_runtime.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"status",children:"Status"}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{withSource:"open",children:[(0,jsx_runtime.jsx)(dist.oG,{name:"Warning",args:{children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"warning"},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Info",args:{children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"info"},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Success",args:{children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"success"},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Error",args:{children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"error"},children:Template.bind({})})]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"onclose",children:"onClose"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"onClose",args:{children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"warning",onCloseFunction:!0},children:Template.bind({})})})]})}}};const Alert_stories=componentMeta},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Alert/Alert.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".gvnnQO90XrI8I_W05BXH {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr auto;\n\tcolumn-gap: var(--lok-spacing-3);\n\talign-items: flex-start;\n\tpadding: var(--lok-spacing-4);\n\tborder-radius: var(--lok-radius-m);\n\tfont-family: var(--lok-font-family-default);\n\n\t&[data-variant='success'] {\n\t\tbackground-color: var(--lok-color-background-success);\n\t}\n\n\t&[data-variant='error'] {\n\t\tbackground-color: var(--lok-color-background-danger);\n\t}\n\n\t&[data-variant='warning'] {\n\t\tbackground-color: var(--lok-color-background-warning);\n\t}\n\n\t&[data-variant='info'] {\n\t\tbackground-color: var(--lok-color-background-info);\n\t}\n}\n\n.bzq1kNwJWh5C41P81yXJ {\n\tfont-family: var(--lok-typography-body-small-default-font-family);\n\tfont-weight: var(--lok-typography-body-small-default-font-weight);\n\tfont-size: var(--lok-typography-body-small-default-font-size);\n\tline-height: var(--lok-typography-body-small-default-line-height);\n\tcolor: var(--lok-color-text-default);\n\tdisplay: flex;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tcolumn-gap: var(--lok-spacing-1);\n}\n","",{version:3,sources:["webpack://./src/components/Alert/Alert.module.css"],names:[],mappings:"AAAA;CACC,aAAa;CACb,+BAA+B;CAC/B,gCAAgC;CAChC,uBAAuB;CACvB,6BAA6B;CAC7B,kCAAkC;CAClC,2CAA2C;;CAE3C;EACC,qDAAqD;CACtD;;CAEA;EACC,oDAAoD;CACrD;;CAEA;EACC,qDAAqD;CACtD;;CAEA;EACC,kDAAkD;CACnD;AACD;;AAEA;CACC,iEAAiE;CACjE,iEAAiE;CACjE,6DAA6D;CAC7D,iEAAiE;CACjE,oCAAoC;CACpC,aAAa;CACb,mBAAmB;CACnB,eAAe;CACf,gCAAgC;AACjC",sourcesContent:[".container {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr auto;\n\tcolumn-gap: var(--lok-spacing-3);\n\talign-items: flex-start;\n\tpadding: var(--lok-spacing-4);\n\tborder-radius: var(--lok-radius-m);\n\tfont-family: var(--lok-font-family-default);\n\n\t&[data-variant='success'] {\n\t\tbackground-color: var(--lok-color-background-success);\n\t}\n\n\t&[data-variant='error'] {\n\t\tbackground-color: var(--lok-color-background-danger);\n\t}\n\n\t&[data-variant='warning'] {\n\t\tbackground-color: var(--lok-color-background-warning);\n\t}\n\n\t&[data-variant='info'] {\n\t\tbackground-color: var(--lok-color-background-info);\n\t}\n}\n\n.content {\n\tfont-family: var(--lok-typography-body-small-default-font-family);\n\tfont-weight: var(--lok-typography-body-small-default-font-weight);\n\tfont-size: var(--lok-typography-body-small-default-font-size);\n\tline-height: var(--lok-typography-body-small-default-line-height);\n\tcolor: var(--lok-color-text-default);\n\tdisplay: flex;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tcolumn-gap: var(--lok-spacing-1);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"gvnnQO90XrI8I_W05BXH",content:"bzq1kNwJWh5C41P81yXJ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
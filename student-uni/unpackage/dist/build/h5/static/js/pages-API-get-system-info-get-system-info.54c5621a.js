(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-get-system-info-get-system-info"],{3610:function(t,i,s){var e=s("54d3");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=s("4f06").default;a("78a34ee3",e,!0,{sourceMap:!1,shadowMode:!1})},"54d3":function(t,i,s){i=t.exports=s("2350")(!1),i.push([t.i,".uni-pd[data-v-0ca9483b]{padding-left:%?30?%}",""])},"5c24":function(t,i,s){"use strict";s.r(i);var e=s("ba17"),a=s.n(e);for(var n in e)"default"!==n&&function(t){s.d(i,t,function(){return e[t]})}(n);i["default"]=a.a},"84a8":function(t,i,s){"use strict";var e,a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-uni-view",[s("page-head",{attrs:{title:t.title}}),s("v-uni-view",{staticClass:"uni-common-mt"},[s("v-uni-view",{staticClass:"uni-list"},[s("v-uni-view",{staticClass:"uni-list-cell"},[s("v-uni-view",{staticClass:"uni-pd"},[s("v-uni-view",{staticClass:"uni-label",staticStyle:{width:"180px"}},[t._v("手机型号")])],1),s("v-uni-view",{staticClass:"uni-list-cell-db"},[s("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.model}})],1)],1),s("v-uni-view",{staticClass:"uni-list-cell"},[s("v-uni-view",{staticClass:"uni-pd"},[s("v-uni-view",{staticClass:"uni-label",staticStyle:{width:"180px"}},[t._v("客户端平台")])],1),s("v-uni-view",{staticClass:"uni-list-cell-db"},[s("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.platform}})],1)],1),s("v-uni-view",{staticClass:"uni-list-cell"},[s("v-uni-view",{staticClass:"uni-pd"},[s("v-uni-view",{staticClass:"uni-label",staticStyle:{width:"180px"}},[t._v("操作系统版本")])],1),s("v-uni-view",{staticClass:"uni-list-cell-db"},[s("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.system}})],1)],1),s("v-uni-view",{staticClass:"uni-list-cell"},[s("v-uni-view",{staticClass:"uni-pd"},[s("v-uni-view",{staticClass:"uni-label",staticStyle:{width:"180px"}},[t._v("语言")])],1),s("v-uni-view",{staticClass:"uni-list-cell-db"},[s("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.language}})],1)],1),s("v-uni-view",{staticClass:"uni-list-cell"},[s("v-uni-view",{staticClass:"uni-pd"},[s("v-uni-view",{staticClass:"uni-label",staticStyle:{width:"180px"}},[t._v("版本")])],1),s("v-uni-view",{staticClass:"uni-list-cell-db"},[s("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.version}})],1)],1),s("v-uni-view",{staticClass:"uni-list-cell"},[s("v-uni-view",{staticClass:"uni-pd"},[s("v-uni-view",{staticClass:"uni-label",staticStyle:{width:"180px"}},[t._v("屏幕宽度")])],1),s("v-uni-view",{staticClass:"uni-list-cell-db"},[s("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.screenWidth}})],1)],1),s("v-uni-view",{staticClass:"uni-list-cell"},[s("v-uni-view",{staticClass:"uni-pd"},[s("v-uni-view",{staticClass:"uni-label",staticStyle:{width:"180px"}},[t._v("屏幕高度")])],1),s("v-uni-view",{staticClass:"uni-list-cell-db"},[s("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.screenHeight}})],1)],1),s("v-uni-view",{staticClass:"uni-list-cell"},[s("v-uni-view",{staticClass:"uni-pd"},[s("v-uni-view",{staticClass:"uni-label",staticStyle:{width:"180px"}},[t._v("可使用窗口高度")])],1),s("v-uni-view",{staticClass:"uni-list-cell-db"},[s("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.windowHeight}})],1)],1),s("v-uni-view",{staticClass:"uni-list-cell"},[s("v-uni-view",{staticClass:"uni-pd"},[s("v-uni-view",{staticClass:"uni-label",staticStyle:{width:"180px"}},[t._v("可使用窗口的顶部位置")])],1),s("v-uni-view",{staticClass:"uni-list-cell-db"},[s("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.windowTop}})],1)],1),s("v-uni-view",{staticClass:"uni-list-cell"},[s("v-uni-view",{staticClass:"uni-pd"},[s("v-uni-view",{staticClass:"uni-label",staticStyle:{width:"180px"}},[t._v("可使用窗口的底部位置")])],1),s("v-uni-view",{staticClass:"uni-list-cell-db"},[s("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.windowBottom}})],1)],1),s("v-uni-view",{staticClass:"uni-list-cell"},[s("v-uni-view",{staticClass:"uni-pd"},[s("v-uni-view",{staticClass:"uni-label",staticStyle:{width:"180px"}},[t._v("状态栏的高度")])],1),s("v-uni-view",{staticClass:"uni-list-cell-db"},[s("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.statusBarHeight}})],1)],1),s("v-uni-view",{staticClass:"uni-list-cell"},[s("v-uni-view",{staticClass:"uni-pd"},[s("v-uni-view",{staticClass:"uni-label",staticStyle:{width:"180px"}},[t._v("DPI")])],1),s("v-uni-view",{staticClass:"uni-list-cell-db"},[s("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.pixelRatio}})],1)],1)],1),s("v-uni-view",{staticClass:"uni-padding-wrap"},[s("v-uni-view",{staticClass:"uni-btn-v"},[s("v-uni-button",{attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.getSystemInfo.apply(void 0,arguments)}}},[t._v("获取手机系统信息")])],1)],1)],1)],1)},n=[];s.d(i,"b",function(){return a}),s.d(i,"c",function(){return n}),s.d(i,"a",function(){return e})},ba17:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{title:"getSystemInfo",systemInfo:{}}},onUnload:function(){this.systemInfo={}},methods:{getSystemInfo:function(){var t=this;uni.getSystemInfo({success:function(i){t.systemInfo=i}})}}};i.default=e},e1a1:function(t,i,s){"use strict";var e=s("3610"),a=s.n(e);a.a},fedd:function(t,i,s){"use strict";s.r(i);var e=s("84a8"),a=s("5c24");for(var n in a)"default"!==n&&function(t){s.d(i,t,function(){return a[t]})}(n);s("e1a1");var l,u=s("f0c5"),v=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,"0ca9483b",null,!1,e["a"],l);i["default"]=v.exports}}]);
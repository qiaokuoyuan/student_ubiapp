(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-editor-editor"],{"483c":function(a,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{readOnly:!1,formats:{}}},methods:{readOnlyChange:function(){this.readOnly=!this.readOnly},onEditorReady:function(){var a=this;uni.createSelectorQuery().select("#editor").context(function(t){a.editorCtx=t.context}).exec()},undo:function(){this.editorCtx.undo()},redo:function(){this.editorCtx.redo()},format:function(a){var t=a.target.dataset,n=t.name,i=t.value;n&&this.editorCtx.format(n,i)},onStatusChange:function(a){var t=a.detail;this.formats=t},insertDivider:function(){this.editorCtx.insertDivider({success:function(){console.log("insert divider success")}})},clear:function(){this.editorCtx.clear({success:function(a){console.log("clear success")}})},removeFormat:function(){this.editorCtx.removeFormat()},insertDate:function(){var a=new Date,t="".concat(a.getFullYear(),"/").concat(a.getMonth()+1,"/").concat(a.getDate());this.editorCtx.insertText({text:t})},insertImage:function(){var a=this;uni.chooseImage({count:1,success:function(t){a.editorCtx.insertImage({src:t.tempFilePaths[0],alt:"图像",success:function(){console.log("insert image success")}})}})}},onLoad:function(){uni.loadFontFace({family:"Pacifico",source:'url("https://sungd.github.io/Pacifico.ttf")'})}};t.default=i},"5ba7":function(a,t,n){t=a.exports=n("2350")(!1),t.push([a.i,'@font-face{font-family:iconfont;src:url(https://img-cdn-qiniu.dcloud.net.cn/fonts/editor-icon.ttf) format("truetype")}.iconfont[data-v-4414baca]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-redo[data-v-4414baca]:before{content:"\\E627"}.icon-undo[data-v-4414baca]:before{content:"\\E633"}.icon-indent[data-v-4414baca]:before{content:"\\EB28"}.icon-outdent[data-v-4414baca]:before{content:"\\E6E8"}.icon-fontsize[data-v-4414baca]:before{content:"\\E6FD"}.icon-format-header-1[data-v-4414baca]:before{content:"\\E860"}.icon-format-header-4[data-v-4414baca]:before{content:"\\E863"}.icon-format-header-5[data-v-4414baca]:before{content:"\\E864"}.icon-format-header-6[data-v-4414baca]:before{content:"\\E865"}.icon-clearup[data-v-4414baca]:before{content:"\\E64D"}.icon-preview[data-v-4414baca]:before{content:"\\E631"}.icon-date[data-v-4414baca]:before{content:"\\E63E"}.icon-fontbgcolor[data-v-4414baca]:before{content:"\\E678"}.icon-clearedformat[data-v-4414baca]:before{content:"\\E67E"}.icon-font[data-v-4414baca]:before{content:"\\E684"}.icon-723bianjiqi_duanhouju[data-v-4414baca]:before{content:"\\E65F"}.icon-722bianjiqi_duanqianju[data-v-4414baca]:before{content:"\\E660"}.icon-text_color[data-v-4414baca]:before{content:"\\E72C"}.icon-format-header-2[data-v-4414baca]:before{content:"\\E75C"}.icon-format-header-3[data-v-4414baca]:before{content:"\\E75D"}.icon--checklist[data-v-4414baca]:before{content:"\\E664"}.icon-baocun[data-v-4414baca]:before{content:"\\EC09"}.icon-line-height[data-v-4414baca]:before{content:"\\E7F8"}.icon-quanping[data-v-4414baca]:before{content:"\\EC13"}.icon-direction-rtl[data-v-4414baca]:before{content:"\\E66E"}.icon-direction-ltr[data-v-4414baca]:before{content:"\\E66D"}.icon-selectall[data-v-4414baca]:before{content:"\\E62B"}.icon-fuzhi[data-v-4414baca]:before{content:"\\EC7A"}.icon-shanchu[data-v-4414baca]:before{content:"\\EC7B"}.icon-bianjisekuai[data-v-4414baca]:before{content:"\\EC7C"}.icon-fengexian[data-v-4414baca]:before{content:"\\EC7F"}.icon-dianzan[data-v-4414baca]:before{content:"\\EC80"}.icon-charulianjie[data-v-4414baca]:before{content:"\\EC81"}.icon-charutupian[data-v-4414baca]:before{content:"\\EC82"}.icon-wuxupailie[data-v-4414baca]:before{content:"\\EC83"}.icon-juzhongduiqi[data-v-4414baca]:before{content:"\\EC84"}.icon-yinyong[data-v-4414baca]:before{content:"\\EC85"}.icon-youxupailie[data-v-4414baca]:before{content:"\\EC86"}.icon-youduiqi[data-v-4414baca]:before{content:"\\EC87"}.icon-zitidaima[data-v-4414baca]:before{content:"\\EC88"}.icon-xiaolian[data-v-4414baca]:before{content:"\\EC89"}.icon-zitijiacu[data-v-4414baca]:before{content:"\\EC8A"}.icon-zitishanchuxian[data-v-4414baca]:before{content:"\\EC8B"}.icon-zitishangbiao[data-v-4414baca]:before{content:"\\EC8C"}.icon-zitibiaoti[data-v-4414baca]:before{content:"\\EC8D"}.icon-zitixiahuaxian[data-v-4414baca]:before{content:"\\EC8E"}.icon-zitixieti[data-v-4414baca]:before{content:"\\EC8F"}.icon-zitiyanse[data-v-4414baca]:before{content:"\\EC90"}.icon-zuoduiqi[data-v-4414baca]:before{content:"\\EC91"}.icon-zitiyulan[data-v-4414baca]:before{content:"\\EC92"}.icon-zitixiabiao[data-v-4414baca]:before{content:"\\EC93"}.icon-zuoyouduiqi[data-v-4414baca]:before{content:"\\EC94"}.icon-duigoux[data-v-4414baca]:before{content:"\\EC9E"}.icon-guanbi[data-v-4414baca]:before{content:"\\ECA0"}.icon-shengyin_shiti[data-v-4414baca]:before{content:"\\ECA5"}.icon-Character-Spacing[data-v-4414baca]:before{content:"\\E964"}.wrapper[data-v-4414baca]{padding:5px}.iconfont[data-v-4414baca]{display:inline-block;padding:8px 8px;width:24px;height:24px;cursor:pointer;font-size:20px}.toolbar[data-v-4414baca]{box-sizing:border-box;border-bottom:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}.ql-container[data-v-4414baca]{box-sizing:border-box;padding:12px 15px;width:100%;min-height:30vh;height:auto;background:#fff;margin-top:20px;font-size:16px;line-height:1.5}.ql-active[data-v-4414baca]{color:#06c}',""])},"5e6a":function(a,t,n){"use strict";n.r(t);var i=n("483c"),e=n.n(i);for(var o in i)"default"!==o&&function(a){n.d(t,a,function(){return i[a]})}(o);t["default"]=e.a},"7c88":function(a,t,n){"use strict";var i,e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"wrapper"},[n("v-uni-view",{staticClass:"toolbar",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.format.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"iconfont icon-zitijiacu",class:a.formats.bold?"ql-active":"",attrs:{"data-name":"bold"}}),n("v-uni-view",{staticClass:"iconfont icon-zitixieti",class:a.formats.italic?"ql-active":"",attrs:{"data-name":"italic"}}),n("v-uni-view",{staticClass:"iconfont icon-zitixiahuaxian",class:a.formats.underline?"ql-active":"",attrs:{"data-name":"underline"}}),n("v-uni-view",{staticClass:"iconfont icon-zitishanchuxian",class:a.formats.strike?"ql-active":"",attrs:{"data-name":"strike"}}),n("v-uni-view",{staticClass:"iconfont icon-zuoduiqi",class:"left"===a.formats.align?"ql-active":"",attrs:{"data-name":"align","data-value":"left"}}),n("v-uni-view",{staticClass:"iconfont icon-juzhongduiqi",class:"center"===a.formats.align?"ql-active":"",attrs:{"data-name":"align","data-value":"center"}}),n("v-uni-view",{staticClass:"iconfont icon-youduiqi",class:"right"===a.formats.align?"ql-active":"",attrs:{"data-name":"align","data-value":"right"}}),n("v-uni-view",{staticClass:"iconfont icon-zuoyouduiqi",class:"justify"===a.formats.align?"ql-active":"",attrs:{"data-name":"align","data-value":"justify"}}),n("v-uni-view",{staticClass:"iconfont icon-line-height",class:a.formats.lineHeight?"ql-active":"",attrs:{"data-name":"lineHeight","data-value":"2"}}),n("v-uni-view",{staticClass:"iconfont icon-Character-Spacing",class:a.formats.letterSpacing?"ql-active":"",attrs:{"data-name":"letterSpacing","data-value":"2em"}}),n("v-uni-view",{staticClass:"iconfont icon-722bianjiqi_duanqianju",class:a.formats.marginTop?"ql-active":"",attrs:{"data-name":"marginTop","data-value":"20px"}}),n("v-uni-view",{staticClass:"iconfont icon-723bianjiqi_duanhouju",class:a.formats.previewarginBottom?"ql-active":"",attrs:{"data-name":"marginBottom","data-value":"20px"}}),n("v-uni-view",{staticClass:"iconfont icon-clearedformat",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.removeFormat.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"iconfont icon-font",class:a.formats.fontFamily?"ql-active":"",attrs:{"data-name":"fontFamily","data-value":"Pacifico"}}),n("v-uni-view",{staticClass:"iconfont icon-fontsize",class:"24px"===a.formats.fontSize?"ql-active":"",attrs:{"data-name":"fontSize","data-value":"24px"}}),n("v-uni-view",{staticClass:"iconfont icon-text_color",class:"#0000ff"===a.formats.color?"ql-active":"",attrs:{"data-name":"color","data-value":"#0000ff"}}),n("v-uni-view",{staticClass:"iconfont icon-fontbgcolor",class:"#00ff00"===a.formats.backgroundColor?"ql-active":"",attrs:{"data-name":"backgroundColor","data-value":"#00ff00"}}),n("v-uni-view",{staticClass:"iconfont icon-date",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.insertDate.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"iconfont icon--checklist",attrs:{"data-name":"list","data-value":"check"}}),n("v-uni-view",{staticClass:"iconfont icon-youxupailie",class:"ordered"===a.formats.list?"ql-active":"",attrs:{"data-name":"list","data-value":"ordered"}}),n("v-uni-view",{staticClass:"iconfont icon-wuxupailie",class:"bullet"===a.formats.list?"ql-active":"",attrs:{"data-name":"list","data-value":"bullet"}}),n("v-uni-view",{staticClass:"iconfont icon-undo",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.undo.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"iconfont icon-redo",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.redo.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"iconfont icon-outdent",attrs:{"data-name":"indent","data-value":"-1"}}),n("v-uni-view",{staticClass:"iconfont icon-indent",attrs:{"data-name":"indent","data-value":"+1"}}),n("v-uni-view",{staticClass:"iconfont icon-fengexian",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.insertDivider.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"iconfont icon-charutupian",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.insertImage.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"iconfont icon-format-header-1",class:1===a.formats.header?"ql-active":"",attrs:{"data-name":"header","data-value":1}}),n("v-uni-view",{staticClass:"iconfont icon-zitixiabiao",class:"sub"===a.formats.script?"ql-active":"",attrs:{"data-name":"script","data-value":"sub"}}),n("v-uni-view",{staticClass:"iconfont icon-zitishangbiao",class:"super"===a.formats.script?"ql-active":"",attrs:{"data-name":"script","data-value":"super"}}),n("v-uni-view",{staticClass:"iconfont icon-shanchu",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.clear.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"iconfont icon-direction-rtl",class:"rtl"===a.formats.direction?"ql-active":"",attrs:{"data-name":"direction","data-value":"rtl"}})],1),n("v-uni-editor",{staticClass:"ql-container",attrs:{id:"editor",placeholder:"开始输入...",showImgSize:!0,showImgToolbar:!0,showImgResize:!0,"read-only":a.readOnly},on:{statuschange:function(t){arguments[0]=t=a.$handleEvent(t),a.onStatusChange.apply(void 0,arguments)},ready:function(t){arguments[0]=t=a.$handleEvent(t),a.onEditorReady.apply(void 0,arguments)}}})],1)],1)],1)},o=[];n.d(t,"b",function(){return e}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return i})},"8c62":function(a,t,n){var i=n("5ba7");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var e=n("4f06").default;e("4ed4d6ac",i,!0,{sourceMap:!1,shadowMode:!1})},b6fc:function(a,t,n){"use strict";n.r(t);var i=n("7c88"),e=n("5e6a");for(var o in e)"default"!==o&&function(a){n.d(t,a,function(){return e[a]})}(o);n("c297");var c,s=n("f0c5"),r=Object(s["a"])(e["default"],i["b"],i["c"],!1,null,"4414baca",null,!1,i["a"],c);t["default"]=r.exports},c297:function(a,t,n){"use strict";var i=n("8c62"),e=n.n(i);e.a}}]);
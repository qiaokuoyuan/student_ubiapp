!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=579)}({0:function(t,e,n){"use strict";function i(t,e,n,i,o,s,r,a,u,c){var l,p="function"==typeof t?t.options:t;if(u&&(p.components=Object.assign(u,p.components||{})),c&&((c.beforeCreate||(c.beforeCreate=[])).unshift(function(){this[c.__module]=this}),(p.mixins||(p.mixins=[])).push(c)),e&&(p.render=e,p.staticRenderFns=n,p._compiled=!0),i&&(p.functional=!0),s&&(p._scopeId="data-v-"+s),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},p._ssrRegister=l):o&&(l=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(p.functional){p._injectStyles=l;var f=p.render;p.render=function(t,e){return l.call(e),f(t,e)}}else{var d=p.beforeCreate;p.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:p}}n.d(e,"a",function(){return i})},1:function(t,e){t.exports={}},10:function(t,e){t.exports=Vue},11:function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(12).default,Vue.prototype.__$appStyle__)},12:function(t,e,n){"use strict";n.r(e);var i=n(1),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e.default=o.a},13:function(t,e,n){"use strict";n.r(e);var i=n(6),o=n(3);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);var r=n(0);var a=Object(r.a)(o.default,i.b,i.c,!1,null,"4f8fb6f4","458675d2",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(14).default,this.options.style):Object.assign(this.options.style,n(14).default)}).call(a),e.default=a.exports},14:function(t,e,n){"use strict";n.r(e);var i=n(5),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e.default=o.a},2:function(t,e,n){"use strict";n.r(e),e.default={appid:"__UNI__D064FA9"}},225:function(t,e,n){"use strict";n.r(e);var i=n(226),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e.default=o.a},226:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{}},provide:function(){return{swipeaction:this}},created:function(){this.children=[]},methods:{closeOther:function(t){this.children.forEach(function(e,n){t!==e&&e.close()})}}}},227:function(t,e,n){"use strict";n.r(e);var i=n(228),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e.default=o.a},228:function(t,e,n){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={mixins:[((i=n(580))&&i.__esModule?i:{default:i}).default],props:{options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},show:{type:Boolean,default:!1},autoClose:{type:Boolean,default:!0}},inject:["swipeaction"]};e.default=o},229:function(t,e){t.exports={"uni-swipe":{overflow:"hidden"},"uni-swipe-box":{position:"relative",width:100},"uni-swipe_content":{flex:1,position:"relative"},"uni-swipe_move-box":{position:"relative",flexDirection:"row"},"uni-swipe_box":{flex:1,fontSize:"14",backgroundColor:"#ffffff"},"uni-swipe_button-group":{position:"absolute",top:0,right:0,bottom:0,zIndex:0,flexDirection:"row"},"uni-swipe_button":{position:"absolute",left:0,top:0,bottom:0,flexDirection:"row",justifyContent:"center",alignItems:"center",paddingTop:0,paddingRight:"20",paddingBottom:0,paddingLeft:"20"},"uni-swipe_button-text":{fontSize:"14"},"@TRANSITION":{ani:{property:"transform",duration:300,timingFunction:"cubic-bezier(0.165,0.84,0.44,1)"}},ani:{transitionProperty:"transform",transitionDuration:300,transitionTimingFunction:"cubic-bezier(0.165,0.84,0.44,1)"}}},230:function(t,e,n){"use strict";var i=n(231),o=n.n(i);e.default=o.a},231:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n(13)),o=r(n(484)),s=r(n(485));function r(t){return t&&t.__esModule?t:{default:t}}var a={components:{uniSection:i.default,uniSwipeAction:o.default,uniSwipeActionItem:s.default},data:function(){return{isOpened:!1,options1:[{text:"取消置顶"}],options2:[{text:"取消",style:{backgroundColor:"#007aff"}},{text:"确认",style:{backgroundColor:"#dd524d"}}],swipeList:[{options:[{text:"添加",style:{backgroundColor:"rgb(255,58,49)"}}],id:0,content:"item1"},{id:1,options:[{text:"置顶"},{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}],content:"item2"},{id:2,options:[{text:"置顶"},{text:"标记为已读",style:{backgroundColor:"rgb(254,156,1)"}},{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}],content:"item3"}]}},onReady:function(){var t=this;this.$nextTick(function(){t.isOpened=!0})},methods:{bindClick:function(t){uni.showToast({title:"点击了".concat(t.content.text,"按钮"),icon:"none"})},setOpened:function(){this.isOpened=!this.isOpened},change:function(e){this.isOpened=e,t("log","返回：",e," at pages\\extUI\\swipe-action\\swipe-action.nvue:130")},swipeChange:function(e){t("log","返回：",e," at pages\\extUI\\swipe-action\\swipe-action.nvue:133")},swipeClick:function(e,n){var i=this,o=e.content;"删除"===o.text?uni.showModal({title:"提示",content:"是否删除",success:function(e){e.confirm?i.swipeList.splice(n,1):e.cancel&&t("log","用户点击取消"," at pages\\extUI\\swipe-action\\swipe-action.nvue:147")}}):"添加"===o.text?this.swipeList.length<10?(this.swipeList.push({id:(new Date).getTime(),options:[{text:"置顶"},{text:"标记为已读",style:{backgroundColor:"rgb(254,156,1)"}},{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}],content:"新增"}),uni.showToast({title:"添加了一条数据",icon:"none"})):uni.showToast({title:"最多添加十条数据",icon:"none"}):uni.showToast({title:"点击了".concat(e.content.text,"按钮"),icon:"none"})}}};e.default=a}).call(this,n(26).default)},232:function(t,e){t.exports={example:{paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15"},"example-info":{paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",color:"#3b4144",backgroundColor:"#ffffff",fontSize:"14",lineHeight:"20"},"example-info-text":{fontSize:"14",lineHeight:"20",color:"#3b4144"},"example-body":{flexDirection:"row",paddingTop:"10",paddingRight:0,paddingBottom:"10",paddingLeft:0,backgroundColor:"#ffffff",justifyContent:"center"},"word-btn-white":{fontSize:"18",color:"#FFFFFF"},"word-btn":{flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:"6",height:"48",marginTop:"15",marginRight:"15",marginBottom:"15",marginLeft:"15",backgroundColor:"#007AFF"},"word-btn--hover":{backgroundColor:"#4ca2ff"},cont:{flex:1,height:"45",lineHeight:"45",paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15",position:"relative",backgroundColor:"#ffffff",fontSize:"15",borderBottomColor:"#F5F5F5",borderBottomWidth:"1",borderBottomStyle:"solid"},button:{borderColor:"#e5e5e5",borderStyle:"solid",borderWidth:"1",paddingTop:"4",paddingRight:"8",paddingBottom:"4",paddingLeft:"8",borderRadius:"4"},"button-text":{fontSize:"15"}}},26:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e.shift();if("string"==typeof __channelId__&&__channelId__)return e.push(e.pop().replace("at ","uni-app:///")),console[i].apply(console,e);var o=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(e){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=function(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),s="";if(o.length>1){var r=o.pop();s=o.join("---COMMA---"),0===r.indexOf(" at ")?s+=r:s+="---COMMA---"+r}else s=o[0];console[i](s)}},3:function(t,e,n){"use strict";n.r(e);var i=n(4),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e.default=o.a},4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},402:function(t,e,n){"use strict";var i={"uni-section":n(13).default,"uni-swipe-action":n(484).default,"uni-swipe-action-item":n(485).default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,enableBackToTop:!0,bubble:"true"}},[n("view",[n("uni-section",{attrs:{title:"基本用法",type:"line"}}),n("uni-swipe-action",[n("uni-swipe-action-item",{attrs:{options:t.options1},on:{click:t.bindClick}},[n("u-text",{staticClass:["cont"]},[t._v("SwipeAction 基础使用场景")])])],1),n("uni-section",{attrs:{title:"禁止滑动",type:"line"}}),n("uni-swipe-action",[n("uni-swipe-action-item",{attrs:{disabled:!0}},[n("u-text",{staticClass:["cont"]},[t._v("SwipeAction 禁止滑动展示")])])],1),n("uni-section",{attrs:{title:"使用变量控制开关",type:"line"}}),n("view",{staticClass:["example-body"]},[n("view",{staticClass:["button"],on:{click:t.setOpened}},[n("u-text",{staticClass:["button-text"]},[t._v("当前状态："+t._s(t.isOpened?"开":"关"))])])]),n("uni-swipe-action",[n("uni-swipe-action-item",{attrs:{options:t.options2,show:t.isOpened,autoClose:!1},on:{change:t.change,click:t.bindClick}},[n("u-text",{staticClass:["cont"]},[t._v("使用变量控制SwipeAction的开启状态")])])],1),n("uni-section",{attrs:{title:"swipe-action 列表",type:"line"}}),n("uni-swipe-action",t._l(t.swipeList,function(e,i){return n("uni-swipe-action-item",{key:e.id,attrs:{options:e.options},on:{change:t.swipeChange,click:function(e){t.swipeClick(e,i)}}},[n("u-text",{staticClass:["cont"]},[t._v(t._s(e.content))])])}),1)],1)])},s=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return i})},430:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:["uni-swipe"]},[n("view",{ref:"selector-box-hock",staticClass:["uni-swipe_content"],on:{horizontalpan:t.touchstart,touchend:t.touchend}},[n("view",{ref:"selector-button-hock",staticClass:["uni-swipe_button-group","selector-query-hock","move-hock"],style:{width:t.right+"px"}},t._l(t.options,function(e,i){return n("view",{key:i,ref:"button-hock",refInFor:!0,staticClass:["uni-swipe_button"],style:{backgroundColor:e.style&&e.style.backgroundColor?e.style.backgroundColor:"#C7C6CD",left:t.right+"px"},on:{click:function(n){t.onClick(i,e)}}},[n("u-text",{staticClass:["uni-swipe_button-text"],style:{color:e.style&&e.style.color?e.style.color:"#FFFFFF",fontSize:e.style&&e.style.fontSize?e.style.fontSize:"16px"}},[t._v(t._s(e.text))])])}),0),n("view",{ref:"selector-content-hock",staticClass:["uni-swipe_move-box","selector-query-hock"]},[n("view",{staticClass:["uni-swipe_box"]},[t._t("default")],2)])])])},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){})},431:function(t,e,n){"use strict";var i=function(){var t=this.$createElement;return(this._self._c||t)("view",[this._t("default")],2)},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){})},484:function(t,e,n){"use strict";n.r(e);var i=n(431),o=n(225);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);var r=n(0);var a=Object(r.a)(o.default,i.b,i.c,!1,null,"30939dfb","f237998c",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style)}).call(a),e.default=a.exports},485:function(t,e,n){"use strict";n.r(e);var i=n(430),o=n(227);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);var r=n(0);var a=Object(r.a)(o.default,i.b,i.c,!1,null,"25e4d0b1","3b1ffb76",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(486).default,this.options.style):Object.assign(this.options.style,n(486).default)}).call(a),e.default=a.exports},486:function(t,e,n){"use strict";n.r(e);var i=n(229),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e.default=o.a},487:function(t,e,n){"use strict";n.r(e);var i=n(232),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e.default=o.a},5:function(t,e){t.exports={"uni-section":{position:"relative",marginTop:"10",flexDirection:"row",alignItems:"center",paddingTop:0,paddingRight:"10",paddingBottom:0,paddingLeft:"10",height:"50",backgroundColor:"#f8f8f8",borderBottomColor:"#e5e5e5",borderBottomStyle:"solid",borderBottomWidth:"0.5",fontWeight:"normal"},"uni-section__head":{flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:"10"},line:{height:"15",backgroundColor:"#c0c0c0",borderRadius:"5",width:"3"},circle:{width:"8",height:"8",borderTopRightRadius:"50",borderTopLeftRadius:"50",borderBottomLeftRadius:"50",borderBottomRightRadius:"50",backgroundColor:"#c0c0c0"},"uni-section__content":{flex:1,color:"#333333"},"uni-section__content-title":{fontSize:"28rpx",color:"#333333"},distraction:{flexDirection:"row",alignItems:"center"},"uni-section__content-sub":{fontSize:"24rpx",color:"#999999"}}},57:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return weex.requireModule(t)}},579:function(t,e,n){"use strict";n.r(e);n(7),n(11);var i=n(90);i.default.mpType="page",i.default.route="pages/extUI/swipe-action/swipe-action",i.default.el="#root",new Vue(i.default)},580:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t("bindingx"),i=t("dom"),o=(t("animation"),{data:function(){return{right:0,button:[],preventGesture:!1}},watch:{show:function(t){this.position&&"{}"!==JSON.stringify(this.position)&&(this.autoClose||this.isInAnimation||(t?this.open():this.close()))}},created:function(){void 0!==this.swipeaction.children&&this.swipeaction.children.push(this)},mounted:function(){var t=this;this.boxSelector=this.getEl(this.$refs["selector-box-hock"]),this.selector=this.getEl(this.$refs["selector-content-hock"]),this.buttonSelector=this.getEl(this.$refs["selector-button-hock"]),this.position={},this.x=0,setTimeout(function(){t.getSelectorQuery()},200)},beforeDestroy:function(){var t=this;this.timing&&n.unbind({token:this.timing.token,eventType:"timing"}),this.eventpan&&n.unbind({token:this.eventpan.token,eventType:"pan"}),this.swipeaction.children.forEach(function(e,n){e===t&&t.swipeaction.children.splice(n,1)})},methods:{onClick:function(t,e){this.$emit("click",{content:e,index:t})},touchstart:function(t){var e=this;if(!this.isInAnimation&&!this.stop){this.stop=!0,this.autoClose&&this.swipeaction.closeOther(this);for(var n=this.right,i="(x+".concat(this.x,")"),o="".concat(i,"> ").concat(-n," && ").concat(i," < 0?").concat(i,":(x+").concat(this.x," < 0? ").concat(-n,":0)"),s=[{element:this.selector,property:"transform.translateX",expression:o}],r=0,a=0;a<this.options.length;a++){var u=this.getEl(this.$refs["button-hock"][a]);if(0===this.button.length||!this.button[a]||!this.button[a].width)return;var c=n-r;r+=this.button[a].width;var l="(".concat(this.x,"+x)/").concat(n),p="(".concat(l,") * ").concat(c),f="".concat(p,"&& (x+").concat(this.x," > ").concat(-n,")?").concat(p,":").concat(-c);s.push({element:u,property:"transform.translateX",expression:f})}this.eventpan=this._bind(this.boxSelector,s,"pan",function(t){"end"===t.state&&(e.x=t.deltaX+e.x,e.x<-n&&(e.x=-n),e.x>0&&(e.x=0),e.stop=!1,e.bindTiming())})}},touchend:function(t){var e=this;this.$nextTick(function(){!e.isopen||e.isDrag||e.isInAnimation||e.close()})},bindTiming:function(){this.isopen?this.move(this.x,-this.right):this.move(this.x,-40)},move:function(t,e){t>=e?this.close():this.open()},open:function(){this.animation(!0)},close:function(){this.animation(!1)},animation:function(t){var e=this;this.isDrag=!0;var i=this.right;this.isInAnimation=!0;for(var o="t>".concat(200),s="easeOutExpo(t,".concat(this.x,",").concat(t?-i-this.x:-this.x,",").concat(200,")"),r=[{element:this.selector,property:"transform.translateX",expression:s}],a=0,u=0;u<this.options.length;u++){var c=this.getEl(this.$refs["button-hock"][u]);if(0===this.button.length||!this.button[u]||!this.button[u].width)return;var l=i-a;a+=this.button[u].width;var p="".concat(this.x,"/").concat(i),f="(".concat(p,") * ").concat(l),d="easeOutExpo(t,".concat(f,",").concat(t?-l+"-"+f:"0-"+f,",").concat(200,")");r.push({element:c,property:"transform.translateX",expression:d})}this.timing=n.bind({eventType:"timing",exitExpression:o,props:r},function(n){"end"!==n.state&&"exit"!==n.state||(e.x=t?-i:0,e.isInAnimation=!1,e.isopen=e.isopen||!1,e.isopen!==t&&e.$emit("change",t),e.isopen=t,e.isDrag=!1)})},_bind:function(t,e,i,o){return n.bind({anchor:t,eventType:i,props:e},function(t){"function"==typeof o&&o(t)})},getEl:function(t){return t.ref},getSelectorQuery:function(){var t=this;i.getComponentRect(this.$refs["selector-content-hock"],function(e){t.position.content||(t.position.content=e.size)});for(var e=0;e<this.options.length;e++)i.getComponentRect(this.$refs["button-hock"][e],function(e){t.button||(t.button=[]),t.options.length!==t.button.length&&(t.button.push(e.size),t.right+=e.size.width,t.autoClose||t.show&&t.open())})}}});e.default=o}).call(this,n(57).default)},6:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:["uni-section"]},[t.type?n("view",{staticClass:["uni-section__head"]},[n("view",{staticClass:["uni-section__head-tag"],class:t.type})]):t._e(),n("view",{staticClass:["uni-section__content"]},[n("u-text",{staticClass:["uni-section__content-title"],class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?n("u-text",{staticClass:["uni-section__content-sub"]},[t._v(t._s(t.subTitle))]):t._e()]),t._t("default")],2)},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){})},7:function(t,e,n){"use strict";function i(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}var c=n(8).version,l="__DC_STAT_UUID",p="__DC_UUID_VALUE";function f(){var t="";if("n"===_()){try{t=plus.runtime.getDCloudId()}catch(e){t=""}return t}try{t=uni.getStorageSync(l)}catch(e){t=p}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{uni.setStorageSync(l,t)}catch(t){uni.setStorageSync(l,p)}}return t}var d,h=function(){return parseInt((new Date).getTime()/1e3)},_=function(){return"n"},g=function(){var t="";return"wx"!==_()&&"qq"!==_()||uni.canIUse("getAccountInfoSync")&&(t=uni.getAccountInfoSync().miniProgram.appId||""),t},v=function(){return"n"===_()?plus.runtime.version:""},y=function(){var t="";return"n"===_()&&(t=plus.runtime.channel),t},m=0,b=0,w=function(){return m=h(),"n"===_()&&uni.setStorageSync("__page__residence__time",h()),m},S=0,x=0,k=function(){var t=(new Date).getTime();return S=t,x=0,t},D=function(){var t=(new Date).getTime();return x=t,t},T=function(t){var e=0;return 0!==S&&(e=x-S),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},C=function(t){var e=getCurrentPages(),n=e[e.length-1].$vm,i=t._query,o=i&&"{}"!==JSON.stringify(i)?"?"+JSON.stringify(i):"";return t._query="","bd"===_()?n.$mp&&n.$mp.page.is+o:n.$scope&&n.$scope.route+o||n.$mp&&n.$mp.page.route+o},O=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},R=n(9).default,j=n(2).default||n(2),I=uni.getSystemInfoSync(),$=function(){function t(){r(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:f(),ut:_(),mpn:g(),ak:j.appid,usv:c,v:v(),ch:y(),cn:"",pn:"",ct:"",t:h(),tt:"",p:"android"===I.platform?"a":"i",brand:I.brand||"",md:I.model,sv:I.system.replace(/(Android|iOS)\s/,""),mpsdk:I.SDKVersion||"",mpv:I.version||"",lang:I.language,pr:I.pixelRatio,ww:I.windowWidth,wh:I.windowHeight,sw:I.screenWidth,sh:I.screenHeight}}return u(t,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(D(),T("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,D();var n=T();k();var i=C(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,n=C(this),i=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===_()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=R&&R.pages[i]&&R.pages[i].titleNView&&R.pages[i].titleNView.titleText||R&&R.pages[i]&&R.pages[i].navigationBarTitleText||"",this.__licationShow)return k(),this.__licationShow=!1,void(this._lastPageRoute=n);if(D(),this._lastPageRoute=n,T("page").overtime){var o={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(o)}k()}},{key:"_pageHide",value:function(){if(!this.__licationHide){D();var t=T("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e,n,i=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+i||"",this.statData.t=h(),this.statData.sc=function(t){var e=_(),n="";return t||("wx"===e&&(n=uni.getLaunchOptionsSync().scene),n)}(t.scene),this.statData.fvts=(e=uni.getStorageSync("First__Visit__Time"),n=0,e?n=e:(n=h(),uni.setStorageSync("First__Visit__Time",n),uni.removeStorageSync("Last__Visit__Time")),n),this.statData.lvts=function(){var t=uni.getStorageSync("Last__Visit__Time"),e=0;return e=t||"",uni.setStorageSync("Last__Visit__Time",h()),e}(),this.statData.tvc=function(){var t=uni.getStorageSync("Total__Visit__Count"),e=1;return t&&(e=t,e++),uni.setStorageSync("Total__Visit__Count",e),e}(),"n"===_()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:h(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:h(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,o=void 0===i?"":i,s=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:s,ch:this.statData.ch,e_n:n,e_v:"object"==typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:h(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var t=this;uni.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var t=this;j.getLocation?uni.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,e){var n=this,i=h(),o=this._navigationBarTitle;t.ttn=o.page,t.ttpj=o.config,t.ttc=o.report;var s=this._reportingRequestData;if("n"===_()&&(s=uni.getStorageSync("__UNI__STAT__DATA")||{}),s[t.lt]||(s[t.lt]=[]),s[t.lt].push(t),"n"===_()&&uni.setStorageSync("__UNI__STAT__DATA",s),b=h(),"n"===_()&&(m=uni.getStorageSync("__page__residence__time")),!(b-m<10)||e){var r=this._reportingRequestData;"n"===_()&&(r=uni.getStorageSync("__UNI__STAT__DATA")),w();var a=[],u=[],l=[],p=function(t){r[t].forEach(function(e){var n=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)}(e);0===t?a.push(n):3===t?l.push(n):u.push(n)})};for(var f in r)p(f);a.push.apply(a,u.concat(l));var d={usv:c,t:i,requests:JSON.stringify(a)};this._reportingRequestData={},"n"===_()&&uni.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==_()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){n._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(t){var e=this;uni.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:t,success:function(){},fail:function(n){++e._retry<3&&setTimeout(function(){e._sendRequest(t)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=function(t){var e=Object.keys(t).sort(),n={},i="";for(var o in e)n[e[o]]=t[e[o]],i+=e[o]+"="+t[e[o]]+"&";return{sign:"",options:i.substr(0,i.length-1)}}(function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+n}},{key:"sendEvent",value:function(t,e){var n,i;(i=e,(n=t)?"string"!=typeof n?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):n.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof i&&"object"!=typeof i?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof i&&i.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===n&&"string"!=typeof i?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),t}(),q=function(t){function e(){var t;return r(this,e),(t=i(this,o(e).call(this))).instance=null,"function"==typeof uni.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,$),u(e,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}]),u(e,[{key:"addInterceptorInit",value:function(){var t=this;uni.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;uni.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var e=this;t?uni.addInterceptor("share",{success:function(){e._share()},fail:function(){e._share()}}):e._share()}},{key:"interceptRequestPayment",value:function(){var t=this;uni.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,w(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,O(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,O(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:h(),p:this.statData.p};this.request(n)}}]),e}().getInstance(),E=!1,N={onLaunch:function(t){q.report(t,this)},onReady:function(){q.ready(this)},onLoad:function(t){if(q.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return q.interceptShare(!1),e.call(this,t)}}},onShow:function(){E=!1,q.show(this)},onHide:function(){E=!0,q.hide(this)},onUnload:function(){E?E=!1:q.hide(this)},onError:function(t){q.error(t)}};((d=n(10)).default||d).mixin(N),uni.report=function(t,e){q.sendEvent(t,e)}},8:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-25720200116005",_inBundle:!1,_integrity:"sha512-RZFw3WAaS/CZTzzv9JPaWvmoNitojD/06vPdHSzlqZi8GbuE222lFuyochEjrGkG8rPPrWHAnwfoPBuQVtkfdg==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25720200116005.tgz",_shasum:"08bb17aba91c84a981f33d74153aa3dd07b578ad",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a129bde60de35f7ef497f43d5a45b4556231995c",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-25720200116005"}},9:function(t,e,n){"use strict";n.r(e),e.default={pages:{},globalStyle:{}}},90:function(t,e,n){"use strict";var i=n(402),o=n(230),s=n(0);var r=Object(s.a)(o.default,i.b,i.c,!1,null,null,"c6a0d3f6",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(487).default,this.options.style):Object.assign(this.options.style,n(487).default)}).call(r),e.default=r.exports}});
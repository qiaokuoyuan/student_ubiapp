!function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=528)}({0:function(t,e,n){"use strict";function i(t,e,n,i,a,o,r,s,u,c){var l,p="function"==typeof t?t.options:t;if(u&&(p.components=Object.assign(u,p.components||{})),c&&((c.beforeCreate||(c.beforeCreate=[])).unshift(function(){this[c.__module]=this}),(p.mixins||(p.mixins=[])).push(c)),e&&(p.render=e,p.staticRenderFns=n,p._compiled=!0),i&&(p.functional=!0),o&&(p._scopeId="data-v-"+o),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},p._ssrRegister=l):a&&(l=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(p.functional){p._injectStyles=l;var f=p.render;p.render=function(t,e){return l.call(e),f(t,e)}}else{var d=p.beforeCreate;p.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:p}}n.d(e,"a",function(){return i})},1:function(t,e){t.exports={}},10:function(t,e){t.exports=Vue},11:function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(12).default,Vue.prototype.__$appStyle__)},12:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e.default=a.a},136:function(t,e,n){"use strict";var i=n(137),a=n.n(i);e.default=a.a},137:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,a=(i=n(56))&&i.__esModule?i:{default:i};weex.requireModule("dom").addRule("fontFace",{fontFamily:"uniicons",src:"url('/static/uni.ttf')"});var o={components:{uLink:a.default},data:function(){return{list:[{id:"view",name:"视图容器",open:!1,pages:["view","scroll-view","swiper","movable-view","cover-view"]},{id:"content",name:"基础内容",open:!1,pages:["text","rich-text","progress"]},{id:"form",name:"表单组件",open:!1,pages:["button","checkbox","form","input","label","picker","picker-view","radio","slider","switch","textarea","editor"]},{id:"nav",name:"导航",open:!1,pages:["navigator"]},{id:"media",name:"媒体组件",open:!1,pages:["image","video","audio"]},{id:"map",name:"地图",open:!1,pages:["map"]},{id:"canvas",name:"画布",open:!1,pages:["canvas"]},{id:"web-view",name:"网页",open:!1,pages:[{name:"网络网页",url:"/pages/component/web-view/web-view"},{name:"本地网页",url:"/pages/component/web-view-local/web-view-local"}]}],navigateFlag:!1}},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/component/component"}},onNavigationBarButtonTap:function(t){uni.navigateTo({url:"/pages/about/about"})},methods:{triggerCollapse:function(t){if(this.list[t].pages)for(var e=0;e<this.list.length;++e)this.list[e].open=t===e&&!this.list[t].open;else this.goDetailPage(this.list[t].url)},goDetailPage:function(t){var e=this;this.navigateFlag||(this.navigateFlag=!0,"string"==typeof t?uni.navigateTo({url:"/pages/component/"+t+"/"+t}):uni.navigateTo({url:t.url}),setTimeout(function(){e.navigateFlag=!1},200))}}};e.default=o},138:function(t,e){t.exports={"uni-icon":{fontFamily:"uniicons",fontWeight:"normal"},"uni-container":{paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",backgroundColor:"#f8f8f8"},"uni-header-logo":{paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"10upx"},"uni-header-image":{width:"80",height:"80"},"uni-hello-text":{marginBottom:"20"},"hello-text":{color:"#7A7E83",fontSize:"14",lineHeight:"20"},"hello-link":{color:"#7A7E83",fontSize:"14",lineHeight:"20"},"uni-panel":{marginBottom:"12"},"uni-panel-h":{backgroundColor:"#ffffff",flexDirection:"row",alignItems:"center",paddingTop:"12",paddingRight:"12",paddingBottom:"12",paddingLeft:"12"},"uni-panel-h-on":{backgroundColor:"#f0f0f0"},"uni-panel-text":{flex:1,color:"#000000",fontSize:"14",fontWeight:"normal"},"uni-panel-icon":{marginLeft:"15",color:"#999999",fontSize:"14",fontWeight:"normal",transform:"rotate(0deg)",transitionDuration:0,transitionProperty:"transform"},"@TRANSITION":{"uni-panel-icon":{duration:0,property:"transform"}},"uni-panel-icon-on":{transform:"rotate(180deg)"},"uni-navigate-item":{flexDirection:"row",alignItems:"center",backgroundColor:"#FFFFFF",borderTopStyle:"solid",borderTopColor:"#f0f0f0",borderTopWidth:"1",paddingTop:"12",paddingRight:"12",paddingBottom:"12",paddingLeft:"12","backgroundColor:active":"#f8f8f8"},"uni-navigate-text":{flex:1,color:"#000000",fontSize:"14",fontWeight:"normal"},"uni-navigate-icon":{marginLeft:"15",color:"#999999",fontSize:"14",fontWeight:"normal"}}},2:function(t,e,n){"use strict";n.r(e),e.default={appid:"__UNI__D064FA9"}},36:function(t,e,n){"use strict";n.r(e);var i=n(37),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e.default=a.a},37:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-link",props:{href:{type:String,default:""},text:{type:String,default:""},inWhiteList:{type:Boolean,default:!1}},methods:{openURL:function(){plus.runtime.openURL(this.href)}}};e.default=i},38:function(t,e,n){"use strict";var i=function(){var t=this.$createElement;return(this._self._c||t)("u-text",{staticStyle:{textDecoration:"underline"},attrs:{href:this.href,inWhiteList:this.inWhiteList},on:{click:this.openURL}},[this._v(this._s(this.text))])},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){})},401:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,enableBackToTop:!0,bubble:"true"}},[n("view",{staticClass:["uni-container"]},[n("view",{staticClass:["uni-header-logo"]},[n("u-image",{staticClass:["uni-header-image"],attrs:{src:"/static/componentIndex.png"}})],1),n("view",{staticClass:["uni-hello-text"]},[n("u-text",{staticClass:["hello-text"]},[t._v("uni-app内置组件，展示样式仅供参考，文档详见：")]),n("u-link",{staticClass:["hello-link"],attrs:{href:"https://uniapp.dcloud.io/component/",text:"https://uniapp.dcloud.io/component/",inWhiteList:!0}})],1),t._l(t.list,function(e,i){return n("view",{key:e.id,staticClass:["uni-panel"]},[n("view",{staticClass:["uni-panel-h"],class:e.open?"uni-panel-h-on":"",on:{click:function(e){t.triggerCollapse(i)}}},[n("u-text",{staticClass:["uni-panel-text"]},[t._v(t._s(e.name))]),n("u-text",{staticClass:["uni-panel-icon","uni-icon"],class:e.open?"uni-panel-icon-on":""},[t._v("")])]),e.open?n("view",{staticClass:["uni-panel-c"]},t._l(e.pages,function(e,i){return n("view",{key:i,staticClass:["uni-navigate-item"],on:{click:function(n){t.goDetailPage(e)}}},[n("u-text",{staticClass:["uni-navigate-text"]},[t._v(t._s(e.name?e.name:e))]),n("u-text",{staticClass:["uni-navigate-icon","uni-icon"]},[t._v("")])])}),0):t._e()])})],2)])},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){})},448:function(t,e,n){"use strict";n.r(e);var i=n(138),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e.default=a.a},528:function(t,e,n){"use strict";n.r(e);n(7),n(11);var i=n(68);i.default.mpType="page",i.default.route="pages/tabBar/component/component",i.default.el="#root",new Vue(i.default)},56:function(t,e,n){"use strict";n.r(e);var i=n(38),a=n(36);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);var r=n(0);var s=Object(r.a)(a.default,i.b,i.c,!1,null,null,"09abeaf9",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style)}).call(s),e.default=s.exports},68:function(t,e,n){"use strict";var i=n(401),a=n(136),o=n(0);var r=Object(o.a)(a.default,i.b,i.c,!1,null,null,"12279766",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(448).default,this.options.style):Object.assign(this.options.style,n(448).default)}).call(r),e.default=r.exports},7:function(t,e,n){"use strict";function i(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}var c=n(8).version,l="__DC_STAT_UUID",p="__DC_UUID_VALUE";function f(){var t="";if("n"===g()){try{t=plus.runtime.getDCloudId()}catch(e){t=""}return t}try{t=uni.getStorageSync(l)}catch(e){t=p}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{uni.setStorageSync(l,t)}catch(t){uni.setStorageSync(l,p)}}return t}var d,h=function(){return parseInt((new Date).getTime()/1e3)},g=function(){return"n"},_=function(){var t="";return"wx"!==g()&&"qq"!==g()||uni.canIUse("getAccountInfoSync")&&(t=uni.getAccountInfoSync().miniProgram.appId||""),t},v=function(){return"n"===g()?plus.runtime.version:""},y=function(){var t="";return"n"===g()&&(t=plus.runtime.channel),t},m=0,S=0,b=function(){return m=h(),"n"===g()&&uni.setStorageSync("__page__residence__time",h()),m},D=0,w=0,k=function(){var t=(new Date).getTime();return D=t,w=0,t},T=function(){var t=(new Date).getTime();return w=t,t},R=function(t){var e=0;return 0!==D&&(e=w-D),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},x=function(t){var e=getCurrentPages(),n=e[e.length-1].$vm,i=t._query,a=i&&"{}"!==JSON.stringify(i)?"?"+JSON.stringify(i):"";return t._query="","bd"===g()?n.$mp&&n.$mp.page.is+a:n.$scope&&n.$scope.route+a||n.$mp&&n.$mp.page.route+a},q=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},C=n(9).default,O=n(2).default||n(2),I=uni.getSystemInfoSync(),P=function(){function t(){r(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:f(),ut:g(),mpn:_(),ak:O.appid,usv:c,v:v(),ch:y(),cn:"",pn:"",ct:"",t:h(),tt:"",p:"android"===I.platform?"a":"i",brand:I.brand||"",md:I.model,sv:I.system.replace(/(Android|iOS)\s/,""),mpsdk:I.SDKVersion||"",mpv:I.version||"",lang:I.language,pr:I.pixelRatio,ww:I.windowWidth,wh:I.windowHeight,sw:I.screenWidth,sh:I.screenHeight}}return u(t,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(T(),R("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,T();var n=R();k();var i=x(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,n=x(this),i=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===g()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=C&&C.pages[i]&&C.pages[i].titleNView&&C.pages[i].titleNView.titleText||C&&C.pages[i]&&C.pages[i].navigationBarTitleText||"",this.__licationShow)return k(),this.__licationShow=!1,void(this._lastPageRoute=n);if(T(),this._lastPageRoute=n,R("page").overtime){var a={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(a)}k()}},{key:"_pageHide",value:function(){if(!this.__licationHide){T();var t=R("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e,n,i=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+i||"",this.statData.t=h(),this.statData.sc=function(t){var e=g(),n="";return t||("wx"===e&&(n=uni.getLaunchOptionsSync().scene),n)}(t.scene),this.statData.fvts=(e=uni.getStorageSync("First__Visit__Time"),n=0,e?n=e:(n=h(),uni.setStorageSync("First__Visit__Time",n),uni.removeStorageSync("Last__Visit__Time")),n),this.statData.lvts=function(){var t=uni.getStorageSync("Last__Visit__Time"),e=0;return e=t||"",uni.setStorageSync("Last__Visit__Time",h()),e}(),this.statData.tvc=function(){var t=uni.getStorageSync("Total__Visit__Count"),e=1;return t&&(e=t,e++),uni.setStorageSync("Total__Visit__Count",e),e}(),"n"===g()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:h(),p:this.statData.p};this.request(a)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:h(),p:this.statData.p};this.request(a,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,a=void 0===i?"":i,o=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:o,ch:this.statData.ch,e_n:n,e_v:"object"==typeof a?JSON.stringify(a):a.toString(),usv:this.statData.usv,t:h(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var t=this;uni.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var t=this;O.getLocation?uni.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,e){var n=this,i=h(),a=this._navigationBarTitle;t.ttn=a.page,t.ttpj=a.config,t.ttc=a.report;var o=this._reportingRequestData;if("n"===g()&&(o=uni.getStorageSync("__UNI__STAT__DATA")||{}),o[t.lt]||(o[t.lt]=[]),o[t.lt].push(t),"n"===g()&&uni.setStorageSync("__UNI__STAT__DATA",o),S=h(),"n"===g()&&(m=uni.getStorageSync("__page__residence__time")),!(S-m<10)||e){var r=this._reportingRequestData;"n"===g()&&(r=uni.getStorageSync("__UNI__STAT__DATA")),b();var s=[],u=[],l=[],p=function(t){r[t].forEach(function(e){var n=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)}(e);0===t?s.push(n):3===t?l.push(n):u.push(n)})};for(var f in r)p(f);s.push.apply(s,u.concat(l));var d={usv:c,t:i,requests:JSON.stringify(s)};this._reportingRequestData={},"n"===g()&&uni.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==g()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){n._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(t){var e=this;uni.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:t,success:function(){},fail:function(n){++e._retry<3&&setTimeout(function(){e._sendRequest(t)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=function(t){var e=Object.keys(t).sort(),n={},i="";for(var a in e)n[e[a]]=t[e[a]],i+=e[a]+"="+t[e[a]]+"&";return{sign:"",options:i.substr(0,i.length-1)}}(function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+n}},{key:"sendEvent",value:function(t,e){var n,i;(i=e,(n=t)?"string"!=typeof n?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):n.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof i&&"object"!=typeof i?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof i&&i.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===n&&"string"!=typeof i?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),t}(),j=function(t){function e(){var t;return r(this,e),(t=i(this,a(e).call(this))).instance=null,"function"==typeof uni.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(e,P),u(e,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}]),u(e,[{key:"addInterceptorInit",value:function(){var t=this;uni.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;uni.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var e=this;t?uni.addInterceptor("share",{success:function(){e._share()},fail:function(){e._share()}}):e._share()}},{key:"interceptRequestPayment",value:function(){var t=this;uni.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,b(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,q(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,q(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:h(),p:this.statData.p};this.request(n)}}]),e}().getInstance(),$=!1,N={onLaunch:function(t){j.report(t,this)},onReady:function(){j.ready(this)},onLoad:function(t){if(j.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return j.interceptShare(!1),e.call(this,t)}}},onShow:function(){$=!1,j.show(this)},onHide:function(){$=!0,j.hide(this)},onUnload:function(){$?$=!1:j.hide(this)},onError:function(t){j.error(t)}};((d=n(10)).default||d).mixin(N),uni.report=function(t,e){j.sendEvent(t,e)}},8:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-25120200103005",_inBundle:!1,_integrity:"sha512-nYoIrRV2e5o/vzr6foSdWi3Rl2p0GuO+LPY3JctyY6uTKgPnuH99d7aL/QQdJ1SacQjBWO+QGK1qankN7oyrWw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25120200103005.tgz",_shasum:"a77a63481f36474f3e86686868051219d1bb12df",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"6be187a3dfe15f95dd6146d9fec08e1f81100987",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-25120200103005"}},9:function(t,e,n){"use strict";n.r(e),e.default={pages:{},globalStyle:{}}}});
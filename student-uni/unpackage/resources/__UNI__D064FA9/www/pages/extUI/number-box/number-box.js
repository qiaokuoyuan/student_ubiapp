!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=589)}({0:function(t,e,n){"use strict";function i(t,e,n,i,o,a,r,s,u,l){var c,p="function"==typeof t?t.options:t;if(u&&(p.components=Object.assign(u,p.components||{})),l&&((l.beforeCreate||(l.beforeCreate=[])).unshift(function(){this[l.__module]=this}),(p.mixins||(p.mixins=[])).push(l)),e&&(p.render=e,p.staticRenderFns=n,p._compiled=!0),i&&(p.functional=!0),a&&(p._scopeId="data-v-"+a),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},p._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(p.functional){p._injectStyles=c;var d=p.render;p.render=function(t,e){return c.call(e),d(t,e)}}else{var f=p.beforeCreate;p.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:p}}n.d(e,"a",function(){return i})},1:function(t,e){t.exports={}},10:function(t,e){t.exports=Vue},100:function(t,e,n){"use strict";var i=n(370),o=n(305),a=n(0);var r=Object(a.a)(o.default,i.b,i.c,!1,null,null,"d77f205e",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(504).default,this.options.style):Object.assign(this.options.style,n(504).default)}).call(r),e.default=r.exports},11:function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(12).default,Vue.prototype.__$appStyle__)},12:function(t,e,n){"use strict";n.r(e);var i=n(1),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e.default=o.a},13:function(t,e,n){"use strict";n.r(e);var i=n(5),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e.default=o.a},18:function(t,e,n){"use strict";n.r(e);var i=n(6),o=n(3);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);var r=n(0);var s=Object(r.a)(o.default,i.b,i.c,!1,null,"d98d240c","1ad3ee1e",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(13).default,this.options.style):Object.assign(this.options.style,n(13).default)}).call(s),e.default=s.exports},2:function(t,e,n){"use strict";n.r(e),e.default={appid:"__UNI__D064FA9"}},3:function(t,e,n){"use strict";n.r(e);var i=n(4),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e.default=o.a},305:function(t,e,n){"use strict";var i=n(306),o=n.n(i);e.default=o.a},306:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n(590)),o=a(n(18));function a(t){return t&&t.__esModule?t:{default:t}}var r={components:{uniNumberBox:i.default,uniSection:o.default},data:function(){return{numberValue:0}},methods:{change:function(t){this.numberValue=t}}};e.default=r},307:function(t,e,n){"use strict";n.r(e);var i=n(308),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e.default=o.a},308:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniNumberBox",props:{value:{type:[Number,String],default:1},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},disabled:{type:Boolean,default:!1}},data:function(){return{inputValue:0}},watch:{value:function(t){this.inputValue=+t},inputValue:function(t,e){+t!=+e&&this.$emit("change",t)}},created:function(){this.inputValue=+this.value},methods:{_calcValue:function(t){if(!this.disabled){var e=this._getDecimalScale(),n=this.inputValue*e,i=this.step*e;if("minus"===t){if((n-=i)<this.min*e)return;n>this.max*e&&(n=this.max*e)}else if("plus"===t){if((n+=i)>this.max*e)return;n<this.min*e&&(n=this.min*e)}this.inputValue=String(n/e)}},_getDecimalScale:function(){var t=1;return~~this.step!==this.step&&(t=Math.pow(10,(this.step+"").split(".")[1].length)),t},_onBlur:function(t){var e=t.detail.value;e&&((e=+e)>this.max?e=this.max:e<this.min&&(e=this.min),this.inputValue=e)}}};e.default=i},309:function(t,e){t.exports={"uni-numbox":{flexDirection:"row",height:"35",lineHeight:"35",width:"120"},"uni-numbox__value":{backgroundColor:"#ffffff",width:"40",height:"35",textAlign:"center",fontSize:"32rpx",borderWidth:"1rpx",borderStyle:"solid",borderColor:"#e5e5e5",borderLeftWidth:0,borderRightWidth:0},"uni-numbox__minus":{flexDirection:"row",alignItems:"center",justifyContent:"center",width:"35",height:"35",fontSize:"20",color:"#333333",backgroundColor:"#f8f8f8",borderWidth:"1rpx",borderStyle:"solid",borderColor:"#e5e5e5",borderTopLeftRadius:"6rpx",borderBottomLeftRadius:"6rpx",borderRightWidth:0},"uni-numbox__plus":{flexDirection:"row",alignItems:"center",justifyContent:"center",width:"35",height:"35",borderWidth:"1rpx",borderStyle:"solid",borderColor:"#e5e5e5",borderTopRightRadius:"6rpx",borderBottomRightRadius:"6rpx",backgroundColor:"#f8f8f8",borderLeftWidth:0},"uni-numbox--text":{fontSize:"40rpx",color:"#333333"},"uni-numbox--disabled":{color:"#c0c0c0"}}},310:function(t,e){t.exports={example:{paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15"},"example-info":{paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",color:"#3b4144",backgroundColor:"#ffffff",fontSize:"14",lineHeight:"20"},"example-info-text":{fontSize:"14",lineHeight:"20",color:"#3b4144"},"example-body":{flexDirection:"column",paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",backgroundColor:"#ffffff"},"word-btn-white":{fontSize:"18",color:"#FFFFFF"},"word-btn":{flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:"6",height:"48",marginTop:"15",marginRight:"15",marginBottom:"15",marginLeft:"15",backgroundColor:"#007AFF"},"word-btn--hover":{backgroundColor:"#4ca2ff"}}},370:function(t,e,n){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,enableBackToTop:!0,bubble:"true"}},[e("view",{staticClass:["page"]},[e("u-text",{staticClass:["example-info"]},[this._v("数字输入框组件多用于购物车加减商品等场景")]),e("uni-section",{attrs:{title:"基本用法",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-number-box")],1),e("uni-section",{attrs:{title:"设置最小值和最大值",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-number-box",{attrs:{min:2,max:9,value:5}})],1),e("uni-section",{attrs:{title:"设置步长（步长0.1)",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-number-box",{attrs:{step:.1}})],1),e("uni-section",{attrs:{title:"禁用状态",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-number-box",{attrs:{disabled:!0}})],1),e("uni-section",{attrs:{title:"获取输入的值 : "+this.numberValue,type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-number-box",{attrs:{value:this.numberValue},on:{change:this.change}})],1)],1)])},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){})},4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},411:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:["uni-numbox"]},[n("view",{staticClass:["uni-numbox__minus"],on:{click:function(e){t._calcValue("minus")}}},[n("u-text",{staticClass:["uni-numbox--text"],class:{"uni-numbox--disabled":t.inputValue<=t.min||t.disabled}},[t._v("-")])]),n("u-input",{staticClass:["uni-numbox__value"],attrs:{disabled:t.disabled,type:"number",value:t.inputValue},on:{blur:t._onBlur,input:function(e){t.inputValue=e.detail.value}}}),n("view",{staticClass:["uni-numbox__plus"],on:{click:function(e){t._calcValue("plus")}}},[n("u-text",{staticClass:["uni-numbox--text"],class:{"uni-numbox--disabled":t.inputValue>=t.max||t.disabled}},[t._v("+")])])],1)},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){})},5:function(t,e){t.exports={"uni-section":{position:"relative",marginTop:"10",flexDirection:"row",alignItems:"center",paddingTop:0,paddingRight:"10",paddingBottom:0,paddingLeft:"10",height:"50",backgroundColor:"#f8f8f8",borderBottomColor:"#e5e5e5",borderBottomStyle:"solid",borderBottomWidth:"0.5",fontWeight:"normal"},"uni-section__head":{flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:"10"},line:{height:"15",backgroundColor:"#c0c0c0",borderRadius:"5",width:"3"},circle:{width:"8",height:"8",borderTopRightRadius:"50",borderTopLeftRadius:"50",borderBottomLeftRadius:"50",borderBottomRightRadius:"50",backgroundColor:"#c0c0c0"},"uni-section__content":{flex:1,color:"#333333"},"uni-section__content-title":{fontSize:"28rpx",color:"#333333"},distraction:{flexDirection:"row",alignItems:"center"},"uni-section__content-sub":{fontSize:"24rpx",color:"#999999"}}},503:function(t,e,n){"use strict";n.r(e);var i=n(309),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e.default=o.a},504:function(t,e,n){"use strict";n.r(e);var i=n(310),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e.default=o.a},589:function(t,e,n){"use strict";n.r(e);n(7),n(11);var i=n(100);i.default.mpType="page",i.default.route="pages/extUI/number-box/number-box",i.default.el="#root",new Vue(i.default)},590:function(t,e,n){"use strict";n.r(e);var i=n(411),o=n(307);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);var r=n(0);var s=Object(r.a)(o.default,i.b,i.c,!1,null,"c34cc8ec","757e3974",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(503).default,this.options.style):Object.assign(this.options.style,n(503).default)}).call(s),e.default=s.exports},6:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:["uni-section"]},[t.type?n("view",{staticClass:["uni-section__head"]},[n("view",{staticClass:["uni-section__head-tag"],class:t.type})]):t._e(),n("view",{staticClass:["uni-section__content"]},[n("u-text",{staticClass:["uni-section__content-title"],class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?n("u-text",{staticClass:["uni-section__content-sub"]},[t._v(t._s(t.subTitle))]):t._e()]),t._t("default")],2)},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){})},7:function(t,e,n){"use strict";function i(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}var l=n(8).version,c="__DC_STAT_UUID",p="__DC_UUID_VALUE";function d(){var t="";if("n"===_()){try{t=plus.runtime.getDCloudId()}catch(e){t=""}return t}try{t=uni.getStorageSync(c)}catch(e){t=p}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{uni.setStorageSync(c,t)}catch(t){uni.setStorageSync(c,p)}}return t}var f,h=function(){return parseInt((new Date).getTime()/1e3)},_=function(){return"n"},g=function(){var t="";return"wx"!==_()&&"qq"!==_()||uni.canIUse("getAccountInfoSync")&&(t=uni.getAccountInfoSync().miniProgram.appId||""),t},v=function(){return"n"===_()?plus.runtime.version:""},y=function(){var t="";return"n"===_()&&(t=plus.runtime.channel),t},m=0,b=0,S=function(){return m=h(),"n"===_()&&uni.setStorageSync("__page__residence__time",h()),m},x=0,w=0,D=function(){var t=(new Date).getTime();return x=t,w=0,t},T=function(){var t=(new Date).getTime();return w=t,t},k=function(t){var e=0;return 0!==x&&(e=w-x),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},R=function(t){var e=getCurrentPages(),n=e[e.length-1].$vm,i=t._query,o=i&&"{}"!==JSON.stringify(i)?"?"+JSON.stringify(i):"";return t._query="","bd"===_()?n.$mp&&n.$mp.page.is+o:n.$scope&&n.$scope.route+o||n.$mp&&n.$mp.page.route+o},C=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},V=n(9).default,q=n(2).default||n(2),O=uni.getSystemInfoSync(),j=function(){function t(){r(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:d(),ut:_(),mpn:g(),ak:q.appid,usv:l,v:v(),ch:y(),cn:"",pn:"",ct:"",t:h(),tt:"",p:"android"===O.platform?"a":"i",brand:O.brand||"",md:O.model,sv:O.system.replace(/(Android|iOS)\s/,""),mpsdk:O.SDKVersion||"",mpv:O.version||"",lang:O.language,pr:O.pixelRatio,ww:O.windowWidth,wh:O.windowHeight,sw:O.screenWidth,sh:O.screenHeight}}return u(t,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(T(),k("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,T();var n=k();D();var i=R(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,n=R(this),i=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===_()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=V&&V.pages[i]&&V.pages[i].titleNView&&V.pages[i].titleNView.titleText||V&&V.pages[i]&&V.pages[i].navigationBarTitleText||"",this.__licationShow)return D(),this.__licationShow=!1,void(this._lastPageRoute=n);if(T(),this._lastPageRoute=n,k("page").overtime){var o={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(o)}D()}},{key:"_pageHide",value:function(){if(!this.__licationHide){T();var t=k("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e,n,i=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+i||"",this.statData.t=h(),this.statData.sc=function(t){var e=_(),n="";return t||("wx"===e&&(n=uni.getLaunchOptionsSync().scene),n)}(t.scene),this.statData.fvts=(e=uni.getStorageSync("First__Visit__Time"),n=0,e?n=e:(n=h(),uni.setStorageSync("First__Visit__Time",n),uni.removeStorageSync("Last__Visit__Time")),n),this.statData.lvts=function(){var t=uni.getStorageSync("Last__Visit__Time"),e=0;return e=t||"",uni.setStorageSync("Last__Visit__Time",h()),e}(),this.statData.tvc=function(){var t=uni.getStorageSync("Total__Visit__Count"),e=1;return t&&(e=t,e++),uni.setStorageSync("Total__Visit__Count",e),e}(),"n"===_()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:h(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:h(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,o=void 0===i?"":i,a=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:a,ch:this.statData.ch,e_n:n,e_v:"object"==typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:h(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var t=this;uni.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var t=this;q.getLocation?uni.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,e){var n=this,i=h(),o=this._navigationBarTitle;t.ttn=o.page,t.ttpj=o.config,t.ttc=o.report;var a=this._reportingRequestData;if("n"===_()&&(a=uni.getStorageSync("__UNI__STAT__DATA")||{}),a[t.lt]||(a[t.lt]=[]),a[t.lt].push(t),"n"===_()&&uni.setStorageSync("__UNI__STAT__DATA",a),b=h(),"n"===_()&&(m=uni.getStorageSync("__page__residence__time")),!(b-m<10)||e){var r=this._reportingRequestData;"n"===_()&&(r=uni.getStorageSync("__UNI__STAT__DATA")),S();var s=[],u=[],c=[],p=function(t){r[t].forEach(function(e){var n=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)}(e);0===t?s.push(n):3===t?c.push(n):u.push(n)})};for(var d in r)p(d);s.push.apply(s,u.concat(c));var f={usv:l,t:i,requests:JSON.stringify(s)};this._reportingRequestData={},"n"===_()&&uni.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==_()||"a"!==this.statData.p?this._sendRequest(f):setTimeout(function(){n._sendRequest(f)},200):this.imageRequest(f)}}},{key:"_sendRequest",value:function(t){var e=this;uni.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:t,success:function(){},fail:function(n){++e._retry<3&&setTimeout(function(){e._sendRequest(t)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=function(t){var e=Object.keys(t).sort(),n={},i="";for(var o in e)n[e[o]]=t[e[o]],i+=e[o]+"="+t[e[o]]+"&";return{sign:"",options:i.substr(0,i.length-1)}}(function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+n}},{key:"sendEvent",value:function(t,e){var n,i;(i=e,(n=t)?"string"!=typeof n?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):n.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof i&&"object"!=typeof i?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof i&&i.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===n&&"string"!=typeof i?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),t}(),$=function(t){function e(){var t;return r(this,e),(t=i(this,o(e).call(this))).instance=null,"function"==typeof uni.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(e,j),u(e,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}]),u(e,[{key:"addInterceptorInit",value:function(){var t=this;uni.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;uni.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var e=this;t?uni.addInterceptor("share",{success:function(){e._share()},fail:function(){e._share()}}):e._share()}},{key:"interceptRequestPayment",value:function(){var t=this;uni.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,S(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,C(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,C(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:h(),p:this.statData.p};this.request(n)}}]),e}().getInstance(),I=!1,N={onLaunch:function(t){$.report(t,this)},onReady:function(){$.ready(this)},onLoad:function(t){if($.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return $.interceptShare(!1),e.call(this,t)}}},onShow:function(){I=!1,$.show(this)},onHide:function(){I=!0,$.hide(this)},onUnload:function(){I?I=!1:$.hide(this)},onError:function(t){$.error(t)}};((f=n(10)).default||f).mixin(N),uni.report=function(t,e){$.sendEvent(t,e)}},8:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-25120200103005",_inBundle:!1,_integrity:"sha512-nYoIrRV2e5o/vzr6foSdWi3Rl2p0GuO+LPY3JctyY6uTKgPnuH99d7aL/QQdJ1SacQjBWO+QGK1qankN7oyrWw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25120200103005.tgz",_shasum:"a77a63481f36474f3e86686868051219d1bb12df",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"6be187a3dfe15f95dd6146d9fec08e1f81100987",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-25120200103005"}},9:function(t,e,n){"use strict";n.r(e),e.default={pages:{},globalStyle:{}}}});
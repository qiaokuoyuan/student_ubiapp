!function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=602)}({0:function(t,e,i){"use strict";function n(t,e,i,n,a,s,o,r,u,c){var l,p="function"==typeof t?t.options:t;if(u&&(p.components=Object.assign(u,p.components||{})),c&&((c.beforeCreate||(c.beforeCreate=[])).unshift(function(){this[c.__module]=this}),(p.mixins||(p.mixins=[])).push(c)),e&&(p.render=e,p.staticRenderFns=i,p._compiled=!0),n&&(p.functional=!0),s&&(p._scopeId="data-v-"+s),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},p._ssrRegister=l):a&&(l=r?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(p.functional){p._injectStyles=l;var d=p.render;p.render=function(t,e){return l.call(e),d(t,e)}}else{var h=p.beforeCreate;p.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:p}}i.d(e,"a",function(){return n})},1:function(t,e){t.exports={}},10:function(t,e){t.exports=Vue},11:function(t,e,i){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(i(12).default,Vue.prototype.__$appStyle__)},111:function(t,e,i){"use strict";var n=i(401),a=i(347),s=i(0);var o=Object(s.a)(a.default,n.b,n.c,!1,null,null,"08c60f4c",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(543).default,this.options.style):Object.assign(this.options.style,i(543).default)}).call(o),e.default=o.exports},12:function(t,e,i){"use strict";i.r(e);var n=i(1),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e.default=a.a},2:function(t,e,i){"use strict";i.r(e),e.default={appid:"__UNI__D064FA9"}},26:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var n=e.shift();if("string"==typeof __channelId__&&__channelId__)return e.push(e.pop().replace("at ","uni-app:///")),console[n].apply(console,e);var a=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(e){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var i=function(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}(t).toUpperCase();t="NUMBER"===i||"BOOLEAN"===i?"---BEGIN:"+i+"---"+t+"---END:"+i+"---":String(t)}return t}),s="";if(a.length>1){var o=a.pop();s=a.join("---COMMA---"),0===o.indexOf(" at ")?s+=o:s+="---COMMA---"+o}else s=a[0];console[n](s)}},347:function(t,e,i){"use strict";var n=i(348),a=i.n(n);e.default=a.a},348:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=[{src:"https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4"},{src:"https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-02.mp4"},{src:"https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-03.mp4"},{src:"https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4"},{src:"https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-02.mp4"},{src:"https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-03.mp4"}],n={data:function(){return{circular:!0,videoList:[{id:"video0",src:"",img:""},{id:"video1",src:"",img:""},{id:"video2",src:"",img:""}],videoDataList:[]}},onLoad:function(t){},onReady:function(){this.init(),this.getData()},methods:{init:function(){this._videoIndex=0,this._videoContextList=[];for(var t=0;t<this.videoList.length;t++)this._videoContextList.push(uni.createVideoContext("video"+t,this));this._videoDataIndex=0},getData:function(t){var e=this;this.videoDataList=i,setTimeout(function(){e.updateVideo(!0)},200)},onSwiperChange:function(t){var e=this,i=t.detail.current;if(i!==this._videoIndex){var n=!1;0===i&&this._videoIndex===this.videoList.length-1?n=!0:i===this.videoList.length-1&&0===this._videoIndex?n=!1:i>this._videoIndex&&(n=!0),n?this._videoDataIndex++:this._videoDataIndex--,this._videoDataIndex<0?this._videoDataIndex=this.videoDataList.length-1:this._videoDataIndex>=this.videoDataList.length&&(this._videoDataIndex=0),this.circular=0!=this._videoDataIndex,this._videoIndex>=0&&(this._videoContextList[this._videoIndex].pause(),this._videoContextList[this._videoIndex].seek(0)),this._videoIndex=i,setTimeout(function(){e.updateVideo(n)},200)}},getNextIndex:function(t){var e=this._videoIndex+(t?1:-1);return e<0?this.videoList.length-1:e>=this.videoList.length?0:e},getNextDataIndex:function(t){var e=this._videoDataIndex+(t?1:-1);return e<0?this.videoDataList.length-1:e>=this.videoDataList.length?0:e},updateVideo:function(e){var i=this;this.$set(this.videoList[this._videoIndex],"src",this.videoDataList[this._videoDataIndex].src),this.$set(this.videoList[this.getNextIndex(e)],"src",this.videoDataList[this.getNextDataIndex(e)].src),setTimeout(function(){i._videoContextList[i._videoIndex].play()},200),t("log","v:"+this._videoIndex+" d:"+this._videoDataIndex+"; next v:"+this.getNextIndex(e)+" next d:"+this.getNextDataIndex(e)," at pages\\template\\swiper-vertical\\swiper-vertical.nvue:139")}}};e.default=n}).call(this,i(26).default)},349:function(t,e){t.exports={page:{flex:1,width:"750rpx"},swiper:{flex:1,backgroundColor:"#007AFF"},"swiper-item":{flex:1},video:{flex:1}}},401:function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,enableBackToTop:!0,bubble:"true"}},[e("view",{staticClass:["page"]},[e("swiper",{staticClass:["swiper"],attrs:{circular:this.circular,vertical:!0},on:{change:this.onSwiperChange}},this._l(this.videoList,function(t){return e("swiper-item",{key:t.id},[e("u-video",{ref:t.id,refInFor:!0,staticClass:["video"],attrs:{id:t.id,src:t.src,controls:!1,loop:!0,showCenterPlayBtn:!1}})],1)}),1)],1)])},a=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){})},543:function(t,e,i){"use strict";i.r(e);var n=i(349),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e.default=a.a},602:function(t,e,i){"use strict";i.r(e);i(7),i(11);var n=i(111);n.default.mpType="page",n.default.route="pages/template/swiper-vertical/swiper-vertical",n.default.el="#root",new Vue(n.default)},7:function(t,e,i){"use strict";function n(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}var c=i(8).version,l="__DC_STAT_UUID",p="__DC_UUID_VALUE";function d(){var t="";if("n"===_()){try{t=plus.runtime.getDCloudId()}catch(e){t=""}return t}try{t=uni.getStorageSync(l)}catch(e){t=p}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{uni.setStorageSync(l,t)}catch(t){uni.setStorageSync(l,p)}}return t}var h,f=function(){return parseInt((new Date).getTime()/1e3)},_=function(){return"n"},v=function(){var t="";return"wx"!==_()&&"qq"!==_()||uni.canIUse("getAccountInfoSync")&&(t=uni.getAccountInfoSync().miniProgram.appId||""),t},g=function(){return"n"===_()?plus.runtime.version:""},y=function(){var t="";return"n"===_()&&(t=plus.runtime.channel),t},m=0,D=0,S=function(){return m=f(),"n"===_()&&uni.setStorageSync("__page__residence__time",f()),m},b=0,w=0,x=function(){var t=(new Date).getTime();return b=t,w=0,t},I=function(){var t=(new Date).getTime();return w=t,t},T=function(t){var e=0;return 0!==b&&(e=w-b),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},k=function(t){var e=getCurrentPages(),i=e[e.length-1].$vm,n=t._query,a=n&&"{}"!==JSON.stringify(n)?"?"+JSON.stringify(n):"";return t._query="","bd"===_()?i.$mp&&i.$mp.page.is+a:i.$scope&&i.$scope.route+a||i.$mp&&i.$mp.page.route+a},q=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},N=i(9).default,R=i(2).default||i(2),O=uni.getSystemInfoSync(),j=function(){function t(){o(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:d(),ut:_(),mpn:v(),ak:R.appid,usv:c,v:g(),ch:y(),cn:"",pn:"",ct:"",t:f(),tt:"",p:"android"===O.platform?"a":"i",brand:O.brand||"",md:O.model,sv:O.system.replace(/(Android|iOS)\s/,""),mpsdk:O.SDKVersion||"",mpv:O.version||"",lang:O.language,pr:O.pixelRatio,ww:O.windowWidth,wh:O.windowHeight,sw:O.screenWidth,sh:O.screenHeight}}return u(t,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(I(),T("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,I();var i=T();x();var n=k(this);this._sendHideRequest({urlref:n,urlref_ts:i.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,i=k(this),n=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===_()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=N&&N.pages[n]&&N.pages[n].titleNView&&N.pages[n].titleNView.titleText||N&&N.pages[n]&&N.pages[n].navigationBarTitleText||"",this.__licationShow)return x(),this.__licationShow=!1,void(this._lastPageRoute=i);if(I(),this._lastPageRoute=i,T("page").overtime){var a={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(a)}x()}},{key:"_pageHide",value:function(){if(!this.__licationHide){I();var t=T("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e,i,n=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+n||"",this.statData.t=f(),this.statData.sc=function(t){var e=_(),i="";return t||("wx"===e&&(i=uni.getLaunchOptionsSync().scene),i)}(t.scene),this.statData.fvts=(e=uni.getStorageSync("First__Visit__Time"),i=0,e?i=e:(i=f(),uni.setStorageSync("First__Visit__Time",i),uni.removeStorageSync("Last__Visit__Time")),i),this.statData.lvts=function(){var t=uni.getStorageSync("Last__Visit__Time"),e=0;return e=t||"",uni.setStorageSync("Last__Visit__Time",f()),e}(),this.statData.tvc=function(){var t=uni.getStorageSync("Total__Visit__Count"),e=1;return t&&(e=t,e++),uni.setStorageSync("Total__Visit__Count",e),e}(),"n"===_()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,i=t.urlref,n=t.urlref_ts;this._navigationBarTitle.lt="11";var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:i,urlref_ts:n,ch:this.statData.ch,usv:this.statData.usv,t:f(),p:this.statData.p};this.request(a)}},{key:"_sendHideRequest",value:function(t,e){var i=t.urlref,n=t.urlref_ts,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:i,urlref_ts:n,ch:this.statData.ch,usv:this.statData.usv,t:f(),p:this.statData.p};this.request(a,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,i=void 0===e?"":e,n=t.value,a=void 0===n?"":n,s=this._lastPageRoute,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:s,ch:this.statData.ch,e_n:i,e_v:"object"==typeof a?JSON.stringify(a):a.toString(),usv:this.statData.usv,t:f(),p:this.statData.p};this.request(o)}},{key:"getNetworkInfo",value:function(){var t=this;uni.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var t=this;R.getLocation?uni.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,e){var i=this,n=f(),a=this._navigationBarTitle;t.ttn=a.page,t.ttpj=a.config,t.ttc=a.report;var s=this._reportingRequestData;if("n"===_()&&(s=uni.getStorageSync("__UNI__STAT__DATA")||{}),s[t.lt]||(s[t.lt]=[]),s[t.lt].push(t),"n"===_()&&uni.setStorageSync("__UNI__STAT__DATA",s),D=f(),"n"===_()&&(m=uni.getStorageSync("__page__residence__time")),!(D-m<10)||e){var o=this._reportingRequestData;"n"===_()&&(o=uni.getStorageSync("__UNI__STAT__DATA")),S();var r=[],u=[],l=[],p=function(t){o[t].forEach(function(e){var i=function(t){var e="";for(var i in t)e+=i+"="+t[i]+"&";return e.substr(0,e.length-1)}(e);0===t?r.push(i):3===t?l.push(i):u.push(i)})};for(var d in o)p(d);r.push.apply(r,u.concat(l));var h={usv:c,t:n,requests:JSON.stringify(r)};this._reportingRequestData={},"n"===_()&&uni.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==_()||"a"!==this.statData.p?this._sendRequest(h):setTimeout(function(){i._sendRequest(h)},200):this.imageRequest(h)}}},{key:"_sendRequest",value:function(t){var e=this;uni.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:t,success:function(){},fail:function(i){++e._retry<3&&setTimeout(function(){e._sendRequest(t)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,i=function(t){var e=Object.keys(t).sort(),i={},n="";for(var a in e)i[e[a]]=t[e[a]],n+=e[a]+"="+t[e[a]]+"&";return{sign:"",options:n.substr(0,n.length-1)}}(function(t){var e={};for(var i in t)e[i]=encodeURIComponent(t[i]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+i}},{key:"sendEvent",value:function(t,e){var i,n;(n=e,(i=t)?"string"!=typeof i?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):i.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof n&&"object"!=typeof n?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof n&&n.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===i&&"string"!=typeof n?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),t}(),L=function(t){function e(){var t;return o(this,e),(t=n(this,a(e).call(this))).instance=null,"function"==typeof uni.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,j),u(e,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}]),u(e,[{key:"addInterceptorInit",value:function(){var t=this;uni.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;uni.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var e=this;t?uni.addInterceptor("share",{success:function(){e._share()},fail:function(){e._share()}}):e._share()}},{key:"interceptRequestPayment",value:function(){var t=this;uni.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,S(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var i=getCurrentPages();e.$scope=i[i.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,q(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,q(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:f(),p:this.statData.p};this.request(i)}}]),e}().getInstance(),C=!1,P={onLaunch:function(t){L.report(t,this)},onReady:function(){L.ready(this)},onLoad:function(t){if(L.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return L.interceptShare(!1),e.call(this,t)}}},onShow:function(){C=!1,L.show(this)},onHide:function(){C=!0,L.hide(this)},onUnload:function(){C?C=!1:L.hide(this)},onError:function(t){L.error(t)}};((h=i(10)).default||h).mixin(P),uni.report=function(t,e){L.sendEvent(t,e)}},8:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-25720200116005",_inBundle:!1,_integrity:"sha512-RZFw3WAaS/CZTzzv9JPaWvmoNitojD/06vPdHSzlqZi8GbuE222lFuyochEjrGkG8rPPrWHAnwfoPBuQVtkfdg==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25720200116005.tgz",_shasum:"08bb17aba91c84a981f33d74153aa3dd07b578ad",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a129bde60de35f7ef497f43d5a45b4556231995c",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-25720200116005"}},9:function(t,e,i){"use strict";i.r(e),e.default={pages:{},globalStyle:{}}}});
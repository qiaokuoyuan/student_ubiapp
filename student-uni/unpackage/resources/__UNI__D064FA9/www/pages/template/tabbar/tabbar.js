!function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=603)}({0:function(t,e,i){"use strict";function n(t,e,i,n,a,o,s,r,u,c){var l,p="function"==typeof t?t.options:t;if(u&&(p.components=Object.assign(u,p.components||{})),c&&((c.beforeCreate||(c.beforeCreate=[])).unshift(function(){this[c.__module]=this}),(p.mixins||(p.mixins=[])).push(c)),e&&(p.render=e,p.staticRenderFns=i,p._compiled=!0),n&&(p.functional=!0),o&&(p._scopeId="data-v-"+o),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},p._ssrRegister=l):a&&(l=r?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(p.functional){p._injectStyles=l;var d=p.render;p.render=function(t,e){return l.call(e),d(t,e)}}else{var f=p.beforeCreate;p.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:p}}i.d(e,"a",function(){return n})},1:function(t,e){t.exports={}},10:function(t,e){t.exports=Vue},109:function(t,e,i){"use strict";var n=i(396),a=i(347),o=i(0);var s=Object(o.a)(a.default,n.b,n.c,!1,null,null,"4c283da8",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(518).default,this.options.style):Object.assign(this.options.style,i(518).default)}).call(s),e.default=s.exports},11:function(t,e,i){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(i(12).default,Vue.prototype.__$appStyle__)},12:function(t,e,i){"use strict";i.r(e);var n=i(1),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e.default=a.a},2:function(t,e,i){"use strict";i.r(e),e.default={appid:"__UNI__D064FA9"}},347:function(t,e,i){"use strict";var n=i(348),a=i.n(n);e.default=a.a},348:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,a=(n=i(604))&&n.__esModule?n:{default:n};var o={data0:{datetime:"40分钟前",article_type:0,title:"uni-app行业峰会频频亮相，开发者反响热烈!",source:"DCloud",comment_count:639},data1:{datetime:"一天前",article_type:1,title:"DCloud完成B2轮融资，uni-app震撼发布!",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395},data2:{datetime:"一天前",article_type:2,title:"中国技术界小奇迹：HBuilder开发者突破200万",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395},data3:{article_type:3,image_list:[{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",width:563,height:316},{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",width:641,height:360},{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",width:640,height:360}],datetime:"5分钟前",title:"uni-app 支持使用 npm 安装第三方包，生态更趋丰富",source:"DCloud",comment_count:11},data4:{datetime:"2小时前",article_type:4,title:"uni-app 支持原生小程序自定义组件，更开放、更自由",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:69}},s={components:{mediaItem:a.default},data:function(){return{newsList:[],cacheTab:[],tabIndex:0,tabBars:[{name:"关注",id:"guanzhu"},{name:"推荐",id:"tuijian"},{name:"体育",id:"tiyu"},{name:"热点",id:"redian"},{name:"财经",id:"caijing"},{name:"娱乐",id:"yule"},{name:"军事",id:"junshi"},{name:"历史",id:"lishi"},{name:"本地",id:"bendi"}],scrollInto:"",showTips:!1,navigateFlag:!1,pulling:!1,refreshIcon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg=="}},onLoad:function(){var t=this;setTimeout(function(){t.tabBars.forEach(function(e){t.newsList.push({data:[],isLoading:!1,refreshText:"",loadingText:"加载更多..."})}),t.getList(0)},350)},methods:{getList:function(t){for(var e=this.newsList[t],i=[],n=1;n<=10;n++){var a=Object.assign({},o["data"+Math.floor(5*Math.random())]);a.id=this.newGuid(),i.push(a)}e.data=e.data.concat(i)},goDetail:function(t){var e=this;this.navigateFlag||(this.navigateFlag=!0,uni.navigateTo({url:"./detail/detail?title="+t.title}),setTimeout(function(){e.navigateFlag=!1},200))},close:function(t,e){var i=this;uni.showModal({content:"是否删除本条信息？",success:function(n){n.confirm&&i.newsList[t].data.splice(e,1)}})},loadMore:function(t){var e=this;setTimeout(function(){e.getList(e.tabIndex)},500)},ontabtap:function(t){var e=t.target.dataset.current||t.currentTarget.dataset.current;this.switchTab(e)},ontabchange:function(t){var e=t.target.current||t.detail.current;this.switchTab(e)},switchTab:function(t){if(0===this.newsList[t].data.length&&this.getList(t),this.tabIndex!==t){if(this.newsList[this.tabIndex].data.length>100)this.cacheTab.indexOf(this.tabIndex)<0&&this.cacheTab.push(this.tabIndex);if(this.tabIndex=t,this.scrollInto=this.tabBars[t].id,this.cacheTab.length>3){var e=this.cacheTab[0];this.clearTabData(e),this.cacheTab.splice(0,1)}}},clearTabData:function(t){this.newsList[t].data.length=0,this.newsList[t].loadingText="加载更多..."},refreshData:function(){},onrefresh:function(t){var e=this,i=this.newsList[this.tabIndex];i.refreshFlag&&(i.refreshing=!0,i.refreshText="正在刷新...",setTimeout(function(){e.refreshData(),e.pulling=!0,i.refreshing=!1,i.refreshFlag=!1,i.refreshText="已刷新",setTimeout(function(){e.pulling=!1},500)},2e3))},onpullingdown:function(t){var e=this.newsList[this.tabIndex];e.refreshing||this.pulling||(Math.abs(t.pullingDistance)>Math.abs(t.viewHeight)?(e.refreshFlag=!0,e.refreshText="释放立即刷新"):(e.refreshFlag=!1,e.refreshText="下拉可以刷新"))},newGuid:function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return(t()+t()+"-"+t()+"-4"+t().substr(0,3)+"-"+t()+"-"+t()+t()+t()).toUpperCase()}}};e.default=s},349:function(t,e,i){"use strict";i.r(e);var n=i(350),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e.default=a.a},350:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{options:{type:Object,default:function(t){return{}}}},methods:{click:function(){this.$emit("click")},close:function(t){this.$emit("close")}}};e.default=n},351:function(t,e){t.exports={view:{flexDirection:"column"},"flex-row":{flexDirection:"row"},"flex-col":{flexDirection:"column"},"list-cell":{width:"750upx",paddingTop:0,paddingRight:"30upx",paddingBottom:0,paddingLeft:"30upx"},"uni-list-cell-hover":{backgroundColor:"#eeeeee"},"media-item":{position:"relative",flex:1,flexDirection:"column",paddingTop:"20upx",paddingRight:"30upx",paddingBottom:"21upx",paddingLeft:"30upx"},"media-item-hover":{backgroundColor:"#eeeeee"},"media-item-line":{position:"absolute",left:"30upx",right:"30upx",bottom:0,height:"1upx",backgroundColor:"#ebebeb"},"media-image-right":{flexDirection:"row"},"media-image-left":{flexDirection:"row-reverse"},"media-title":{flex:1,lines:3,textOverflow:"ellipsis",fontSize:"30upx",color:"#555555"},"media-title2":{flex:1,marginTop:"6upx",lineHeight:"40upx"},"image-section":{marginTop:"20upx",flexDirection:"row",justifyContent:"space-between"},"image-section-right":{marginTop:"0upx",marginLeft:"10upx",width:"225upx",height:"146upx"},"image-section-left":{marginTop:"0upx",marginRight:"10upx",width:"225upx",height:"146upx"},"image-list1":{width:"690upx",height:"481upx"},"image-list2":{width:"225upx",height:"146upx"},"image-list3":{width:"225upx",height:"146upx"},"media-info":{flexDirection:"row",alignItems:"center"},"info-text":{marginRight:"20upx",color:"#999999",fontSize:"24upx"},"media-foot":{marginTop:"25upx",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},"max-close-view":{position:"relative",alignItems:"center",flexDirection:"row",width:"40upx",height:"30upx",lineHeight:"30upx",borderWidth:"1upx",borderStyle:"solid",borderColor:"#aaaaaa",borderRadius:"4",justifyContent:"center",textAlign:"center"},"close-l":{position:"absolute",width:"18upx",height:"1upx",backgroundColor:"#aaaaaa"},"close-h":{transform:"rotate(45deg)"},"close-v":{transform:"rotate(-45deg)"}}},352:function(t,e){t.exports={tabs:{flex:1,flexDirection:"column",overflow:"hidden",backgroundColor:"#ffffff"},"scroll-h":{width:"750upx",height:"80upx",flexDirection:"row"},"line-h":{height:"1upx",backgroundColor:"#cccccc"},"uni-tab-item":{flexWrap:"nowrap",paddingLeft:"34upx",paddingRight:"34upx"},"uni-tab-item-title":{color:"#555555",fontSize:"30upx",height:"80upx",lineHeight:"80upx",flexWrap:"nowrap"},"uni-tab-item-title-active":{color:"#007AFF"},"swiper-box":{flex:1},"swiper-item":{flex:1,flexDirection:"row"},"scroll-v":{flex:1,flexDirection:"column",width:"750upx"},"update-tips":{position:"absolute",left:0,top:"41",right:0,paddingTop:"5",paddingBottom:"5",backgroundColor:"#FDDD9B",alignItems:"center",justifyContent:"center",textAlign:"center"},"update-tips-text":{fontSize:"14",color:"#ffffff"},refresh:{width:"750upx",height:"64",justifyContent:"center"},"refresh-view":{flexDirection:"row",flexWrap:"nowrap",alignItems:"center",justifyContent:"center"},"refresh-icon":{width:"30",height:"30",transitionDuration:500,transitionProperty:"transform",transform:"rotate(0deg)",transformOrigin:"15px 15px"},"@TRANSITION":{"refresh-icon":{duration:500,property:"transform"}},"refresh-icon-active":{transform:"rotate(180deg)"},"loading-icon":{width:"20",height:"20",marginRight:"5",color:"#999999"},"loading-text":{marginLeft:"2",fontSize:"16",color:"#999999"},"loading-more":{alignItems:"center",justifyContent:"center",paddingTop:"10",paddingBottom:"10",textAlign:"center"},"loading-more-text":{fontSize:"28upx",color:"#999999"}}},396:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,enableBackToTop:!0,bubble:"true"}},[i("view",{staticClass:["tabs"]},[i("scroll-view",{staticClass:["scroll-h"],attrs:{id:"tab-bar",scrollX:!0,showScrollbar:!1,scrollIntoView:t.scrollInto}},t._l(t.tabBars,function(e,n){return i("view",{key:e.id,staticClass:["uni-tab-item"],attrs:{id:e.id,dataCurrent:n},on:{click:t.ontabtap}},[i("u-text",{staticClass:["uni-tab-item-title"],class:t.tabIndex==n?"uni-tab-item-title-active":""},[t._v(t._s(e.name))])])}),0),i("view",{staticClass:["line-h"]}),i("swiper",{staticClass:["swiper-box"],staticStyle:{flex:"1"},attrs:{current:t.tabIndex,duration:300},on:{change:t.ontabchange}},t._l(t.newsList,function(e,n){return i("swiper-item",{key:n,staticClass:["swiper-item"]},[i("list",{staticClass:["scroll-v","list"],attrs:{enableBackToTop:"true",scrollY:"",loadmoreoffset:"15"},on:{loadmore:function(e){t.loadMore(n)}}},[i("refresh",{staticClass:["refresh"],attrs:{display:e.refreshing?"show":"hide"},on:{refresh:function(e){t.onrefresh(n)},pullingdown:t.onpullingdown}},[i("div",{staticClass:["refresh-view"]},[i("u-image",{staticClass:["refresh-icon"],class:{"refresh-icon-active":e.refreshFlag},style:{width:e.refreshing||t.pulling?0:"30px"},attrs:{src:t.refreshIcon}}),e.refreshing?i("loading-indicator",{staticClass:["loading-icon"],attrs:{animating:"true"}}):t._e(),i("u-text",{staticClass:["loading-text"]},[t._v(t._s(e.refreshText))])],1)]),t._l(e.data,function(e,a){return i("cell",{key:e.id,appendAsTree:!0,attrs:{append:"tree"}},[i("media-item",{attrs:{options:e},on:{close:function(e){t.close(n,a)},click:function(i){t.goDetail(e)}}})],1)}),e.isLoading||e.data.length>4?i("cell",{staticClass:["loading-more"],appendAsTree:!0,attrs:{append:"tree"}},[i("u-text",{staticClass:["loading-more-text"]},[t._v(t._s(e.loadingText))])]):t._e()],2)])}),1)],1)])},a=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){})},413:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.options.title?i("view",{staticClass:["media-item","view"],attrs:{hoverClass:"media-item-hover"},on:{click:t.click}},[i("view",{staticClass:["view"],style:{flexDirection:1===t.options.article_type||2===t.options.article_type?2===t.options.article_type?"row":"row-reverse":"column"}},[i("u-text",{staticClass:["media-title"],class:{"media-title2":1===t.options.article_type||2===t.options.article_type}},[t._v(t._s(t.options.title))]),t.options.image_list||t.options.image_url?i("view",{staticClass:["image-section","flex-row"],class:{"image-section-right":2===t.options.article_type,"image-section-left":1===t.options.article_type},style:{flexDirection:"row"}},[t.options.image_url?i("u-image",{staticClass:["image-list1"],class:{"image-list2":1===t.options.article_type||2===t.options.article_type},attrs:{src:t.options.image_url}}):t._e(),t._l(t.options.image_list,function(e,n){return t.options.image_list?i("u-image",{key:n,staticClass:["image-list3"],attrs:{src:e.url}}):t._e()})],2):t._e()]),i("view",{staticClass:["media-foot","flex-row"],staticStyle:{flexDirection:"row"}},[i("view",{staticClass:["media-info","flex-row"],staticStyle:{flexDirection:"row"}},[i("u-text",{staticClass:["info-text"]},[t._v(t._s(t.options.source))]),i("u-text",{staticClass:["info-text"]},[t._v(t._s(t.options.comment_count)+"条评论")]),i("u-text",{staticClass:["info-text"]},[t._v(t._s(t.options.datetime))])]),i("view",{staticClass:["max-close-view"],on:{click:t.close}},[i("view",{staticClass:["close-l","close-h"]}),i("view",{staticClass:["close-l","close-v"]})])]),i("view",{staticClass:["media-item-line"],staticStyle:{position:"absolute"}})]):t._e()},a=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){})},517:function(t,e,i){"use strict";i.r(e);var n=i(351),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e.default=a.a},518:function(t,e,i){"use strict";i.r(e);var n=i(352),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e.default=a.a},603:function(t,e,i){"use strict";i.r(e);i(7),i(11);var n=i(109);n.default.mpType="page",n.default.route="pages/template/tabbar/tabbar",n.default.el="#root",new Vue(n.default)},604:function(t,e,i){"use strict";i.r(e);var n=i(413),a=i(349);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);var s=i(0);var r=Object(s.a)(a.default,n.b,n.c,!1,null,null,"7c954165",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(517).default,this.options.style):Object.assign(this.options.style,i(517).default)}).call(r),e.default=r.exports},7:function(t,e,i){"use strict";function n(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}var c=i(8).version,l="__DC_STAT_UUID",p="__DC_UUID_VALUE";function d(){var t="";if("n"===g()){try{t=plus.runtime.getDCloudId()}catch(e){t=""}return t}try{t=uni.getStorageSync(l)}catch(e){t=p}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{uni.setStorageSync(l,t)}catch(t){uni.setStorageSync(l,p)}}return t}var f,h=function(){return parseInt((new Date).getTime()/1e3)},g=function(){return"n"},_=function(){var t="";return"wx"!==g()&&"qq"!==g()||uni.canIUse("getAccountInfoSync")&&(t=uni.getAccountInfoSync().miniProgram.appId||""),t},m=function(){return"n"===g()?plus.runtime.version:""},v=function(){var t="";return"n"===g()&&(t=plus.runtime.channel),t},y=0,w=0,x=function(){return y=h(),"n"===g()&&uni.setStorageSync("__page__residence__time",h()),y},b=0,D=0,S=function(){var t=(new Date).getTime();return b=t,D=0,t},T=function(){var t=(new Date).getTime();return D=t,t},k=function(t){var e=0;return 0!==b&&(e=D-b),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},C=function(t){var e=getCurrentPages(),i=e[e.length-1].$vm,n=t._query,a=n&&"{}"!==JSON.stringify(n)?"?"+JSON.stringify(n):"";return t._query="","bd"===g()?i.$mp&&i.$mp.page.is+a:i.$scope&&i.$scope.route+a||i.$mp&&i.$mp.page.route+a},A=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},q=i(9).default,R=i(2).default||i(2),I=uni.getSystemInfoSync(),j=function(){function t(){s(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:d(),ut:g(),mpn:_(),ak:R.appid,usv:c,v:m(),ch:v(),cn:"",pn:"",ct:"",t:h(),tt:"",p:"android"===I.platform?"a":"i",brand:I.brand||"",md:I.model,sv:I.system.replace(/(Android|iOS)\s/,""),mpsdk:I.SDKVersion||"",mpv:I.version||"",lang:I.language,pr:I.pixelRatio,ww:I.windowWidth,wh:I.windowHeight,sw:I.screenWidth,sh:I.screenHeight}}return u(t,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(T(),k("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,T();var i=k();S();var n=C(this);this._sendHideRequest({urlref:n,urlref_ts:i.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,i=C(this),n=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===g()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=q&&q.pages[n]&&q.pages[n].titleNView&&q.pages[n].titleNView.titleText||q&&q.pages[n]&&q.pages[n].navigationBarTitleText||"",this.__licationShow)return S(),this.__licationShow=!1,void(this._lastPageRoute=i);if(T(),this._lastPageRoute=i,k("page").overtime){var a={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(a)}S()}},{key:"_pageHide",value:function(){if(!this.__licationHide){T();var t=k("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e,i,n=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+n||"",this.statData.t=h(),this.statData.sc=function(t){var e=g(),i="";return t||("wx"===e&&(i=uni.getLaunchOptionsSync().scene),i)}(t.scene),this.statData.fvts=(e=uni.getStorageSync("First__Visit__Time"),i=0,e?i=e:(i=h(),uni.setStorageSync("First__Visit__Time",i),uni.removeStorageSync("Last__Visit__Time")),i),this.statData.lvts=function(){var t=uni.getStorageSync("Last__Visit__Time"),e=0;return e=t||"",uni.setStorageSync("Last__Visit__Time",h()),e}(),this.statData.tvc=function(){var t=uni.getStorageSync("Total__Visit__Count"),e=1;return t&&(e=t,e++),uni.setStorageSync("Total__Visit__Count",e),e}(),"n"===g()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,i=t.urlref,n=t.urlref_ts;this._navigationBarTitle.lt="11";var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:i,urlref_ts:n,ch:this.statData.ch,usv:this.statData.usv,t:h(),p:this.statData.p};this.request(a)}},{key:"_sendHideRequest",value:function(t,e){var i=t.urlref,n=t.urlref_ts,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:i,urlref_ts:n,ch:this.statData.ch,usv:this.statData.usv,t:h(),p:this.statData.p};this.request(a,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,i=void 0===e?"":e,n=t.value,a=void 0===n?"":n,o=this._lastPageRoute,s={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:o,ch:this.statData.ch,e_n:i,e_v:"object"==typeof a?JSON.stringify(a):a.toString(),usv:this.statData.usv,t:h(),p:this.statData.p};this.request(s)}},{key:"getNetworkInfo",value:function(){var t=this;uni.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var t=this;R.getLocation?uni.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,e){var i=this,n=h(),a=this._navigationBarTitle;t.ttn=a.page,t.ttpj=a.config,t.ttc=a.report;var o=this._reportingRequestData;if("n"===g()&&(o=uni.getStorageSync("__UNI__STAT__DATA")||{}),o[t.lt]||(o[t.lt]=[]),o[t.lt].push(t),"n"===g()&&uni.setStorageSync("__UNI__STAT__DATA",o),w=h(),"n"===g()&&(y=uni.getStorageSync("__page__residence__time")),!(w-y<10)||e){var s=this._reportingRequestData;"n"===g()&&(s=uni.getStorageSync("__UNI__STAT__DATA")),x();var r=[],u=[],l=[],p=function(t){s[t].forEach(function(e){var i=function(t){var e="";for(var i in t)e+=i+"="+t[i]+"&";return e.substr(0,e.length-1)}(e);0===t?r.push(i):3===t?l.push(i):u.push(i)})};for(var d in s)p(d);r.push.apply(r,u.concat(l));var f={usv:c,t:n,requests:JSON.stringify(r)};this._reportingRequestData={},"n"===g()&&uni.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==g()||"a"!==this.statData.p?this._sendRequest(f):setTimeout(function(){i._sendRequest(f)},200):this.imageRequest(f)}}},{key:"_sendRequest",value:function(t){var e=this;uni.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:t,success:function(){},fail:function(i){++e._retry<3&&setTimeout(function(){e._sendRequest(t)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,i=function(t){var e=Object.keys(t).sort(),i={},n="";for(var a in e)i[e[a]]=t[e[a]],n+=e[a]+"="+t[e[a]]+"&";return{sign:"",options:n.substr(0,n.length-1)}}(function(t){var e={};for(var i in t)e[i]=encodeURIComponent(t[i]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+i}},{key:"sendEvent",value:function(t,e){var i,n;(n=e,(i=t)?"string"!=typeof i?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):i.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof n&&"object"!=typeof n?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof n&&n.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===i&&"string"!=typeof n?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),t}(),O=function(t){function e(){var t;return s(this,e),(t=n(this,a(e).call(this))).instance=null,"function"==typeof uni.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(e,j),u(e,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}]),u(e,[{key:"addInterceptorInit",value:function(){var t=this;uni.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;uni.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var e=this;t?uni.addInterceptor("share",{success:function(){e._share()},fail:function(){e._share()}}):e._share()}},{key:"interceptRequestPayment",value:function(){var t=this;uni.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,x(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var i=getCurrentPages();e.$scope=i[i.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,A(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,A(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:h(),p:this.statData.p};this.request(i)}}]),e}().getInstance(),V=!1,L={onLaunch:function(t){O.report(t,this)},onReady:function(){O.ready(this)},onLoad:function(t){if(O.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return O.interceptShare(!1),e.call(this,t)}}},onShow:function(){V=!1,O.show(this)},onHide:function(){V=!0,O.hide(this)},onUnload:function(){V?V=!1:O.hide(this)},onError:function(t){O.error(t)}};((f=i(10)).default||f).mixin(L),uni.report=function(t,e){O.sendEvent(t,e)}},8:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-25120200103005",_inBundle:!1,_integrity:"sha512-nYoIrRV2e5o/vzr6foSdWi3Rl2p0GuO+LPY3JctyY6uTKgPnuH99d7aL/QQdJ1SacQjBWO+QGK1qankN7oyrWw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25120200103005.tgz",_shasum:"a77a63481f36474f3e86686868051219d1bb12df",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"6be187a3dfe15f95dd6146d9fec08e1f81100987",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-25120200103005"}},9:function(t,e,i){"use strict";i.r(e),e.default={pages:{},globalStyle:{}}}});
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-request-request"],{"0834":function(t,e,n){"use strict";n.r(e);var a=n("2b84"),r=n("f08a");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);var u,o=n("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=s.exports},"2b84":function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-hello-text"},[t._v("请点击按钮向服务器发起请求")]),n("v-uni-view",{staticClass:"uni-textarea uni-common-mt"},[n("v-uni-textarea",{attrs:{value:t.res}})],1),n("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"},[n("v-uni-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendRequest.apply(void 0,arguments)}}},[t._v("发起请求（Callback）")]),n("v-uni-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendRequest("promise")}}},[t._v("发起请求（Promise）")]),n("v-uni-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendRequest("await")}}},[t._v("发起请求（Async/Await）")])],1)],1)],1)},i=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},"2fc6":function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("768b"));n("96cf");var i=a(n("3b8d")),u=a(n("f499")),o=a(n("0a0d")),s="https://unidemo.dcloud.net.cn/ajax/echo/text?name=uni-app",c=2e3,l={data:function(){return{title:"request",loading:!1,res:""}},methods:{sendRequest:function(t){switch(this.loading=!0,t){case"promise":this._requestPromise();break;case"await":this._requestAwait();break;default:this._request();break}},_request:function(){var t=this;uni.request({url:s,dataType:"text",data:{noncestr:(0,o.default)()},success:function(e){console.log("request success",e),uni.showToast({title:"请求成功",icon:"success",mask:!0,duration:c}),t.res="请求结果 : "+(0,u.default)(e)},fail:function(t){console.log("request fail",t),uni.showModal({content:t.errMsg,showCancel:!1})},complete:function(){t.loading=!1}})},_requestPromise:function(){var t=this;uni.request({url:s,dataType:"text",data:{noncestr:(0,o.default)()}}).then(function(e){console.log("request success",e[1]),uni.showToast({title:"请求成功",icon:"success",mask:!0,duration:c}),t.res="请求结果 : "+(0,u.default)(e[1]),t.loading=!1}).catch(function(e){console.log("request fail",e),uni.showModal({content:e.errMsg,showCancel:!1}),t.loading=!1})},_requestAwait:function(){var t=(0,i.default)(regeneratorRuntime.mark(function t(){var e,n,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,uni.request({url:s,dataType:"text",data:{noncestr:(0,o.default)()}});case 2:e=t.sent,n=(0,r.default)(e,2),a=n[0],i=n[1],a?(console.log("request fail",a),uni.showModal({content:a.errMsg,showCancel:!1})):(console.log("request success",i),uni.showToast({title:"请求成功",icon:"success",mask:!0,duration:c}),this.res="请求结果 : "+(0,u.default)(i)),this.loading=!1;case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}};e.default=l},"469f":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("7d7b")},"5d73":function(t,e,n){t.exports=n("469f")},"768b":function(t,e,n){"use strict";n.r(e);var a=n("a745"),r=n.n(a);function i(t){if(r()(t))return t}var u=n("5d73"),o=n.n(u);function s(t,e){var n=[],a=!0,r=!1,i=void 0;try{for(var u,s=o()(t);!(a=(u=s.next()).done);a=!0)if(n.push(u.value),e&&n.length===e)break}catch(c){r=!0,i=c}finally{try{a||null==s["return"]||s["return"]()}finally{if(r)throw i}}return n}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(t,e){return i(t)||s(t,e)||c()}n.d(e,"default",function(){return l})},"7d7b":function(t,e,n){var a=n("e4ae"),r=n("7cd6");t.exports=n("584a").getIterator=function(t){var e=r(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return a(e.call(t))}},f08a:function(t,e,n){"use strict";n.r(e);var a=n("2fc6"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=r.a}}]);
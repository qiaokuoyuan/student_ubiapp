(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-get-location-get-location"],{"010c":function(t,n,e){"use strict";var i=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("795b"));e("96cf");var a=i(e("3b8d")),u=i(e("1104")),r=e("b5c4"),c=r.formatLocation,s={components:{uniPopup:u.default},data:function(){return{title:"getLocation",hasLocation:!1,location:{},type:""}},methods:{togglePopup:function(t){this.type=t},showConfirm:function(){this.type="showpopup"},hideConfirm:function(){this.type=""},getLocation:function(){var t=(0,a.default)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.doGetLocation();case 1:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),doGetLocation:function(){var t=this;uni.getLocation({success:function(n){t.hasLocation=!0,t.location=c(n.longitude,n.latitude)},fail:function(t){t.errMsg.indexOf("auth deny")>=0?uni.showToast({title:"访问位置被拒绝"}):uni.showToast({title:t.errMsg})}})},getSetting:function(){return new o.default(function(t,n){uni.getSetting({success:function(n){void 0!==n.authSetting["scope.userLocation"]?n.authSetting["scope.userLocation"]?t(1):t(2):t(0)}})})},openSetting:function(){var t=this;this.hideConfirm(),uni.openSetting({success:function(n){n.authSetting&&n.authSetting["scope.userLocation"]&&t.doGetLocation()},fail:function(t){}})},checkPermission:function(){var t=(0,a.default)(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!permision.isIOS){t.next=6;break}return t.next=3,permision.requestIOS("location");case 3:t.t0=t.sent,t.next=9;break;case 6:return t.next=8,permision.requestAndroid("android.permission.ACCESS_FINE_LOCATION");case 8:t.t0=t.sent;case 9:return n=t.t0,null===n||1===n?n=1:2===n?uni.showModal({content:"系统定位已关闭",confirmText:"确定",showCancel:!1,success:function(t){}}):n.code?uni.showModal({content:n.message}):uni.showModal({content:"需要定位权限",confirmText:"设置",success:function(t){t.confirm&&permision.gotoAppSetting()}}),t.abrupt("return",n);case 12:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),clear:function(){this.hasLocation=!1}}};n.default=s},"6d48":function(t,n,e){"use strict";e.r(n);var i=e("010c"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},"783e":function(t,n,e){"use strict";e.r(n);var i=e("cfab"),o=e("6d48");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("ec85");var u,r=e("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"6dde94c6",null,!1,i["a"],u);n["default"]=c.exports},"7aca":function(t,n,e){var i=e("c730");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("00305e05",i,!0,{sourceMap:!1,shadowMode:!1})},b5c4:function(t,n,e){"use strict";var i=e("288e"),o=i(e("0a0d"));e("28a5");var a=i(e("59ad"));e("6b54");var u=i(e("e814"));function r(t){if("number"!==typeof t||t<0)return t;var n=(0,u.default)(t/3600);t%=3600;var e=(0,u.default)(t/60);t%=60;var i=t;return[n,e,i].map(function(t){return t=t.toString(),t[1]?t:"0"+t}).join(":")}function c(t,n){return"string"===typeof t&&"string"===typeof n&&(t=(0,a.default)(t),n=(0,a.default)(n)),t=t.toFixed(2),n=n.toFixed(2),{longitude:t.toString().split("."),latitude:n.toString().split(".")}}var s={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var n="";for(var e in this.UNITS)if(t>=this.UNITS[e]){n=Math.floor(t/this.UNITS[e])+e+"前";break}return n||"刚刚"},format:function(t){var n=this.parse(t),e=(0,o.default)()-n.getTime();if(e<this.UNITS["天"])return this.humanize(e);var i=function(t){return t<10?"0"+t:t};return n.getFullYear()+"/"+i(n.getMonth()+1)+"/"+i(n.getDate())+"-"+i(n.getHours())+":"+i(n.getMinutes())},parse:function(t){var n=t.split(/[^0-9]/);return new Date(n[0],n[1]-1,n[2],n[3],n[4],n[5])}};t.exports={formatTime:r,formatLocation:c,dateUtils:s}},c730:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,".popup-view[data-v-6dde94c6]{width:%?500?%}.popup-title[data-v-6dde94c6]{display:block;font-size:16px;line-height:3;margin-bottom:10px;text-align:center}.popup-buttons uni-button[data-v-6dde94c6]{margin-left:4px;margin-right:4px}",""])},cfab:function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticStyle:{background:"#FFFFFF",padding:"40upx"}},[e("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t._v("当前位置经纬度")]),!1===t.hasLocation?[e("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[t._v("未获取")])]:t._e(),!0===t.hasLocation?[e("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[e("v-uni-text",[t._v("E: "+t._s(t.location.longitude[0])+"°"+t._s(t.location.longitude[1])+"′")]),e("v-uni-text",[t._v("\\nN: "+t._s(t.location.latitude[0])+"°"+t._s(t.location.latitude[1])+"′")])],1)]:t._e()],2),e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getLocation.apply(void 0,arguments)}}},[t._v("获取位置")]),e("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clear.apply(void 0,arguments)}}},[t._v("清空")])],1)],1),e("uni-popup",{attrs:{show:"showpopup"===t.type,mode:"fixed"},on:{hidePopup:function(n){arguments[0]=n=t.$handleEvent(n),t.togglePopup("")}}},[e("v-uni-view",{staticClass:"popup-view"},[e("v-uni-text",{staticClass:"popup-title"},[t._v("需要用户授权位置权限")]),e("v-uni-view",{staticClass:"uni-flex popup-buttons"},[e("v-uni-button",{staticClass:"uni-flex-item",attrs:{type:"primary","open-type":"openSetting"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openSetting.apply(void 0,arguments)}}},[t._v("设置")]),e("v-uni-button",{staticClass:"uni-flex-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.togglePopup("")}}},[t._v("取消")])],1)],1)],1)],1)},a=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return i})},ec85:function(t,n,e){"use strict";var i=e("7aca"),o=e.n(i);o.a}}]);
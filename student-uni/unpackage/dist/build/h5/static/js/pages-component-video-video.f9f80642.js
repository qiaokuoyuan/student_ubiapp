(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-video-video"],{"0e4c":function(t,n,e){"use strict";e.r(n);var i=e("d54e"),a=e("75ce");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("0f09");var u,s=e("f0c5"),d=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"2d40b230",null,!1,i["a"],u);n["default"]=d.exports},"0f09":function(t,n,e){"use strict";var i=e("ef9e"),a=e.n(i);a.a},"183a":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,"uni-video[data-v-2d40b230]{width:%?690?%}",""])},"5d33":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("6b54");var i={data:function(){return{title:"video",src:"",danmuList:[{text:"第 1s 出现的弹幕",color:"#ff0000",time:1},{text:"第 3s 出现的弹幕",color:"#ff00ff",time:3}],danmuValue:"",showVideo:!1}},onReady:function(t){this.videoContext=uni.createVideoContext("myVideo"),this.showVideo=!0},methods:{sendDanmu:function(){this.videoContext.sendDanmu({text:this.danmuValue,color:this.getRandomColor()}),this.danmuValue=""},videoErrorCallback:function(t){uni.showModal({content:t.target.errMsg,showCancel:!1})},getRandomColor:function(){for(var t=[],n=0;n<3;++n){var e=Math.floor(256*Math.random()).toString(16);e=1==e.length?"0"+e:e,t.push(e)}return"#"+t.join("")}}};n.default=i},"75ce":function(t,n,e){"use strict";e.r(n);var i=e("5d33"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},d54e:function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),t.showVideo?e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",[e("v-uni-video",{attrs:{id:"myVideo",src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v","danmu-list":t.danmuList,"enable-danmu":!0,"danmu-btn":!0,controls:!0,poster:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/poster.png"},on:{error:function(n){arguments[0]=n=t.$handleEvent(n),t.videoErrorCallback.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"uni-list uni-common-mt"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",[e("v-uni-view",{staticClass:"uni-label"},[t._v("弹幕内容")])],1),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"在此处输入弹幕内容"},model:{value:t.danmuValue,callback:function(n){t.danmuValue=n},expression:"danmuValue"}})],1)],1)],1),e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{staticClass:"page-body-button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.sendDanmu.apply(void 0,arguments)}}},[t._v("发送弹幕")])],1)],1):t._e()],1)},o=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return i})},ef9e:function(t,n,e){var i=e("183a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("29ec712e",i,!0,{sourceMap:!1,shadowMode:!1})}}]);
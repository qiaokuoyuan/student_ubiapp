(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-navigator-new-page-new-nvue-page-2"],{"1b71":function(e,t,n){"use strict";var o=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("cebc")),a=n("2f62"),r={data:function(){return{}},computed:(0,i.default)({},(0,a.mapState)(["colorIndex","colorList"]),(0,a.mapGetters)(["currentColor"])),methods:(0,i.default)({},(0,a.mapMutations)(["setColorIndex"]))};t.default=r},"346f":function(e,t,n){"use strict";n.r(t);var o=n("1b71"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=i.a},"3ee5":function(e,t,n){"use strict";n.r(t);var o=n("b794"),i=n("346f");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("be6b");var r,c=n("f0c5"),l=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"15774e88",null,!1,o["a"],r);t["default"]=l.exports},"76fe":function(e,t,n){var o=n("d839");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("6d91a896",o,!0,{sourceMap:!1,shadowMode:!1})},b794:function(e,t,n){"use strict";var o,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"root"},[n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"new-page__color",style:{backgroundColor:e.currentColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.setColorIndex(e.colorIndex>1?0:e.colorIndex+1)}}},[n("v-uni-text",{staticClass:"new-page__color-text"},[e._v("点击改变颜色")])],1),n("v-uni-view",{staticClass:"new-page__text-box"},[n("v-uni-text",{staticClass:"new-page__text"},[e._v("点击上方色块使用vuex在页面之间进行通讯")])],1)],1)],1)},a=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return o})},be6b:function(e,t,n){"use strict";var o=n("76fe"),i=n.n(o);i.a},d839:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".new-page__text[data-v-15774e88]{font-size:14px;color:#666}.root[data-v-15774e88]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.page-body[data-v-15774e88]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:50px}.new-page__text-box[data-v-15774e88]{padding:20px}.new-page__color[data-v-15774e88]{width:200px;height:100px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.new-page__color-text[data-v-15774e88]{font-size:14px;color:#fff;line-height:30px;text-align:center}.new-page__button-item[data-v-15774e88]{margin-top:15px;width:300px}",""])}}]);
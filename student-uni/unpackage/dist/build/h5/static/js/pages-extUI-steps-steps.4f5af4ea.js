(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-steps-steps"],{"044d":function(t,e,i){"use strict";var n,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-section",{attrs:{title:"基本用法",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-steps",{attrs:{options:t.list1,"active-color":"#007AFF",active:t.active}})],1),i("uni-section",{attrs:{title:"纵向排列",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-steps",{attrs:{options:t.list2,"active-color":"#007AFF",active:t.active,direction:"column"}})],1),i("v-uni-view",{staticClass:"word-btn",attrs:{"hover-class":"word-btn--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"word-btn-white"},[t._v("改变状态")])],1)],1)},r=[];i.d(e,"b",function(){return o}),i.d(e,"c",function(){return r}),i.d(e,"a",function(){return n})},"0939":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("bcc0")),r=n(i("e21f")),a={components:{uniSection:r.default,uniSteps:o.default},data:function(){return{active:1,list1:[{title:"事件一"},{title:"事件二"},{title:"事件三"},{title:"事件四"}],list2:[{title:"买家下单",desc:"2018-11-11"},{title:"卖家发货",desc:"2018-11-12"},{title:"买家签收",desc:"2018-11-13"},{title:"交易完成",desc:"2018-11-14"}]}},methods:{change:function(){this.active<this.list1.length-1?this.active+=1:this.active=0}}};e.default=a},"275c":function(t,e,i){i("b041");e=t.exports=i("2350")(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\n\nuni-page-body[data-v-209448c0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-209448c0]{font-size:14px;line-height:inherit}.example[data-v-209448c0]{padding:0 15px 15px}.example-info[data-v-209448c0]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-209448c0]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-209448c0]{padding:0 15px}.example-info[data-v-209448c0]{\n\tdisplay:block;\n\tpadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-209448c0]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-209448c0]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-209448c0]{font-size:18px;color:#fff}.word-btn[data-v-209448c0]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-209448c0]{background-color:#4ca2ff}.status-btn[data-v-209448c0]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?92?%;margin:%?30?%;background-color:#007aff}.example-body[data-v-209448c0]{\n\tdisplay:block;\n\tpadding:15px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}body.?%PAGE?%[data-v-209448c0]{background-color:#efeff4}",""])},"315e":function(t,e,i){"use strict";i.r(e);var n=i("0939"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=o.a},"47c0":function(t,e,i){"use strict";var n=i("57fd"),o=i.n(n);o.a},"57fd":function(t,e,i){var n=i("275c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("29d7f47c",n,!0,{sourceMap:!1,shadowMode:!1})},"5a4f":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-steps[data-v-78246752]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;width:100%;\n\t\n\t-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-steps__row[data-v-78246752]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-steps__column[data-v-78246752]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse}.uni-steps__row-text-container[data-v-78246752]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-steps__column-text-container[data-v-78246752]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-steps__row-text[data-v-78246752]{\n\tdisplay:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;\n\t-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-steps__column-text[data-v-78246752]{padding:6px 0;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#e5e5e5;\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-steps__row-title[data-v-78246752]{font-size:%?28?%;line-height:16px;text-align:center}.uni-steps__column-title[data-v-78246752]{font-size:%?28?%;text-align:left;line-height:18px}.uni-steps__row-desc[data-v-78246752]{font-size:12px;line-height:14px;text-align:center}.uni-steps__column-desc[data-v-78246752]{font-size:%?24?%;text-align:left;line-height:18px}.uni-steps__row-container[data-v-78246752]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-steps__column-container[data-v-78246752]{\n\tdisplay:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;\n\twidth:30px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-steps__row-line-item[data-v-78246752]{\n\tdisplay:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:14px;line-height:14px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-steps__column-line-item[data-v-78246752]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-steps__row-line[data-v-78246752]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:1px;background-color:#999}.uni-steps__column-line[data-v-78246752]{width:1px;background-color:#999}.uni-steps__row-line--after[data-v-78246752]{-webkit-transform:translateX(1px);transform:translateX(1px)}.uni-steps__column-line--after[data-v-78246752]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-transform:translateY(1px);transform:translateY(1px)}.uni-steps__row-line--before[data-v-78246752]{-webkit-transform:translateX(-1px);transform:translateX(-1px)}.uni-steps__column-line--before[data-v-78246752]{height:6px;-webkit-transform:translateY(-1px);transform:translateY(-1px)}.uni-steps__row-circle[data-v-78246752]{width:5px;height:5px;border-radius:100px;background-color:#999;margin:0 3px}.uni-steps__column-circle[data-v-78246752]{width:5px;height:5px;border-radius:100px;background-color:#999;margin:4px 0 5px 0}.uni-steps__row-check[data-v-78246752]{margin:0 6px}.uni-steps__column-check[data-v-78246752]{height:14px;line-height:14px;margin:2px 0}",""])},"5efc":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'.uni-section[data-v-c3e2c238]{position:relative;\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\tmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\tfont-weight:400}\n\n.uni-section[data-v-c3e2c238]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n\n.uni-section__head[data-v-c3e2c238]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-c3e2c238]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-c3e2c238]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-c3e2c238]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-c3e2c238]{font-size:%?28?%;color:#333}.distraction[data-v-c3e2c238]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-c3e2c238]{font-size:%?24?%;color:#999}',""])},"66db":function(t,e,i){"use strict";var n,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-steps"},[i("v-uni-view",{class:["column"===t.direction?"uni-steps__column":"uni-steps__row"]},[i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-text-container":"uni-steps__row-text-container"]},t._l(t.options,function(e,n){return i("v-uni-view",{key:n,class:["column"===t.direction?"uni-steps__column-text":"uni-steps__row-text"]},[i("v-uni-text",{class:["column"===t.direction?"uni-steps__column-title":"uni-steps__row-title"],style:{color:n<=t.active?t.activeColor:t.deactiveColor}},[t._v(t._s(e.title))]),i("v-uni-text",{class:["column"===t.direction?"uni-steps__column-desc":"uni-steps__row-desc"],style:{color:n<=t.active?t.activeColor:t.deactiveColor}},[t._v(t._s(e.desc))])],1)}),1),i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-container":"uni-steps__row-container"]},t._l(t.options,function(e,n){return i("v-uni-view",{key:n,class:["column"===t.direction?"uni-steps__column-line-item":"uni-steps__row-line-item"]},[i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-line":"uni-steps__row-line","column"===t.direction?"uni-steps__column-line--before":"uni-steps__row-line--before"],style:{backgroundColor:n<=t.active&&0!==n?t.activeColor:0===n?"transparent":t.deactiveColor}}),n===t.active?i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-check":"uni-steps__row-check"]},[i("uni-icons",{attrs:{color:t.activeColor,type:"checkbox-filled",size:"14"}})],1):i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-circle":"uni-steps__row-circle"],style:{backgroundColor:n<t.active?t.activeColor:t.deactiveColor}}),i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-line":"uni-steps__row-line","column"===t.direction?"uni-steps__column-line--after":"uni-steps__row-line--after"],style:{backgroundColor:n<t.active&&n!==t.options.length-1?t.activeColor:n===t.options.length-1?"transparent":t.deactiveColor}})],1)}),1)],1)],1)},r=[];i.d(e,"b",function(){return o}),i.d(e,"c",function(){return r}),i.d(e,"a",function(){return n})},"699e":function(t,e,i){"use strict";var n=i("d5ba"),o=i.n(n);o.a},7058:function(t,e,i){"use strict";i.r(e);var n=i("c9aa"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=o.a},"81f1":function(t,e,i){var n=i("5efc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("a17eea20",n,!0,{sourceMap:!1,shadowMode:!1})},9165:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var o=n(i("96b2")),r={name:"UniSteps",components:{uniIcons:o.default},props:{direction:{type:String,default:"row"},activeColor:{type:String,default:"#1aad19"},deactiveColor:{type:String,default:"#999999"},active:{type:Number,default:0},options:{type:Array,default:function(){return[]}}},data:function(){return{}}};e.default=r},"9e39":function(t,e,i){"use strict";var n,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section"},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-section__content"},[i("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?i("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},r=[];i.d(e,"b",function(){return o}),i.d(e,"c",function(){return r}),i.d(e,"a",function(){return n})},bcc0:function(t,e,i){"use strict";i.r(e);var n=i("66db"),o=i("d499");for(var r in o)"default"!==r&&function(t){i.d(e,t,function(){return o[t]})}(r);i("699e");var a,c=i("f0c5"),l=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"78246752",null,!1,n["a"],a);e["default"]=l.exports},bfa7:function(t,e,i){"use strict";i.r(e);var n=i("044d"),o=i("315e");for(var r in o)"default"!==r&&function(t){i.d(e,t,function(){return o[t]})}(r);i("47c0");var a,c=i("f0c5"),l=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"209448c0",null,!1,n["a"],a);e["default"]=l.exports},c9aa:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},d499:function(t,e,i){"use strict";i.r(e);var n=i("9165"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=o.a},d5ba:function(t,e,i){var n=i("5a4f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("45436834",n,!0,{sourceMap:!1,shadowMode:!1})},e21f:function(t,e,i){"use strict";i.r(e);var n=i("9e39"),o=i("7058");for(var r in o)"default"!==r&&function(t){i.d(e,t,function(){return o[t]})}(r);i("ef65");var a,c=i("f0c5"),l=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"c3e2c238",null,!1,n["a"],a);e["default"]=l.exports},ef65:function(t,e,i){"use strict";var n=i("81f1"),o=i.n(n);o.a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-canvas-canvas"],{"0435":function(e,t,n){"use strict";var a=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("ac6a"),n("6c7b");var i=a(n("f499")),o=null,r={data:function(){return{title:"createContext",names:["rotate","scale","reset","translate","save","restore","drawImage","fillText","fill","stroke","clearRect","beginPath","closePath","moveTo","lineTo","rect","arc","quadraticCurveTo","bezierCurveTo","setFillStyle","setStrokeStyle","setGlobalAlpha","setShadow","setFontSize","setLineCap","setLineJoin","setLineWidth","setMiterLimit"]}},onReady:function(){o=uni.createCanvasContext("canvas",this)},methods:{toTempFilePath:function(){uni.canvasToTempFilePath({canvasId:"canvas",success:function(e){console.log(e.tempFilePath)},fail:function(e){console.error((0,i.default)(e))}})},handleCanvasButton:function(e){this[e]&&this[e]()},rotate:function(){o.beginPath(),o.rotate(10*Math.PI/180),o.rect(225,75,20,10),o.fill(),o.draw()},scale:function(){o.beginPath(),o.rect(25,25,50,50),o.stroke(),o.scale(2,2),o.beginPath(),o.rect(25,25,50,50),o.stroke(),o.draw()},reset:function(){o.beginPath(),o.setFillStyle("#000000"),o.setStrokeStyle("#000000"),o.setFontSize(10),o.setGlobalAlpha(1),o.setShadow(0,0,0,"rgba(0, 0, 0, 0)"),o.setLineCap("butt"),o.setLineJoin("miter"),o.setLineWidth(1),o.setMiterLimit(10),o.draw()},translate:function(){o.beginPath(),o.rect(10,10,100,50),o.fill(),o.translate(70,70),o.beginPath(),o.fill(),o.draw()},save:function(){o.beginPath(),o.setStrokeStyle("#00ff00"),o.save(),o.scale(2,2),o.setStrokeStyle("#ff0000"),o.rect(0,0,100,100),o.stroke(),o.restore(),o.rect(0,0,50,50),o.stroke(),o.draw()},restore:function(){[3,2,1].forEach(function(e){o.beginPath(),o.save(),o.scale(e,e),o.rect(10,10,100,100),o.stroke(),o.restore()}),o.draw()},drawImage:function(){o.drawImage("../../../static/uni.png",0,0),o.draw()},fillText:function(){o.setStrokeStyle("#ff0000"),o.beginPath(),o.moveTo(0,10),o.lineTo(300,10),o.stroke(),o.setFontSize(10),o.fillText("Hello World",0,30),o.setFontSize(20),o.fillText("Hello World",100,30),o.beginPath(),o.moveTo(0,30),o.lineTo(300,30),o.stroke(),o.draw()},fill:function(){o.beginPath(),o.rect(20,20,150,100),o.setStrokeStyle("#00ff00"),o.fill(),o.draw()},stroke:function(){o.beginPath(),o.moveTo(20,20),o.lineTo(20,100),o.lineTo(70,100),o.setStrokeStyle("#00ff00"),o.stroke(),o.draw()},clearRect:function(){o.setFillStyle("#ff0000"),o.beginPath(),o.rect(0,0,300,150),o.fill(),o.clearRect(20,20,100,50),o.draw()},beginPath:function(){o.beginPath(),o.setLineWidth(5),o.setStrokeStyle("#ff0000"),o.moveTo(0,75),o.lineTo(250,75),o.stroke(),o.beginPath(),o.setStrokeStyle("#0000ff"),o.moveTo(50,0),o.lineTo(150,130),o.stroke(),o.draw()},closePath:function(){o.beginPath(),o.setLineWidth(1),o.moveTo(20,20),o.lineTo(20,100),o.lineTo(70,100),o.closePath(),o.stroke(),o.draw()},moveTo:function(){o.beginPath(),o.moveTo(0,0),o.lineTo(300,150),o.stroke(),o.draw()},lineTo:function(){o.beginPath(),o.moveTo(20,20),o.lineTo(20,100),o.lineTo(70,100),o.stroke(),o.draw()},rect:function(){o.beginPath(),o.rect(20,20,150,100),o.stroke(),o.draw()},arc:function(){o.beginPath(),o.setLineWidth(2),o.arc(75,75,50,0,2*Math.PI,!0),o.moveTo(110,75),o.arc(75,75,35,0,Math.PI,!1),o.moveTo(65,65),o.arc(60,65,5,0,2*Math.PI,!0),o.moveTo(95,65),o.arc(90,65,5,0,2*Math.PI,!0),o.stroke(),o.draw()},quadraticCurveTo:function(){o.beginPath(),o.moveTo(20,20),o.quadraticCurveTo(20,100,200,20),o.stroke(),o.draw()},bezierCurveTo:function(){o.beginPath(),o.moveTo(20,20),o.bezierCurveTo(20,100,200,100,200,20),o.stroke(),o.draw()},setFillStyle:function(){["#fef957","rgb(242,159,63)","rgb(242,117,63)","#e87e51"].forEach(function(e,t){o.setFillStyle(e),o.beginPath(),o.rect(0+75*t,0,50,50),o.fill()}),o.draw()},setStrokeStyle:function(){["#fef957","rgb(242,159,63)","rgb(242,117,63)","#e87e51"].forEach(function(e,t){o.setStrokeStyle(e),o.beginPath(),o.rect(0+75*t,0,50,50),o.stroke()}),o.draw()},setGlobalAlpha:function(){o.setFillStyle("#000000"),[1,.5,.1].forEach(function(e,t){o.setGlobalAlpha(e),o.beginPath(),o.rect(0+75*t,0,50,50),o.fill()}),o.draw(),o.setGlobalAlpha(1)},setShadow:function(){o.beginPath(),o.setShadow(10,10,10,"rgba(0, 0, 0, 199)"),o.rect(10,10,100,100),o.fill(),o.draw()},setFontSize:function(){[10,20,30,40].forEach(function(e,t){o.setFontSize(e),o.fillText("Hello, world",20,20+40*t)}),o.draw()},setLineCap:function(){o.setLineWidth(10),["butt","round","square"].forEach(function(e,t){o.beginPath(),o.setLineCap(e),o.moveTo(20,20+20*t),o.lineTo(100,20+20*t),o.stroke()}),o.draw()},setLineJoin:function(){o.setLineWidth(10),["bevel","round","miter"].forEach(function(e,t){o.beginPath(),o.setLineJoin(e),o.moveTo(20+80*t,20),o.lineTo(100+80*t,50),o.lineTo(20+80*t,100),o.stroke()}),o.draw()},setLineWidth:function(){[2,4,6,8,10].forEach(function(e,t){o.beginPath(),o.setLineWidth(e),o.moveTo(20,20+20*t),o.lineTo(100,20+20*t),o.stroke()}),o.draw()},setMiterLimit:function(){o.setLineWidth(4),[2,4,6,8,10].forEach(function(e,t){o.beginPath(),o.setMiterLimit(e),o.moveTo(20+80*t,20),o.lineTo(100+80*t,50),o.lineTo(20+80*t,100),o.stroke()}),o.draw()}}};t.default=r},1128:function(e,t,n){"use strict";n.r(t);var a=n("48b6"),i=n("c3c6");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("694b");var r,l=n("f0c5"),s=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"2eeb687d",null,!1,a["a"],r);t["default"]=s.exports},"48b6":function(e,t,n){"use strict";var a,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"uni-common-mt"},[n("v-uni-canvas",{staticClass:"canvas-element",attrs:{"canvas-id":"canvas",id:"canvas"}}),n("v-uni-scroll-view",{staticClass:"canvas-buttons",attrs:{"scroll-y":"true"}},[e._l(e.names,function(t,a){return[n("v-uni-button",{key:a+"_0",staticClass:"canvas-button",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleCanvasButton(t)}}},[e._v(e._s(t))])]}),n("v-uni-button",{staticClass:"canvas-button",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toTempFilePath.apply(void 0,arguments)}}},[e._v("toTempFilePath")])],2)],1)],1)},o=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return a})},"694b":function(e,t,n){"use strict";var a=n("941a"),i=n.n(a);i.a},"6c7b":function(e,t,n){var a=n("5ca1");a(a.P,"Array",{fill:n("36bd")}),n("9c6c")("fill")},"941a":function(e,t,n){var a=n("981a");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("3fa1091b",a,!0,{sourceMap:!1,shadowMode:!1})},"981a":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".canvas-element-wrapper[data-v-2eeb687d]{display:block;margin-bottom:%?100?%}.canvas-element[data-v-2eeb687d]{width:100%;height:%?500?%;background-color:#fff}.canvas-buttons[data-v-2eeb687d]{padding:%?30?% %?50?% %?10?%;width:100%;height:%?360?%;box-sizing:border-box}.canvas-button[data-v-2eeb687d]{float:left;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:40px;line-height:1;width:%?300?%;margin:%?15?% %?12?%}",""])},c3c6:function(e,t,n){"use strict";n.r(t);var a=n("0435"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=i.a}}]);
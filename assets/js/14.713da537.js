(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{482:function(t,s,a){"use strict";a.r(s);var e=a(38),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[t._v("#")]),t._v(" Vue")]),t._v(" "),a("h2",{attrs:{id:"在线引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在线引入"}},[t._v("#")]),t._v(" 在线引入")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<script src="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"><\/script>\n')])])]),a("h2",{attrs:{id:"简单的例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单的例子"}},[t._v("#")]),t._v(" 简单的例子")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n    <script src="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"><\/script>\n</head>\n<body>\n<div id="app">\n{{message}}\n</div>\n<script>\n    var vm=new Vue({\n        el:"#app",\n        data:{\n            message:"你可真是个帅哥"\n        }\n    })\n<\/script>\n</body>\n</html>\n')])])]),a("h2",{attrs:{id:"v指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v指令"}},[t._v("#")]),t._v(" V指令")]),t._v(" "),a("h3",{attrs:{id:"v-bind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-bind"}},[t._v("#")]),t._v(" V-bind")]),t._v(" "),a("p",[a("span",{attrs:{tittle:t.message}},[t._v("将该元素节点的title特性和Vue实例的message属性保持一致")])]),t._v(" "),a("h3",{attrs:{id:"v-if"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-if"}},[t._v("#")]),t._v(" v-if")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<h1 v-if="ok">YES</h1>\n<h1 v-else>No</h1>\n')])])]),a("p",[t._v("当ok为true时，就只会显示YES")]),t._v(" "),a("p",[t._v("当ok为false时，就只会显示No")]),t._v(" "),a("h3",{attrs:{id:"v-for"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-for"}},[t._v("#")]),t._v(" v-for")]),t._v(" "),a("p",[t._v("循环data中的数组")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<li v-for="item in items">\n\t{{item.message}}\n</li>\n\ndata:{\n\titems:[\n\t\t{呜呼啦呼},\n\t\t{黑魔仙变身}\n\t]\n}\n')])])]),a("h3",{attrs:{id:"v-on"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-on"}},[t._v("#")]),t._v(" v-on")]),t._v(" "),a("p",[t._v("时间绑定，将按钮绑定methods中的方法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n    <script src="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"><\/script>\n</head>\n<body>\n<div id="app">\n<button v-on:click="sayhi">click me</button>\n</div>\n<script>\n    var vm=new Vue({\n        el:"#app",\n        data:{\n            message:"你可真是个帅哥"\n        },\n        methods:{\n            sayhi:function () {\n                alert(this.message);\n            }\n        }\n    })\n<\/script>\n</body>\n</html>\n')])])]),a("p",[t._v("注：methods必须为methods，如果是method会显示不成功！")]),t._v(" "),a("h3",{attrs:{id:"v-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-model"}},[t._v("#")]),t._v(" v-model")]),t._v(" "),a("p",[t._v("双向绑定")]),t._v(" "),a("h2",{attrs:{id:"axios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axios"}},[t._v("#")]),t._v(" Axios")]),t._v(" "),a("p",[t._v("Vue是视图层框架，作者尤雨溪严格遵守SoC（关注度分离原则），所以Vue.js并不包涵AJAX的通信功能，为解决通信问题，作者单独开发了一个名为vue-resource的插件。")]),t._v(" "),a("p",[t._v("在线引用：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<script src="https://unpkg.com/axios/dist/axios.min.js"><\/script>\n')])])]),a("h2",{attrs:{id:"计算属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算属性"}},[t._v("#")]),t._v(" 计算属性")]),t._v(" "),a("p",[t._v("计算属性是Vue的特色，")]),t._v(" "),a("p",[t._v("当调用Vue中的methods时需要加上括号，不然调用不成功")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/img/image-20210909103346172.png")}}),t._v(" "),a("p",[t._v("计算属性和methods方法的区别")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/img/image-20210909103734603.png")}}),t._v(" "),a("p",[t._v("上图代码运行结果为：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/img/image-20210909103754889.png")}}),t._v(" "),a("p",[t._v("重点：当我们在网页中调用vm.currentTime1()时，我们可以发现返回的结果是在变化的\n"),a("img",{attrs:{src:t.$withBase("/assets/img/image-20210909104033823.png")}})]),t._v(" "),a("p",[t._v("但我们调用vm.currentTime2()时，报错，显示不是方法，并且调用vm.currentTime2，返回的结果始终是一个值，说明vm.currentTime2是个属性不是方法")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/img/image-20210909104200316.png")}}),t._v(" "),a("h2",{attrs:{id:"slot-插槽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slot-插槽"}},[t._v("#")]),t._v(" slot 插槽")])])}),[],!1,null,null,null);s.default=r.exports}}]);
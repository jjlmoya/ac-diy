(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"2bf8":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p-ac p-ac--crafting"},[e("Layout",{attrs:{selected:this.id}},[e("div",{staticClass:"crafting-result"},t._l(t.crafts,(function(t){return e("CraftCard",{key:t.name,attrs:{image:t.image,name:t.name,materials:t.materials}})})),1)])],1)},r=[],n=e("ea2a"),i=e("abd7"),c=e("98ed"),u={name:"Home",components:{Layout:n["a"],CraftCard:i["a"]},data:function(){return{crafts:this.getCrafts(this.$route.params.id),id:this.$route.params.id}},methods:{getCrafts:function(t){return new c["a"]({serie:t}).getCrafts()}},watch:{"$route.params.id":function(t,a){this.crafts=this.getCrafts(t),this.id=t}}},f=u,o=(e("ee8d"),e("2877")),d=Object(o["a"])(f,s,r,!1,null,null,null);a["default"]=d.exports},5700:function(t,a,e){},ee8d:function(t,a,e){"use strict";var s=e("5700"),r=e.n(s);r.a}}]);
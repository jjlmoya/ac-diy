(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{189:function(t,e,n){var content=n(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("35aeddec",content,!0,{sourceMap:!1})},196:function(t,e,n){"use strict";var r=n(189);n.n(r).a},197:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,".crafting-result{display:grid;grid-gap:5px;grid-template-columns:repeat(auto-fill,minmax(130px,-webkit-max-content));grid-template-columns:repeat(auto-fill,minmax(130px,max-content));padding:5px}",""])},201:function(t,e,n){"use strict";n.r(e);var r=n(78),o=n(193),c=n(191),l=n(192),d=new c.a({title:"Recetas DIY - Nook Inc",description:"Listado de recetas del juego Animal Crossing New Horizons Interactivo"}),m={name:"Home",components:{Layout:r.a,CraftCard:o.a},data:function(){return{crafts:this.getCrafts()}},methods:{getCrafts:function(){return console.log("serie %o",this.$route.params.id),new l.a({serie:this.$route.params.id}).getCrafts()}},head:function(){return d.getMetas()}},f=(n(196),n(5)),component=Object(f.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"p-ac p-ac--crafting"},[e("Layout",{attrs:{selected:this.$route.params.id}},[e("div",{staticClass:"crafting-result"},this._l(this.crafts,(function(t){return e("CraftCard",{key:t.name,attrs:{image:t.image,name:t.name,materials:t.materials}})})),1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);
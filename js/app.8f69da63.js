(function(e){function webpackJsonpCallback(t){for(var o,a,i=t[0],c=t[1],_=t[2],s=0,l=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(l.length)l.shift()();return n.push.apply(n,_||[]),checkDeferredModules()}function checkDeferredModules(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,i=1;i<o.length;i++){var u=o[i];0!==r[u]&&(a=!1)}a&&(n.splice(t--,1),e=__webpack_require__(__webpack_require__.s=o[0]))}return e}var t={},r={app:0},n=[];function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e["default"]}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=webpackJsonpCallback,o=o.slice();for(var i=0;i<o.length;i++)webpackJsonpCallback(o[i]);var u=a;n.push([0,"chunk-vendors"]),checkDeferredModules()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),Appvue_type_template_id_aa086dee_render=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),r("router-view")],1)},o=[],a=(r("034f"),r("2877")),i={},u=Object(a["a"])(i,Appvue_type_template_id_aa086dee_render,o,!1,null,null,null),c=u.exports,_=r("8c4f"),Homevue_type_template_id_90b1b946_render=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}})])}],l={name:"home"},p=l,b=Object(a["a"])(p,Homevue_type_template_id_90b1b946_render,s,!1,null,null,null),f=b.exports,Aboutvue_type_template_id_03eb8cb5_render=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("button",{on:{click:e.goHome}},[e._v("Go Home")]),r("h1",[e._v("This is an about page")])])},d=[],g=r("d4ec"),h=function LingeringObject(e){Object(g["a"])(this,LingeringObject),Object.assign(this,e)},v={name:"about",mounted:function mounted(){this.$store.dispatch("setLingeringObj",new h({id:Math.floor(1e5*Math.random()+1)}))},beforeDestroy:function beforeDestroy(){console.log("About- beforeDestroy()")},watch:{"$store.state.lingeringObj":function $storeStateLingeringObj(){console.log("lingeringObj changed!")}},methods:{goHome:function goHome(){this.$router.push("/")}},beforeRouteLeave:function beforeRouteLeave(e,t,r){this.$store.dispatch("setLingeringObj",null),r()}},m=v,w=Object(a["a"])(m,Aboutvue_type_template_id_03eb8cb5_render,d,!1,null,null,null),k=w.exports;n["a"].use(_["a"]);var O=[{path:"/",name:"home",component:f},{path:"/about",name:"about",component:k}],j=new _["a"]({mode:"history",base:"/",routes:O}),y=j,q=r("2f62");n["a"].use(q["a"]);var L=new q["a"].Store({state:{lingeringObj:null},mutations:{SET_LINGERING_OBJ:function SET_LINGERING_OBJ(e,t){return e.lingeringObj=t}},actions:{setLingeringObj:function setLingeringObj(e,t){var r=e.commit;e.state;r("SET_LINGERING_OBJ",t)}},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:y,store:L,render:function render(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.8f69da63.js.map
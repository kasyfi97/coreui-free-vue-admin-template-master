(function(n){function e(e){for(var c,u,o=e[0],d=e[1],h=e[2],f=0,i=[];f<o.length;f++)u=o[f],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&i.push(a[u][0]),a[u]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(n[c]=d[c]);l&&l(e);while(i.length)i.shift()();return r.push.apply(r,h||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],c=!0,u=1;u<t.length;u++){var o=t[u];0!==a[o]&&(c=!1)}c&&(r.splice(e--,1),n=d(d.s=t[0]))}return n}var c={},u={app:0},a={app:0},r=[];function o(n){return d.p+"js/"+({}[n]||n)+"."+{"chunk-162e73f2":"44e84565","chunk-21154db2":"e6031acd","chunk-21e04c84":"f4e9e44b","chunk-2232f01c":"a41cba4a","chunk-6f95f046":"c20caa78","chunk-2b1c907f":"2143434b","chunk-2b6e1efa":"1d589c1d","chunk-2d0a400c":"7a9cd139","chunk-2d0a443e":"130bd5fc","chunk-2d0ab2eb":"26257c67","chunk-2d0ae5e6":"c9ae1c75","chunk-2d0ae943":"da09ab53","chunk-2d0b1bf6":"b99084c2","chunk-2d0b59e9":"dbfe059e","chunk-2d0c4303":"2adef680","chunk-2d0d3e27":"3a85dbb1","chunk-2d0de6aa":"ec59ae46","chunk-2d0e1d93":"92738e13","chunk-2d0f06bd":"a3885d7f","chunk-2d208124":"e3dc3030","chunk-2d2131a8":"ec78cf96","chunk-2d21444c":"26439aab","chunk-2d2183eb":"aec27ffc","chunk-2d21e6d0":"937fe76e","chunk-2d21eae7":"64542595","chunk-2d222779":"9f5c6342","chunk-2d224eb7":"78ecbde1","chunk-2d226319":"73c84412","chunk-2d22c303":"1c78365c","chunk-2d22d610":"cb2e417c","chunk-2d23777b":"1076a9b9","chunk-380f0973":"f38c5c01","chunk-1dfa7f7a":"13122aa5","chunk-2d0f0c1b":"0e4b9060","chunk-c9cc1624":"21268ae4","chunk-c9f73eae":"bc3a754c","chunk-53f06a04":"d7217b97","chunk-030e22df":"497a48b8","chunk-15622660":"9c691090","chunk-399560eb":"644856c4","chunk-4e23d04d":"5d873541","chunk-a9e940c8":"fa9f76d6","chunk-aaaa6da8":"44bc7e90"}[n]+".js"}function d(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(n){var e=[],t={"chunk-21154db2":1,"chunk-2b1c907f":1,"chunk-1dfa7f7a":1,"chunk-c9cc1624":1,"chunk-a9e940c8":1,"chunk-aaaa6da8":1};u[n]?e.push(u[n]):0!==u[n]&&t[n]&&e.push(u[n]=new Promise((function(e,t){for(var c="css/"+({}[n]||n)+"."+{"chunk-162e73f2":"31d6cfe0","chunk-21154db2":"0918d9e4","chunk-21e04c84":"31d6cfe0","chunk-2232f01c":"31d6cfe0","chunk-6f95f046":"31d6cfe0","chunk-2b1c907f":"056d23d5","chunk-2b6e1efa":"31d6cfe0","chunk-2d0a400c":"31d6cfe0","chunk-2d0a443e":"31d6cfe0","chunk-2d0ab2eb":"31d6cfe0","chunk-2d0ae5e6":"31d6cfe0","chunk-2d0ae943":"31d6cfe0","chunk-2d0b1bf6":"31d6cfe0","chunk-2d0b59e9":"31d6cfe0","chunk-2d0c4303":"31d6cfe0","chunk-2d0d3e27":"31d6cfe0","chunk-2d0de6aa":"31d6cfe0","chunk-2d0e1d93":"31d6cfe0","chunk-2d0f06bd":"31d6cfe0","chunk-2d208124":"31d6cfe0","chunk-2d2131a8":"31d6cfe0","chunk-2d21444c":"31d6cfe0","chunk-2d2183eb":"31d6cfe0","chunk-2d21e6d0":"31d6cfe0","chunk-2d21eae7":"31d6cfe0","chunk-2d222779":"31d6cfe0","chunk-2d224eb7":"31d6cfe0","chunk-2d226319":"31d6cfe0","chunk-2d22c303":"31d6cfe0","chunk-2d22d610":"31d6cfe0","chunk-2d23777b":"31d6cfe0","chunk-380f0973":"31d6cfe0","chunk-1dfa7f7a":"c3f5767f","chunk-2d0f0c1b":"31d6cfe0","chunk-c9cc1624":"fae9542f","chunk-c9f73eae":"31d6cfe0","chunk-53f06a04":"31d6cfe0","chunk-030e22df":"31d6cfe0","chunk-15622660":"31d6cfe0","chunk-399560eb":"31d6cfe0","chunk-4e23d04d":"31d6cfe0","chunk-a9e940c8":"5413d9a1","chunk-aaaa6da8":"41c3f70c"}[n]+".css",a=d.p+c,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var h=r[o],f=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(f===c||f===a))return e()}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){h=i[o],f=h.getAttribute("data-href");if(f===c||f===a)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var c=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete u[n],l.parentNode.removeChild(l),t(r)},l.href=a;var s=document.getElementsByTagName("head")[0];s.appendChild(l)})).then((function(){u[n]=0})));var c=a[n];if(0!==c)if(c)e.push(c[2]);else{var r=new Promise((function(e,t){c=a[n]=[e,t]}));e.push(c[2]=r);var h,f=document.createElement("script");f.charset="utf-8",f.timeout=120,d.nc&&f.setAttribute("nonce",d.nc),f.src=o(n);var i=new Error;h=function(e){f.onerror=f.onload=null,clearTimeout(l);var t=a[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src;i.message="Loading chunk "+n+" failed.\n("+c+": "+u+")",i.name="ChunkLoadError",i.type=c,i.request=u,t[1](i)}a[n]=void 0}};var l=setTimeout((function(){h({type:"timeout",target:f})}),12e4);f.onerror=f.onload=h,document.head.appendChild(f)}return Promise.all(e)},d.m=n,d.c=c,d.d=function(n,e,t){d.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},d.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},d.t=function(n,e){if(1&e&&(n=d(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)d.d(t,c,function(e){return n[e]}.bind(null,c));return t},d.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="",d.oe=function(n){throw console.error(n),n};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],f=h.push.bind(h);h.push=e,h=h.slice();for(var i=0;i<h.length;i++)e(h[i]);var l=f;r.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("7514"),t("1c4c"),t("8a81"),t("f466"),t("579f"),t("587a");var c=t("a026"),u=t("5f5b"),a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("router-view")},r=[],o={name:"app"},d=o,h=(t("5c0b"),t("2877")),f=Object(h["a"])(d,a,r,!1,null,null,null),i=f.exports,l=t("8c4f"),s=(localStorage.getItem("tokena"),function(){return Promise.all([t.e("chunk-380f0973"),t.e("chunk-c9f73eae")]).then(t.bind(null,"e8c5"))}),p=function(){return Promise.all([t.e("chunk-380f0973"),t.e("chunk-21e04c84"),t.e("chunk-1dfa7f7a")]).then(t.bind(null,"7277"))},b=function(){return Promise.all([t.e("chunk-21e04c84"),t.e("chunk-6f95f046")]).then(t.bind(null,"6923"))},k=function(){return Promise.all([t.e("chunk-21e04c84"),t.e("chunk-2232f01c")]).then(t.bind(null,"37cc"))},m=function(){return Promise.all([t.e("chunk-380f0973"),t.e("chunk-c9cc1624")]).then(t.bind(null,"1292"))},g=function(){return t.e("chunk-21154db2").then(t.bind(null,"da19"))},v=function(){return Promise.all([t.e("chunk-380f0973"),t.e("chunk-2d0f0c1b")]).then(t.bind(null,"9e70"))},w=function(){return Promise.all([t.e("chunk-53f06a04"),t.e("chunk-030e22df")]).then(t.bind(null,"2dc9"))},y=function(){return Promise.all([t.e("chunk-53f06a04"),t.e("chunk-4e23d04d")]).then(t.bind(null,"4685"))},P=function(){return Promise.all([t.e("chunk-53f06a04"),t.e("chunk-399560eb")]).then(t.bind(null,"b927"))},j=function(){return Promise.all([t.e("chunk-53f06a04"),t.e("chunk-15622660")]).then(t.bind(null,"fcd3"))},B=function(){return t.e("chunk-2d22d610").then(t.bind(null,"f6f0"))},C=function(){return t.e("chunk-2d224eb7").then(t.bind(null,"e1d9"))},O=function(){return t.e("chunk-2d0b1bf6").then(t.bind(null,"20bd"))},S=function(){return t.e("chunk-2d0ae943").then(t.bind(null,"0b50"))},T=function(){return t.e("chunk-2d208124").then(t.bind(null,"a2da"))},A=function(){return t.e("chunk-2d0a443e").then(t.bind(null,"0668"))},_=function(){return t.e("chunk-2d21eae7").then(t.bind(null,"d731"))},E=function(){return t.e("chunk-2d0de6aa").then(t.bind(null,"860f"))},x=function(){return t.e("chunk-2d0ab2eb").then(t.bind(null,"13d7"))},L=function(){return t.e("chunk-2d0d3e27").then(t.bind(null,"5f55"))},N=function(){return t.e("chunk-2d0f06bd").then(t.bind(null,"9bfd"))},D=function(){return t.e("chunk-2d21444c").then(t.bind(null,"afe6"))},I=function(){return t.e("chunk-aaaa6da8").then(t.bind(null,"c3fc"))},U=function(){return t.e("chunk-2d222779").then(t.bind(null,"cf77"))},M=function(){return t.e("chunk-2d2183eb").then(t.bind(null,"c9ba"))},F=function(){return t.e("chunk-a9e940c8").then(t.bind(null,"261a"))},J=function(){return t.e("chunk-2d0a400c").then(t.bind(null,"051b"))},q=function(){return t.e("chunk-2d21e6d0").then(t.bind(null,"d608"))},G=function(){return t.e("chunk-2d0e1d93").then(t.bind(null,"7bd6"))},H=function(){return t.e("chunk-2d0ae5e6").then(t.bind(null,"0a87"))},K=function(){return t.e("chunk-2d226319").then(t.bind(null,"e82b"))},R=function(){return t.e("chunk-2d0b59e9").then(t.bind(null,"1a58"))},W=function(){return t.e("chunk-2d23777b").then(t.bind(null,"faf0"))},$=function(){return t.e("chunk-2d0c4303").then(t.bind(null,"3a87"))},z=function(){return t.e("chunk-2d22c303").then(t.bind(null,"f1bd"))},Q=function(){return t.e("chunk-162e73f2").then(t.bind(null,"8b48"))},V=function(){return t.e("chunk-2d2131a8").then(t.bind(null,"aaf8"))},X=function(){return t.e("chunk-2b1c907f").then(t.bind(null,"dc02"))},Y=function(){return t.e("chunk-2b6e1efa").then(t.bind(null,"eeca"))};function Z(){return[{path:"/",redirect:"/pages/login",name:"Home",component:s,children:[{path:"dashboard",name:"Dashboard",component:p},{path:"charts",name:"Charts",component:b},{path:"widgets",name:"Widgets",component:k},{path:"users",meta:{label:"Users"},component:{render:function(n){return n("router-view")}},children:[{path:"",component:X},{path:":id",meta:{label:"User Details"},name:"User",component:Y}]},{path:"base",redirect:"/base/cards",name:"Base",component:{render:function(n){return n("router-view")}},children:[{path:"cards",name:"Cards",component:m},{path:"forms",name:"Forms",component:g},{path:"switches",name:"Switches",component:v},{path:"tables",name:"Tables",component:w},{path:"users",name:"Users",component:P},{path:"tabledokumen",name:"Tabledokumen",component:y},{path:"tabledokumenDetail",name:"TabledokumenDetail",component:j},{path:"tabs",name:"Tabs",component:B},{path:"breadcrumbs",name:"Breadcrumbs",component:C},{path:"carousels",name:"Carousels",component:O},{path:"collapses",name:"Collapses",component:S},{path:"jumbotrons",name:"Jumbotrons",component:T},{path:"list-groups",name:"List Groups",component:A},{path:"navs",name:"Navs",component:_},{path:"navbars",name:"Navbars",component:E},{path:"paginations",name:"Paginations",component:x},{path:"popovers",name:"Popovers",component:L},{path:"progress-bars",name:"Progress Bars",component:N},{path:"tooltips",name:"Tooltips",component:D}]},{path:"buttons",redirect:"/buttons/standard-buttons",name:"Buttons",component:{render:function(n){return n("router-view")}},children:[{path:"standard-buttons",name:"Standard Buttons",component:I},{path:"button-groups",name:"Button Groups",component:U},{path:"dropdowns",name:"Dropdowns",component:M},{path:"brand-buttons",name:"Brand Buttons",component:F}]},{path:"icons",redirect:"/icons/font-awesome",name:"Icons",component:{render:function(n){return n("router-view")}},children:[{path:"coreui-icons",name:"CoreUI Icons",component:H},{path:"flags",name:"Flags",component:J},{path:"font-awesome",name:"Font Awesome",component:q},{path:"simple-line-icons",name:"Simple Line Icons",component:G}]},{path:"notifications",redirect:"/notifications/alerts",name:"Notifications",component:{render:function(n){return n("router-view")}},children:[{path:"alerts",name:"Alerts",component:K},{path:"badges",name:"Badges",component:R},{path:"modals",name:"Modals",component:W}]}]},{path:"/pages",redirect:"/pages/404",name:"Pages",component:{render:function(n){return n("router-view")}},children:[{path:"404",name:"Page404",component:$},{path:"500",name:"Page500",component:z},{path:"login",name:"Login",component:Q},{path:"register",name:"Register",component:V}]}]}c["default"].use(l["a"]);var nn=new l["a"]({mode:"hash",linkActiveClass:"open active",scrollBehavior:function(){return{y:0}},routes:Z()}),en=t("2ee4"),tn=t.n(en);t("da93");c["default"].use(tn.a),c["default"].use(u["a"]),window.axios=t("bc3a"),new c["default"]({el:"#app",router:nn,template:"<App/>",components:{App:i},data:{data:null}})},"5c0b":function(n,e,t){"use strict";var c=t("e332"),u=t.n(c);u.a},e332:function(n,e,t){}});
//# sourceMappingURL=app.bba4764a.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ad54ada"],{"456d":function(t,a,s){var e=s("4bf8"),i=s("0d58");s("5eda")("keys",(function(){return function(t){return i(e(t))}}))},"54a1":function(t,a,s){s("6c1c"),s("1654"),t.exports=s("95d5")},"5eda":function(t,a,s){var e=s("5ca1"),i=s("8378"),r=s("79e5");t.exports=function(t,a){var s=(i.Object||{})[t]||Object[t],l={};l[t]=a(s),e(e.S+e.F*r((function(){s(1)})),"Object",l)}},"75fc":function(t,a,s){"use strict";var e=s("a745"),i=s.n(e);function r(t){if(i()(t)){for(var a=0,s=new Array(t.length);a<t.length;a++)s[a]=t[a];return s}}var l=s("774e"),n=s.n(l),o=s("c8bb"),c=s.n(o);function m(t){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return n()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){return r(t)||m(t)||d()}s.d(a,"a",(function(){return u}))},"774e":function(t,a,s){t.exports=s("d2d5")},"7f7f":function(t,a,s){var e=s("86cc").f,i=Function.prototype,r=/^\s*function ([^ (]*)/,l="name";l in i||s("9e1e")&&e(i,l,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},"95d5":function(t,a,s){var e=s("40c3"),i=s("5168")("iterator"),r=s("481b");t.exports=s("584a").isIterable=function(t){var a=Object(t);return void 0!==a[i]||"@@iterator"in a||r.hasOwnProperty(e(a))}},a745:function(t,a,s){t.exports=s("f410")},ac4d:function(t,a,s){s("3a72")("asyncIterator")},c8bb:function(t,a,s){t.exports=s("54a1")},e8c5:function(t,a,s){"use strict";s.r(a);var e,i,r,l,n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"app"},[s("DefaultHeader"),s("div",{staticClass:"app-body"},[s("AppSidebar",{attrs:{fixed:""}},[s("SidebarHeader"),s("SidebarForm"),s("SidebarNav",{attrs:{navItems:t.nav}}),s("SidebarFooter"),s("SidebarMinimizer")],1),s("main",{staticClass:"main"},[s("Breadcrumb",{attrs:{list:t.list}}),s("div",{staticClass:"container-fluid"},[s("router-view")],1)],1),s("AppAside",{attrs:{fixed:""}},[s("DefaultAside")],1)],1),s("DefaultFooter")],1)},o=[],c=(s("7f7f"),{items:[{name:"Dashboard",url:"/dashboard",icon:"icon-speedometer",badge:{variant:"primary",text:"NEW"},attributes:{disabled:!0}},{title:!0,name:"Menu",class:"",wrapper:{element:"",attributes:{}}},{name:"PIC",url:"/base/tablepic",icon:"icon-puzzle"},{name:"Mitra",url:"/base/tables",icon:"icon-puzzle"},{name:"Dokumen",url:"/base/tabledokumen",icon:"icon-puzzle"},{name:"Users",url:"/base/Users",icon:"icon-puzzle"},{name:"Charts",url:"/charts",icon:"icon-pie-chart"},{divider:!0},{title:!0,name:"Extras"},{name:"Pages",url:"/pages",icon:"icon-star",children:[{name:"Login",url:"/pages/login",icon:"icon-star"}]}]}),m=s("f1fb"),d=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("b-tabs",[s("b-tab",[s("template",{slot:"title"},[s("i",{staticClass:"icon-list"})]),s("b-list-group",{staticClass:"list-group-accent"},[s("b-list-group-item",{staticClass:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},[t._v("\n        Today\n      ")]),s("b-list-group-item",{staticClass:"list-group-item-accent-warning list-group-item-divider",attrs:{href:"#"}},[s("div",{staticClass:"avatar float-right"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",[t._v("Meeting with\n          "),s("strong",[t._v("Lucas")])]),s("small",{staticClass:"text-muted mr-3"},[s("i",{staticClass:"icon-calendar"}),t._v("  1 - 3pm\n        ")]),s("small",{staticClass:"text-muted"},[s("i",{staticClass:"icon-location-pin"}),t._v("  Palo Alto, CA\n        ")])]),s("b-list-group-item",{staticClass:"list-group-item-accent-info",attrs:{href:"#"}},[s("div",{staticClass:"avatar float-right"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/4.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",[t._v("Skype with "),s("strong",[t._v("Megan")])]),s("small",{staticClass:"text-muted mr-3"},[s("i",{staticClass:"icon-calendar"}),t._v("  4 - 5pm")]),s("small",{staticClass:"text-muted"},[s("i",{staticClass:"icon-social-skype"}),t._v("  On-line")])]),s("hr",{staticClass:"transparent mx-3 my-0"}),s("b-list-group-item",{staticClass:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},[t._v("\n        Tomorrow\n      ")]),s("b-list-group-item",{staticClass:"list-group-item-accent-danger list-group-item-divider",attrs:{href:"#"}},[s("div",[t._v("New UI Project - "),s("strong",[t._v("deadline")])]),s("small",{staticClass:"text-muted mr-3"},[s("i",{staticClass:"icon-calendar"}),t._v("  10 - 11pm")]),s("small",{staticClass:"text-muted"},[s("i",{staticClass:"icon-home"}),t._v("  creativeLabs HQ")]),s("div",{staticClass:"avatars-stack mt-2"},[s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/2.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/3.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/4.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/5.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/6.jpg",alt:"admin@bootstrapmaster.com"}})])])]),s("b-list-group-item",{staticClass:"list-group-item-accent-success list-group-item-divider",attrs:{href:"#"}},[s("div",[s("strong",[t._v("#10 Startups.Garden")]),t._v(" Meetup")]),s("small",{staticClass:"text-muted mr-3"},[s("i",{staticClass:"icon-calendar"}),t._v("  1 - 3pm")]),s("small",{staticClass:"text-muted"},[s("i",{staticClass:"icon-location-pin"}),t._v("  Palo Alto, CA")])]),s("b-list-group-item",{staticClass:"list-group-item-accent-primary list-group-item-divider",attrs:{href:"#"}},[s("div",[s("strong",[t._v("Team meeting")])]),s("small",{staticClass:"text-muted mr-3"},[s("i",{staticClass:"icon-calendar"}),t._v("  4 - 6pm")]),s("small",{staticClass:"text-muted"},[s("i",{staticClass:"icon-home"}),t._v("  creativeLabs HQ")]),s("div",{staticClass:"avatars-stack mt-2"},[s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/2.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/3.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/4.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/5.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/6.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"avatar avatar-xs"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/8.jpg",alt:"admin@bootstrapmaster.com"}})])])])],1)],2),s("b-tab",[s("template",{slot:"title"},[s("i",{staticClass:"icon-speech"})]),s("div",{staticClass:"p-3"},[s("div",{staticClass:"message"},[s("div",{staticClass:"py-3 pb-5 mr-3 float-left"},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}}),s("b-badge",{staticClass:"avatar-status",attrs:{variant:"success"}})],1)]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lukasz Holeczek")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("1:52 PM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v("Lorem ipsum dolor sit amet")]),s("small",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")])]),s("hr"),s("div",{staticClass:"message"},[s("div",{staticClass:"py-3 pb-5 mr-3 float-left"},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}}),s("b-badge",{staticClass:"avatar-status",attrs:{variant:"danger"}})],1)]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lukasz Holeczek")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("1:52 PM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v("Lorem ipsum dolor sit amet")]),s("small",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")])]),s("hr"),s("div",{staticClass:"message"},[s("div",{staticClass:"py-3 pb-5 mr-3 float-left"},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}}),s("b-badge",{staticClass:"avatar-status",attrs:{variant:"info"}})],1)]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lukasz Holeczek")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("1:52 PM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v("Lorem ipsum dolor sit amet")]),s("small",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")])]),s("hr"),s("div",{staticClass:"message"},[s("div",{staticClass:"py-3 pb-5 mr-3 float-left"},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}}),s("b-badge",{staticClass:"avatar-status",attrs:{variant:"warning"}})],1)]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lukasz Holeczek")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("1:52 PM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v("Lorem ipsum dolor sit amet")]),s("small",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")])]),s("hr"),s("div",{staticClass:"message"},[s("div",{staticClass:"py-3 pb-5 mr-3 float-left"},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}}),s("b-badge",{staticClass:"avatar-status",attrs:{variant:"dark"}})],1)]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lukasz Holeczek")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("1:52 PM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v("Lorem ipsum dolor sit amet")]),s("small",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")])])])],2),s("b-tab",[s("template",{slot:"title"},[s("i",{staticClass:"icon-settings"})]),s("div",{staticClass:"p-3"},[s("h6",[t._v("Settings")]),s("div",{staticClass:"aside-options"},[s("div",{staticClass:"clearfix mt-4"},[s("small",[s("b",[t._v("Option 1")])]),s("c-switch",{staticClass:"float-right",attrs:{color:"success",label:"",variant:"pill",size:"sm",checked:""}})],1),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")])])]),s("div",{staticClass:"aside-options"},[s("div",{staticClass:"clearfix mt-3"},[s("small",[s("b",[t._v("Option 2")])]),s("c-switch",{staticClass:"float-right",attrs:{color:"success",label:"",variant:"pill",size:"sm"}})],1),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")])])]),s("div",{staticClass:"aside-options"},[s("div",{staticClass:"clearfix mt-3"},[s("small",[s("b",[t._v("Option 3")])]),s("c-switch",{staticClass:"float-right",attrs:{color:"success",label:"",variant:"pill",size:"sm",disabled:"",defaultChecked:""}})],1),s("div",[s("small",{staticClass:"text-muted"},[t._v("Disabled option.")])])]),s("div",{staticClass:"aside-options"},[s("div",{staticClass:"clearfix mt-3"},[s("small",[s("b",[t._v("Option 4")])]),s("c-switch",{staticClass:"float-right",attrs:{color:"success",label:"",variant:"pill",size:"sm",checked:""}})],1)]),s("hr"),s("h6",[t._v("System Utilization")]),s("div",{staticClass:"text-uppercase mb-1 mt-4"},[s("small",[s("b",[t._v("CPU Usage")])])]),s("b-progress",{staticClass:"progress-xs",attrs:{height:"{}",variant:"info",value:25}}),s("small",{staticClass:"text-muted"},[t._v("348 Processes. 1/4 Cores.")]),s("div",{staticClass:"text-uppercase mb-1 mt-2"},[s("small",[s("b",[t._v("Memory Usage")])])]),s("b-progress",{staticClass:"progress-xs",attrs:{height:"{}",variant:"warning",value:70}}),s("small",{staticClass:"text-muted"},[t._v("11444GB/16384MB")]),s("div",{staticClass:"text-uppercase mb-1 mt-2"},[s("small",[s("b",[t._v("SSD 1 Usage")])])]),s("b-progress",{staticClass:"progress-xs",attrs:{height:"{}",variant:"danger",value:95}}),s("small",{staticClass:"text-muted"},[t._v("243GB/256GB")]),s("div",{staticClass:"text-uppercase mb-1 mt-2"},[s("small",[s("b",[t._v("SSD 2 Usage")])])]),s("b-progress",{staticClass:"progress-xs",attrs:{height:"{}",variant:"success",value:10}}),s("small",{staticClass:"text-muted"},[t._v("25GB/256GB")])],1)],2)],1)},u=[],v={name:"DefaultAside",components:{cSwitch:m["o"]}},g=v,p=s("2877"),b=Object(p["a"])(g,d,u,!1,null,null,null),C=b.exports,f=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("AppHeaderDropdown",{attrs:{right:"","no-caret":""}},[s("template",{slot:"header"},[s("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/6.jpg",alt:"admin@bootstrapmaster.com"}})]),t._v("\\\n  "),s("template",{slot:"dropdown"},[s("b-dropdown-header",{staticClass:"text-center",attrs:{tag:"div"}},[s("strong",[t._v("Dokumen")])]),s("b-dropdown-item",[s("i",{staticClass:"fa fa-tasks"}),t._v(" Expired\n      "),s("b-badge",{attrs:{variant:"danger"}},[t._v(t._s(t.itemsCount))])],1),s("b-dropdown-item",[s("i",{staticClass:"fa fa-comments"}),t._v(" Warning\n      "),s("b-badge",{attrs:{variant:"warning"}},[t._v(t._s(t.itemsCount2))])],1),s("b-dropdown-header",{staticClass:"text-center",attrs:{tag:"div"}},[s("strong",[t._v("Akun")])]),s("b-dropdown-item",{on:{click:t.Logout}},[s("i",{staticClass:"fa fa-lock"}),t._v("Logout")])],1)],2)},h=[],_=(s("ac4d"),s("456d"),s("75fc")),x=(s("cadf"),s("8615"),s("ac6a"),s("96cf"),s("3b8d")),k=0,w=0,j=localStorage.getItem("expired"),D=localStorage.getItem("warning"),S={name:"DefaultHeaderDropdownAccnt",components:{AppHeaderDropdown:m["g"]},data:function(){return{itemsCount:j,itemsCount2:D}},methods:{Logout:function(){localStorage.setItem("tokena",null),this.$router.push({path:"/pages/login"}),console.log(localStorage.getItem("tokena"))}},mounted:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){var a,s,n,o,c,m,d,u,v,g,p,b,C,f,h,x,j,D,S,y,A,L,z,O;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=localStorage.getItem("tokena"),t.next=3,axios.post("http://dks.it.maranatha.edu:3000/dokumen",{token:i,_method:"GET"}).catch((function(t){return console.log("Ada Error dengan Dokumen")}));case 3:return e=t.sent,t.next=6,axios.post("http://dks.it.maranatha.edu:3000/mitra",{token:i,_method:"GET"}).catch((function(t){return console.log("Ada Error dengan Mitra")}));case 6:for(r=t.sent,a=[],l=[],Object.values(r.data.values).forEach((function(t){a.push(t)})),console.log(a),[],s=a,n=JSON.parse(JSON.stringify(s)),o=0;o<n.length;o++)l.push({value:n[o]["id_mitra"],text:n[o]["nama_mitra"]});for(c=[],[],c=Object(_["a"])(e.data.values),m=!0,d=!1,u=void 0,t.prev=21,v=c[Symbol.iterator]();!(m=(g=v.next()).done);m=!0)p=g.value,p.Tahun=p.id,p.No_Dokumen=p.no_dokumen,p.Judul_Dokumen=p.judul_dokumen,p.Manfaat_Dokumen=p.manfaat_dokumen,p.Tanggal_Awal=p.tgl_awal,p.Tanggal_Akhir=p.tgl_akhir,p.Dokumen_Ref=p.dokumen_ref,p.No_Dokumen=p.no_dokumen,p.Link_Dokumen=p.link_dokumen,p.Link_Peserta=p.link_peserta,p.Waktu_Peringatan=p.warningtime,p.Jumlah_Pembaharuan=p.renew_count,p.Alasan=p.reason,p.Dihapus=p.is_deleted,p.Perbaharui=p.autorenew,p.Jenis_Dokumen=p.jenis_dokumen_id,p.Evaluasi=p.evaluation,delete p.id,delete p.no_dokumen,delete p.judul_dokumen,delete p.manfaat_dokumen,delete p.tgl_awal,delete p.tgl_akhir,delete p.dokumen_ref,delete p.no_dokumen,delete p.link_dokumen,delete p.link_peserta,delete p.warningtime,delete p.renew_count,delete p.reason,delete p.is_deleted,delete p.autorenew,delete p.jenis_dokumen_id,delete p.evaluation;t.next=29;break;case 25:t.prev=25,t.t0=t["catch"](21),d=!0,u=t.t0;case 29:t.prev=29,t.prev=30,m||null==v.return||v.return();case 32:if(t.prev=32,!d){t.next=35;break}throw u;case 35:return t.finish(32);case 36:return t.finish(29);case 37:for(c.map((function(t){return t.mitra_1=t.mitras[0].nama_mitra,t.mitra_2=t.mitras[1].nama_mitra,t.mitras=t.mitras.length,t})),b=!0,C=!1,f=void 0,t.prev=41,h=c[Symbol.iterator]();!(b=(x=h.next()).done);b=!0)j=x.value,delete j.mitras;t.next=49;break;case 45:t.prev=45,t.t1=t["catch"](41),C=!0,f=t.t1;case 49:t.prev=49,t.prev=50,b||null==h.return||h.return();case 52:if(t.prev=52,!C){t.next=55;break}throw f;case 55:return t.finish(52);case 56:return t.finish(49);case 57:D=new Date,S=D.getMonth(),y=D.getDay(),A=D.getFullYear(),L=new Date(A,S,y),z=new Date("2020-06-30"),console.log(L),console.log(z),z>L?console.log("abis"):console.log("ada"),O=[],c.forEach((function(t){Object.keys(t).forEach((function(a){O.push(t[a])}));var a=new Date(t.Tanggal_Akhir);L>a?k+=1:w+=1,console.log(k),console.log(w)})),localStorage.setItem("expired",k),localStorage.setItem("warning",w);case 70:case"end":return t.stop()}}),t,null,[[21,25,29,37],[30,,32,36],[41,45,49,57],[50,,52,56]])})));function a(){return t.apply(this,arguments)}return a}()},y=S,A=Object(p["a"])(y,f,h,!1,null,null,null),L=A.exports,z=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("AppHeader",{attrs:{fixed:""}},[s("SidebarToggler",{staticClass:"d-lg-none",attrs:{display:"md",mobile:""}}),s("b-link",{staticClass:"navbar-brand",attrs:{to:"#"}},[s("img",{staticClass:"navbar-brand-full",attrs:{src:"img/brand/maranatha.png",width:"89",height:"25",alt:"CoreUI Logo"}}),s("img",{staticClass:"navbar-brand-minimized",attrs:{src:"img/brand/sygnet.svg",width:"30",height:"30",alt:"CoreUI Logo"}})]),s("SidebarToggler",{staticClass:"d-md-down-none",attrs:{display:"lg",defaultOpen:!0}}),s("b-navbar-nav",{staticClass:"d-md-down-none"},[s("b-nav-item",{staticClass:"px-3",attrs:{to:"/dashboard"}},[t._v("Dashboard")])],1),s("b-navbar-nav",{staticClass:"ml-auto"},[s("DefaultHeaderDropdownAccnt")],1)],1)},O=[],H={name:"DefaultHeader",components:{AsideToggler:m["b"],AppHeader:m["f"],DefaultHeaderDropdownAccnt:L,SidebarToggler:m["n"]}},M=H,P=Object(p["a"])(M,z,O,!1,null,null,null),E=P.exports,T=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("TheFooter",[s("div",[s("span",{staticClass:"ml-1"},[t._v("© 2020 Maranatha.")])]),s("div",{staticClass:"ml-auto"},[s("span",{staticClass:"mr-1"},[t._v("Powered by Direktorat Kerja Sama Maranatha")])])])},I=[],F={name:"DefaultFooter",components:{TheFooter:m["e"]}},U=F,B=Object(p["a"])(U,T,I,!1,null,null,null),G=B.exports,N={name:"DefaultContainer",components:{AppSidebar:m["h"],AppAside:m["a"],Breadcrumb:m["c"],DefaultAside:C,DefaultHeaderDropdownAccnt:L,SidebarForm:m["j"],SidebarFooter:m["i"],SidebarHeader:m["k"],SidebarNav:m["m"],SidebarMinimizer:m["l"],DefaultFooter:G,DefaultHeader:E},data:function(){return{nav:c.items}},computed:{name:function(){return this.$route.name},list:function(){return this.$route.matched.filter((function(t){return t.name||t.meta.label}))}}},$=N,J=Object(p["a"])($,n,o,!1,null,null,null);a["default"]=J.exports}}]);
//# sourceMappingURL=chunk-6ad54ada.ba9de143.js.map
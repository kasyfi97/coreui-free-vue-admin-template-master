(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-399560eb"],{"7f7f":function(e,t,a){var r=a("86cc").f,n=Function.prototype,o=/^\s*function ([^ (]*)/,s="name";s in n||a("9e1e")&&r(n,s,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},b927:function(e,t,a){"use strict";a.r(t);var r,n,o,s,i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"animated fadeIn",attrs:{vf:""}},[a("b-row",[a("b-col",{attrs:{lg:"12"}},[a("b-dropdown",{ref:"dropdown",staticClass:"m-2",attrs:{id:"dropdown-form",text:"Update"}},[a("b-dropdown-form",{attrs:{"menu-class":"w-100"}},[a("b-form-group",{attrs:{label:"Akses Level"}},[a("b-form-radio",{attrs:{name:"Jenis",value:"1"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[e._v("Belum Terdaftar")]),a("b-form-radio",{attrs:{name:"Jenis",value:"2"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[e._v("Dekan/PJS")]),a("b-form-radio",{attrs:{name:"Jenis",value:"3"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[e._v("Rektorat")])],1),a("b-form-group",{directives:[{name:"show",rawName:"v-show",value:e.updateSubmit,expression:"updateSubmit"}],attrs:{validated:"",label:"Mitra","label-for":"dropdown-form-mitra1"}},[a("b-form-select",{attrs:{options:e.options,required:""},model:{value:e.mitra1,callback:function(t){e.mitra1=t},expression:"mitra1"}})],1),a("b-button",{directives:[{name:"show",rawName:"v-show",value:e.updateSubmit,expression:"updateSubmit"}],attrs:{variant:"primary",size:"sm"},on:{click:e.onClickUpdate}},[e._v("Update")])],1)],1),a("b-button",{attrs:{variant:"primary"},on:{click:e.onClickrender}},[e._v("Refresh Form")]),a("c-table",{attrs:{"table-data":e.items,fixed:"",bordered:"",caption:"<i class='fa fa-align-justify'></i> Table Users"},on:{"row-clicked":function(t){return e.onClickForm(t)}}})],1)],1)],1)},l=[],c=(a("a481"),a("7f7f"),a("cadf"),a("8615"),a("ac6a"),a("96cf"),a("1da1")),d=(a("8992"),a("8229")),u=function(){return Object(c["a"])(regeneratorRuntime.mark((function e(){var t,a,i,l,c,d,u,m,f,p,h,b,g,v,k,_,w,N,x,S,J,y,I,C,O,U,P,A,E,R,T,j,D=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],n=localStorage.getItem("tokena"),console.log("ini di tabel pic",n),e.next=5,axios.post("http://dks.it.maranatha.edu:3000/users",{token:n,_method:"GET"}).catch((function(e){return D.$router.push({path:"/pages/Page500"})}));case 5:return r=e.sent,Object.values(r.data.values).forEach((function(e){t.push(e)})),console.log(r),e.next=10,axios.post("http://dks.it.maranatha.edu:3000/mitra",{token:n,_method:"GET"}).catch((function(e){return console.log("Ada Error dengan Mitra")}));case 10:for(o=e.sent,a=[],s=[],Object.values(o.data.values).forEach((function(e){a.push(e)})),console.log(a),[],i=a,l=JSON.parse(JSON.stringify(i)),c=0;c<l.length;c++)s.push({value:l[c]["id_mitra"],text:l[c]["nama_mitra"]});for(d=0,u=t;d<u.length;d++)m=u[d],delete m.nama;for(f=0,p=t;f<p.length;f++)h=p[f],h.Nomor=h.UserID,delete h.UserID;for(b=0,g=t;b<g.length;b++)v=g[b],v.NRP_NIP=v.NIPNRP,delete v.NIPNRP;for(k=0,_=t;k<_.length;k++)w=_[k],w.Nama=w.name,delete w.name;for(N=0,x=t;N<x.length;N++)S=x[N],S.Email=S.email,delete S.email;for(J=0,y=t;J<y.length;J++)I=y[J],I.Akses_Level=I.access_level_id,delete I.access_level_id;for(C=0,O=t;C<O.length;C++)U=O[C],U.Mitra=U.mitra_id_mitra,delete U.mitra_id_mitra;for(P=0,A=t;P<A.length;P++)E=A[P],E.Nama_Mitra=E.nama_mitra,delete E.nama_mitra;for(R=0,T=t;R<T.length;R++)j=T[R],j.Last_login=j.last_login,delete j.last_login;return e.abrupt("return",t);case 29:case"end":return e.stop()}}),e)})))},m={computed:{},name:"TablesU",components:{cTable:d["a"]},data:function(){return{updateSubmit:!0,nomor:"",selected:"",mitra1:"",options:[],items:u,itemsArray:u()}},methods:{onClick:function(){if(null===n||null===this.address||null===this.tel||null===this.email||null===this.fullName)alert("Add data gagal"),console.log("masuk ke data gagal"),location.reload();else{axios.post("http://dks.it.maranatha.edu:3000/pic",{token:n,personId:this.personId,address:this.address,tel:this.tele,email:this.email,fullName:this.name});alert("Add data Berhasil"),console.log("masuk ke data berhasil"),this.updateSubmit=!1,location.reload()}},onClickUpdate:function(){axios.put("http://dks.it.maranatha.edu:3000/users",{token:n,access_level:this.selected,mitra_id_mitra:this.mitra1,UserID:this.nomor});location.reload()},onClickForm:function(e){var t=JSON.stringify(e["Nomor"]).replace(/"/g,""),a=JSON.stringify(e["Akses_Level"]).replace(/"/g,""),r=JSON.stringify(e["Mitra"]).replace(/"/g,"");this.selected=a,this.mitra1=r,this.nomor=t},onClickrender:function(){this.options=s},onDelete:function(){}}},f=m,p=a("2877"),h=Object(p["a"])(f,i,l,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-399560eb.644856c4.js.map
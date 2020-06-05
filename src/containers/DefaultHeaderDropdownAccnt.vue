<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img
        src="img/avatars/6.jpg"
        class="img-avatar"
        alt="admin@bootstrapmaster.com" />
    </template>\
    <template slot="dropdown">
      <b-dropdown-header tag="div" class="text-center"><strong>Dokumen</strong></b-dropdown-header>
      <b-dropdown-item><i class="fa fa-tasks" /> Expired
        <b-badge variant="danger">{{ itemsCount }}</b-badge>
      </b-dropdown-item>
      <b-dropdown-item><i class="fa fa-comments" /> Warning
        <b-badge variant="warning">{{ itemsCount2 }}</b-badge>
      </b-dropdown-item>
      <b-dropdown-header
        tag="div"
        class="text-center">
        <strong>Akun</strong>
      </b-dropdown-header>
      <b-dropdown-item @click="Logout"><i class="fa fa-lock" />Logout</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
let dokumen;
let token;
let Getmitra;
var temp2mitra;
var cTahun;
var cJudul
var mitrasSend
let TanggalCount
let expired =0
let warning =0
var gExpired = localStorage.getItem('expired')
var gWarning = localStorage.getItem('warning')

import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return { itemsCount:gExpired,itemsCount2:gWarning,}
  },
  methods:{
    Logout(){
      localStorage.setItem('tokena',null)
      this.$router.push({path: '/pages/login'})
      console.log(localStorage.getItem('tokena'))
    }
  },async mounted(){
    let value;
    let key;
    token = localStorage.getItem("tokena");
    dokumen = await axios
      .post("http://dks.it.maranatha.edu:3000/dokumen", {
        token: token,
        _method: "GET"
      })
      .catch(error => console.log("Ada Error dengan Dokumen")); //.then(Response => this.mitra = Response.data);

    Getmitra = await axios
      .post("http://dks.it.maranatha.edu:3000/mitra", { token: token, _method: "GET" })
      .catch(error => console.log("Ada Error dengan Mitra")); //.then(Response => this.mitra = Response.data);
    
    var tempmitra = [];
    temp2mitra = [];
    Object.values(Getmitra.data.values).forEach(entry => {
      tempmitra.push(entry);
    });
    console.log(tempmitra);

    var bebas = [];
    var obj = tempmitra;
    var stringify = JSON.parse(JSON.stringify(obj));

    for (var i = 0; i < stringify.length; i++) {
      temp2mitra.push({
        value: stringify[i]["id_mitra"],
        text: stringify[i]["nama_mitra"]
      });
    }

    var temp = [];
    var temp2 = [];
    temp = [...dokumen.data.values];

    for(const obj of temp) {
      obj.Tahun = obj.id;
      obj.No_Dokumen = obj.no_dokumen;
      obj.Judul_Dokumen = obj.judul_dokumen;
      obj.Manfaat_Dokumen = obj.manfaat_dokumen;
      obj.Tanggal_Awal = obj.tgl_awal;
      obj.Tanggal_Akhir = obj.tgl_akhir;
      obj.Dokumen_Ref = obj.dokumen_ref;
      obj.No_Dokumen = obj.no_dokumen;
      obj.Link_Dokumen = obj.link_dokumen;
      obj.Link_Peserta = obj.link_peserta;
      obj.Waktu_Peringatan = obj.warningtime;
      obj.Jumlah_Pembaharuan = obj.renew_count;
      obj.Alasan = obj.reason;
      obj.Dihapus = obj.is_deleted;
      obj.Perbaharui = obj.autorenew;
      obj.Jenis_Dokumen = obj.jenis_dokumen_id;
      obj.Evaluasi = obj.evaluation;
      delete obj.id;
      delete obj.no_dokumen;
      delete obj.judul_dokumen;
      delete obj.manfaat_dokumen;
      delete obj.tgl_awal;
      delete obj.tgl_akhir;
      delete obj.dokumen_ref;
      delete obj.no_dokumen;
      delete obj.link_dokumen;
      delete obj.link_peserta;
      delete obj.warningtime;
      delete obj.renew_count;
      delete obj.reason;
      delete obj.is_deleted;
      delete obj.autorenew;
      delete obj.jenis_dokumen_id;
      delete obj.evaluation;
    }
    
      temp2 = temp.map(mitra => {
      mitra.mitra_1 = mitra.mitras[0].nama_mitra;
      mitra.mitra_2 = mitra.mitras[1].nama_mitra;
      mitra.mitras = mitra.mitras.length;
      return mitra;
    });

    for(const obj of temp) {
      delete obj.mitras;
    }
    var q = new Date();
    var m = q.getMonth();
    var d = q.getDay();
    var y = q.getFullYear();

    var date = new Date(y,m,d);

    var mydate=new Date('2020-06-30');
    console.log(date);
    console.log(mydate)

    if(mydate>date)
    {
        console.log("abis");
    }
    else
    {
        console.log("ada");
    }
    var result = [];

    temp.forEach(function(item) {
    var DateTemp
     // read all keys of item.
    Object.keys(item).forEach(function(key) {
        result.push(item[key]);
    });
    var DateTemp = new Date(item.Tanggal_Akhir)
    if(date>DateTemp)
    {
        expired = expired +1
    }
    else
    {
        warning = warning +1
    }
    console.log(expired)
    console.log(warning)
    })
    localStorage.setItem('expired',expired)
    localStorage.setItem('warning',warning)
  }
}
</script>

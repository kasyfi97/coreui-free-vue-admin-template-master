<template>
  <div class="animated fadeIn" vf>
    <b-row>
      <b-col lg="12">
        
        <b-dropdown
          boundary
          id="dropdown-form"
          text="Tambah / Edit Dokumen Detail"
          ref="dropdown"
          class="m-2"
          enctype="multipart/form-data"
          @submit.stop.prevent
        >
        <b-dropdown-form>
            <b-form-group label="Dokumen ID" label-for="dropdown-form-name" @submit.stop.prevent>
              <b-form-input v-model="dokumenid"
                id="dropdown-form-name"
                size="sm"
                placeholder="Dokumen ID"
              ></b-form-input>
              </b-form-group>

              <b-form-group validated label="Mitra 1" label-for="dropdown-form-mitra1">
                <b-form-select v-model="mitra1" :options="options" required></b-form-select>
              </b-form-group>

            <b-form-group label="Role Mitra" label-for="dropdown-form-name" @submit.stop.prevent>
              <b-form-input v-model="rolemitra"
                id="dropdown-form-name"
                size="sm"
                placeholder="Role Mitra"
              ></b-form-input>
              </b-form-group>

              <!-- <b-form-group label="Jenis" label-for="dropdown-form-jenis" >
                <b-form-input v-model="jenis"
                  id="dropdown-form-jenis"
                  size="sm"
                  placeholder="Jenis"
                ></b-form-input>
              </b-form-group> -->

                <b-form-group label="No Dokumen Mitra" label-for="dropdown-form-email" >
                <b-form-input v-model="nodokumenmitra"
                  id="dropdown-form-email"
                  size="sm"
                  placeholder="No Dokumen Mitra"
                ></b-form-input>
              </b-form-group>

              <b-form-group label="PIC ID" label-for="dropdown-form-negara" >
                <b-form-input v-model="picid"
                  id="dropdown-form-negara"
                  size="sm"
                  placeholder="ID PIC"
                ></b-form-input>
              </b-form-group>

                <b-button variant="primary" size="sm" v-show="!updateSubmit" @click="onClick">Add</b-button>
                <b-button variant="primary" size="sm" v-show="updateSubmit" @click="onClickUpdate">Update</b-button>
            </b-dropdown-form>
          </b-dropdown>
        <b-button @click="onClickrender" variant="primary">Refresh Form</b-button>
        <b-button @click="onDelete" variant="primary">
          Delete
        </b-button>
        <c-table
          v-on:row-clicked="onClickForm($event)"
          :table-data="items"
          fixed
          bordered
          caption="<i class='fa fa-align-justify'></i> Table Dokumen"
        ></c-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { shuffleArray } from "@/shared/utils";
import cTable from "./Table.vue";
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
const FileSaver = require('file-saver');
let dokumen;
let token;
let Getmitra;
var temp2mitra;
var cDokumenid;
var cMitraID
var mitrasSend
let expired = 0
let warning = 0

const someData = () =>
  async function() {
    let value;
    let key;
    token = localStorage.getItem("tokena");
    dokumen = await axios
      .post("http://dks.it.maranatha.edu:3000/detail", {
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
    console.log(temp)

    return temp;
  };

export default {
  computed: {
    noDokumenState() {
      var bool;
      if (this.noDokumen != null) {
        bool = true;
      } else {
        bool = false;
      }
      return bool;
    },
    judulState() {
      var bool;
      if (this.judul != null) {
        bool = true;
      } else {
        bool = false;
      }
      return bool;
    },
    mulaiState() {
      var bool;
      if (this.valueTanggalMulai != null) {
        bool = true;
      } else {
        bool = false;
      }
      return bool;
    },
    akhirState() {
      var bool;
      if (this.valueTanggalAkhir != null) {
        bool = true;
      } else {
        bool = false;
      }
      return bool;
    },
    mitra1State() {
      var bool;
      if (this.mitra1 != null) {
        bool = true;
      } else {
        bool = false;
      }
      return bool;
    },
    mitras() {
      this.options = temp2mitra;
      return this.options
    }
  },
  name: "tablesdetail",
  components: { cTable,FormWizard,
  TabContent },
  data: () => {
    return {
      dokumenid: "",
      rolemitra: "",
      selected: "",
      nodokumenmitra: "",
      mitra1: "",
      picid: null,
      options: [],
      updateSubmit: false,
      clicked: true,
      items: someData,
      itemsArray: someData()
    };
  },
  methods: {
    onClick() {
      if (this.clicked === false) this.clicked = true;
      else {
        this.clicked = false;
      }
      mitrasSend = [];
      mitrasSend.push(this.mitra1);
      var KirimData = axios.post("http://dks.it.maranatha.edu:3000/detail",{token:token,dokumen_id:this.dokumenid,mitra_id_mitra:mitrasSend,role_mitra:this.rolemitra,no_dokumen_mitra:this.nodokumenmitra,pic_id:this.picid}
          // {
          //   token,
          //   tahun:this.tahun,
          //   no_dokumen:this.noDokumen,
          //   judul_dokumen:this.judul,
          //   jenis_dokumen_id: this.selected,
          //   manfaat_dokumen: this.manfaat,
          //   mitras:mitrasSend,
          //   file:formData,
          //   tgl_awal:this.valueTanggalMulai,
          //   tgl_akhir:this.valueTanggalAkhir,
          //   dokumen_ref:this.refDokumen,
          //   link_peserta:this.peserta,
          //   warningtime:this.warningTime,
          //   reason:this.Alasan,
          //   autorenew:this.renew,
          //   }
        ).catch(error => this.$router.push({ path: "/pages/500" }));
        location.reload();
    },
    onClickForm: function(onClickedForm) {
      // alert(JSON.stringify(onClickedForm))
      cDokumenid = JSON.stringify(onClickedForm["dokumen_id"]).replace(/"/g, "");
      cMitraID = JSON.stringify(onClickedForm["mitra_id_mitra"]).replace(
        /"/g,
        ""
      );
      var cNoDokumenMitra = JSON.stringify(onClickedForm["no_dokumen_mitra"]).replace(
        /"/g,
        ""
      );
      var cPicID = JSON.stringify(
        onClickedForm["pic_id"]
      ).replace(/"/g, "");


      var cNamaMitra = JSON.stringify(onClickedForm["nama_mitra"]).replace(
        /"/g,
        ""
      );
      
      var cNamaPIC = JSON.stringify(onClickedForm["nama_pic"]).replace(
        /"/g,
        ""
      );
      var cRoleMitra = JSON.stringify(onClickedForm["role_mitra"]).replace(
        /"/g,
        ""
      );
      
      this.dokumenid = cDokumenid;
      this.mitra1 = cMitraID;
      this.rolemitra = cRoleMitra;
      this.nodokumenmitra = cNoDokumenMitra;
      this.picid = cPicID;

      //alert(cEmail)
      this.updateSubmit = true;
    },
    onClickrender() {
      this.options = temp2mitra;
      this.tahun = "";
      this.noDokumen = "";
      this.judul = "";
      this.selected = "";
      this.manfaat = "";
      this.valueTanggalMulai = "";
      this.valueTanggalAkhir = "";
      this.refDokumen = "";
      this.mitra1 = "";
      this.mitra2 = "";
      this.file = "";
      this.updateSubmit = false;
    },
    onClickUpdate() {
        mitrasSend = [];
        mitrasSend.push(this.mitra1)
        var updateData = axios.post("http://dks.it.maranatha.edu:3000/detail",{_method:"PUT",token:token,role_mitra:this.rolemitra,no_dokumen_mitra:this.nodokumenmitra,pic_id:this.picid,dokumen_id:this.dokumenid,mitra_id_mitra:7}).catch(error => this.$router.push({ path: "/pages/500" }));
        this.updateSubmit = false;
        console.log("masuk ke updte berhasil");
        // location.reload();     
    },
    onDownload() {
      console.log(token)
      var downloadDokumen = axios.post("http://dks.it.maranatha.edu:3000/docs/"+cTahun,{_method: "GET",token:token},{
          responseType: 'blob',
          }).then((response) => {      
            console.log(response);
            // response.data is an empty object
           const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', cTahun+' '+cJudul+'.pdf');
            document.body.appendChild(link);
            link.click();
          }).catch(error => this.$router.push({ path: "/pages/500" }));
      // window.open(downloadDokumen);
    },onDelete(){
      var KirimData = axios.post('http://dks.it.maranatha.edu:3000/detail',{token:token,dokumen_id:cDokumenid,mitra_id_mitra:cMitraID,_method: "DELETE"})
      location.reload();
    }
  },
  mounted: function (){
    this.onClickrender()
  }
};
</script>

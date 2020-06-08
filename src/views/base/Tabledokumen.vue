<template>
  <div class="animated fadeIn" vf>
    <b-row>
      <b-col lg="12">
        
        <b-dropdown
          boundary
          id="dropdown-form"
          text="Tambah / Edit Dokumen"
          ref="dropdown"
          class="m-2"
          enctype="multipart/form-data"
          @submit.stop.prevent
        >
        <form-wizard title="Tambah / Edit Dokumen" subtitle='Step-Step Yang Dibtuhkan' finish-button-text="Tekan Tombol Update/Add">
          <tab-content title="Step Pertama">
           <b-form-group label="Tahun" label-for="dropdown-form-Tahun">
              <b-form-input
                v-model="tahun"
                id="dropdown-form-Tahun"
                size="sm"
                placeholder="Tahun Dokumen"
              ></b-form-input>
            </b-form-group>

            <b-form-group validated label="Nomor Dokumen" label-for="dropdown-form-noDokumen">
              <b-form-input
                v-model="noDokumen"
                id="dropdown-form-noDokumen"
                size="sm"
                required
                placeholder="Masukan Nomor Dokumen"
              ></b-form-input>
              <b-form-invalid-feedback id="input-live-feedback">Tidak Boleh Kosong</b-form-invalid-feedback>
            </b-form-group>

            <b-form-group validated label="Judul Dokumen" label-for="dropdown-form-judul">
              <b-form-input
                v-model="judul"
                id="dropdown-form-judul"
                size="sm"
                required
                placeholder="Masukan Judul Dokumen"
              ></b-form-input>
              <b-form-invalid-feedback id="input-live-feedback">Tidak Boleh Kosong</b-form-invalid-feedback>
            </b-form-group>


          </tab-content>

          <tab-content title="Step 2">
              
            <b-form-group label="Jenis Dokumen">
              <b-form-radio v-model="selected" name="Jenis" value="1">SKB</b-form-radio>
              <b-form-radio v-model="selected" name="Jenis" value="2">PKS</b-form-radio>
              <b-form-radio v-model="selected" name="Jenis" value="3">PKSA</b-form-radio>
            </b-form-group>

          </tab-content>

          <tab-content title="Step 3">
            <b-form-group label="Manfaat Dokumen" label-for="dropdown-form-manfaat">
              <b-form-input
                v-model="manfaat"
                id="dropdown-form-manfaat"
                size="sm"
                placeholder="Manfaat Dokumen"
                required
              ></b-form-input>
            </b-form-group>

            
            <b-form-group label="Ref Dokumen" label-for="dropdown-form-ref">
              <b-form-input
                v-model="refDokumen"
                id="dropdown-form-Ref"
                size="sm"
                placeholder="Dokumen Ref"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Link Peserta" label-for="dropdown-form-Peserta">
              <b-form-input
                v-model="peserta"
                id="dropdown-form-Peserta"
                size="sm"
                placeholder="Link Peserta"
              ></b-form-input>
            </b-form-group>
          </tab-content>

          <tab-content title="Step 4">
             <b-form-group validated label="Tanggal Mulai" label-for="dropdown-form-tanggal-Mulai">
              <b-form-input
                id="mulai-input"
                v-model="valueTanggalMulai"
                type="text"
                placeholder="YYYY-MM-DD"
                required
              ></b-form-input>
              <b-form-invalid-feedback id="input-live-feedback">Tidak Boleh Kosong</b-form-invalid-feedback>
            </b-form-group>

            <b-form-group validated label="Tanggal Akhir" label-for="dropdown-form-tanggal-Akhir">
              <b-form-input
                id="akhir-input"
                v-model="valueTanggalAkhir"
                type="text"
                placeholder="YYYY-MM-DD"
                required
              ></b-form-input>
              <b-form-invalid-feedback id="input-live-feedback">Tidak Boleh Kosong</b-form-invalid-feedback>
            </b-form-group>

            <b-form-group v-show="!updateSubmit" validated label="Mitra 1" label-for="dropdown-form-mitra1">
              <b-form-select v-model="mitra1" :options="options" required></b-form-select>
            </b-form-group>

            <b-form-group v-show="!updateSubmit" validated label="Mitra 2" label-for="dropdown-form-mitra2">
              <b-form-select v-model="mitra2" :options="options" required></b-form-select>
            </b-form-group>
          </tab-content>
          
          <tab-content title="Step 5">
             <b-form-group label="Warning Time" label-for="dropdown-form-warning">
              <b-form-input
                v-model="warningTime"
                id="dropdown-form-Warning"
                size="sm"
                placeholder="Warning Time"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Alasan" label-for="dropdown-form-Alasan">
              <b-form-input
                v-model="Alasan"
                id="dropdown-form-Alasan"
                size="sm"
                placeholder="Alasan"
              ></b-form-input>
            </b-form-group>

            <b-form-checkbox
              id="checkbox-4"
              v-model="renew"
              name="checkbox-4"
              value="1"
              unchecked-value="0"
            >Auto Renew</b-form-checkbox>

            <b-form-checkbox
              id="checkbox-5"
              v-model="hapus"
              name="checkbox-5"
              value=1
              unchecked-value=0
            >Delete</b-form-checkbox>


            <b-form-file accept=".pdf" v-model="file" class="mt-3" plain></b-form-file>

            <b-button variant="primary" size="sm" v-show="!updateSubmit" @click="onClick">Add</b-button>
            <b-button
              variant="primary"
              size="sm"
              v-show="updateSubmit"
              @click="onClickUpdate"
            >Update</b-button>
          </tab-content>
          <!-- <template slot="footer" slot-scope="props">
       <div class="wizard-footer-left">
           <wizard-button v-if="props.activeTabIndex > 0 && !props.isLastStep" @click.native="props.prevTab()" :style="props.fillButtonStyle">Previous</wizard-button>
        </div>
        <div class="wizard-footer-right">
          <wizard-button v-if="!props.isLastStep" @click.native="props.nextTab()" class="wizard-footer-right" :style="props.fillButtonStyle">Next</wizard-button>

          <wizard-button v-else class="wizard-footer-right finish-button" :style="props.fillButtonStyle">{{props.isLastStep ? 'Done' : 'Next'}}</wizard-button>
        </div>
      </template> -->
        </form-wizard>
          <b-dropdown-form enctype="multipart/form-data" @submit.stop.prevent>          

          </b-dropdown-form>
        </b-dropdown>
        <b-button @click="onDownload" variant="primary">
          <b-spinner v-show="!clicked" small></b-spinner>Download Dokumen
        </b-button>
        <b-button @click="onClickrender" variant="primary">Refresh Form</b-button>
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
var cTahun;
var cJudul
var mitrasSend
let expired = 0
let warning = 0

const someData = () =>
  async function() {
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
      delete obj.created_at;
    }

    temp2 = temp.map(mitra => {
      mitra.mitra_1 = mitra.mitras[0].nama_mitra;
      mitra.mitra_2 = mitra.mitras[1].nama_mitra;
      mitra.mitras = mitra.mitras.length;
      return mitra;
    });
    
    return temp2;
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
  name: "tablesd",
  components: { cTable,FormWizard,
  TabContent },
  data: () => {
    return {
      tahun: "",
      noDokumen: "",
      judul: "",
      manfaat: "",
      selected: "",
      mitra1: "",
      mitra2: "",
      options: [],
      valueTanggalMulai: "",
      valueTanggalAkhir: "",
      refDokumen: "",
      peserta: "",
      Alasan: "",
      warningTime: 60,
      file: "",
      renew: 0,
      hapus:0,
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
      mitrasSend.push(this.mitra1, this.mitra2);
      let formData = new FormData();
      formData.append("token", token);
      formData.append("tahun", this.tahun);
      formData.append("judul_dokumen", this.judul);
      formData.append("no_dokumen", this.noDokumen);
      formData.append("jenis_dokumen_id", this.selected);
      formData.append("mitras", mitrasSend);
      formData.append("tgl_awal", this.valueTanggalMulai);
      formData.append("tgl_akhir", this.valueTanggalAkhir);
      formData.append("dokumen_ref", this.refDokumen);
      formData.append("file", this.file);
      formData.append("link_peserta", this.peserta);
      formData.append("warningtime", this.warningTime);
      formData.append("reason", this.Alasan);
      formData.append("autorenew", this.renew);
      var KirimData = axios.post("http://dks.it.maranatha.edu:3000/dokumen",formData
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
      cTahun = JSON.stringify(onClickedForm["Tahun"]).replace(/"/g, "");
      cJudul = JSON.stringify(onClickedForm["Judul_Dokumen"]).replace(
        /"/g,
        ""
      );
      var cNodokumen = JSON.stringify(onClickedForm["No_Dokumen"]).replace(
        /"/g,
        ""
      );
      var cJenisDokumen = JSON.stringify(
        onClickedForm["Jenis_Dokumen"]
      ).replace(/"/g, "");


      var cManfaat = JSON.stringify(onClickedForm["Manfaat_Dokumen"]).replace(
        /"/g,
        ""
      );
      
      var cTanggalAwal = JSON.stringify(onClickedForm["Tanggal_Awal"]).replace(
        /"/g,
        ""
      );
      var cTanggalAkhir = JSON.stringify(onClickedForm["Tanggal_Akhir"]).replace(
        /"/g,
        ""
      );

      var cDokumenRef = JSON.stringify(onClickedForm["Dokumen_Ref"]).replace(
        /"/g,
        ""
      );
      
      var cLinkDokumen = JSON.stringify(onClickedForm["Link_Dokumen"]).replace(
        /"/g,
        ""
      );
      var cLinkPeserta = JSON.stringify(onClickedForm["Link_Peserta"]).replace(
        /"/g,
        ""
      );
      var cWarningTime = JSON.stringify(onClickedForm["Waktu_Peringatan"]).replace(
        /"/g,
        ""
      );
      var cAlasan = JSON.stringify(onClickedForm["Alasan"]).replace(/"/g, "");
      var cRenew = JSON.stringify(onClickedForm["Perbaharui"]).replace(/"/g, "");
      var cMitra1 = JSON.stringify(onClickedForm["mitra_1"]).replace(/"/g, "");
      var cMitra2 = JSON.stringify(onClickedForm["mitra_2"]).replace(/"/g, "");

      // tahun:this.tahun,
      // no_dokumen:this.noDokumen,
      // judul_dokumen:this.dokumen,
      // jenis_dokumen_id: this.selected,
      // manfaat_dokumen: this.manfaat,
      // tgl_awal:this.valueTanggalMulai,
      // tgl_akhir:this.valueTanggalAkhir,
      // dokumen_ref:this.refDokumen,
      // mitras:mitrasSend,
      // filename:this.file,
      // link_peserta:this.peserta,
      // warningtime:this.warningTime,
      // reason:this.Alasan,
      // autorenew:this.renew,

      this.tahun = cTahun;
      this.noDokumen = cNodokumen;
      this.judul = cJudul;
      this.selected = cJenisDokumen;
      this.manfaat = cManfaat;
      this.valueTanggalMulai = cTanggalAwal;
      this.valueTanggalAkhir = cTanggalAkhir;
      this.refDokumen = cDokumenRef;
      this.mitra1 = cMitra1;
      this.mitra2 = cMitra2;
      
      this.file = cLinkDokumen;

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
        let formData = new FormData();
          formData.append("token", token);
          formData.append("judul_dokumen", this.judul);
          formData.append("no_dokumen", this.noDokumen);
          formData.append("jenis_dokumen_id", this.selected);
          formData.append("tgl_awal", this.valueTanggalMulai);
          formData.append("tgl_akhir", this.valueTanggalAkhir);
          formData.append("manfaat_dokumen", this.manfaat);
          formData.append("dokumen_ref", this.refDokumen);
          formData.append("is_deleted", this.hapus);
          formData.append("autorenew", this.renew);
          formData.append("file", this.file);
        var updateData = axios.post("http://dks.it.maranatha.edu:3000/dokumen/"+cTahun, formData).catch(error => this.$router.push({ path: "/pages/500" }));
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
    }
  },
  mounted: function (){
    this.onClickrender()
  }
};
</script>

<template>

  <div class="animated fadeIn" vf>
    <b-row>
      <b-col lg="12">

        <b-dropdown id="dropdown-form" text="Tambah Mitra" ref="dropdown" class="m-2">
      <b-dropdown-form>
        <b-form-group label="FullName" label-for="dropdown-form-name" @submit.stop.prevent>
          <b-form-input v-model="name"
            id="dropdown-form-name"
            size="sm"
            placeholder="FullName"
          ></b-form-input>
          </b-form-group>

        <b-form-group label="Kategori" label-for="dropdown-form-kategori" >
          <b-form-input v-model="kategori"
            id="dropdown-form-kategori"
            size="sm"
            placeholder="Kategori"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Jenis" label-for="dropdown-form-jenis" >
          <b-form-input v-model="jenis"
            id="dropdown-form-jenis"
            size="sm"
            placeholder="Jenis"
          ></b-form-input>
        </b-form-group>

          <b-form-group label="Email" label-for="dropdown-form-email" >
          <b-form-input v-model="email"
            id="dropdown-form-email"
            size="sm"
            placeholder="email@example.com"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Negara" label-for="dropdown-form-negara" >
          <b-form-input v-model="negara"
            id="dropdown-form-negara"
            size="sm"
            placeholder="Id Negara"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Provinsi" label-for="dropdown-form-provinsi" >
          <b-form-input v-model="provinsi"
            id="dropdown-form-provinsi"
            size="sm"
            placeholder="Provinsi"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Kota" label-for="dropdown-form-kota" >
          <b-form-input v-model="kota"
            id="dropdown-form-kota"
            size="sm"
            placeholder="Kota"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Alamat" label-for="dropdown-form-alamat" >
          <b-form-input v-model="alamat"
            id="dropdown-form-alamat"
            size="sm"
            placeholder="Alamat"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="KodePos" label-for="dropdown-form-kodepos" >
          <b-form-input v-model="kodepos"
            id="dropdown-form-kodepos"
            size="sm"
            placeholder="Kode Pos"
          ></b-form-input>
        </b-form-group>

        <b-button variant="primary" size="sm" v-show="!updateSubmit" @click="onClick">Add</b-button>
        <b-button variant="primary" size="sm" v-show="updateSubmit" @click="onClickUpdate">Update</b-button>
      </b-dropdown-form>
    </b-dropdown>

        <c-table v-on:row-clicked="onClickForm($event)" :table-data="items" fixed bordered caption="<i class='fa fa-align-justify'></i> Table Mitra"></c-table>
      </b-col>
    </b-row>
  </div>

</template>

<script>
import { shuffleArray } from '@/shared/utils'
import cTable from './Table.vue'
let Getmitra
let token
// async function(){
//     const Getmitra = await axios.get('http://gbi.sytes.net/mitra')//.then(Response => this.mitra = Response.data);
//     //axios.get('http://gbi.sytes.net/mitra').then((Response) => console.log(Response));
//     return Getmitra.data

// const tempData = () => async function(){
//     let value
//     let key
//     Getmitra = await axios.get('http://gbi.sytes.net/mitra')//.then(Response => this.mitra = Response.data);
//     //axios.get('http://gbi.sytes.net/mitra').then((Response) => console.log(Response));
//     // return Object.entries(Getmitra.data.values[1])
//     Object.values(Getmitra.data.values).forEach((entry) => {
//       for (var key in entry) {
//         if (entry.hasOwnProperty(key)) {
//         console.log(key + " -> " + entry[key]);
//     }}
//     })
// }

const someData = () => (async function(){
    let value
    token = localStorage.getItem('tokena')
    Getmitra = await axios.post('http://gbi.sytes.net:3000/mitra',{token: token, _method: "GET"})//.then(Response => this.mitra = Response.data);
    //axios.get('http://gbi.sytes.net/mitra').then((Response) => console.log(Response));
    // return Object.entries(Getmitra.data.values[1])
    var temp = []
    Object.values(Getmitra.data.values).forEach((entry) => {
      temp.push(entry)
    })
    return temp
    })


export default {
  name: 'tables',
  components: {cTable},
  data: () => {
    return {
      alamat:null,
      negara:null,
      email:null,
      name:null,
      jenis:null,
      kategori:null,
      kodepos:null,
      provinsi:null,
      kota:null,
      updateSubmit:false,
      items: someData,
      itemsArray: someData(),
    }
  },methods:{
    onClick(){
      // if(token === null || this.alamat === null || this.name === null || this.kategori === null || this.negara === null || this.jenis === null || this.email === null || this.provinsi === null || this.kota === null || this.kodepos === null){
      //   alert("Add data gagal")
      //   location.reload();
      // }else{
      var KirimData = axios.post('http://gbi.sytes.net:3000/mitra',{token,affiliateName:this.name,category:this.kategori,nation:this.negara ,type:this.jenis ,email: this.email,province: this.provinsi,city: this.kota,address:this.alamat,postalCode:this.kodepos})
      this.$refs.dropdown.hide(true)
      alert("Add data Berhasil")
      location.reload();
   //   }
    },
    onClickUpdate(){
      // if( token === null || this.alamat === null || this.name === null || this.kategori === null || this.negara === null || this.jenis === null || this.email === null || this.provinsi === null || this.kota === null || this.kodepos === null){
      //   alert("Update data gagal")
      //   location.reload();
      // }else{
      var updateData = axios.put('http://gbi.sytes.net:3000/mitra',{token,affiliateName:this.name,category:this.kategori,nation:this.negara ,type:this.jenis ,email: this.email,province: this.provinsi,city: this.kota,address:this.alamat,postalCode:this.kodepos})
      this.updateSubmit = false
      location.reload();
      //}
    },
      onClickForm:function(onClickedForm){
      //alert(JSON.stringify(onClickedForm))
      var cName = JSON.stringify(onClickedForm['nama_mitra'])
      var cKategori = JSON.stringify(onClickedForm['kategori_mitra_id'])
      var cJenis = JSON.stringify(onClickedForm['jenis_mitra_id'])
      var cEmail = JSON.stringify(onClickedForm['email'])
      var cNegara = JSON.stringify(onClickedForm['negara_id'])
      var cProvinsi = JSON.stringify(onClickedForm['provinsi'])
      var cKota = JSON.stringify(onClickedForm['kota'])
      var cAlamat = JSON.stringify(onClickedForm['alamat'])
      var cKodepos = JSON.stringify(onClickedForm['kode_pos'])

      this.name = cName
      this.email = cEmail
      this.alamat = cAlamat
      this.kategori = cKategori
      this.negara = cNegara
      this.jenis = cJenis
      this.provinsi = cProvinsi
      this.kodepos = cKodepos
      this.kota = cKota
      this.updateSubmit = true
    }
  }
}
</script>

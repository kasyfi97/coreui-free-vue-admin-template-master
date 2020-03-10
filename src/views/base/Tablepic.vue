<template>

  <div class="animated fadeIn" vf>
    <b-row>
      <b-col lg="12" >

    <b-dropdown id="dropdown-form" text="Tambah / Edit PIC" ref="dropdown" class="m-2">
      <b-dropdown-form menu-class="w-100">
        <b-form-group label="FullName" label-for="dropdown-form-name" @submit.stop.prevent>
          <b-form-input v-model="name"
            id="dropdown-form-name"
            size="sm"
            placeholder="FullName"
            :state="nameState"
            aria-describedby="input-live-help input-live-feedback"
          ></b-form-input>
          <b-form-invalid-feedback id="input-live-feedback">
            Tidak Boleh Kosong
          </b-form-invalid-feedback>
          <b-form-text id="input-live-help">Masukan Nama Lengkap</b-form-text>
          </b-form-group>

        <b-form-group label="personId" label-for="dropdown-form-id" >
          <b-form-input v-model="personId"
            id="dropdown-form-id"
            size="sm"
            placeholder="ID"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Email" label-for="dropdown-form-email" >
          <b-form-input v-model="email"
            id="dropdown-form-email"
            size="sm"
            :state="emailState"
            placeholder="email@example.com"
          ></b-form-input>
          <b-form-invalid-feedback id="input-live-feedback">
            Tidak Boleh Kosong
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="Tel" label-for="dropdown-form-tel" >
          <b-form-input v-model="tele"
            id="dropdown-form-tel"
            size="sm"
            placeholder="081ex"
            required
            :state="teleState"
          ></b-form-input>
          <b-form-invalid-feedback id="input-live-feedback">
            Tidak Boleh Kosong
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="Address" label-for="dropdown-form-address" >
          <b-form-input v-model="address"
            id="dropdown-form-address"
            size="sm"
            :state="addressState"
            placeholder="Address"
          ></b-form-input>
          <b-form-invalid-feedback id="input-live-feedback">
            Tidak Boleh Kosong
          </b-form-invalid-feedback>
        </b-form-group>

        <b-button variant="primary" size="sm" v-show="!updateSubmit" @click="onClick">Add</b-button>
        <b-button variant="primary" size="sm" v-show="updateSubmit" @click="onClickUpdate">Update</b-button>
      </b-dropdown-form>
    </b-dropdown>

        <c-table v-on:row-clicked="onClickForm($event)" :table-data="items" fixed bordered caption="<i class='fa fa-align-justify'></i> Table PIC">
        </c-table>
      </b-col>
    </b-row>
  </div>

</template>

<script>
import { shuffleArray } from '@/shared/utils'
import cTable from './Table.vue'

let PIC
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
    let key
    token = localStorage.getItem('tokena')
    console.log("ini di tabel pic", token)
    PIC = await axios.post('http://gbi.sytes.net:3000/pic',{token: token, _method: "GET"})//.then(Response => this.mitra = Response.data);
    //axios.get('http://gbi.sytes.net/mitra').then((Response) => console.log(Response));
    // return Object.entries(Getmitra.data.values[1]) 
    var temp = []
    Object.values(PIC.data.values).forEach((entry) => {
      temp.push(entry)
    })
    console.log(temp)
    return temp
    })


export default {
  computed: {
      nameState() {
        let bool
        if(this.name != null){
          bool = true
        }else{
          bool = false
        }
        return bool
      },
      emailState() {
        let bool
        if(this.email != null){
          bool = true
        }else{
          bool = false
        }
        return bool
      },
      teleState() {
        let bool
        if(this.tele != null){
          bool = true
        }else{
          bool = false
        }
        return bool
      },
     addressState() {
        let bool
        if(this.address != null){
          bool = true
        }else{
          bool = false
        }
        return bool
      },

    },
  name: 'tablesp',
  components: {cTable},
  
  data: () => {
    return {
      address:null,
      tele:null,
      email:null,
      name:null,
      personId:null,
      updateSubmit: false,
      items: someData,
      itemsArray: someData(),
    }
  },methods:{
    onClick(){
      if( token === null  || this.address === null || this.tel === null || this.email=== null || this.fullName=== null){
        alert("Add data gagal")
        location.reload();
      }else{
      var KirimData = axios.post('http://gbi.sytes.net:3000/pic',{token,personId:this.personId,address:this.address ,tel:this.tele ,email: this.email,fullName: this.name}).
      this.$refs.dropdown.hide(true)
      alert("Add data Berhasil")
      location.reload();
      }    
    },
    onClickUpdate(){
      if( token === null  || this.address === null || this.tel === null || this.email=== null || this.fullName=== null){
        alert("Update data gagal")
        location.reload();
      }else{
      var updateData = axios.put('http://gbi.sytes.net:3000/pic',{token,personId:this.personId,address:this.address ,tel:this.tele ,email: this.email,fullName: this.name})
      this.updateSubmit = false
      location.reload();
      }
    },
    onClickForm:function(onClickedForm){
      //alert(JSON.stringify(onClickedForm))
      var cEmail = JSON.stringify(onClickedForm['email'])
      var cAddress = JSON.stringify(onClickedForm['alamat'])
      var cNama = JSON.stringify(onClickedForm['nama_lengkap'])
      var cTele = JSON.stringify(onClickedForm['nomor_telepon'])
      var cId = JSON.stringify(onClickedForm['id'])

      this.name = cNama
      this.email = cEmail
      this.address = cAddress
      this.tele = cTele
      this.personId = cId

      //alert(cEmail)
      this.updateSubmit = true
    }
  }
}
</script>

<template>
  <div class="animated fadeIn" vf>
    <b-row>
      <b-col lg="12" >
        <b-dropdown id="dropdown-form" text="Tambah / Edit PIC" ref="dropdown" class="m-2">
          <b-dropdown-form menu-class="w-100">
            <b-form-group validated label="FullName" label-for="dropdown-form-name" @submit.stop.prevent>
              <b-form-input v-model="name"
                id="dropdown-form-name"
                size="sm"
                placeholder="FullName"
                required
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

            <b-form-group validated label="Email" label-for="dropdown-form-email" >
              <b-form-input v-model="email"
                id="dropdown-form-email"
                size="sm"
                required
                placeholder="email@example.com"
              ></b-form-input>
              <b-form-invalid-feedback id="input-live-feedback">
                Tidak Boleh Kosong
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group validated label="Tel" label-for="dropdown-form-tel" >
              <b-form-input v-model="tele"
                id="dropdown-form-tel"
                size="sm"
                placeholder="081ex"
                required
              ></b-form-input>
              <b-form-invalid-feedback id="input-live-feedback">
                Tidak Boleh Kosong
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group validated label="Address" label-for="dropdown-form-address" >
              <b-form-input v-model="address"
                id="dropdown-form-address"
                size="sm"
                required
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
          <b-button @click="onClickrender" variant="primary">
            Refresh Form
          </b-button>
          <b-button @click="onDelete" variant="primary">
            Delete
          </b-button>
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
var cId 

const someData = () => (async function(){
    let value
    let key
    var temp = []
    token = localStorage.getItem('tokena')
    console.log("ini di tabel pic", token)
    PIC = await axios.post('http://dks.it.maranatha.edu:3000/pic',{token: token, _method: "GET"}).catch(error => this.$router.push({path: '/pages/Page500'})) 
    Object.values(PIC.data.values).forEach((entry) => {
      temp.push(entry)
    })
    console.log(PIC)

    for(const obj of temp) {
      obj.Nomor = obj.id;
      delete obj.id;
    }

    for(const obj of temp) {
      obj.Nama_lengkap = obj.nama_lengkap;
      delete obj.nama_lengkap;
    }

    for(const obj of temp) {
      obj.Nomor_Telepon = obj.nomor_telepon;
      delete obj.nomor_telepon;
    }

    for(const obj of temp) {
      obj.Alamat = obj.alamat;
      delete obj.alamat;
    }
    

    for(const obj of temp) {
      obj.Email = obj.email;
      delete obj.email;
    }
    console.log(new Date().toLocaleString())
    return temp
    })

export default {
  computed: {
      nameState() {
        var bool
        if(this.name != null){
          bool = true
        }else{
          bool = false
        }
        return bool
      },
      emailState() {
        var bool
        if(this.email != null){
          bool = true
        }else{
          bool = false
        }
        return bool
      },
      teleState() {
        var bool
        if(this.tele != null){
          bool = true
        }else{
          bool = false
        }
        return bool
      },
     addressState() {
        var bool
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
        alert("Add data gagal");
        console.log('masuk ke data gagal')
        location.reload();
      }else{
      var KirimData = axios.post('http://dks.it.maranatha.edu:3000/pic',{token,personId:this.personId,address:this.address ,tel:this.tele ,email: this.email,fullName: this.name})
      // this.$refs.dropdown.hide(true)
      alert("Add data Berhasil")
      console.log('masuk ke data berhasil')
      this.updateSubmit = false
      location.reload();
      }    
    },
    onClickUpdate(){
      if( token === null  || this.address === null || this.tel === null || this.email=== null || this.fullName=== null){
        alert("Update data gagal");
        console.log('masuk ke update gagal')
        // location.reload();
      }else{
      var updateData = axios.put('http://dks.it.maranatha.edu:3000/pic',{token,personId:this.personId,address:this.address ,tel:this.tele ,email: this.email,fullName: this.name})
      this.updateSubmit = false
      console.log('masuk ke update berhasil')
      // location.reload();
      }
    },
    onClickForm:function(onClickedForm){
      //alert(JSON.stringify(onClickedForm))
      var cEmail = JSON.stringify(onClickedForm['Email']).replace(/"/g, '')
      var cAddress = JSON.stringify(onClickedForm['Alamat']).replace(/"/g, '')
      var cNama = JSON.stringify(onClickedForm['Nama_lengkap']).replace(/"/g, '')
      var cTele = JSON.stringify(onClickedForm['Nomor_Telepon']).replace(/"/g, '')
      cId = JSON.stringify(onClickedForm['Nomor']).replace(/"/g, '')

      this.name = cNama
      this.email = cEmail
      this.address = cAddress
      this.tele = cTele
      this.personId = cId

      this.updateSubmit = true
    },onClickrender(){
      this.name = null
      this.email = null
      this.address = null
      this.tele = null
      this.personId = null
      this.updateSubmit = false
    },onDelete(){
      var KirimData = axios.post('http://dks.it.maranatha.edu:3000/pic',{token,personId:cId,_method: "delete"})
      location.reload();
    }
  }
}
</script>

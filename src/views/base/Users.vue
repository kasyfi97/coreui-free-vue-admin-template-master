<template>
  <div class="animated fadeIn" vf>
    <b-row>
      <b-col lg="12" >
        <b-dropdown id="dropdown-form" text="Update" ref="dropdown" class="m-2">
          <b-dropdown-form menu-class="w-100">
            <b-form-group label="Akses Level">
              <b-form-radio v-model="selected" name="Jenis" value="1">Belum Terdaftar</b-form-radio>
              <b-form-radio v-model="selected" name="Jenis" value="2">Dekan/PJS</b-form-radio>
              <b-form-radio v-model="selected" name="Jenis" value="3">Rektorat</b-form-radio>
            </b-form-group>
            <b-form-group v-show="updateSubmit" validated label="Mitra" label-for="dropdown-form-mitra1">
              <b-form-select v-model="mitra1" :options="options" required></b-form-select>
            </b-form-group>
              <b-button variant="primary" size="sm" v-show="updateSubmit" @click="onClickUpdate">Update</b-button>
            </b-dropdown-form>
          </b-dropdown>
          <b-button @click="onClickrender" variant="primary">Refresh Form</b-button>
          <c-table v-on:row-clicked="onClickForm($event)" :table-data="items" fixed bordered caption="<i class='fa fa-align-justify'></i> Table Users">
        </c-table>
      </b-col>
    </b-row>
  </div>

</template>

<script>
import { shuffleArray } from '@/shared/utils'
import cTable from './Table.vue'

let user
let token
var cId 
let Getmitra
var temp2mitra;

const someData = () => (async function(){
    let value
    let key
    var temp = []
    token = localStorage.getItem('tokena')
    console.log("ini di tabel pic", token)
    user = await axios.post("http://dks.it.maranatha.edu:3000/users", {token:token,_method: "GET" }).catch(error => this.$router.push({path: '/pages/Page500'})) 
    Object.values(user.data.values).forEach((entry) => {
      temp.push(entry)
    })
    console.log(user)

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
      for(const obj of temp) {
      delete obj.nama;
      }

      for(const obj of temp) {
      obj.Nomor = obj.UserID;
      delete obj.UserID;
      }

      for(const obj of temp) {
      obj.NRP_NIP = obj.NIPNRP;
      delete obj.NIPNRP;
      }

      for(const obj of temp) {
      obj.Nama = obj.name;
      delete obj.name;
      }

      for(const obj of temp) {
      obj.Email = obj.email;
      delete obj.email;
      }

      for(const obj of temp) {
      obj.Akses_Level = obj.access_level_id;
      delete obj.access_level_id;
      }

      for(const obj of temp) {
      obj.Mitra = obj.mitra_id_mitra;
      delete obj.mitra_id_mitra;
      }

      for(const obj of temp) {
      obj.Nama_Mitra = obj.nama_mitra;
      delete obj.nama_mitra;
      }

      for(const obj of temp) {
      obj.Last_login = obj.last_login;
      delete obj.last_login;
      }
    return temp
    })

export default {
  computed: {}, 
  name: 'TablesU',
  components: {cTable},
  
  data: () => {
    return {
      updateSubmit: true,
      nomor:"",
      selected: "",
      mitra1: "",
      options: [],
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
      var updateData = axios.put('http://dks.it.maranatha.edu:3000/users',{token,access_level:this.selected,mitra_id_mitra:this.mitra1 ,UserID:this.nomor})
      location.reload();
    },
    onClickForm:function(onClickedForm){
      // alert(JSON.stringify(onClickedForm))
      var cNomor = JSON.stringify(onClickedForm['Nomor']).replace(/"/g, '')
      var cAkses = JSON.stringify(onClickedForm['Akses_Level']).replace(/"/g, '')
      var cMitra = JSON.stringify(onClickedForm['Mitra']).replace(/"/g, '')
      // var cTele = JSON.stringify(onClickedForm['Nomor_Telepon']).replace(/"/g, '')
      // cId = JSON.stringify(onClickedForm['Nomor']).replace(/"/g, '')

      this.selected = cAkses
      this.mitra1 = cMitra
      this.nomor = cNomor
      // this.address = cAddress
      // this.tele = cTele
      // this.personId = cId

      // this.updateSubmit = true
    },onClickrender(){
      this.options = temp2mitra;
    }
    ,onDelete(){
    }
  }
}
</script>

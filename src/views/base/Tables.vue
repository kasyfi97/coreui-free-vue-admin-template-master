<template>

  <div class="animated fadeIn" vf>
    <b-row>
      <b-col lg="12">
        <b-dropdown id="dropdown-form" text="Tambah / Edit Mitra" ref="dropdown" class="m-2">
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
          <b-button @click="onClickrender" variant="primary">
            Refresh Form
          </b-button>
          <b-button @click="onDelete" variant="primary">
            Delete
          </b-button>
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
let cId
let cDeleted
//isDeleted
//affliateId

const someData = () => (async function(){
    token = localStorage.getItem('tokena')
    Getmitra = await axios.post('http://gbi.sytes.net:3000/mitra',{token: token, _method: "GET"}).catch(error => console.log('Ada Error') )
    var temp = []
    var temp2=[]
    Object.values(Getmitra.data.values).forEach((entry) => {
      temp.push(entry)
    })
    // var obj = JSON.stringify(temp)
    // console.log(obj)
    // var stringify = JSON.parse(obj);
    //   for (var i = 0; i < stringify.length; i++) {
    //     console.log(stringify[i]['nama_negara']);
    // }
    var obj = JSON.stringify(temp)
    var stringify = JSON.parse(obj);
      for (var i = 0; i < stringify.length; i++) {
        console.log(stringify[i]['nama_negara']);
        temp2.push(stringify[i]['nama_negara'])
      }
      console.log(temp2)

      for(const obj of temp) {
      obj.Nomor_Mitra = obj.id_mitra;
      delete obj.id_mitra;
      }

      for(const obj of temp) {
      obj.Nama_Mitra = obj.nama_mitra;
      delete obj.nama_mitra;
      }

      for(const obj of temp) {
      obj.Kategori_Mitra = obj.kategori_mitra_id;
      delete obj.kategori_mitra_id;
      }

      for(const obj of temp) {
      obj.Jenis_Mitra = obj.jenis_mitra_id;
      delete obj.jenis_mitra_id;
      }

      for(const obj of temp) {
      obj.Email = obj.email;
      delete obj.email;
      }

      for(const obj of temp) {
      obj.ID_Negara = obj.negara_id;
      delete obj.negara_id;
      }

      for(const obj of temp) {
      obj.Provinsi = obj.provinsi;
      delete obj.provinsi;
      }

      for(const obj of temp) {
      obj.Kota = obj.kota;
      delete obj.kota;
      }

      for(const obj of temp) {
      obj.Alamat = obj.alamat;
      delete obj.alamat;
      }
      
      for(const obj of temp) {
      obj.Kodepos = obj.kode_pos;
      delete obj.kode_pos;
      }

      for(const obj of temp) {
      obj.Nama_Kategori = obj.nama_kategori;
      delete obj.nama_kategori;
      }

      for(const obj of temp) {
      obj.Nama_Jenis = obj.nama_jenis;
      delete obj.nama_jenis;
      }

      for(const obj of temp) {
      obj.Kode_Negara = obj.kode_negara;
      delete obj.kode_negara;
      }

      for(const obj of temp) {
      obj.Nama_Negara = obj.nama_negara;
      delete obj.nama_negara;
      }
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
      cId:null,
      cDeleted:null,
      updateSubmit:false,
      items: someData,
      itemsArray: someData(),
    }
  },methods:{
    onClick(){
      var KirimData = axios.post('http://gbi.sytes.net:3000/mitra',{token,affiliateName:this.name,category:this.kategori,nation:this.negara ,type:this.jenis ,email: this.email,province: this.provinsi,city: this.kota,address:this.alamat,postalCode:this.kodepos})
      this.$refs.dropdown.hide(true)
      alert("Add data Berhasil")
      location.reload();
    },
    onClickUpdate(){
      // if( token === null || this.alamat === null || this.name === null || this.kategori === null || this.negara === null || this.jenis === null || this.email === null || this.provinsi === null || this.kota === null || this.kodepos === null){
      //   alert("Update data gagal")
      //   location.reload();
      // }else{
      var updateData = axios.put('http://gbi.sytes.net:3000/mitra',{
        token,
      affiliateName:this.name,
      category:this.kategori,
      nation:this.negara ,
      type:this.jenis ,
      email: this.email,
      province: this.provinsi,
      city: this.kota,
      address:this.alamat,
      postalCode:this.kodepos,
      affiliateId:cId,
      isDeleted:cDeleted
      })
      this.updateSubmit = false
      location.reload();
      //}
    },
      onClickForm:function(onClickedForm){
      alert(JSON.stringify(onClickedForm))
      cId = JSON.stringify(onClickedForm['Nomor_Mitra']).replace(/"/g, '')
      var cName = JSON.stringify(onClickedForm['Nama_Mitra']).replace(/"/g, '')
      var cKategori = JSON.stringify(onClickedForm['Kategori_Mitra']).replace(/"/g, '')
      var cJenis = JSON.stringify(onClickedForm['Jenis_Mitra']).replace(/"/g, '')
      var cEmail = JSON.stringify(onClickedForm['Email']).replace(/"/g, '')
      var cNegara = JSON.stringify(onClickedForm['ID_Negara']).replace(/"/g, '')
      var cProvinsi = JSON.stringify(onClickedForm['Provinsi']).replace(/"/g, '')
      var cKota = JSON.stringify(onClickedForm['Kota']).replace(/"/g, '')
      var cAlamat = JSON.stringify(onClickedForm['Alamat']).replace(/"/g, '')
      var cKodepos = JSON.stringify(onClickedForm['Kodepos']).replace(/"/g, '')
 

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
    },onClickrender(){
      this.name = ''
      this.email = ''
      this.alamat = ''
      this.kategori = ''
      this.negara = ''
      this.jenis = ''
      this.provinsi = ''
      this.kodepos = ''
      this.kota = ''
      this.updateSubmit = false
    },onDelete(){
      var KirimData = axios.post('http://gbi.sytes.net:3000/mitra',{token,affiliateId:cId,_method: "delete"})
      location.reload();
      }
  }
}
</script>

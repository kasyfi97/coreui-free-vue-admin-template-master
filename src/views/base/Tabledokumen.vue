<template>

  <div class="animated fadeIn" vf>
    <b-row>
      <b-col lg="12">
        <c-table :table-data="items" fixed bordered caption="<i class='fa fa-align-justify'></i> Table Dokumen"></c-table>
      </b-col>
    </b-row>
  </div>

</template>

<script>
import { shuffleArray } from '@/shared/utils'
import cTable from './Table.vue'
let dokumen
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
    const token = localStorage.getItem('tokena')
    dokumen = await axios.post('http://gbi.sytes.net:3000/dokumen',{token: token, _method: "GET"})//.then(Response => this.mitra = Response.data);
    //axios.get('http://gbi.sytes.net/mitra').then((Response) => console.log(Response));
    // return Object.entries(Getmitra.data.values[1])
    var temp = []
    Object.values(dokumen.data.values).forEach((entry) => {
      temp.push(entry)
    })
    console.log(temp)
    return temp
    })


// for(test in da){
//   console.log(test.nama_mitra)
// }

// console.log(someData)

// const someData = async () => {
//   var x = await axios.get('http://gbi.sytes.net/mitra')
//   x.data.kota.forEach(v => {
//     console.log("kota" + v.kota)
//   });
//   // return x.data
//   // x.data dijadiin ke dalam bentuk file
// }

// shuffleArray([
//   {username: 'Samppa Nori', registered: '2012/01/01', role: 'Member', status: 'Active', _rowVariant: 'success'},
//   {username: 'Estavan Lykos', registered: '2012/02/01', role: 'Staff', status: 'Banned', _rowVariant: 'danger'},
//   {username: 'Chetan Mohamed', registered: '2012/02/01', role: 'Admin', status: 'Inactive', _rowVariant: 'info'},
//   {username: 'Derick Maximinus', registered: '2012/03/01', role: 'Member', status: 'Pending'},
//   {username: 'Friderik Dávid', registered: '2012/01/21', role: 'Staff', status: 'Active'},
//   {username: 'Yiorgos Avraamu', registered: '2012/01/01', role: 'Member', status: 'Active'},
//   {username: 'Avram Tarasios', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
//   {username: 'Quintin Ed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
//   {username: 'Enéas Kwadwo', registered: '2012/03/01', role: 'Member', status: 'Pending'},
//   {username: 'Agapetus Tadeáš', registered: '2012/01/21', role: 'Staff', status: 'Active'},
//   {username: 'Carwyn Fachtna', registered: '2012/01/01', role: 'Member', status: 'Active'},
//   {username: 'Nehemiah Tatius', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
//   {username: 'Ebbe Gemariah', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
//   {username: 'Eustorgios Amulius', registered: '2012/03/01', role: 'Member', status: 'Pending'},
//   {username: 'Leopold Gáspár', registered: '2012/01/21', role: 'Staff', status: 'Active'},
//   {username: 'Pompeius René', registered: '2012/01/01', role: 'Member', status: 'Active'},
//   {username: 'Paĉjo Jadon', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
//   {username: 'Micheal Mercurius', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
//   {username: 'Ganesha Dubhghall', registered: '2012/03/01', role: 'Member', status: 'Pending'},
//   {username: 'Hiroto Šimun', registered: '2012/01/21', role: 'Staff', status: 'Active'},
//   {username: 'Vishnu Serghei', registered: '2012/01/01', role: 'Member', status: 'Active'},
//   {username: 'Zbyněk Phoibos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
//   {username: 'Einar Randall', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
//   {username: 'Félix Troels', registered: '2012/03/21', role: 'Staff', status: 'Active'},
//   {username: 'Aulus Agmundr', registered: '2012/01/01', role: 'Member', status: 'Pending'}
// ])

// coba pakai buffer, data yg didapat dari server tulis dulu aja ke buffer -> jadiin file json -> baca di tabel
// itu ide paling barbar yg gw dapet
// buffer apaan coba

export default {
  name: 'tablesd',
  components: {cTable},
  data: () => {
    return {
      items: someData,
      itemsArray: someData(),
    }
  }
}
</script>

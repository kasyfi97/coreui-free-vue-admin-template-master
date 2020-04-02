<template>
  <div class="animated fadeIn">
        <b-card align="center" header="Bar Chart">
          <div class="chart-wrapper"><b-button variant="primary" size="sm" @click="fillData()">Load Data</b-button>
            <bar-example :chart-data="datacollection"></bar-example>
          </div>
        </b-card>
    </div>
</template>


<script>
import BarExample from './charts/BarExample'
let token
var temp2=[]
var jumlah

export default {
  name: 'charts',
  components: {BarExample},
  data () {
  return {
    // instantiating datacollection with null
    datacollection: null
  }
},
created () {
  //anytime the vue instance is created, call the fillData() function.
  this.fillData()
},
methods: {
  fillData () {
    this.datacollection = {
      // Data for the y-axis of the chart
      labels: ['Indonesia'],
      datasets: [
        {
          label: 'Kerja Sama',
          backgroundColor: '#f87979',
          // Data for the x-axis of the chart
          data: [jumlah, 20, 30, 40, 50]
        }
      ]
    }
  },
  getRandomInt () {
    // JS function to generate numbers to be used for the chart
    return Math.floor(Math.random() * (50 - 5 + 1)) + 5
  }
},  async mounted () {
    try { 
      token = localStorage.getItem('tokena')
      var Getmitra  = await axios.post('http://gbi.sytes.net:3000/mitra',{token: token, _method: "GET"}).catch(error => console.log('Ada Error') )
      var temp = []
      Object.values(Getmitra.data.values).forEach((entry) => {
        temp.push(entry)
      })

      var obj = JSON.stringify(temp)
      var stringify = JSON.parse(obj);
      for (var i = 0; i < stringify.length; i++) {
        console.log(stringify[i]['nama_negara']);
        temp2.push(stringify[i]['nama_negara'])
      }
      jumlah =temp2.length
    } catch (e) {
      console.error(e)
    }
 }
}
</script>

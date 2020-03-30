<script>
import { Bar } from 'vue-chartjs'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'
let Getmitra
let token
let temp
var temp2
let jumlah
token = localStorage.getItem('tokena')

const someData = () => (async function(){
    let value
    //.then(Response => this.mitra = Response.data);
    //axios.get('http://gbi.sytes.net/mitra').then((Response) => console.log(Response));
    // return Object.entries(Getmitra.data.values[1])
    temp = []
    temp2=[]
    Object.values(Getmitra.data.values).forEach((entry) => {
      temp.push(entry)
    })
    const obj = JSON.stringify(temp)
    const stringify = JSON.parse(obj);
      for (var i = 0; i < stringify.length; i++) {
        temp2.push(stringify[i]['nama_negara'])
      }
    jumlah = temp2.length
    // var stringify = JSON.parse(obj);
    //   for (var i = 0; i < stringify.length; i++) {
    //   temp2.push(stringify[i]['nama_negara']);
    // }
    return temp2
    })

export default {
  extends: Bar,
  data: function () {
		return {
			datacollection: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				datasets: [
					{
						label: 'Data One',
						backgroundColor: '#f87979',
						pointBackgroundColor: 'white',
						borderWidth: 1,
						pointBorderColor: '#249EBF',
						data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
					}
        ]
	},
	mounted () {
		// this.chartData is created in the mixin
		this.renderChart(this.datacollection, this.options)
  }
  }
  }
}
</script>

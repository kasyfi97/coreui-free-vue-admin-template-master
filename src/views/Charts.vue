<template>
  <div class="animated fadeIn">
      <b-card-group columns="">
        <b-card align="center" header="Bar Chart">
          <div class="chart-wrapper">
            <bar-example chartId="chart-bar-01"/>
          </div>
        </b-card>
        <b-card align="center" header="Bar Chart">
          <div class="chart-wrapper">
            <bar-example chartId="chart-bar-01"/>
          </div>
        </b-card>
      </b-card-group>
    </div>
</template>


<script>
import BarExample from './charts/BarExample'

export default {
  name: 'charts',
  components: {
    BarExample,
  },
   data() {
    return {
      loaded: false,
      pageViews: null,
      pageViewsByCategory: null,
      visitors: null,
      styles: {
        width: "650px",
        height: "400px",
        position: "relative"
      }
    };
  },
  async created() {
    let resp = await fetch(
      "https://api.jsonbin.io/b/5e2b4f673d75894195de48ff/1"
    );
    let data = await resp.json();
    this.pageViews = data.pageViews;
    this.pageViewsByCategory = data.pageViewsByCategory;
    this.visitors = data.newVsReturning;
    this.loaded = true;
  }
}
</script>

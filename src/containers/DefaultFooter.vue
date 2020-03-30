<template>
      <TheFooter>
        <div>
          <!--footer-->
          <span class="ml-1">&copy; 2020 Maranatha.</span>
        </div>
        <div class="ml-auto">
          <span class="mr-1">Powered by Direktorat Kerja Sama Maranatha</span>
        </div>
      </TheFooter>
</template>
<script>
import { Footer as TheFooter } from '@coreui/vue'
export default {
  name: 'DefaultFooter',
  components: {
    TheFooter
  },
}
</script>

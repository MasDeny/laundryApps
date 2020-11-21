<template>
  <div :is="component">
  </div>
</template>

<script>
import { mapActions, mapState  } from "vuex";
import DashboardLayout from "./components/DashboardLayout.vue";
import EmptyLayout from "./components/EmptyLayout.vue";
export default {
  components: {
    'default-layout': DashboardLayout,
    'blank-layout': EmptyLayout
  },
  computed: {
    ...mapState("layoutModule", {
      component: state => state.layout
    })
  }

}
</script>

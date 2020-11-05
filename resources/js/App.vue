<template>
  <div class="font-sans leading-normal tracking-normal bg-gray-800">
    <app-navbar v-if="isAuth"/>

      <div class="flex flex-col md:flex-row">
        <app-sidebar v-if="isAuth"/>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import { mapState, mapGetters  } from 'vuex'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
export default {
  computed: {
    ...mapState(['token']),
    ...mapGetters(['isAuth'])
  },
  components: {
    'app-navbar': Navbar,
    'app-sidebar': Sidebar
  }

}
</script>

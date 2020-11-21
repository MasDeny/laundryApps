<template>
    <div class="flex h-screen bg-gray-200" v-if="isAuth">
        <app-sidebar/>
        <div class="flex flex-col flex-1 overflow-hidden">
            <app-navbar/>
            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                <div class="container px-4 py-6 mx-auto">
                  <router-view />
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters  } from 'vuex'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
export default {
  //name: 'default-layout',
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

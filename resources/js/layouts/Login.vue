<template>
  <!-- Container -->
  <div class="container m-auto">
    <div class="flex justify-center p-6 my-18">
      <!-- Row -->
      <div class="flex w-full border-gray-300 shadow-lg xl:w-3/4 lg:w-11/12">
        <!-- Col -->
        <div
          class="hidden w-full h-auto bg-gray-400 bg-cover rounded-l-lg lg:block lg:w-1/2"
          style="background-image: url('https://image.freepik.com/free-vector/laundry-dry-cleaning-abstract-concept-illustration-laundry-facilities-industry-cleaning-restoration-services-pickup-delivery-service-small-niche-business_335657-9.jpg')"
          ></div>
        <!-- Col -->
        <div class="w-full p-5 bg-white rounded-lg lg:w-1/2 lg:rounded-l-none">
          <h3 class="pt-4 text-2xl font-extrabold text-center">Let's Start To Work!</h3>
          <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            <div class="mb-4">
              <label class="block mb-2 text-sm font-bold text-gray-700" for="Email">
                Email
              </label>
              <input
                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="email"
                v-model="data.email"
                />
            </div>
            <div class="mb-4">
              <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                Password
              </label>
              <input
                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                v-model="data.password"
                />
              <p class="text-xs italic text-red-500">Please choose a password.</p>
            </div>
            <div class="mb-4">
              <input class="mr-2 leading-tight" type="checkbox" id="checkbox_id" v-model="data.remember_me"/>
              <label class="text-sm" for="checkbox_id">
                Remember Me
              </label>
            </div>
            <div class="mb-6 text-center">
              <button
                class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
                @click.prevent="postLogin"
                >
                Sign In
              </button>
            </div>
            <hr class="mb-6 border-t" />
            <div class="text-center">
              <a
                class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                href="./forgot-password.html"
                >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex'
export default {
  data(){
    return {
      data: {
        email: '',
        password: '',
        remember_me: ''
      }
    }
  },
  //SEBELUM COMPONENT DI-RENDER
  created(){
    //pengecekan apakah nilai value dari isAuth apakah true
    if(this.isAuth){
      //jika telah login maka akan ter redirect ke home
      this.$router.push({ name: 'home' })
    } 
  },
  computed: {
    ...mapGetters(['isAuth']), //MENGAMBIL GETTERS isAuth DARI VUEX
    ...mapState(['errors'])
  },
  methods: {
    ...mapActions('auth', ['submit']), //MENGISIASI FUNGSI submit() DARI VUEX AGAR DAPAT DIGUNAKAN PADA COMPONENT TERKAIT. submit() BERASAL DARI ACTION PADA FOLDER STORES/auth.js
    ...mapMutations(['CLEAR_ERRORS']),

    //KETIKA TOMBOL LOGIN DITEKAN, MAKA AKAN MEMINCU METHODS postLogin()
    postLogin(){
      //DIMANA TOMBOL INI AKAN MENJALANKAN FUNGSI submit() DENGAN MENGIRIMKAN DATA YANG DIBUTUHKAN
      this.submit(this.data).then(() => {
        //KEMUDIAN DI CEK VALUE DARI isAuth
        //APABILA BERNILAI TRUE
        if (this.isAuth) {
          this.CLEAR_ERRORS()
          //MAKA AKAN DI-DIRECT KE ROUTE DENGAN NAME home
          this.$router.push({ name: 'home'  })
        }           
      })
    }
  }
}
</script>

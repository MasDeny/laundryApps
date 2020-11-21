<template>
    <nav class="flex justify-between content-center py-4 px-6 bg-white border-b-4 border-indigo-600">
        <ul class="flex items-center">
            <button
                @click="isOpen = true"
                class="text-gray-500 focus:outline-none lg:hidden"
                >
                <svg
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M4 6H20M4 12H20M4 18H11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                </svg>
            </button>
        </ul>
        <!-- top bar left -->
        <ul class="flex items-center xs:overflow-hidden sm:overflow-hidden">
            <!-- add button -->
            <!-- <li class="w-6 h-6">
                <img
                    class="w-full h-full mx-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
                    alt="svelte logo" />
            </li> -->
        </ul>

        <ul class="flex content-center">
            <!-- add button -->
            <li class="relative mx-4 lg:mx-0">
                <h1 class="text-gray-700 font-bold lg:pl-0 sm:text-sm">Lovely Laundry</h1>
            </li>
        </ul>

        <div class="relative">
        <button
          @click="dropdownOpen = !dropdownOpen"
          class="relative z-10 block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none"
        >
          <img
            class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
            alt="Your avatar"
          />
        </button>

        <div
          v-show="dropdownOpen"
          @click="dropdownOpen = false"
          class="fixed inset-0 h-full w-full z-10"
        ></div>

        <div
          v-show="dropdownOpen"
          class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20"
        >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Profile</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Products</a
          >
          <router-link
            to="/"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Log out</router-link
          >
        </div>
      </div>
    </nav>
</template>

<script>
import { defineComponent, ref  } from "@vue/composition-api";
import { useSidebar } from "../utils/useSidebar";
export default defineComponent({
    setup(_, { root  }) {
        const dropdownOpen = ref(false);
        const { isOpen } = useSidebar(
          console.log(isOpen)
        );
        const log = console.log(isOpen)
        return {
            isOpen,
            dropdownOpen,
        };
    },
});
</script>

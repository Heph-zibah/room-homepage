<script setup>
import { ref,computed } from 'vue';
import mobileImage1 from './assets/images/mobile-image-hero-1.jpg';
import mobileImage2 from './assets/images/mobile-image-hero-2.jpg';
import mobileImage3 from './assets/images/mobile-image-hero-3.jpg';
import desktopImage1 from './assets/images/desktop-image-hero-1.jpg';
import desktopImage2 from './assets/images/desktop-image-hero-2.jpg';
import desktopImage3 from './assets/images/desktop-image-hero-3.jpg';

const isOpen = ref(false);

const openMenu = () => {
  isOpen.value = true;
};

const closeMenu = () => {
  isOpen.value = false;
};

const mobileSlides = [
  { image: mobileImage1,
    textHead:"Discover innovative ways to decorate", 
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love." 
  },
  { image: mobileImage2, 
    textHead:"We are available all across the globe", 
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today." 
  },
  { image: mobileImage3, 
    textHead:"Manufactured with the best materials ", 
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
  },
];

const desktopSlides = [
  { image: desktopImage1,
    textHead:"Discover innovative ways to decorate", 
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love." 
  },
  { image: desktopImage2, 
    textHead:"We are available all across the globe", 
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today." 
  },
  { image: desktopImage3, 
    textHead:"Manufactured with the best materials ", 
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
  },
];

const currentSlideIndex = ref(0);

const slides = window.innerWidth > 768 ? desktopSlides : mobileSlides;

const currentSlide = computed(() => slides[currentSlideIndex.value]);

const prevSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value - 1 + slides.length) % slides.length;
};

const nextSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.length;
};


</script>

<template>
    <div>
        <main class="h-screen relative">
            <section class="grid md:grid-cols-2 relative">
                <!-- ----------------------------Mobile menu-------------------------------------- -->
                <div class="absolute z-20 w-full bg-white px-5 py-10" v-show="isOpen">
                    <ul class=" flex items-center gap-x-5 text-black justify-between font-semibold">
                        <img src="./assets/images/icon-close.svg" alt="close icon" class="mr-4 cursor-pointer p-2" @click="closeMenu">
                        <li ><a href="#" class="hover:border-b-[3px] hover:border-b-black pb-1">home</a></li>
                        <li><a href="#"  class="hover:border-b-[3px] hover:border-b-black pb-1">shop</a></li>
                        <li><a href="#"  class="hover:border-b-[3px] hover:border-b-black pb-1">about</a></li>
                        <li><a href="#"  class="hover:border-b-[3px] hover:border-b-black pb-1">contact</a></li>
                    </ul>
                </div>
                <!-- ----------------------------Header-------------------------------------- -->
                <transition name="fade" mode="out-in">
                    <header :key="currentSlideIndex" class="slide bg-no-repeat bg-cover bg-center pt-10 pb-80 md:pb-0 relative" :style="{ backgroundImage: `url(${currentSlide.image})` }">
                        
                        <div class="flex items-center md:px-12 gap-x-10">
                            <img src="./assets/images/icon-hamburger.svg" alt="hamburger" class="md:hidden px-4 mr-16 py-2 cursor-pointer" @click="openMenu">
                            <img src="./assets/images/logo.svg" alt="company logo">
                            <!-- --------------------Desktop menu----------------------- -->
                            <nav class="">
                                
                                <ul class="hidden md:flex items-center gap-x-5 text-white ">
                                    <li ><a href="#" class="hover:border-b-[3px] hover:border-b-white pb-1">home</a></li>
                                    <li><a href="#"  class="hover:border-b-[3px] hover:border-b-white pb-1">shop</a></li>
                                    <li><a href="#"  class="hover:border-b-[3px] hover:border-b-white pb-1">about</a></li>
                                    <li><a href="#"  class="hover:border-b-[3px] hover:border-b-white pb-1">contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                </transition>
                <footer class="absolute right-0 bottom-0 text-[10px] pr-5">Challenge by <a href="#">Frontend Mentor</a>. Coded by <a href="#">oadaramola</a></footer>
                <!-- ----------------------------Mobile arrows-------------------------------------- -->
                <div class="absolute top-[46.5%] right-0">
                        <div class="bg-black flex w-fit  items-center md:hidden">
                            <img src="./assets/images/icon-angle-left.svg" alt="arrow left icon" class="bg-black hover:bg-gray-800 px-8 py-5 cursor-pointer" @click="prevSlide">
                            <img src="./assets/images/icon-angle-right.svg" alt="arrow right icon" class="bg-black hover:bg-gray-800 px-8 py-5 cursor-pointer" @click="nextSlide">
                        </div>
                    </div>
                <div>
                    <transition name="fade" mode="out-in">
                        <div :key="currentSlideIndex" class="px-4 lg:pl-[8.5rem] py-10">
                            <h1 class="text-black font-bold text-4xl lg:pr-36">{{ currentSlide.textHead }}</h1>
                            <p class="text-gray-400 text-sm  lg:pr-40">{{ currentSlide.text }}</p>
                            <button class="text-gray-400 flex items-center leading-9 tracking-[15px] mt-3 uppercase">Shop now <img src="./assets/images/icon-arrow.svg" alt="arrow icon" class="pl-3"></button>
                        </div>
                    </transition>
                    <!-- ----------------------------Deskttop arrows-------------------------------------- -->
                    <div class="bg-black md:flex w-fit  items-center hidden">
                        <img src="./assets/images/icon-angle-left.svg" alt="arrow left icon" class="bg-black hover:bg-gray-800 px-8 py-5 cursor-pointer" @click="prevSlide">
                        <img src="./assets/images/icon-angle-right.svg" alt="arrow right icon" class="bg-black hover:bg-gray-800 px-8 py-5 cursor-pointer" @click="nextSlide">
                    </div>
                </div>
            </section>
            <!-- ----------------------------Down section-------------------------------------- -->
            <section class="grid md:grid-cols-2 lg:grid-cols-3 ">
                <div>
                    <img src="./assets/images/image-about-dark.jpg" alt="furniture image">
                </div>
                <div class="px-4 py-10">
                    <h2 class="uppercase text-black font-bold text-lg">About our furniture</h2>
                    <p class="text-[#808080] text-sm">Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
                </div>
                <div class="w-full">
                    <img src="./assets/images/image-about-light.jpg" alt="furniture image">
                </div>
            </section>
        </main>
        
    </div>
</template>

<style scoped>
.slide {
  transition: opacity .5s ease-in-out; /* Transition animation for smoother slide change */
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-in-out; /* Transition animation for smoother slide change */
}
.fade-enter, .fade-leave-to {
  opacity: 0; /* Start slide transition with opacity 0 */
}
</style>

<script setup>
</script>

<template>
    <div>
        <main class="h-screen relative">
            <section class="grid md:grid-cols-2 relative">
                <div class="hidden absolute z-20 w-full bg-white p-5 ">
                    
                    <ul class=" flex items-center gap-x-5 text-black justify-between font-semibold">
                        <img src="./assets/images/icon-close.svg" alt="close icon" class="pr-5 cursor-pointer">
                        <li ><a href="#" class="hover:border-b-[3px] hover:border-b-black pb-1">home</a></li>
                        <li><a href="#"  class="hover:border-b-[3px] hover:border-b-black pb-1">shop</a></li>
                        <li><a href="#"  class="hover:border-b-[3px] hover:border-b-black pb-1">about</a></li>
                        <li><a href="#"  class="hover:border-b-[3px] hover:border-b-black pb-1">contact</a></li>
                    </ul>
                </div>
                <header class="bg-[url('././assets/images/mobile-image-hero-1.jpg')] lg:bg-[url('././assets/images/desktop-image-hero-1.jpg')] bg-no-repeat bg-cover bg-center pt-10 pb-80 md:pb-0 relative">
                    
                    <div class="flex items-center px-12 gap-x-10">
                        <img src="./assets/images/icon-hamburger.svg" alt="hamburger" class="md:hidden pr-10 cursor-pointer">
                        <img src="./assets/images/logo.svg" alt="company logo">
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
                <footer class="absolute right-0 bottom-0 text-[10px] pr-5">Challenge by <a href="#">Frontend Mentor</a>. Coded by <a href="#">oadaramola</a></footer>
                <div class="absolute top-[45%] right-0">
                        <div class="bg-black flex w-fit  items-center md:hidden">
                            <img src="./assets/images/icon-angle-left.svg" alt="arrow left icon" class="bg-black hover:bg-gray-800 px-8 py-5 cursor-pointer">
                            <img src="./assets/images/icon-angle-right.svg" alt="arrow right icon" class="bg-black hover:bg-gray-800 px-8 py-5 cursor-pointer">
                        </div>
                    </div>
                <div>
                    <div class="px-5 lg:pl-[8.5rem] py-10">
                        <h1 class="text-black font-bold text-4xl lg:pr-36">Discover innovative ways to decorate</h1>
                        <p class="text-gray-400 text-sm lg:pr-36">We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
                        <button class="text-gray-400 flex items-center leading-9 tracking-[15px] mt-3 uppercase">Shop now <img src="./assets/images/icon-arrow.svg" alt="arrow icon" class="pl-3"></button>
                    </div>
                    
                    <div class="bg-black md:flex w-fit  items-center hidden">
                        <img src="./assets/images/icon-angle-left.svg" alt="arrow left icon" class="bg-black hover:bg-gray-800 px-8 py-5 cursor-pointer">
                        <img src="./assets/images/icon-angle-right.svg" alt="arrow right icon" class="bg-black hover:bg-gray-800 px-8 py-5 cursor-pointer">
                    </div>
                </div>
            </section>
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
</style>

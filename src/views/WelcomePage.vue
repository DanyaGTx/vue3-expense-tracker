<template>
  <div class="p-[10px]">
    <swiper
      :slides-per-view="1"
      :space-between="50"
      :loop="true"
      :modules="modules"
      :pagination="{ clickable: true }"
    >
      <swiper-slide>
        <div class="welcome-slide">
          <div>
            <img
              class="m-auto"
              src="../images/WelcomePage/slider-images/gain.svg"
              alt=""
            />
          </div>
          <div class="text-center">
            <h2 class="text-[#212325] text-[32px] font-bold leading-10">
              Gain total control of your money
            </h2>
            <p class="text-[#91919F] text-[16px] leading-5 mt-[18px]">
              Become your own money manager and make every cent count
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="welcome-slide">
          <div>
            <img
              class="m-auto"
              src="../images/WelcomePage/slider-images/goes.svg"
              alt=""
            />
          </div>
          <div class="text-center">
            <h2 class="text-[#212325] text-[32px] font-bold leading-10">
              Know where your money goes
            </h2>
            <p class="text-[#91919F] text-[16px] leading-5 mt-[18px]">
              Track your transaction easily, with categories and financial
              report
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="welcome-slide">
          <div>
            <img
              class="m-auto"
              src="../images/WelcomePage/slider-images/plan.svg"
              alt=""
            />
          </div>
          <div class="text-center h-[130px] flex flex-col justify-between">
            <h2 class="text-[#212325] text-[32px] font-bold leading-10">
              Planning ahead
            </h2>
            <p class="text-[#91919F] text-[16px] leading-5 mt-[18px]">
              Setup your budget for each category so you in control
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="mt-[35px]">
      <div>
        <router-link :to="{ name: routeNames.registration }">
          <el-button
            class="w-full"
            style="height: 55px; border-radius: 16px; font-size: 18px"
            color="#7F3DFF"
            >Sign Up</el-button
          >
        </router-link>
      </div>
      <div class="mt-[15px]">
        <router-link :to="{ name: routeNames.login }">
          <el-button
            class="w-full"
            style="
              height: 55px;
              border-radius: 16px;
              font-size: 18px;
              color: #7f3dff;
            "
            color="#EEE5FF"
            >Login</el-button
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'
import { routeNames } from '../router/routes'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Pagination]
</script>

<style>
.swiper-pagination-bullet-active {
  width: 12px;
  height: 12px;
  background: #7f3dff;
}
.welcome-slide {
  height: 500px;
}
.swiper-pagination {
  transform: translateY(0px) !important;
}
</style>

<template>
  <div class="account-info-bg pb-[25px]">
    <div class="p-[10px]">
      <div class="flex justify-between items-center">
        <div>
          <img
            class="object-cover rounded-full w-[50px] h-[50px]"
            src="../images/HomePage/avatar.jpg"
            alt=""
          />
        </div>
        <div>
          <p class="sm:text-[20px]">October</p>
        </div>
        <div>
          <img src="../images/HomePage/notifiaction.svg" alt="" />
        </div>
      </div>
      <div class="text-center">
        <p
          class="text-[#91919F] font-medium mb-[10px] text-sm sm:text-[26px] sm:mb-[20px]"
        >
          Account Balance
        </p>
        <h2 class="font-semibold text-4xl font-Inter sm:text-[48px]">$9400</h2>
      </div>
      <div class="flex justify-center gap-4 text-white mt-7">
        <ExpensesComponent />
        <IncomeComponent />
      </div>
    </div>
  </div>
  <div>
    <GraphComponent />
    <TabsCompoent />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ExpensesComponent from '../components/HomePage/ExpensesComponent.vue'
import IncomeComponent from '../components/HomePage/IncomeComponent.vue'
import TabsCompoent from '../components/HomePage/TabsComponent.vue'
import GraphComponent from '../components/HomePage/GraphComponent.vue'
</script>

<style>
.tab-button {
  color: #91919f;
  width: 90px;
  height: 34px;
}
.activeTab {
  color: #fcac12;
  font-weight: 700;
  width: 90px;
  height: 34px;
  background: #fceed4;
  border-radius: 16px;
}
</style>

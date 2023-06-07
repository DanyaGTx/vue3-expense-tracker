<template>
  <div class="p-[10px]">
    <div
      class="flex items-center justify-between gap-4 border border-gray-50 rounded-[16px]"
    >
      <button
        v-for="(_, tab) in tabs"
        :key="tab"
        :class="['tab-button', { activeTab: currentTab === tab }]"
        @click="currentTab = tab"
        class="sm:text-[20px] md:text-[22px]"
      >
        {{ tab }}
      </button>
    </div>
    <div class="flex items-center justify-between mt-[25px]">
      <h2
        class="text-[18px] min-[400px]:text-[25px] min-[500px]:text-[30px] text-[#0D0E0F] font-semibold"
      >
        Recent Transaction
      </h2>
      <div>
        <button
          class="text-[#7F3DFF] font-medium text-sm p-[8px] pl-3 pr-3 bg-[#EEE5FF] rounded-[40px]"
        >
          See All
        </button>
      </div>
    </div>
    <div class="max-w-[800px] m-auto mt-3">
      <component omponent :is="tabs[currentTab]" class="tab"></component>
    </div>
  </div>
</template>

<script setup>
import Today from '../HomePage/Tabs/TodayTab.vue'
import Week from '../HomePage/Tabs/WeekTab.vue'
import Month from '../HomePage/Tabs/MonthTab.vue'
import Year from '../HomePage/Tabs/YearTab.vue'

import { ref } from 'vue'
const tabs = {
  Today,
  Week,
  Month,
  Year,
}
const currentTab = ref('Today')
</script>

<template>
  <SwSection :id="id" class="relative">
    <div class="flex flex-col gap-px bg-black lg:flex-row">
      <div class="bg-white lg:w-1/2">
        <SwContentContainer class="pt-8 pl-0" :no-top-space="true">
          <SwDisplay2
            class="pl-8 lg:flex-shrink-0 lg:flex-grow-0 lg:pl-0"
            :content="group_1_label"
          />

          <SwBadgeGroup :value="group_1_tags" class="mt-6 pl-8 lg:pl-0" />
        </SwContentContainer>
      </div>
      <div class="bg-white lg:w-1/2">
        <SwContentContainer class="pt-8 pl-0" :no-top-space="true">
          <SwDisplay2
            :content="group_2_label"
            class="pl-8 lg:flex-shrink-0 lg:flex-grow-0 lg:pl-0"
          />
          <div
            class="mt-6 flex items-center flex-nowrap gap-2 overflow-auto pl-8 lg:flex-wrap lg:pl-0"
          >
            <div
              v-for="(team, index) in group_2_tags"
              :key="index"
              class="flex items-center justify-between gap-2 rounded-full bg-page-primary-100 pl-3 lg:pl-5 text-page-primary-500"
            >
              <SwMono3 :content="team.label" class="top-px whitespace-nowrap" />
              <SwMono3
                :content="team.count"
                class="flex justify-center items-center w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-page-primary-200 text-page-primary-900"
              />
            </div>
          </div>
        </SwContentContainer>
      </div>
    </div>
  </SwSection>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});

const data = await useSectionData(props, {
  fields: ["group_1_label", "group_2_label", "group_1_tags", "group_2_tags"],
});

const { group_1_label, group_2_label, group_1_tags, group_2_tags } = data;
</script>

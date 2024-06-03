<template>
  <SwSection>
    <SwContentContainer>
      <SwDisplay1 content="Achievements & Milestones" />
      <SwBody1 content="Proud accreditations that keep us ahead of the rest" />
    </SwContentContainer>
    <div class="relative -mt-10">
      <div class="px-8 pb-8 lg:pb-10 lg:px-20">
        <div v-for="(achievement, index) in achievements" :key="index">
          <div
            v-if="newYear == achievement.year"
            class="flex items-center space-x-6 overflow-auto"
          >
            <div
              v-for="(item, i) in achievement.items"
              :key="i"
              class="achievement-cards divide-y divide-black border transition-all duration-200"
            >
              <img
                :src="`/images/${item.image}.jpg`"
                :alt="item.title"
                class="bg-gray-100 p-4 w-full lg:p-6"
              >
              <div class="p-4 lg:p-6">
                <h6 class="font-display text-xl font-semibold lg:text-3xl">
                  {{ item.title }}
                </h6>
                <SwBody2 :content="item.content" class="pt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="sticky bottom-0 flex overflow-auto divide-x divide-black bg-gray-100"
      >
        <button
          v-for="achievement in achievements"
          :key="achievement.year"
          class="w-full transition-all duration-300 hover:bg-white"
          :class="
            newYear == achievement.year
              ? 'bg-white px-12 text-primary-500'
              : 'border-t px-6 py-4 lg:p-6'
          "
          @click="changeYear(achievement.year)"
        >
          <p class="font-display text-xl font-medium lg:text-2xl">
            {{ achievement.year }}
          </p>
        </button>
      </div>
    </div>
  </SwSection>
</template>

<script setup>
const achievements = [
  {
    year: 2023,
    items: [
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
    ],
  },
  {
    year: 2022,
    items: [
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
    ],
  },
  {
    year: 2021,
    items: [
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
    ],
  },
  {
    year: 2020,
    items: [
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
    ],
  },
  {
    year: 2019,
    items: [
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
    ],
  },
  {
    year: 2018,
    items: [
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
    ],
  },
  {
    year: 2017,
    items: [
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
    ],
  },
  {
    year: 2016,
    items: [
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
    ],
  },
  {
    year: 2015,
    items: [
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
      {
        title: "Bored reading ChatGPT content?",
        content:
          "We soon matured within the digital space and embarked on graphic designing, website development, software, development, and social media marketing and our fondness of the digital world has been quite phenomenal so far!",
        image: "achievement-1",
      },
    ],
  },
];

const newYear = ref(null);

const changeYear = (year) => {
  newYear.value = year;
};

onMounted(() => {
  newYear.value = new Date().getFullYear();
});
</script>

<style>
.achievement-cards {
  min-width: 90%;
}

@media (min-width: 768px) {
  .achievement-cards {
    min-width: 60%;
  }
}

@media (min-width: 1280px) {
  .achievement-cards {
    min-width: 30%;
  }
}
</style>

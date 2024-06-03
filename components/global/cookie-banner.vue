<template>
  <div
    v-if="!cookie"
    class="fixed left-0 bottom-0 right-0 z-50 bg-black items-center lg:h-20 overflow-hidden lg:flex"
  >
    <div class="w-full flex items-center flex-wrap p-4 lg:p-8">
      <SwBody2
        content="Do you like cookies? We use them to give you the best possible experience."
        class="text-white"
      />
      <NuxtLink to="/privacy-policy">
        <SwBody2
          content=" Your info will not be sold or used otherwise."
          class="text-white underline underline-offset-4"
        />
      </NuxtLink>
    </div>
    <div
      class="flex items-center justify-center cursor-pointer bg-primary-500 w-full p-4 lg:w-64 lg:p-8"
      @click="setCookie()"
    >
      <SwBody2 content="Sweet" class="text-white" />
    </div>
  </div>
</template>

<script setup>
const cookie = useCookie("privacy-cookie", {
  // 30 days expiry
  maxAge: 2592000,
  default: () => false,
});

const setCookie = () => {
  cookie.value = true;
};
</script>

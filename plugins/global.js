import VueList from "@7span/vue-list";

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueList);
});

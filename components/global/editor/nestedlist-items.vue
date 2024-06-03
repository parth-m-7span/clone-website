<template>
  <component :is="tag">
    <li v-for="(item, index) in items" :key="index">
      <span v-html="item.content"></span>
      <EditorNestedlistItems
        v-if="item.items"
        :list-style="props.listStyle"
        :items="item.items"
      />
    </li>
  </component>
</template>

<script setup>
const props = defineProps({
  listStyle: {
    type: String,
    default: "ordered",
  },
  items: {
    type: Array,
    default: () => [],
  },
});

const tag = props.listStyle == "ordered" ? "ol" : "ul";
</script>

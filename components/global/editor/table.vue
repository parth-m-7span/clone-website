<template>
  <table class="table">
    <tbody>
      <tr v-for="(row, rowIndex) in props.value.data.content" :key="rowIndex">
        <td
          v-for="(col, colIndex) in row"
          :key="`${rowIndex}-${colIndex}`"
          v-html="col"
        ></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps({
  value: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <NuxtErrorBoundary>
    <template #error="{ error, clearError }">
      You can display the error locally here: {{ error }}
      <button @click="clearError">
        This will clear the error.
      </button>
    </template>

    <slot />
  </NuxtErrorBoundary>
</template>

<script>
export default {};
</script>

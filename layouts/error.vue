<template>
  <NuxtLayout>
    <div class="errorSection">
      <p>ERROR DETAILS: {{ error.statusCode }} {{ error.statusMessage }}</p>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default', // you can set a custom layout for the error page
}
</script>

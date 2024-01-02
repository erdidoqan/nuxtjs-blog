<template>
  <nav class="flex items-center justify-center bg-grey-light rounded font-sans w-full">

    <ol class="list-reset flex text-grey-dark">

      <template v-for="(list,key) in lists">
        <li :class="list.hidden ? 'hidden': ''" >

          <NuxtLink
            :to="`${list.url + '/'}`"
            class="text-gray-400 underline"
          >
            <span>{{ list.name }}</span>
          </NuxtLink>
        </li>
        <li v-if="list.ok" ><span class="mx-2 breadcrumb-slash text-gray-400">/</span></li>
      </template>

    </ol>
  </nav>
</template>

<script>
export default {
  props: ['lists'],
  name: "Breadcrumbs",
}
</script>

<style scoped>
.breadcrumb-slash{
  margin-left: 0.5em;
  font-size: 16px;
  vertical-align: middle;
  font-weight: normal;
  color: #e3e3e3;
}
</style>

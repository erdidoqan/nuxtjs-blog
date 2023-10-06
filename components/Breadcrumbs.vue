<template>
  <nav aria-label="breadcrumbs" class="flex items-center justify-center bg-grey-light rounded font-sans w-full">

    <ol itemscope itemtype="https://schema.org/BreadcrumbList" class="list-reset flex text-grey-dark">

      <template v-for="(list,key) in lists">
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" :class="list.hidden ? 'hidden': ''" >

          <NuxtLink
            itemprop="item"
            :to="list.url+'/'"
            data-vars-ga-ux-element="Breadcrumbs"
            :data-vars-ga-call-to-action="list.name"
            :data-vars-ga-outbound-link="list.url"
            class="text-gray-400 underline"
          >
            <span itemprop="name">{{ list.name }}</span>
          </NuxtLink>
          <meta itemprop="position" :content="key + 1">
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

<template>
  <header class="bp-header">
    <h1 class="bp-header__title ">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import './_header.scss';
</style>

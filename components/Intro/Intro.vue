<template>
  <div class="bp-intro">
    <div class="bp-intro__desc" v-html="desc" />
  </div>
</template>

<script>
export default {
  props: {
    desc: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
@import './_intro.scss';
</style>

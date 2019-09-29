<template>
  <div class="bp-intro">
    <h2 class="bp-intro__desc">{{ desc }}</h2>
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

<style lang="scss" scoped>
@import './_intro.scss';
</style>

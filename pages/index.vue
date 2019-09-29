<template>
  <div class="container">
    <div>
      <Header :title="title" />
      <main>
        <Intro :desc="desc" />
        <Button>Contact me</Button>
      </main>
      <Clients />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header/Header.vue'
import Intro from '~/components/Intro/Intro.vue'
import Button from '~/components/Button/Button.vue'
import Clients from '~/components/Clients/Clients.vue'

export default {
  components: {
    Header,
    Intro,
    Button,
    Clients
  },
  data() {
    return {
      title: 'Benn Pearson is a contract design engineer.',
      desc: `He has expertise in design systems, frontend, interface design, prototyping, interaction and inclusive design.
              Currently contracting as an Frontend Developer  within the financial technology sector.
              Previously contracted as a Product Designer for the BBC & Interaction Designer for Government.`
    }
  }
}
</script>

<style lang="scss">
html {
  background-color: black;
  color: white;
  padding: 50px;
}
@media (min-width: 768px) {
  html {
    padding: 100px;
  }
}
</style>

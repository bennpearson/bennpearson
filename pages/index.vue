<template>
  <div class="container">
    <div>
      <Header :title="title" />
      <main>
        <section class="bp-section">
          <Intro :desc="desc" />
        </section>
        <section class="bp-section">
          <Button>Contact me</Button>
        </section>
        <section class="bp-section">
          <Clients />
        </section>
      </main>
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
.container {
  max-width: 768px;
}
.bp-header {
  margin-bottom: 100px;
}
.bp-section {
  margin-bottom: 100px;
}
</style>

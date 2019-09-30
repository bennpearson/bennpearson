<template>
  <div class="container">
    <div>
      <Header :title="title" />
      <main>
        <section class="bp-section">
          <Intro :desc="desc" />
        </section>
        <section class="bp-section">
          <Button>Contact</Button>
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
      desc: `<p>He has expertise in <strong>design systems</strong>, <strong>interface design</strong>, <strong>prototyping</strong>, <strong>interaction</strong> and <strong>inclusive design</strong>.</p>
              <p>Currently contracting as an <strong>Frontend Developer</strong> within the financial technology sector.</p>
              <p>Previously contracted as a <strong>Product Designer</strong> for the BBC & <strong>Interaction Designer</strong> for Government.</p>`
    }
  }
}
</script>

<style lang="scss">
html {
  background-color: black;
  color: white;
  padding: 40px;
}
body,
input {
  font-family: 'Public Sans', 'Helvetica Neue', Arial, sans-serif;
}
strong {
  font-weight: bold;
}
@media (min-width: 768px) {
  html {
    padding: 100px;
  }
}
.container {
  max-width: 470px;
}
@media (min-width: 768px) {
  .container {
    max-width: 760px;
  }
}
@font-face {
  font-family: 'Public Sans';
  src: url('../assets/fonts/publicsans-bold-webfont.woff2') format('woff2');
  font-weight: bold;
}
@font-face {
  font-family: 'Public Sans';
  src: url('../assets/fonts/publicsans-regular-webfont.woff2') format('woff2');
  font-weight: normal;
}
@font-face {
  font-family: 'Public Sans';
  src: url('../assets/fonts/publicsans-thin-webfont.woff2') format('woff2');
  font-weight: 100;
}
</style>

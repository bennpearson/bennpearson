<template>
  <ul class="bp-clients">
    <li class="bp-clients__logo">
      <LogoGov class="bp-clients__svg" />
    </li>
    <li class="bp-clients__logo">
      <LogoBbc class="bp-clients__svg" />
    </li>
    <li class="bp-clients__logo">
      <LogoWarnerbrothers class="bp-clients__svg" />
    </li>
    <li class="bp-clients__logo">
      <LogoChannel4 class="bp-clients__svg" />
    </li>
    <li class="bp-clients__logo">
      <LogoRnib class="bp-clients__svg" />
    </li>
    <li class="bp-clients__logo">
      <LogoNetmag class="bp-clients__svg" />
    </li>
    <li class="bp-clients__logo">
      <LogoFivesimplesteps class="bp-clients__svg" />
    </li>
    <li class="bp-clients__logo">
      <LogoGocogroup class="bp-clients__svg" />
    </li>
    <li class="bp-clients__logo">
      <LogoMsm class="bp-clients__svg" />
    </li>
    <li class="bp-clients__logo">
      <LogoDonmar class="bp-clients__svg" />
    </li>
    <li class="bp-clients__logo">
      <LogoVisitwales class="bp-clients__svg" />
    </li>
    <li class="bp-clients__logo">
      <LogoArriva class="bp-clients__svg" />
    </li>
  </ul>
</template>

<script>
import LogoArriva from '~/assets/svg/arriva.svg'
import LogoBbc from '~/assets/svg/bbc.svg'
import LogoChannel4 from '~/assets/svg/channel4.svg'
import LogoDonmar from '~/assets/svg/donmar.svg'
import LogoFivesimplesteps from '~/assets/svg/fivesimplesteps.svg'
import LogoGocogroup from '~/assets/svg/gocogroup.svg'
import LogoGov from '~/assets/svg/gov.svg'
import LogoMsm from '~/assets/svg/msm.svg'
import LogoNetmag from '~/assets/svg/netmag.svg'
import LogoRnib from '~/assets/svg/rnib.svg'
import LogoVisitwales from '~/assets/svg/visitwales.svg'
import LogoWarnerbrothers from '~/assets/svg/warnerbrothers.svg'

export default {
  components: {
    LogoArriva,
    LogoBbc,
    LogoChannel4,
    LogoDonmar,
    LogoFivesimplesteps,
    LogoGocogroup,
    LogoGov,
    LogoMsm,
    LogoNetmag,
    LogoRnib,
    LogoVisitwales,
    LogoWarnerbrothers
  }
}
</script>

<style lang="scss">
.bp-clients {
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  max-width: 768px;
}
.bp-clients__logo {
  margin-right: 50px;
  margin-bottom: 50px;
  width: 70px;
}
@media (min-width: 768px) {
  .bp-clients__logo {
    width: 100px;
  }
}
.bp-clients__svg {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="bp-clients">
    <h2 class="bp-clients__title">Previous clients</h2>
    <ul class="bp-clients__list">
      <li class="bp-clients__list-item">
        <LogoGov class="bp-clients__svg" />
      </li>
      <li class="bp-clients__list-item">
        <LogoBbc class="bp-clients__svg" />
      </li>
      <li class="bp-clients__list-item">
        <LogoWarnerbrothers class="bp-clients__svg" />
      </li>
      <li class="bp-clients__list-item">
        <LogoChannel4 class="bp-clients__svg" />
      </li>
      <li class="bp-clients__list-item">
        <LogoGocogroup class="bp-clients__svg" />
      </li>
      <li class="bp-clients__list-item">
        <LogoRnib class="bp-clients__svg" />
      </li>
      <li class="bp-clients__list-item">
        <LogoNetmag class="bp-clients__svg" />
      </li>
      <li class="bp-clients__list-item">
        <LogoFivesimplesteps class="bp-clients__svg" />
      </li>
      <li class="bp-clients__list-item">
        <LogoMsm class="bp-clients__svg" />
      </li>
      <li class="bp-clients__list-item">
        <LogoDonmar class="bp-clients__svg" />
      </li>
      <li class="bp-clients__list-item">
        <LogoVisitwales class="bp-clients__svg" />
      </li>
      <li class="bp-clients__list-item">
        <LogoArriva class="bp-clients__svg" />
      </li>
    </ul>
  </div>
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

<style lang="scss" scoped>
@import './clients.scss';
</style>

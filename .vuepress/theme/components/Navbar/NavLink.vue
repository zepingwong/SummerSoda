<template>
  <router-link
    class="nav-link"
    :to="link"
    v-if="!isExternal(link)"
    :exact="exact">
    <reco-icon :icon="`${item.icon}`" />
    {{ item.text }}
  </router-link>
  <a
    v-else
    :href="link"
    class="nav-link external"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    <reco-icon :icon="'iconfont' + `${item.icon}`" />
    {{ item.text }}
    <OutboundLink/>
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '../../helpers/utils'
import { RecoIcon } from '../../core/components'

export default {
  name: 'NavLink',
  components: { RecoIcon },
  props: {
    item: {
      required: true
    }
  },
  computed: {
    link () {
      return ensureExt(this.item.link)
    },
    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
      }
      return this.link === '/'
    }
  },
  methods: {
    isExternal () {
      return isExternal()
    },
    isMailto () {
      return isMailto()
    },
    isTel () {
      return isTel()
    }
  }
}
</script>

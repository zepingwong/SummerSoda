<template>
  <nav class="nav-links" v-if="userLinks.length || repoLink">
    <!-- user links -->
    <div
      class="nav-item"
      v-for="item in userLinks"
      :key="item.link"
    >
      <DropdownLink v-if="item.type === 'links'" :item="item" />
      <NavLink v-else :item="item" />
    </div>

    <!-- repo link -->
    <a
      v-if="repoLink"
      :href="repoLink"
      class="repo-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <reco-icon :icon="`icon-${repoLabel.toLowerCase()}`" />
      {{ repoLabel }}
      <OutboundLink/>
    </a>
  </nav>
</template>

<script>
import { defineComponent, computed, ref } from 'vue-demi'
import { RecoIcon } from '../../core/lib/components'
import DropdownLink from '../DropdownLink'
import { resolveNavLinkItem } from '../../helpers/utils'
import NavLink from './NavLink'
import { useInstance } from '../../helpers/composable'
export default defineComponent({
  components: { NavLink, DropdownLink, RecoIcon },
  setup () {
    const instance = useInstance()
    const userNav = ref([])
    const navObject = computed(() => {
      return instance.$themeLocaleConfig.navConfig || instance.$themeConfig.navConfig || {}
    })

    const available = ['home', 'docs', 'category', 'tag', 'timeline']
    const nav = computed(() => {
      Object.keys(navObject.value).map((key) => {
        let index = available.indexOf(key)
        const isHave = userNav.value.some(item => {
          if (navObject.value[key]) {
            return item.text === (navObject.value[key].text || instance.$recoLocales[key])
          } else {
            return true
          }
        })
        if (index !== -1) {
          if (!isHave && Object.hasOwnProperty.call(navObject.value, key)) {
            let item = navObject.value[key]
            if (key === 'category') {
              const $categories = instance.$categories
              userNav.value.splice(parseInt(item.location || index + 1) - 1, 0, {
                items: $categories.list.map(i => {
                  i.link = i.path
                  i.text = i.name
                  return i
                }),
                text: item.text || instance.$recoLocales.category,
                type: 'links',
                icon: item.icon || 'icon-' + key
              })
            } else {
              userNav.value.splice(parseInt(item.location || index + 1) - 1, 0, {
                link: key === 'home' ? '/' : key === 'docs' ? '/docslist/' : '/' + key + '/',
                text: item.text || instance.$recoLocales[key],
                type: 'links',
                icon: item.icon || 'icon-' + key
              })
            }
          }
        } else if (!isHave) {
          index = index === -1 ? userNav.value.length : index
          const item = navObject.value[key]
          userNav.value.splice(parseInt(item.location || index+1) - 1, 0, {
            link: Object.hasOwnProperty.call(item, 'link') ? item.link : '',
            text: item.text,
            items: Object.hasOwnProperty.call(item, 'items') ? item.items.filter(i => {
              return i?.text && i?.link
            }): [],
            type: 'links',
            icon: item.icon || 'icon-category'
          })
        }
      })
      return userNav.value
    })
    const userLinks = computed(() => {
      return (nav.value || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      })
    })
    const repoLink = computed(() => {
      const { repo } = instance.$themeConfig
      if (repo) {
        return /^https?:/.test(repo)
          ? repo
          : `https://github.com/${repo}`
      }
      return ''
    })
    const repoLabel = computed(() => {
      if (!instance.repoLink) return ''
      if (instance.$themeConfig.repoLabel) {
        return instance.$themeConfig.repoLabel
      }
      const repoHost = instance.repoLink.match(/^https?:\/\/[^/]+/)[0]
      const platforms = ['GitHub', 'GitLab', 'Bitbucket']
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i]
        if (new RegExp(platform, 'i').test(repoHost)) {
          return platform
        }
      }
      return 'Source'
    })
    return { userNav, nav, userLinks, repoLink, repoLabel }
  }
})
</script>

<style lang="stylus">
.nav-links
  display inline-block
  a
    line-height 1.4rem
    color var(--text-color)
    &:hover, &.router-link-active
      color $accentColor
      .iconfont
        color $accentColor
  .nav-item
    position relative
    display inline-block
    margin-left 1.5rem
    line-height 2rem
    &:first-child
      margin-left 0
  .repo-link
    margin-left 1.5rem

@media (max-width: $MQMobile)
  .nav-links
    .nav-item, .repo-link
      margin-left 0

@media (min-width: $MQMobile)
  .nav-item > a:not(.external)
    &:hover, &.router-link-active
      margin-bottom -2px
</style>

<template>
  <Common :sidebarItems="sidebarItems" :showModule="recoShowModule">
    <component v-if="$frontmatter.home" :is="homeCom"/>
    <Page v-else :sidebar-items="sidebarItems"/>
    <Footer v-if="$frontmatter.home" class="footer" />
  </Common>
</template>

<script>
import HomeBlog from '../components/HomeBlog'
import HomeDocs from '../components/HomeDocs'
import HomePageOne from '../components/HomePageOne'
import Page from '../components/Page'
import Footer from '../components/Footer'
import Common from '../components/Common'
import { resolveSidebarItems } from '../helpers/utils'
import moduleTransitonMixin from '../mixins/moduleTransiton'

export default {
  mixins: [moduleTransitonMixin],
  components: { HomeBlog, HomeDocs, Page, Common, Footer, HomePageOne },
  computed: {
    sidebarItems() {
      const { $page, $site, $localePath } = this
      if ($page) {
        return resolveSidebarItems(
          $page,
          $page.regularPath,
          $site,
          $localePath
        )
      } else {
        return []
      }
    },
    homeCom() {
      const type = this.$frontmatter?.type || this.$themeConfig?.type || 'docs'
      return type === 'blog' ? 'HomeBlog' :
        type === 'HomeBlog' ? 'HomeBlog' :
          type === 'HomePageOne' ? 'HomePageOne' : 'HomeBlog'
    }
  }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src='../styles/theme.styl' lang="stylus"></style>

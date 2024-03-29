<template>
  <div class="theme-container" :class="pageClasses">
    <div v-if="!absoluteEncryption">
      <transition name="fade">
        <Password v-show="!firstLoad && !isHasKey" class="password-wrapper-out" key="out" />
      </transition>

      <div :class="{ 'hide': firstLoad || !isHasKey }">
        <Navbar v-if="shouldShowNavbar" :show-toggle-button="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
        <div class="sidebar-mask" @click="toggleSidebar(false)"></div>
        <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
          <PersonalInfo slot="top" />
          <slot name="sidebar-bottom" slot="bottom"/>
        </Sidebar>
        <Password v-show="!isHasPageKey" :isPage="true" class="password-wrapper-in" key="in"></Password>
        <div :class="{ 'hide': !isHasPageKey }">
          <slot></slot>
        </div>
      </div>
    </div>
    <div v-else>
      <transition name="fade">
        <Password v-if="!isHasKey" />
        <div v-else>
          <Navbar v-if="shouldShowNavbar" :show-toggle-button="isSidebarOpen" @toggle-sidebar="toggleSidebar"/>
          <div class="sidebar-mask" @click="toggleSidebar(false)"></div>
          <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
            <PersonalInfo slot="top" />
            <slot name="sidebar-bottom" slot="bottom"/>
          </Sidebar>
          <Password v-if="!isHasPageKey" :isPage="true"></Password>
          <slot v-else></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import PersonalInfo from '../HomeBlog/PersonalInfo'
import Password from '../Password'
import { setTimeout } from 'timers'

export default {
  name: 'CommonIndex',
  components: { Sidebar, Navbar, Password, PersonalInfo },
  props: {
    sidebar: {
      type: Boolean,
      default: true
    },
    sidebarItems: {
      type: Array,
      default: () => []
    },
    showModule: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isSidebarOpen: false,
      isHasKey: true,
      isHasPageKey: true,
      firstLoad: true
    }
  },
  computed: {
    shouldShowSidebar () {
      return this.sidebarItems.length > 0
    },
    absoluteEncryption () {
      return this.$themeConfig.keyPage && this.$themeConfig.keyPage.absoluteEncryption === true
    },
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter?.navbar === false ||
        themeConfig?.navConfig?.isShow === false ||
        themeConfig?.locales?.navConfig?.isShow === false
      ) return false
      return (
        this.$title ||
        themeConfig?.logo ||
        themeConfig?.repo ||
        themeConfig?.navConfig ||
        this.$themeLocaleConfig?.navConfig
      )
    },
    pageClasses () {
      const classValue = {
        'no-navbar': !this.shouldShowNavbar,
        'sidebar-open': this.isSidebarOpen,
        'no-sidebar': !this.shouldShowSidebar
      }
      const { pageClass: userPageClass } = this.$frontmatter || {}
      if (userPageClass) classValue[userPageClass] = true
      return classValue
    },
    recoShowModule () {
      if (this.firstLoad) {
        return true
      } else {
        return this.showModule
      }
    }
  },
  methods: {
    hasKey () {
      const { keyPage } = this.$themeConfig
      if (!keyPage || !keyPage.keys || keyPage.keys.length === 0) {
        this.isHasKey = true
        return
      }
      let { keys } = keyPage
      keys = keys.map(item => item.toLowerCase())
      this.isHasKey = keys && keys.indexOf(sessionStorage.getItem('key')) > -1
    },
    initRouterHandler () {
      this.$router.afterEach(() => {
        this.isSidebarOpen = false
      })
    },
    hasPageKey () {
      let pageKeys = this.$frontmatter.keys
      if (!pageKeys || pageKeys.length === 0) {
        this.isHasPageKey = true
        return
      }
      pageKeys = pageKeys.map(item => item.toLowerCase())
      this.isHasPageKey = pageKeys.indexOf(sessionStorage.getItem(`pageKey${window.location.pathname}`)) > -1
    },
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },
    handleLoading () {
      const time = this.$frontmatter.home && sessionStorage.getItem('firstLoad') === undefined ? 1000 : 0
      setTimeout(() => {
        this.firstLoad = false
        if (sessionStorage.getItem('firstLoad') === undefined) sessionStorage.setItem('firstLoad', false)
      }, time)
    }
    // 首次渲染时，recoShowModule 直接为 true，否则锚点失效

  },
  mounted () {
    this.initRouterHandler()
    this.hasKey()
    this.hasPageKey()
    this.handleLoading()
  },
  watch: {
    $frontmatter () {
      this.hasKey()
      this.hasPageKey()
    }
  }
}
</script>

<style lang="stylus" scoped>
.theme-container
  .loading-wrapper
    position absolute
    z-index 22
    top 0
    bottom 0
    left 0
    right 0
    margin auto
  .password-wrapper-out
    position absolute
    z-index 21
    top 0
    bottom 0
    left 0
    right 0
    margin auto
  .password-wrapper-in
    position absolute
    z-index 8
    top 0
    bottom 0
    left 0
    right 0
  .hide
    height 100vh
    overflow hidden
    opacity 0

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-in-out .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

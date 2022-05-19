<template>
  <div class="home-docs-wrapper">
    <div class="hero" :style="{ ...$bgImageStyle }">
      <ModuleTransition>
        <img
          v-if="recoShowModule && frontmatter.heroImage"
          class="hero-img"
          :style="frontmatter.heroImageStyle || {}"
          :src="withBase(frontmatter.heroImage)"
          alt="hero">
      </ModuleTransition>
      <ModuleTransition delay="0.04">
        <h1
          v-if="recoShowModule && frontmatter.heroText !== null"
          :style="{ marginTop: frontmatter.heroImage ? '0px' : '140px'}"
        >
          {{ frontmatter.heroText || $title }}
        </h1>
      </ModuleTransition>
      <ModuleTransition delay="0.08">
        <p v-if="recoShowModule && frontmatter.tagline !== null" class="description">
          {{ frontmatter.tagline || $description }}
        </p>
      </ModuleTransition>
      <ModuleTransition delay="0.12">
        <p
          v-if="recoShowModule && frontmatter.actionText && frontmatter.actionLink"
          class="action"
        >
          <NavLink class="action-button" :item="actionLink"/>
        </p>
      </ModuleTransition>
    </div>

    <ModuleTransition delay="0.16">
      <div
        v-if="recoShowModule && frontmatter.features && frontmatter.features.length"
        class="features"
      >
        <div v-for="(feature, index) in frontmatter.features" :key="index" class="feature">
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
        </div>
      </div>
    </ModuleTransition>
    <ModuleTransition delay="0.20">
      <Content class="md-content-wrapper" v-show="recoShowModule" custom/>
    </ModuleTransition>
  </div>
</template>

<script>
import NavLink from '../Navbar/NavLink'
import { ModuleTransition } from '../../core/components'

export default {
  name: 'HomeDocs',
  components: { NavLink, ModuleTransition },
  computed: {
    recoShowModule() {
      return this && this.$parent.recoShowModule
    },
    frontmatter() {
      return this.$frontmatter
    },
    withBase(val) {
      return this.$withBase(val)
    },
    actionLink() {
      return this && {
        link: this.$frontmatter.actionLink,
        text: this.$frontmatter.actionText
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.home-docs-wrapper
  padding $navbarHeight 0 0
  .hero
    text-align center
    height calc(100vh - 3.4rem)
    .hero-img
      max-width 40rem
      width 30rem
      margin: 5rem auto 3rem
    h1
      font-size 2.5rem
      margin-bottom 0
    .description
      font-size 1.6rem
      margin-top 0
    .action-button
      display inline-block
      color #fff
      background-color $accentColor
      padding 0.2rem 1.2rem
      border-radius $borderRadius
      transition background-color 0.1s ease
      box-sizing border-box
      load-start()
      &:hover
        background-color lighten($accentColor, 10%)

  .features
    margin auto
    max-width 960px
    border-top 1px solid var(--border-color)
    padding 1.2rem 0
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
    .feature
      flex-grow 1
      flex-basis 30%
      max-width 30%
      transition all .5s
      color var(--text-color)
      h2
        font-size 1.6rem
        font-weight 500
        border-bottom none
        padding-bottom 0
      &:hover
        transform scale(1.05)

@media (max-width $MQMobile)
  .home-docs-wrapper
    .hero
      height auto
      .hero-img
        width 16rem
        max-height 20rem
        margin 2rem auto 2rem

    .features
      .feature
        flex-direction column
        max-width 100%
        padding 0 2.5rem

    .md-content-wrapper
      padding 0

@media (max-width $MQMobileNarrow)
  .home-docs-wrapper
    .hero
      height auto
      .hero-img
        width: 16rem;
        max-height: 15rem;
        margin: 2rem auto 2rem;

    .features
      .feature
        flex-direction column
        max-width 100%
        padding 0 2.5rem

    .md-content-wrapper
      padding 0
</style>

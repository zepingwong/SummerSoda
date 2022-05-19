<template>
  <div class="home-page-one-wrapper">
    <div class="hero" :style="{ ...$bgImageStyle }">
        <ModuleTransition>
          <img
            v-if="recoShowModule && frontmatter.heroImage && !$parent.firstLoad && $parent.isHasKey"
            class="hero-img"
            :style="frontmatter.heroImageStyle || {}"
            :src="$withBase(frontmatter.heroImage)"
            alt="hero"
          />
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
          <p class="action" v-if="recoShowModule && frontmatter.actionText && frontmatter.actionLink">
            <NavLink class="action-button" :item="actionLink"/>
          </p>
        </ModuleTransition>
    </div>
    <div class="wish">
      <div class="yesterday">
        <div class="wish-inner">
          <div class="img-wrapper">
            <img src="./images/yesterday.svg" alt="">
          </div>
          <div class="text-wrapper">
            <h1>{{ frontmatter.features[0].title }}</h1>
            <p class="description">{{ frontmatter.features[0].details }}</p>
          </div>
        </div>
      </div>
      <div class="today">
        <div class="wish-inner">
          <div class="text-wrapper">
            <h1>{{ frontmatter.features[1].title }}</h1>
            <p class="description">{{ frontmatter.features[1].details }}</p>
          </div>
          <div class="img-wrapper">
            <img src="./images/today.svg" alt="">
          </div>
        </div>
      </div>
      <div class="tomorrow">
        <div class="wish-inner">
          <div class="img-wrapper">
            <img src="./images/tomorrow.svg" alt="">
          </div>
          <div class="text-wrapper">
            <h1>{{ frontmatter.features[2].title }}</h1>
            <p class="description">{{ frontmatter.features[2].details }}</p>
          </div>
        </div>
      </div>
    </div>

    <section class="md-content-wrapper">
      <Content/>
    </section>
  </div>
</template>

<script>
import { ModuleTransition } from '../../core/components'
import NavLink from '../Navbar/NavLink'
export default {
  components: { ModuleTransition, NavLink },
  data () {
    return {
      downloads: 0
    }
  },
  computed: {
    recoShowModule() {
      return this && this.$parent.recoShowModule
    },
    actionLink() {
      return this && {
        link: this.$frontmatter.actionLink,
        text: this.$frontmatter.actionText
      }
    },
    frontmatter() {
      return this.$frontmatter
    }
  }
}
</script>


<style lang="stylus" scoped>
.home-page-one-wrapper
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

  .wish
    overflow hidden
    .yesterday, .tomorrow
      background var(--code-color)
    .wish-inner
      box-sizing border-box
      margin 0 auto
      padding 2rem
      max-width 56rem
      width 100%
      min-height 25rem
      display flex
      align-items center
      > div
        flex auto
        &.img-wrapper
          max-width 22rem
          img
            display block
            width 100%
        &.text-wrapper
          box-sizing border-box
          padding 0 2rem

@media (max-width $MQMobile)
  .home-page-one-wrapper
    .hero
      height auto
      .hero-img
        width 16rem
        max-height 20rem
        margin 2rem auto 2rem
      .wish
        .wish-inner
          display block
          padding 2rem 0
          .img-wrapper
            margin 0 auto
    .md-content-wrapper
      padding 0

@media (max-width $MQMobileNarrow)
  .home-page-one-wrapper
    .hero
      height auto
      .hero-img {
        width: 16rem;
        max-height: 15rem;
        margin: 2rem auto 2rem;
      }
    .wish
      .wish-inner
        display block
        padding 2rem 0
        .img-wrapper
          margin 0 auto

    .md-content-wrapper
       padding 0
</style>

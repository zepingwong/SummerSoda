<template>
  <div class="personal-info-wrapper">
    <img
      class="personal-img"
      v-if="$themeConfig.authorConfig.authorAvatar"
      :src="$withBase($themeConfig.authorConfig.authorAvatar)"
      alt="author-avatar"
    >
    <h3
      class="name"
      v-if="$themeConfig.authorConfig.author"
    >
      {{ $themeConfig.authorConfig.author }}
    </h3>
    <div class="num">
      <div>
        <h3>{{$recoPosts.length}}</h3>
        <h6>{{$customLocales.article}}</h6>
      </div>
      <div>
        <h3>{{$tags.list.length}}</h3>
        <h6>{{$customLocales.tag}}</h6>
      </div>
      <div>
        <h3>{{$categoriesList.length}}</h3>
        <h6>{{$customLocales.category}}</h6>
      </div>
    </div>
    <ul class="social-links">
      <li
        class="social-item"
        v-for="(item, index) in socialLinks"
        :key="index"
      >
        <reco-icon :icon="item.icon" :link="item.link" :style="{ color: item.color }" />
      </li>
    </ul>
  </div>
</template>

<script>
import { RecoIcon } from '../../core/components'
import { getOneColor } from '../../helpers/other'

export default {
  components: { RecoIcon },
  computed: {
    socialLinks () {
      return (this.$themeConfig.authorConfig && this.$themeConfig.authorConfig.socialLinks || []).map(item => {
        if (!item.color) item.color = getOneColor()
        return item
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.personal-info-wrapper
  .personal-img
    display block
    margin 2rem auto 1rem
    width 6rem
    height 6rem
    border-radius 50%
  .name
    font-size 1rem
    text-align center
    color var(--text-color)
  .num
    display flex
    margin 0 auto 1rem
    width 90%
    > div
      text-align center
      flex 0 0 33%
      margin auto
      &:first-child
        border-right 1px solid #333
      &:nth-child(2)
        border-right 1px solid #333
      h3
        line-height auto
        margin 0 0 .6rem
        color var(--text-color)
      h6
        line-height auto
        color var(--text-color)
        margin 0

  .social-links
    box-sizing border-box
    display flex
    flex-wrap wrap
    padding 10px
    .social-item
      width 39px
      height 36px
      line-height 36px
      text-align center
      list-style none
      transition transform .3s
      &:hover
        transform scale(1.08)
      i
        cursor pointer
        font-size 22px
</style>

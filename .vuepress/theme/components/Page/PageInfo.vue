<template>
  <div>
    <reco-icon
      v-if="pageInfo.frontmatter.author || $themeConfig.authorConfig.author"
      icon="icon-account"
    >
      <span>{{ pageInfo.frontmatter.author || $themeConfig.authorConfig.author }}</span>
    </reco-icon>
    <reco-icon
      v-if="pageInfo.frontmatter.date"
      icon="icon-date"
    >
      <span>{{ formatDateValue(pageInfo.frontmatter.date) }}</span>
    </reco-icon>
    <reco-icon
      v-if="showAccessNumber === true"
      icon="icon-eye"
    >
      <AccessNumber :idVal="pageInfo.path" :numStyle="numStyle"/>
    </reco-icon>
    <reco-icon
      v-if="pageInfo.frontmatter.tags"
      icon="icon-tag"
      class="tags"
    >
      <span
        v-for="(subItem, subIndex) in pageInfo.frontmatter.tags"
        :key="subIndex"
        class="tag-item"
        :class="{ 'active': currentTag === subItem }"
        @click.stop="goTags(subItem)"
      >{{ subItem }}</span>
    </reco-icon>
  </div>
</template>

<script>
import { RecoIcon } from '../../core/components'

export default {
  components: { RecoIcon },
  props: {
    pageInfo: {
      type: Object,
      default () {
        return {}
      }
    },
    currentTag: {
      type: String,
      default: ''
    },
    showAccessNumber: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      numStyle: {
        fontSize: '.9rem',
        fontWeight: 'normal',
        color: '#999'
      }
    }
  },
  methods: {
    goTags (tag) {
      if (this.$route.path !== `/tag/${tag}/`) {
        this.$router.push({ path: `/tag/${tag}/` })
      }
    },
    formatDateValue (value) {
      return new Intl.DateTimeFormat(this.$lang).format(new Date(value))
    }
  }
}
</script>

<style lang="stylus" scoped>
.iconfont
  display inline-block
  line-height 1.5rem

  &:not(:last-child)
    margin-right 1rem

  span
    margin-left 0.5rem

.tags
  .tag-item
    font-family Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif
    cursor pointer

    &.active
      color $accentColor

    &:hover
      color $accentColor

@media (max-width: $MQMobile)
  .tags
    display block
    margin-left 0 !important
</style>

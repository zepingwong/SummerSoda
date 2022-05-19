<template>
  <div class="home-blog">
    <div class="hero" :style="{ ...$bgImageStyle }">
      <div>
        <ModuleTransition>
          <img
              class="hero-img"
              v-if="recoShowModule && $frontmatter.heroImage"
              :style="heroImageStyle || {}"
              :src="$withBase($frontmatter.heroImage)"
              alt="hero"
          />
        </ModuleTransition>

        <ModuleTransition delay="0.04">
          <h1 v-if="recoShowModule && $frontmatter.heroText !== null">
            {{ $frontmatter.heroText || $title }}
          </h1>
        </ModuleTransition>

        <ModuleTransition delay="0.08">
          <p v-if="recoShowModule && $frontmatter.tagline !== null" class="description">
            {{ $frontmatter.tagline || $description }}
          </p>
        </ModuleTransition>
      </div>
    </div>

    <ModuleTransition delay="0.16">
      <div v-show="recoShowModule" class="home-blog-wrapper">
        <!-- 博客列表 -->
        <div class="blog-list">
          <note-abstract :data="$recoPosts" @paginationChange="paginationChange" />
        </div>
        <!-- 博客列表 -->
        <!-- 信息包装器 -->
        <div class="info-wrapper">
          <!-- 个人信息 -->
          <personal-info v-if="$frontmatter.PersonalInfo !== false" />
          <!-- 个人信息 -->
          <!-- 标签列表 -->
          <tag-list v-if="$frontmatter.TagList !== false"  @getCurrentTag="getPagesByTags" />
          <!-- 标签列表 -->
          <!-- 分类列表 -->
          <category-list v-if="$frontmatter.CategoryList !== false" />
          <!-- 分类列表 -->
          <!-- 友情链接 -->
          <friend-link/>
          <!-- 友情链接 -->
        </div>
        <!-- 信息包装器 -->
      </div>
    </ModuleTransition>

    <ModuleTransition delay="0.24">
      <Content v-show="recoShowModule" class="home-center" custom/>
    </ModuleTransition>
  </div>
</template>

<script>
import TagList from './TagList'
import FriendLink from './FriendLink'
import NoteAbstract from '../NoteAbstract'
import { ModuleTransition } from '../../core/components'
import PersonalInfo from './PersonalInfo'
import CategoryList from './CategoryList'

export default {
  name: 'HomeBlog',
  components: { NoteAbstract, TagList, FriendLink, ModuleTransition, PersonalInfo, CategoryList },
  data() {
    return {
      state: {
        recoShow: false,
        heroHeight: 0
      }
    }
  },
  computed: {
    recoShowModule() {
      return this && this.$parent.recoShowModule
    },
    heroImageStyle() {
      return this.$frontmatter.heroImageStyle || {}
    },
  },
  mounted() {
    this.state.heroHeight = document.querySelector('.hero').clientHeight
    this.state.recoShow = true
  },
  methods: {
    paginationChange (page) {
      setTimeout(() => {
        window.scrollTo(0, this.heroHeight)
      }, 100)
    },
    getPagesByTags (tagInfo) {
      this.$router.push({ path: tagInfo.path })
    }
  }
}
</script>

<style scoped lang="stylus">
.home-blog {
  padding: 0;
  margin: 0 auto;
  .hero {
    margin $navbarHeight auto 0
    position relative
    box-sizing border-box
    padding 0 20px
    height 100vh
    display flex
    align-items center
    justify-content center
    .hero-img {
      max-width: 40rem;
      width: 30rem;
      margin: 0 auto 1.5rem
    }

    h1 {
      display: block;
      margin:0 auto 1.8rem;
      font-size: 2.5rem;
    }

    .description {
      margin: 1.8rem auto;
      font-size: 1.6rem;
      line-height: 1.3;
    }
  }
  .home-blog-wrapper {
    display flex
    align-items: flex-start;
    margin 20px auto 0
    padding 0 20px
    max-width $homePageWidth
    .blog-list {
      flex auto
      width 0
      .abstract-wrapper {
        .abstract-item:last-child {
          margin-bottom: 0;
        }
      }
    }
    .info-wrapper {
      position -webkit-sticky;
      position sticky;
      top 70px
      overflow hidden
      transition all .3s
      margin-left 15px
      flex 0 0 300px
      height auto
      box-shadow var(--box-shadow)
      border-radius $borderRadius
      box-sizing border-box
      padding 0 15px
      background var(--background-color)
      &:hover {
        box-shadow var(--box-shadow-hover)
      }
      h4 {
        color var(--text-color)
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .home-blog {
    .hero {
      height 450px
      .hero-img {
        width: 16rem;
        max-height: 20rem;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        margin: 0 auto 1.8rem ;
        font-size: 2rem;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }
    .home-blog-wrapper {
      display block!important
      .blog-list {
        width auto
      }
      .info-wrapper {
        // display none!important
        margin-left 0
        .personal-info-wrapper {
          display none
        }
      }
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home-blog {
    .hero {
      height 450px
      .hero-img {
        width: 16rem;
        max-height: 15rem;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        margin: 0 auto 1.8rem ;
        font-size: 2rem;
      }

      h1, .description, .action {
        // margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .home-blog-wrapper {
      display block!important
      .blog-list {
        width auto
      }
      .info-wrapper {
        // display none!important
        margin-left 0
        .personal-info-wrapper {
          display none
        }
      }
    }
  }
}
</style>

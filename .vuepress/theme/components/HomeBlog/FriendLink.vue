<template>
  <div class="friend-link-wrapper">
    <hr>
    <h4 v-if="$themeConfig.authorConfig.friendLink && $themeConfig.authorConfig.friendLink.length !== 0"><reco-icon icon="icon-friend" /> {{$customLocales.friendLink}}</h4>
    <div
      class="friend-link-item"
      v-for="(item, index) in dataAddColor"
      :key="index"
      @mouseenter="showDetail($event)"
      @mouseleave="hideDetail($event)"
      target="_blank">
      <span
        class="list-style"
        :style="{ 'backgroundColor': item.color }">
      </span>
      {{item.title}}
      <transition name="fade">
        <div class="popup-window-wrapper">
          <div
            class="popup-window"
            :style="popupWindowStyle"
            ref="popupWindow">
            <div class="logo">
              <img :src="getImgUrl(item)"  alt="logo"/>
            </div>
            <div class="info">
              <div class="title">
                <h4>{{ item.title }}</h4>
                <a
                  class="btn-go"
                  :style="{ 'backgroundColor': item.color }"
                  :href="item.link"
                  target="_blank">GO</a>
              </div>
              <p v-if="item.desc">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
import { getOneColor } from '../../helpers/other'
import { RecoIcon } from '../../core/components'

export default {
  name: 'FriendLink',
  components: { RecoIcon },
  data () {
    return {
      isPC: true,
      popupWindowStyle: {
        left: 0,
        top: 0
      }
    }
  },
  computed: {
    dataAddColor () {
      const { friendLink = [] } = this && this.$themeConfig.authorConfig
      return friendLink.map(item => {
        item.color = getOneColor()
        return item
      })
    }
  },
  methods: {
    getImgUrl (info) {
      const { logo = '', email = '' } = info
      if (logo && /^http/.test(logo)) return logo
      if (logo && !/^http/.test(logo)) return this.$withBase(logo)
      return `//1.gravatar.com/avatar/${md5(email || '')}?s=50&amp;d=mm&amp;r=x`
    },
    adjustPosition (dom) {
      const { offsetWidth } = document.body
      const { x, width } = dom.getBoundingClientRect()
      const distanceToRight = offsetWidth - (x + width)
      if (distanceToRight < 0) {
        const { offsetLeft } = dom
        this.popupWindowStyle.left = offsetLeft + distanceToRight + 'px'
      }
    },
    hideDetail (e) {
      const currentDom = e.target.querySelector('.popup-window-wrapper')
      currentDom.style.display = 'none'
    },
    showDetail (e) {
      const currentDom = e.target
      const popupWindowWrapper = currentDom.querySelector('.popup-window-wrapper')
      popupWindowWrapper.style.display = 'block'
      const popupWindow = currentDom.querySelector('.popup-window')
      const infoWrapper = document.querySelector('.info-wrapper')
      const { clientWidth } = currentDom
      const { clientWidth: windowWidth, clientHeight: windowHeight } = popupWindow

      if (this.isPC) {
        this.popupWindowStyle.left = (clientWidth - windowWidth) / 2 + 'px'
        this.popupWindowStyle.top = -windowHeight + 'px'

        infoWrapper.style.overflow = 'visible'

        this.$nextTick(() => {
          this.adjustPosition(popupWindow)
        })
      } else {
        const getPosition = function (element) {
          const dc = document
          const rec = element.getBoundingClientRect()
          let _x = rec.left
          let _y = rec.top
          _x += dc.documentElement.scrollLeft || dc.body.scrollLeft
          _y += dc.documentElement.scrollTop || dc.body.scrollTop
          return { left: _x, top: _y }
        }

        infoWrapper.style.overflow = 'hidden'
        const left = getPosition(currentDom).left - getPosition(infoWrapper).left

        this.popupWindowStyle.left = (-left + (infoWrapper.clientWidth - popupWindow.clientWidth) / 2) + 'px'
        this.popupWindowStyle.top = -windowHeight + 'px'
      }
    }
  },
  mounted () {
    this.isPC = !/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
  }
}
</script>

<style lang="stylus" scoped>
.friend-link-wrapper
  position relative
  margin 30px 0
  .friend-link-item
    position relative
    vertical-align: middle;
    margin: 4px 4px 10px;
    padding: 4px 8px 4px 20px;
    line-height 20px
    display: inline-block;
    cursor: default;
    border-radius: $borderRadius
    font-size: 13px;
    box-shadow var(--box-shadow)
    transition: all .5s
    .list-style
      position absolute
      left .4rem
      top 0
      bottom 0
      margin auto
      display block
      width .4rem
      height .4rem
      border-radius .1rem
      background $accentColor
      content ''
    .popup-window-wrapper
      display none
      .popup-window
        position absolute
        display flex
        background var(--background-color)
        box-shadow var(--box-shadow)
        border-radius $borderRadius
        box-sizing border-box
        padding .8rem 1rem
        width 280px
        .logo
          margin-right .4rem
          width 2rem
          height 2rem
          flex 0 0 2rem
          border-radius $borderRadius
          overflow hidden
          img
            width 2rem
            height 2rem
        .info
          flex 0 0 85%
          width 85%
          .title
            display flex
            align-items center
            justify-content space-between
            height 2rem
            h4
              margin .2rem 0
              flex 0 0 86%
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            .btn-go
              width 1.4rem
              height 1.2rem
              border-radius $borderRadius
              font-size 12px
              color #ffffff
              text-align center
              line-height 1.2rem
              cursor pointer
              transition all .5s
              &:hover
                transform scale(1.1)

.fade-enter-active, .fade-leave-active
  transition opacity .5s
.fade-enter, .fade-leave-to
  opacity 0
</style>

<template>
  <div class="kanbanniang" v-show="$themeConfig.KanBanNiang.isShow === true">
    <div class="banniang-container" v-show="isLoaded">
      <div class="messageBox" :style="messageStyle" v-show="isShowMessageBox">
        {{ messages.message || '欢迎来到 ' + $site.title }}
      </div>
      <div
        v-show="isShowBtns"
        :style="btnStyle"
        class="operation"
        @mouseenter="isShowMessageBox = true"
        @mouseleave="isShowMessageBox = false">
        <i class="kbnfont kbn-ban-home ban-home" @click="goHome" @mouseenter="hoverGoHome" @mouseleave="resetMessage"></i>
        <i class="kbnfont kbn-ban-message message"></i>
        <i class="kbnfont kbn-ban-close close" @click="closeBanNiang" @mouseenter="hoverCloseBanNiang" @mouseleave="resetMessage"></i>
        <a target="_blank" :href="$themeConfig.KanBanNiang.targetUrl ? $themeConfig.KanBanNiang.targetUrl :'https://docs.wppdjw.xyz/SummerSoda/docs/Theme/plugins/KanBanNiang.html'">
          <i class="kbnfont kbn-ban-info info" @mouseenter="hoverMoreInfo" @mouseleave="resetMessage" ></i>
        </a>
        <i v-show="themeName.length > 1" class="kbnfont kbn-ban-theme skin" @click="changeTheme" @mouseenter="hoverChangeTheme" @mouseleave="resetMessage"></i>
      </div>
      <canvas
        id="banniang"
        :style="modelStyle"
        :width="style.width"
        :height="style.height"
        class="live2d"
      ></canvas>
    </div>
    <div class="showBanNiang" v-show="displayBanNiang" @click="showBanNiang">
      看板娘
    </div>
  </div>
</template>

<script>
import live2dJSString from './assets/js/live2d'
export default {
  name: 'KanBanNiang',
  data () {
    return {
      isLoaded: true,
      displayBanNiang: false,
      isShowMessageBox: false,
      isShowBtns: true,
      messages: {
        message: '',
        welcome: '',
        home: '心里的花，我想要带你回家。',
        theme: '好吧，希望你能喜欢我的其他小伙伴。',
        close: '你知道我喜欢吃什么吗？痴痴地望着你。',
        info: '想知道关于我的更多信息吗？'
      },
      currentTheme: '',
      // 模型地址
      model: {
        blackCat:
          'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-hijiki/assets/hijiki.model.json',
        whiteCat:
          'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-tororo/assets/tororo.model.json',
        haru1:
          'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-haru/01/assets/haru01.model.json',
        haru2:
          'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-haru/02/assets/haru02.model.json',
        haruto:
          'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-haruto/assets/haruto.model.json',
        koharu:
          'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-koharu/assets/koharu.model.json',
        izumi:
          'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-izumi/assets/izumi.model.json',
        shizuku:
          'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-shizuku/assets/shizuku.model.json',
        wanko:
          'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-wanko/assets/wanko.model.json',
        miku:
          'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-miku/assets/miku.model.json',
        z16:
          'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-z16/assets/z16.model.json'
      },
      // model的高宽
      style: {
        width: 150,
        height: 220
      },
      // model的样式
      modelStyle: {
        right: '90px',
        bottom: '-20px',
        opacity: '0.9'
      },
      // messageBox 样式
      messageStyle: {
        right: '68px',
        bottom: '190px'
      },
      // 按钮的样式
      btnStyle: {
        right: '90px',
        bottom: '40px'
      }
    }
  },
  computed: {
    themeName () {
      const allTheme = ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
      const theme = this.$themeConfig?.KanBanNiang?.theme || []
      return theme.length > 0 ? theme.filter((item) => {
        return allTheme.indexOf(item) > 0
      }) : allTheme
    }
  },
  beforeMount () {
    this.messages = {
      ...this.messages,
      ...this.$themeConfig?.KanBanNiang?.messages
    }
    this.messageStyle = {
      ...this.messageStyle,
      ...this.$themeConfig?.KanBanNiang?.messageStyle
    }
    this.style.width = this.$themeConfig?.KanBanNiang?.width || 150
    this.style.height = this.$themeConfig?.KanBanNiang?.height || 220
    this.isShowBtns = this.$themeConfig?.KanBanNiang?.isShowBtns || true
    this.currentTheme = this.themeName[0]
  },
  mounted () {
    this.btnStyle = {
      ...this.btnStyle,
      ...this.$themeConfig?.KanBanNiang?.btnStyle,
      height: this.themeName.length > 1 ? '120px' : '100px'
    }
    // 初始化live2d模型
    this.initBanNiang()
  },
  methods: {
    hoverGoHome () {
      this.messages.message = this.messages.home
    },
    hoverChangeTheme () {
      this.messages.message = this.messages.theme
    },
    hoverMoreInfo () {
      this.messages.message = this.messages.info
    },
    hoverCloseBanNiang () {
      this.messages.message = this.messages.close
    },
    resetMessage () {
      this.messages.message = this.messages.welcome
    },
    goHome () {
      if (this.$route.path !== '/') {
        this.$router.push('/')
      }
    },
    changeTheme () {
      const themes = this.themeName.filter((item) => {
        return item !== this.currentTheme
      })
      this.currentTheme = themes[Math.floor(Math.random() * (this.themeName.length - 1))]
      this.initBanNiang()
    },
    closeBanNiang () {
      this.isLoaded = false
      this.displayBanNiang = true
    },
    showBanNiang () {
      this.isLoaded = true
      this.displayBanNiang = false
      this.initBanNiang()
    },
    initBanNiang () {
      if (this.themeName.indexOf(this.currentTheme) === -1) {
        document.querySelector('.kanbanniang').style.display = 'none'
        return
      }
      const isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
      if (isMobile) {
        this.isLoaded = false
        return console.log('mobile do not load model')
      }
      if (!window.loadlive2d) {
        const script = document.createElement('script')
        script.innerHTML = live2dJSString
        document.body.appendChild(script)
      }
      const ajax = new XMLHttpRequest()
      ajax.open('get', this.model[this.currentTheme])
      ajax.send()
      ajax.onreadystatechange = function () {
        if (ajax.status !== 200) {
          console.log('看板娘的CDN资源加载失败了，请稍后刷新页面重试！')
          document.querySelector('.kanbanniang').style.display = 'none'
        }
      }
      window.loadlive2d(
        'banniang',
        this.model[this.currentTheme]
      )
    }
  }
}
</script>

<style lang="stylus" scoped>
@require 'assets/iconfont/iconfont.css'
  .showBanNiang
    position fixed
    right 70px
    bottom 6rem
    color $accentColor
    width 48px
    height 20px
    padding 10px
    cursor pointer
    border-radius 4px
    box-shadow var(--box-shadow)
    background-color var(--background-color)
  .banniang-container
    position fixed
    right 50px
    bottom 100px
    color #00adb5
    .messageBox
      position fixed
      padding 10px
      height 60px
      width 160px
      border-radius 8px
      background-color lighten($accentColor, 50%)
      color $textColor
      opacity 0.8
    .operation
      width 20px
      position fixed
      display flex
      flex-direction column
      justify-content space-between
      i
        font-size 20px
        cursor pointer
        color lighten($textColor, 50%)
        &:hover
          color lighten($accentColor, 50%)
    #banniang
      z-index 99999
      pointer-events none
      position fixed
</style>

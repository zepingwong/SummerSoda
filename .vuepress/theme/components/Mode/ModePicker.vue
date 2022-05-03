<template>
  <div class="mode-options">
    <h4 class="title">{{$customLocales.chooseMode}}</h4>
    <ul class="color-mode-options">
      <li
        v-for="(mode, index) in modeOptions"
        :key="index"
        :class="getClass(mode)"
        @click="selectMode(mode)"
      >{{ $customLocales[mode] }}</li>
    </ul>
  </div>
</template>

<script>
import applyMode from './applyMode'
import { useInstance } from '../../helpers/composable'
import { defineComponent, onMounted, ref } from "vue-demi";
export default defineComponent({
  name: 'ModeOptions',
  setup() {
    const instance = useInstance()
    const currentMode = ref('auto')
    const modeOptions = ['dark', 'auto', 'light']
    onMounted(() => {
      // modePicker 开启时默认使用用户主动设置的模式
      currentMode.value = localStorage.getItem('mode') || instance.$themeConfig.mode || 'auto'
      // Dark and Light auto switches
      // 为了避免在 server-side 被执行，故在 Vue 组件中设置监听器
      window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
        currentMode.value === 'auto' && applyMode(currentMode.value)
      })
      window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
        currentMode.value === 'auto' && applyMode(currentMode.value)
      })

      applyMode(currentMode.value)
    })
    const selectMode = (mode) => {
      if (mode !== currentMode.value) {
        currentMode.value = mode
        applyMode(mode)
        localStorage.setItem('mode', mode)
      }
    }
    const getClass = (mode) => {
      return mode !== currentMode.value ? mode : `${mode} active`
    }
    return {
      getClass,
      selectMode,
      modeOptions,
      currentMode
    }
  }
})
</script>

<style scoped lang="stylus">
.mode-options
  background-color var(--background-color)
  min-width 125px
  margin 0
  padding 1em
  box-shadow var(--box-shadow)
  border-radius $borderRadius
  .title
    text-align center
    margin-top 0
    margin-bottom .6rem
    font-weight bold
    color var(--text-color)
  .color-mode-options
    display flex
    flex-wrap wrap
    li
      flex 1
      text-align center
      font-size 12px
      color var(--text-color)
      line-height 18px
      padding 3px 6px
      border-top 1px solid #666
      border-bottom 1px solid #666
      background-color var(--background-color)
      cursor pointer
      &.dark
        border-radius $borderRadius 0 0 $borderRadius
        border-left 1px solid #666
      &.light
        border-radius 0 $borderRadius $borderRadius 0
        border-right 1px solid #666
      &.active
        background-color $accentColor
        color #fff
      &:not(.active)
        border-right 1px solid #666
</style>

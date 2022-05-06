<template>
	<div class="color-picker" v-if="modePicker !== false" >
		<a class="color-button" @click.prevent="selectMode">
      <reco-icon :icon="'icon-'+currentMode" />
		</a>
	</div>
</template>

<script>
import {computed, defineComponent, onMounted, ref} from "vue-demi"
import { RecoIcon } from '../../core/lib/components'
import applyMode from './applyMode'
import {useInstance} from "../../helpers/composable"

export default defineComponent({
  name: 'ModeSettings',
  components: {
    RecoIcon
  },
  setup() {
    const instance = useInstance()
    const currentMode = ref('auto')
    const modeOptions = ['dark', 'auto', 'light']
    const modePicker = computed(() => {
      return instance.$themeConfig?.$modeConfig?.modePicker || true
    })
    const selectMode = () => {
      let index = modeOptions.indexOf(currentMode.value)
      if (index === modeOptions.length-1) {
        index = 0
      } else {
        index++
      }
      currentMode.value = modeOptions[index]
      applyMode(currentMode.value)
      localStorage.setItem('mode', currentMode.value)
    }
    onMounted(() => {
      let themeMode = instance.$themeConfig?.$modeConfig?.mode || 'auto'
      themeMode = modeOptions.indexOf(themeMode) !== -1 ? themeMode : 'auto'
      if (modePicker.value === false) {
        // 为 'auto' 模式设置监听器
        if (themeMode.value === 'auto') {
          window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
            applyMode(themeMode.value)
          })
          window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
            applyMode(themeMode.value)
          })
        }
        applyMode(themeMode.value)
      }
      // modePicker 开启时默认使用用户主动设置的模式
      currentMode.value = localStorage.getItem('mode') || instance.$themeConfig?.$modeConfig?.mode || 'auto'
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
    return {
      currentMode,
      modeOptions,
      modePicker,
      selectMode
    }
  }
})
</script>

<style lang="stylus">
.color-picker {
	position: relative;
	margin-right: 1em;
  cursor pointer;
	.color-button {
		align-items: center;
		height: 100%;
		.iconfont {
			font-size 1.4rem
			color: $accentColor
		}
	}

	.color-picker-menu {
		position: absolute;
		top: 40px;
		left: 50%;
		z-index: 150;

		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
		}
	}
}

@media (max-width: $MQMobile) {
	.color-picker {
		margin-right: 1rem;
		.color-picker-menu {
			left: calc(50% - 35px);
			&::before {
				left: calc(50% + 35px);
			}
		}
	}
}
</style>

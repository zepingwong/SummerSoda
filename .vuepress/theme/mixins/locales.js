import { zhHans, zhHant, en, ja, ko, es } from '../locales/index'

export default {
  computed: {
    $customLocales () {
      const customLocalesConfig = this.$themeLocaleConfig.customLocales || {}
      // if (customLocalesConfig) console.log(customLocalesConfig)
      let customLocales = {}
      Object.keys(customLocalesConfig).map((key) => {
        Object.assign(customLocales, customLocalesConfig[key])
      })
      if (/^zh-(CN|SG)$/.test(this.$lang)) {
        return { ...zhHans, ...customLocales }
      }
      if (/^zh-(HK|MO|TW)$/.test(this.$lang)) {
        return { ...zhHant, ...customLocales }
      }
      if (/^ja-JP$/.test(this.$lang)) {
        return { ...ja, ...customLocales }
      }
      if (/^ko-KR$/.test(this.$lang)) {
        return { ...ko, ...customLocales }
      }
      if (/^es(-[A-Z]+)?$/.test(this.$lang)) {
        return { ...es, ...customLocales }
      }
      return { ...en, ...customLocales }
    }
  }
}

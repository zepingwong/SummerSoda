import { zhHans, zhHant, en, ja, ko, es } from '../locales/index'

export default {
  computed: {
    $recoLocales () {
      const recoLocales = this.$themeLocaleConfig.recoLocales || {}

      if (/^en$/.test(this.$lang)) {
        return { ...en, ...recoLocales }
      }

      if (/^zh-(HK|MO|TW)$/.test(this.$lang)) {
        return { ...zhHant, ...recoLocales }
      }
      if (/^ja-JP$/.test(this.$lang)) {
        return { ...ja, ...recoLocales }
      }
      if (/^ko-KR$/.test(this.$lang)) {
        return { ...ko, ...recoLocales }
      }
      if (/^es(-[A-Z]+)?$/.test(this.$lang)) {
        return { ...es, ...recoLocales }
      }
      return { ...zhHans, ...recoLocales }
    }
  }
}

import Vue from 'vue'
import Unicon from 'vue-unicons/dist/vue-unicons-ssr.common.js'
import {
  uniPricetagAlt,
  uniGithubAlt,
  uniTwitterAlt,
  uniInstagram,
  uniFolder,
  uniBars,
  uniTimes,
} from 'vue-unicons/src/icons'
import 'vue-unicons/dist/vue-unicons-ssr.css'

Unicon.add([
  uniPricetagAlt,
  uniGithubAlt,
  uniTwitterAlt,
  uniInstagram,
  uniFolder,
  uniBars,
  uniTimes,
])
Vue.use(Unicon)

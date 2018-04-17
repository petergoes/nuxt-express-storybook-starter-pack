import { configure } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

setOptions({})

const components = require.context('../client/components', true, /\.vue$/)
const componentsStories = require.context(
  '../client/components',
  true,
  /\.story\.js$/,
)
let docsStories

if (process.env.NODE_ENV !== 'test') {
  docsStories = require.context('../storybook', true, /\.story\.js$/)
}

components.keys().forEach(filename => {
  const [, componentName] = filename.match(/([\w-]+)(.vue)/)
  Vue.component(componentName, components(filename).default)
})

function loadStories() {
  if (process.env.NODE_ENV !== 'test') {
    docsStories.keys().forEach(filename => docsStories(filename))
  }
  componentsStories.keys().forEach(filename => componentsStories(filename))
}

configure(loadStories, module)

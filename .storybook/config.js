import camelCase from 'lodash/camelCase'
import upperFirst from 'lodash/upperFirst'
import * as toKebabCase from 'lodash/kebabCase'
import pipe from 'lodash/fp/pipe'
import { configure } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

setOptions({})

const components = require.context('../components', true, /\.vue$/)
const componentsStories = require.context('../components', true, /\.story\.js$/)

components.keys().forEach(filename => {
  const [, componentName] = filename.match(/([\w-]+)(.vue)/)
  Vue.component(componentName, components(filename).default)
})

function loadStories() {
  componentsStories.keys().forEach(filename => componentsStories(filename))
}

configure(loadStories, module)

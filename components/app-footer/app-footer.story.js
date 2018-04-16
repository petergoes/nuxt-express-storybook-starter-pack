import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { withNotes } from '@storybook/addon-notes'
import { withKnobs, text, number } from '@storybook/addon-knobs/vue'

import AppFooter from './app-footer.vue'
import README from './README.md'

const stories = storiesOf('AppFooter', module).addDecorator(withKnobs)
const story = withNotes(README)

Vue.component('app-footer', AppFooter)

stories.add(
  'App footer',
  story(() => ({
    template: `<app-footer/>`,
  })),
)

import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { withNotes } from '@storybook/addon-notes'
import { withKnobs } from '@storybook/addon-knobs/vue'

import AppFooter from './app-footer.vue'
import README from './README.md'

const stories = storiesOf('Components/AppFooter', module).addDecorator(
  withKnobs,
)
const story = withNotes(README)

Vue.component('app-footer', AppFooter)

stories.add(
  'App footer',
  story(() => ({
    template: `<app-footer/>`,
  })),
)

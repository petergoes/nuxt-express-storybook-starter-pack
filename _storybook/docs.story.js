import startCase from 'lodash/startCase'
import { storiesOf } from '@storybook/vue'

const stories = storiesOf('Documentation', module)
const docs = require.context('../_docs', true, /.md$/)

docs.keys().forEach(filename => {
  const [, , docTitle] = filename.match(/(\.\/)([\w-]+)/)

  stories.add(startCase(docTitle), () => ({
    template: `<div>${docs(filename)}</div>`,
  }))
})

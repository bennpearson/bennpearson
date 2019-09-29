import { configure, addDecorator, addParameters } from '@storybook/vue';
import { initDsm } from '@invisionapp/dsm-storybook';

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

//Init Dsm
initDsm({
  addDecorator,
  addParameters,
  callback: () => configure(loadStories, module)
});
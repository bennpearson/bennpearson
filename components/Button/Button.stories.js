import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Button from './Button.vue';

storiesOf('Button', module)
  .add(
    'with emoji',
    () => ({
      components: { Button },
      template: '<Button>😀 😎 👍 💯</Button>'
    }), 
    {
      'in-dsm': { 
        id: '5d8b863b3bc8758e67fbed94',
        componentPath: './Button.vue'
      }
    }
  );
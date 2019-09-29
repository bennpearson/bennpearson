import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Intro from './Intro.vue';

storiesOf('Intro', module)
  .add(
    'with emoji',
    () => ({
      components: { Intro },
      template: '<Intro desc="desc"/>'
    }), 
    {
      'in-dsm': { 
        id: '5d90d56696d8a97528ff0ac3',
        componentPath: './Intro.vue'
      }
    }
  );
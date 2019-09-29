import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Header from './Header.vue';

storiesOf('Header', module)
  .add(
    'with emoji',
    () => ({
      components: { Header },
      template: '<Header title="title"/>'
    }), 
    {
      'in-dsm': { 
        id: '5d90d5174fe42a05546a1dc7',
        componentPath: './Header.vue'
      }
    }
  );
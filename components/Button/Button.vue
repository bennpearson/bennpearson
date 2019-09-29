<template>
  <button
    :class="[
      'bp-button',
      { 'bp-button__disabled': disabled },
      { 'bp-button__with-icon': icon !== 'none' }
    ]"
    @click="!disabled && onClick()"
  >
    <div class="bp-button__text">
      <slot></slot>
    </div>
    <div v-if="icon !== 'none'" class="bp-button__icon">
      <chevron-right v-if="icon === 'chevron-right'" />
    </div>
  </button>
</template>

<script>
import { chevronRightIcon } from '../icons'

/**
 * Buttons indicate actions on the page that will occur when a user touches them. This button is responsive to screen sizes.
 * We support a very minimal level of variation for the primary button. Custom styling or class names should not be applied to the primary button.
 * It requires text in all cases, but allows for icons as an optional addition.
 * The primary button can also exist as an element within larger molecules and organisms.
 * */
export default {
  components: {
    'chevron-right': chevronRightIcon
  },

  props: {
    /**
     * Adds an icon to the button
     */
    icon: {
      type: String,
      default: 'none',
      validator: (value) => {
        return ['none', 'chevron-right'].includes(value) !== -1
      }
    },
    /**
     * Disable state of the button
     * */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * The function to be called when the button is clicked
     */
    onClick: {
      type: Function,
      default: null
    }
  }
}
</script>

<style lang="scss">
@import './_button.scss';
</style>

<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#${props.icon}`"></use>
  </svg>
</template>
<script lang="ts" setup>
import {defineProps} from 'vue';
interface Prop {
  icon: string;
}

const props = defineProps<Prop>();
</script>

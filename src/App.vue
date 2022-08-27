<template>
  <TranslateWrapper />
</template>

<script>
import { defineComponent, ref } from 'vue';
import TranslateWrapper from './components/TranslateWrapper.vue';

export default defineComponent({
  components: {
    TranslateWrapper,
  },
  setup() {
    const name = ref('Hisho');
    return {
      name,
    };
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body {
  font-family: 'Roboto', sans-serif;
}
</style>

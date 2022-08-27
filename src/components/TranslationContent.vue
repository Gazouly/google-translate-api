<template>
  <div class="translation__content">
    <input
      v-if="showInput"
      class="translation__content__input"
      type="text" placeholder="Type here..."
      @keyup="onChangeInput"
    >
    <span
      v-else
      :class="{
        'translation__content__placeholder': !translation,
        'translation__content__active': translation,
      }"
    >
      {{ translation ? translation : 'Nothing yet...' }}
    </span>
    <div class="translation__content__flag">
      <TranslationIcon :defaultLang="defaultLang" @selectedFlag="onSelectFlag" />
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  toRef,
} from 'vue';
import TranslationIcon from './TranslationIcon.vue';

export default defineComponent({
  emits: ['selectedFlag', 'changeText'],
  components: {
    TranslationIcon,
  },
  props: {
    showInput: {
      type: Boolean,
      default: () => false,
    },
    defaultLang: {
      type: String,
      required: true,
    },
    translatedText: {
      type: String,
      default: () => '',
    },

  },
  setup(props, { emit }) {
    const translation = toRef(props, 'translatedText');
    const onSelectFlag = (value) => {
      emit('selectedFlag', value);
    };
    const onChangeInput = (e) => {
      emit('changeText', e.target.value);
    };
    return {
      onSelectFlag,
      onChangeInput,
      translation,
    };
  },
});
</script>

<style scoped lang="scss">
.translation__content {
  background: #F8F9FD;
  width: 30%;
  height: 150px;
  margin-bottom: 15px;
  border-radius: 10px;
  padding: 10px;
  position: relative;
  .translation__content__input {
    background: none;
    border: 0;
    height: 100%;
    display: block;
    font-size: 3rem;
    padding: 0 20px;
    &:focus {
      outline: 0;
    }
  }
  .translation__content__placeholder {
    font-size: 3rem;
    color: #ddd;
  }
  .translation__content__active {
    font-size: 3rem;
    color: #494BE5;
  }
}
</style>

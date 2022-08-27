<template>
  <div class="translation">
    <!-- From -->
    <TranslationContent
      :showInput="true"
      :defaultLang="'us'"
      @selectedFlag="(lang) => changeLanguage(lang, 'from')"
      @changeText="onChangeTranslationText"
    />
    <!-- To -->
    <TranslationContent
      :showInput="false"
      :defaultLang="'sa'"
      :translatedText="translatedText"
      @selectedFlag="(lang) => changeLanguage(lang, 'to')" />
    <button @click="getTranslation" class="translation__btn">
      {{ isLoading ? '...' : 'Translate' }}
    </button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import TranslationContent from './TranslationContent.vue';
import { translate } from '../core/translate/translate.services';

const langsMap = new Map();
langsMap.set('us', 'en');
langsMap.set('sa', 'ar');
langsMap.set('fr', 'fr');

export default defineComponent({
  components: {
    TranslationContent,
  },
  setup() {
    const isLoading = ref(false);
    const translateFrom = ref('');
    const translateTo = ref('');
    const translationText = ref('');
    const translatedText = ref('');
    const changeLanguage = (lang, target) => {
      if (target === 'from') translateFrom.value = lang;
      else translateTo.value = lang;
    };
    const onChangeTranslationText = (value) => {
      translationText.value = value;
    };
    const getTranslation = async () => {
      console.log('Getting translation...');
      console.log({
        from: translateFrom.value,
        to: translateTo.value,
        value: translationText.value,
      });
      isLoading.value = true;
      translatedText.value = await translate({
        from: langsMap.get(translateFrom.value),
        to: langsMap.get(translateTo.value),
        text: translationText.value,
      });
      isLoading.value = false;
    };
    return {
      getTranslation,
      isLoading,
      changeLanguage,
      onChangeTranslationText,
      translatedText,
    };
  },
});
</script>

<style scoped lang="scss">
.translation {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .translation__btn {
    width: 15%;
    padding: 10px 20px;
    margin: 0;
    background: #4143bc;
    color: #fff;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    &:hover {
      background: #494BE5;
    }
  }
}

</style>

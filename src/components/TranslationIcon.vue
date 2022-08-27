<template>
  <div class="translation__content__flags">
    <img
      class="translation__content__flags__img"
      :src="`https://countryflagsapi.com/png/${selectedFlag}`"
      :alt="`${selectedFlag}-flag`"
      v-show="!visible"
      @click="onSelect"
    />
    <div v-show="visible" class="translation__content__imgs">
      <ul class="translation__content__langs">
        <li
          class="translation__content__langs__flag"
          v-for="{id, img} in flags"
          :key="id"
          @click="() => selectFlag(id)"
        >
          <img
            class="translation__content__langs__flag__img"
            :src="img"
            :alt="`${img}-flag`"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  emit: ['selectedFlag'],
  props: {
    defaultLang: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const selectedFlag = ref('us');
    const visible = ref(false);
    const flags = ref([
      { id: 'us', img: 'https://countryflagsapi.com/png/us' },
      { id: 'sa', img: 'https://countryflagsapi.com/png/sa' },
      { id: 'fr', img: 'https://countryflagsapi.com/png/fr' },
    ]);

    const onSelect = () => {
      visible.value = !visible.value;
    };
    const selectFlag = (id) => {
      selectedFlag.value = id;
      emit('selectedFlag', selectedFlag.value);
      onSelect();
    };

    onMounted(() => {
      selectedFlag.value = props.defaultLang;
      emit('selectedFlag', selectedFlag.value);
    });
    return {
      flags,
      selectedFlag,
      visible,
      onSelect,
      selectFlag,
    };
  },
});
</script>

<style lang="scss">
  .translation__content__flags {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    .translation__content__flags__img {
      width: 27px;
      margin-bottom: 5px;
      border-radius: 2px;
      padding: 5px;
      cursor: pointer;
      &:hover {
        background: #ddd;
      }
    }
    .translation__content__imgs {
      .translation__content__langs {
        padding: 0;
        margin: 0;
        list-style: none;
        .translation__content__langs__flag{
          .translation__content__langs__flag__img {
            width: 27px;
            padding: 5px;
            border-radius: 2px;
            cursor: pointer;
            &:hover { background: #ddd; }

          }
        }
      }
    }
  }
</style>

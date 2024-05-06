<template>
  <button class="button" @click="clicado" :disabled="desabilitado">
    <slot>
    </slot>
    <span>{{ texto }}</span>
  </button>
</template>

<script>
export default {
  name: "BotaoComponent",
  emits: ['clicado'],
  props: {
    desabilitado: {
      type: Boolean
    },
    texto: {
      type: String,
      required: true
    },
  },
  methods: {
    clicado() {
      this.$emit('clicado')
    }
  }
};
</script>
<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <cronometro-component :tempoEmSegundos="tempoEmSegundos"></cronometro-component>
    <button class="button" @click="iniciar()" :disabled="cronometroRodando">
      <span>play</span>
    </button>
    <button class="button" @click="finalizar" :disabled="!cronometroRodando">
      <span>stop</span>
    </button>
  </div>
</template>

<script>
import CronometroComponent from './CronometroComponent.vue';

export default {
  components: { CronometroComponent },
  name: 'TemporizadorComponent',
  emits: ['aoTemporizadorFinalizado'],
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
      cronometroRodando: false
    }
  },
  methods: {
    iniciar() {
      this.cronometroRodando = true;
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos++
      }, 1000)
    },

    finalizar() {
      this.cronometroRodando = false;
      clearInterval(this.cronometro);
      this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
      this.tempoEmSegundos = 0;
    }
  }
}
</script>

<style scoped></style>
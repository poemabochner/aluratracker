<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <cronometro-component :tempoEmSegundos="tempoEmSegundos"></cronometro-component>
    <button class="button" @click="iniciar()">
      <span>play</span>
    </button>
    <button class="button" @click="finalizar">
      <span>stop</span>
    </button>
  </div>
</template>

<script>
import CronometroComponent from './CronometroComponent.vue';

export default {
  components: { CronometroComponent },
  name: 'TemporizadorComponent',
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0
    }
  },
  methods: {
    iniciar() {
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos++
      }, 1000)
    },

    finalizar() {
      clearInterval(this.cronometro);
    }
  }
}
</script>

<style scoped></style>
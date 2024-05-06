<template>
  <section class="is-flex is-align-items-center is-justify-content-space-between">
    <CronometroComponent :tempoEmSegundos="tempoEmSegundos"/>
    <botao-component @clicado="iniciar" texto="play" :desabilitado="cronometroRodando" />
    <botao-component @clicado="finalizar" texto="stop" :desabilitado="!cronometroRodando" />
  </section>
</template>


<script>
import BotaoComponent from './BotaoComponent.vue';
import CronometroComponent from './CronometroComponent.vue';

export default {
  components: { CronometroComponent, BotaoComponent},
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
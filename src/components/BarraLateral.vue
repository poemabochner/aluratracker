<template>
  <header>
    <h1>
      <img src="../assets/logo.png">
    </h1>
    <button class="button" @click="alterarTema">{{ textoBotao }}</button>
  </header>
</template>

<script>
export default {
  name: 'BarraLateral',
  emits: ['atualizarTema'],
  data() {
    return {
      modoEscuroAtivo: false
    }
  },
  computed: {
    textoBotao() {
      return this.modoEscuroAtivo ? 'Desativar modo escuro' : 'Ativar modo escuro';
    }
  },
  methods: {
    alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo;
      this.$emit('atualizarTema', this.modoEscuroAtivo);
    }
  }
}
</script>

<style scoped>
header {
  padding: 1rem;
  background: #ff5bb575;
  width: 100%;
  height: 100vh;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>

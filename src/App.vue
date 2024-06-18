<template>
  <main class="columns is-gapless is-multiline main" :class="{'modo-escuro': modoEscuroAtivo}">
    <div class="column is-one-quarter">
      <BarraLateral @atualizarTema="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import BarraLateral from './components/BarraLateral.vue';

export default {
  name: 'App',
  components: {
    BarraLateral},
  data() {
    return {
      modoEscuroAtivo: false
    };
  },
  methods: {
    trocarTema(modoEscuroAtivo) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    }
  }
}
</script>

<style>
.main {
  --bg-primario: aliceblue;
  --texto-primario: #000;
}

main.modo-escuro {
  --bg-primario: #5f0038;
  --texto-primario: aliceblue;
}

.conteudo {
  background-color: var(--bg-primario);
  color: var(--texto-primario);
}
</style>

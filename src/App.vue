<template>
  <main class="columns is-gapless is-multiline main" :class="{'modo-escuro': modoEscuroAtivo}">
    <div class="column is-one-quarter">
      <BarraLateral @atualizarTema="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <FormularioTarefa @aoSalvar="adicionarTarefa"/>
      <div class="lista">
        <TarefaComponent v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"></TarefaComponent>
      </div>
      <BoxComponent v-if="listaVazia">
        você ainda não registrou nenhuma tarefa hoje :(
      </BoxComponent>
    </div>
  </main>
</template>

<script>
import BarraLateral from './components/BarraLateral.vue';
import BoxComponent from './components/BoxComponent.vue';
import FormularioTarefa from './components/FormularioTarefa.vue';
import TarefaComponent from './components/TarefaComponent.vue';

export default {
  name: 'App',
  components: {
    BarraLateral,
    FormularioTarefa,
    TarefaComponent,
    BoxComponent,
  },
  data() {
    return {
      tarefas: [],
      modoEscuroAtivo: false
    };
  },
  computed: {
    listaVazia(){
      return this.tarefas.length === 0;
    }
  },
  methods: {
    adicionarTarefa(tarefa) {
      if (Array.isArray(this.tarefas)) {
        this.tarefas.push(tarefa);
      } else {
        this.tarefas = [tarefa];
      }
    },
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

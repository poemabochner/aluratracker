<template>
  <main class="columns is-gapless is-multiline main">
    <div class="column is-one-quarter">
      <BarraLateral/>
    </div>
    <div class="column is-three-quarter">
      <FormularioTarefa @aoSalvar="adicionarTarefa"/>
      <div class="lista">
        <TarefaComponent v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"></TarefaComponent>
      </div>
      <box-component v-if="listaVazia">
        você ainda nao registrou nenhuma tarefa hoje :(
      </box-component>
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
      tarefas: []
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
    }
  }
}
</script>


<style>
.main {
  background-color: aliceblue;
}
</style>

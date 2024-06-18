<template>
  <FormularioTarefa @aoSalvar="adicionarTarefa" />
  <div class="lista">
    <TarefaComponent v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"></TarefaComponent>
    <BoxComponent v-if="listaVazia">
      você ainda não registrou nenhuma tarefa hoje :(
    </BoxComponent>
  </div>
</template>

<script>
import BoxComponent from '../components/BoxComponent.vue';
import FormularioTarefa from '../components/FormularioTarefa.vue';
import TarefaComponent from '../components/TarefaComponent.vue';

export default {
  name: 'App',
  components: {
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
    listaVazia() {
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

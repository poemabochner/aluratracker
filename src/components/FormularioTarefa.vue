<template>
  <div class="box has-background-white">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="formulário para a criaçao de uma nova tarefa">
        <input type="text" class="text" placeholder="tarefa">
      </div>
      <div>
        <section>
          <strong class="has-text-black">00:00:00</strong>
        </section>
        <button class="button">
            <span>play</span>
        </button>
        <button class="button">
            <span>stop</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FormularioTarefa'
}
</script>
<template>
  <section>
  <strong class="has-text-black">{{ tempoDecorrido }}</strong>
</section>
</template>

<script>
export default {
  name: 'CronometroComponent',
  props: {
    tempoEmSegundos: {
      type: Number,
      default: 0
    }
  },
  computed: {
    tempoDecorrido() {
      return new Date(this.tempoEmSegundos * 1000).toISOString().substring(19, 11);
    }
  },
}
</script>

<style scoped>

</style>
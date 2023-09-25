<template>
  <div class="registrado">
    <TablePage msg="Seção de Registrados" />
  </div>
</template>
<script>
// @ is an alias to /src
import TablePage from '@/components/TablePage.vue'

export default {
  name: 'TableView',
  components: {
    TablePage
  }
}
</script>

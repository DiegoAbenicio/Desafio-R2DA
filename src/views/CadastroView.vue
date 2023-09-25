<template>
  <div class="home">
    <RegisterPage msg="Seção de Cadastros"/>
  </div>
</template>
<script>
// @ is an alias to /src
import RegisterPage from '@/components/RegisterPage.vue'

export default {
  name: 'HomeView',
  components: {
    RegisterPage
  }
}
</script>

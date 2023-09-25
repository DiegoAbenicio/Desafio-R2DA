<template>
  <div id="app">
    <RegisterPage msg="Seção de cadastros"/>
  </div>
</template>

<script>
import RegisterPage from './components/RegisterPage.vue'

export default {
  name: 'App',
  components: {
    RegisterPage
  }
}
</script>

<style>
#app {
  display: row;
  justify-content: center;
  text-align: center;
  margin-top: 10vh;
  color: #2c3e50;
}
</style>

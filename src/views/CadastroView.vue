<template>
  <div class="home">
    <RegisterPage msg="Seção de Cadastros" />
  </div>
</template>
<script>
import RegisterPage from "@/components/RegisterPage.vue";

export default {
  name: "HomeView",
  components: {
    RegisterPage,
  },
};
</script>

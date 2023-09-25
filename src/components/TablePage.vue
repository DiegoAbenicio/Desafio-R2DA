<template>
  <div>
    <h1 class="mb-5">
      <img class="img-fluid m-1 mr-auto" style="max-width: 150px;" alt="R2DA Logo" src="../assets/R2DA_Logo.png"> 
      {{ msg }}
    </h1>
    
  </div>
</template>

<script>
export default {
  name: 'TablePage',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>

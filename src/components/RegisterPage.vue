<template>
  <div class="hello">
    <h1 class="mb-5"><img class="img-fluid m-1 mr-auto" style="max-width: 150px;" alt="R2DA Logo" src="../assets/R2DA_Logo.png"> {{ msg }}</h1>
    <div class="d-flex justify-content-center">
      <div class="col-md-5 box">
        <form action="" class="mt-3 mb-3">
          <div class="form-row col-xs-12 col-sm-12 col-md-12">
            <div class="form-group col-md-12">
              <Strong class="d-flex justify-content-left">Nome</Strong>
              <input type="text" class="form-control" placeholder="Insira o nome">
            </div>
            <div class="form-row col-md-12">
              <div class="form-group col-md-6">
                <Strong class="d-flex justify-content-left">Email</Strong>
                <input type="text" class="form-control" placeholder="Insira o email">
              </div>
              <div class="form-group col-md-6">
                <Strong class="d-flex justify-content-left">Telefone</Strong>
                <input type="text" class="form-control" placeholder="Insira o telefone">
              </div>
            </div>
            <div class="form-group col-md-12">
              <Strong class="d-flex justify-content-left">Endereço</Strong>
              <input type="text" class="form-control" placeholder="Insira o endereço">
            </div>
          </div>
          <div>
            <button href="submit" class="btn mt-2">Realizar Cadastro</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.box{
  background-color: #31a59d;
  padding: 1em;
  border-radius: 25px;
}
.form-control{
  background: transparent;
  color: black;
  border-color: #1f7d74;
}
.form-control::placeholder{
  color: #aef0eb;
}
.btn{
  border: 1px solid #0c312e;
  background-color: #aef0eb;
  color: #0c312e;
}
.btn:hover{
  background-color: #1f7d74;
  transition: all 300ms ease-in;
  transform: scale(1.1);
}
.btn:active{
  background-color: #1f7d74;
}
</style>

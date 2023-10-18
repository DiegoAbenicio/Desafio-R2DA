<template>
  <div>
    <h1 class="mb-5">
      <img
        class="img-fluid m-1 mr-auto"
        style="max-width: 150px"
        alt="R2DA Logo"
        src="../assets/R2DA_Logo.png"
      />
      {{ msg }}
    </h1>
    <div>
      <div class="d-flex justify-content-center">
        <div class="col-md-5 box">
          <div class="mt-3 mb-3">
            <table class="table table-bordered">
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Actions</th>
              </tr>
              <tr v-for="pessoa of pessoas" :key="pessoa.id">
                <td>{{ pessoa.nome }}</td>
                <td>{{ pessoa.email }}</td>
                <td>{{ pessoa.telefone }}</td>
                <td>
                  <button @click="editar(pessoa)" class="btn btn-primary mr-1">
                    Editar
                  </button>
                  <button @click="remover(pessoa)" class="btn btn-danger ml-1">
                    Deletar
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pessoas from "../service/pessoas";
import Alerta from "sweetalert2";

export default {
  name: "TablePage",
  props: {
    msg: String,
  },
  data() {
    return {
      pessoas: [],
    };
  },

  mounted() {
    this.listar();
  },

  methods: {
    editar(pessoa) {
      this.$router.push({
        name: "home",
        query: { pessoa: JSON.stringify(pessoa) },
      });
    },
    remover(pessoa) {
      Alerta.fire({
        title: "Você tem certeza?",
        text: "Você não poderá reverter isso!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sim, delete!",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          Pessoas.deletar(pessoa.id)
            .then(() => {
              this.listar();
              Alerta.fire(
                "Deletado!",
                "A pessoa foi deletada com sucesso.",
                "success"
              );
            })
            .catch((error) => {
              console.error("Erro ao deletar pessoa:", error);
              Alerta.fire(
                "Erro ao deletar pessoa",
                "Ocorreu um erro na exclusão.",
                "error"
              );
            });
        }
      });
    },
    listar() {
      Pessoas.listar().then((resposta) => {
        this.pessoas = resposta.data;
      });
    },
  },
};
</script>
<style scoped>
.table {
  background: #fff;
  color: black;
  border-color: #1f7d74;
}
</style>

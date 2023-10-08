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
      Pessoas.deletar(pessoa.id);
      Alerta.fire("Deletado com sucesso!", "", "success");
      this.listar();
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
.box {
  background-color: #31a59d;
  padding: 1em;
  border-radius: 25px;
}
.table {
  background: #fff;
  color: black;
  border-color: #1f7d74;
}
</style>

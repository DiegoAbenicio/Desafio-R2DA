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
    <div class="d-flex justify-content-center">
      <div class="col-md-5 box">
        <div class="mt-3 mb-3">
          <form @submit.prevent="salvar">
            <div class="form-row col-xs-12 col-sm-12 col-md-12">
              <div class="form-group col-md-12">
                <Strong class="d-flex justify-content-left">Nome</Strong>
                <input
                  type="text"
                  v-model="pessoaLocal.nome"
                  class="form-control"
                  placeholder="Insira o nome"
                />
              </div>
              <div class="form-row col-md-12">
                <div class="form-group col-md-6">
                  <Strong class="d-flex justify-content-left">Email</Strong>
                  <input
                    type="text"
                    v-model="pessoaLocal.email"
                    class="form-control"
                    placeholder="Insira o email"
                  />
                </div>
                <div class="form-group col-md-6">
                  <Strong class="d-flex justify-content-left">Telefone</Strong>
                  <input
                    type="text"
                    v-model="pessoaLocal.telefone"
                    class="form-control"
                    placeholder="Insira o telefone"
                    @input="filtrarNumeros"
                  />
                </div>
              </div>
              <div class="form-group col-md-12">
                <Strong class="d-flex justify-content-left">Endereço</Strong>
                <input
                  type="text"
                  v-model="pessoaLocal.endereco"
                  class="form-control"
                  placeholder="Insira o endereço"
                />
              </div>
            </div>
            <div>
              <button type="submit" class="btn mt-2">Realizar Cadastro</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pessoas from "../service/pessoas";
import Alerta from "sweetalert2";

export default {
  name: "RegisterPage",
  props: {
    msg: String,
    pessoa: Object,
  },
  data() {
    return {
      pessoaLocal: { ...this.pessoa },
    };
  },
  created() {
    if (this.$route.query.pessoa) {
      this.pessoaLocal = JSON.parse(this.$route.query.pessoa);
    } else {
      this.pessoaLocal = {
        id: "",
        nome: "",
        email: "",
        telefone: "",
        endereco: "",
        errors: [],
      };
    }
  },
  methods: {
    filtrarNumeros() {
      this.pessoaLocal.telefone = this.pessoaLocal.telefone.replace(/\D/g, "");
    },

    salvar() {
      if (!this.pessoaLocal.nome || this.pessoaLocal.nome < 3) {
        Alerta.fire("Insira um nome válido!", "", "error");
      } else if (!this.pessoaLocal.email) {
        Alerta.fire("Insira um email!", "", "error");
      } else if (!this.pessoaLocal.telefone) {
        Alerta.fire("Insira um telefone!", "", "error");
      } else if (!this.pessoaLocal.telefone == 11) {
        Alerta.fire(
          "O número de digitos não condiz com um telefone válido",
          "",
          "error"
        );
      } else if (
        !this.pessoaLocal.endereco ||
        !this.pessoaLocal.endereco >= 5
      ) {
        Alerta.fire("Insira um endereco!", "", "error");
      } else if (!this.pessoaLocal.id) {
        Pessoas.salvar(this.pessoaLocal)
          .then((resposta) => {
            this.pessoaLocal = {};
            Alerta.fire("Salvo com sucesso!", "", "success");
            resposta.data;
          })
          .catch(() => {
            Alerta.fire(
              "Erro ao salvar, revise os dados inseridos",
              "",
              "error"
            );
          });
      } else {
        Pessoas.atualizar(this.pessoaLocal.id, this.pessoaLocal)
          .then((resposta) => {
            this.pessoaLocal = {};
            Alerta.fire("Salvo com sucesso!", "", "success");
            resposta.data;
          })
          .catch(() => {
            Alerta.fire(
              "Erro ao salvar, revise os dados inseridos",
              "",
              "error"
            );
          });
      }
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
.form-control {
  background: #fff;
  color: black;
  border-color: #1f7d74;
}
.btn {
  background-color: #fff;
  border: 1px solid #1f7d74;
}
.btn:hover {
  transition: all 300ms ease-in;
  transform: scale(1.1);
}
strong {
  color: #fff;
}
</style>

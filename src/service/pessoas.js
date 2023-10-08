import { http } from './config'

export default {
  listar: () => {
    return http.get("");
  },

  salvar: (pessoa) => {
    return http.post("", pessoa);
  },

  atualizar: (id, pessoa) => {
    return http.put(`${id}`, pessoa);
  },

  deletar: (id) => {
    return http.delete(`${id}`);
  }
};
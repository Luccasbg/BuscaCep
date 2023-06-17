<template>
  <div id="form-content">
    <input
      v-model="numero_cep"
      type="text"
      placeholder="Digite o CEP desejado..."
      required
    />
    <button v-on:click="buscarCep()">Buscar</button>

    <h3>Dados obtidos:</h3>

    <label for="logradouro">Logradouro:</label>
    <p>{{cep.logradouro}}</p>

    <label for="bairro">Bairro:</label>
    <p>{{cep.bairro}}</p>

    <label for="localidade">Cidade:</label>
    <p>{{cep.localidade}}</p>

    <label for="uf">Estado:</label>
    <p>{{cep.uf}}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BuscaCepView",
  data() {
    return {
      numero_cep: "",
      cep: [],
    };
  },
  methods: {
    buscarCep() {
      var vm = this;
      var numcep = this.numero_cep;

      axios
        .get("https://viacep.com.br/ws/" + numcep + "/json")
        .then(function (response) {
          vm.cep = response.data;
          console.log(response.data);
        });
    },
  },
};
</script>

<style>
</style>
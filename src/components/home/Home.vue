<template>
  <div class="home">

    <h1 class="titulo">{{ titulo }}</h1>
    <br>
    <div class="botoes"> <router-link :to="{ name: 'cadastro' }"> <b-button class="botoes" variant="outline-primary">Adicionar Usuario <i class="fa fa-user-plus"></i></b-button> </router-link> </div>
    
    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Perquisar por nome">
    <p v-if="mostraMensagem">{{ mensagem }}</p>
    
    <br>

    <br>
    
    <ul>
      <li v-for="(usuario, i) of usuariosFiltro().slice().reverse()" :key='i'>
        <meu-painel :name="usuario.name" :username="usuario.username" :email="usuario.email">
        <div class="botoes">
          <router-link :to="{ name: 'altera', params: {id: usuario._id} }"> <b-button variant="outline-primary">Editar <i class="fa fa-user-edit"></i></b-button> </router-link>
          <router-link :to="{ name: 'mostra', params: {id: usuario._id} }"> <b-button variant="outline-primary">Ver detalhes <i class="fas fa-eye"></i></b-button> </router-link>
          <b-button variant="outline-danger" @click="remove(usuario)">Remover <i class="fa fa-trash"></i> </b-button>
        </div>
        <br>
        <br>
        <br>
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>

import PainelResumido from '../shared/painel-resumido/PainelResumido.vue'
import UsuarioService from '../../domain/usuario/UsuarioService'

export default {

  components: {
    'meu-painel' : PainelResumido
  },

  data() {

    return{
      titulo: 'Usuarios Nagro',
      usuarios: [],
      filtro: '',
      mensagem: '',
      mostraMensagem: false,
      file: null
    }
  },

 

  methods:{

    usuariosFiltro(){

      if(this.filtro){
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.usuarios.filter(usuario => exp.test(usuario.name));
      }else{
        return this.usuarios;
      }
    },

    remove(usuario) {
    
      if(confirm("Confirmar operação?")){
        this.service.apaga(usuario._id)
        .then(() => {
          let indice = this.usuarios.indexOf(usuario);
          this.usuarios.splice(indice, 1);
          this.mensagem = 'Usuario removido com sucesso';
          }, err => {
          console.log(err);
          this.mensagem = 'Usuario nao removido';
        });
      }  
    }
  },

  watch: {
    mensagem :function(){
      
      this.mostraMensagem = true;
      var self = this;
      setTimeout(function() {
        self.mostraMensagem = false;
        self.mensagem = '';
      }, 1000);
    }
  }
  ,


  created() {

    this.service = new UsuarioService(this.$resource);

    this.service
      .lista()
      .then(usuarios => this.usuarios = usuarios, err => console.log(err));
  }
}

</script>

<style>

  ul{
    list-style-type: none;
  }

  .botoes{
    text-align: right;
  }

  .titulo{
    font-size:50px;

  }

  .filtro{
    display: block;
    margin-top: 20px;
    padding: 10px;
    width: 100%;
    border-radius: 20px;
  }

  .home{
    width: 70%;
    margin: 50px auto 0px auto; 
  }


</style>


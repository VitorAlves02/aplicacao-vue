<template>
    
    <div class="cadastro">
        <h1 class="centralizado">Cadastro</h1>
        <br>

        <b-form @submit.prevent="grava()">
            
            <b-form-group label="Nome" >
                <b-form-input id="nome" v-model="usuario.name" required placeholder="Digite Nome"></b-form-input>
            </b-form-group>

            <b-form-group label="Usuário" >
                <b-form-input id="usuario" v-model="usuario.username" required placeholder="Digite Usuario"></b-form-input>
            </b-form-group>

            <b-form-group label="Email" >
                <b-form-input id="email" v-model="usuario.email" type="email" required placeholder="Digite Email"></b-form-input>
            </b-form-group>

            <b-form-group label="Telefone" >
                <b-form-input id="telefone" v-model="usuario.phone" required placeholder="Digite Telefone"></b-form-input>
            </b-form-group>

            <b-form-group label="WebSite" >
                <b-form-input id="site" v-model="usuario.website" required placeholder="Digite WebSite"></b-form-input>
            </b-form-group>

            <br> <h5 class="centralizado">ENDEREÇO</h5>
            
            <b-form-group label="Rua" >
                <b-form-input id="rua" v-model="usuario.addressStreet" placeholder="Digite Rua"></b-form-input>
            </b-form-group>

            <b-form-group label="Complemento" >
                <b-form-input id="complemento" v-model="usuario.addressSuite" placeholder="Digite Complemento"></b-form-input>
            </b-form-group>

            <b-form-group label="Cidade" >
                <b-form-input id="cidade" v-model="usuario.addressCity" placeholder="Digite Cidade"></b-form-input>
            </b-form-group>

            <b-form-group label="Código Postal" >
                <b-form-input id="codigo-postal" v-model="usuario.addressZipcode" placeholder="Digite Código Postal"></b-form-input>
            </b-form-group>

            <b-form-group label="Latitude" >
                <b-form-input id="latitude" v-model="usuario.addressGeoLat" placeholder="Digite Latitude"></b-form-input>
            </b-form-group>

            <b-form-group label="Longitude" >
                <b-form-input id="longitude" v-model="usuario.addressGeoLng" placeholder="Digite Longitude"></b-form-input>
            </b-form-group>
            
            <br> <h5 class="centralizado">LOCAL DE TRABLHO</h5>

            <b-form-group label="Nome" >
                <b-form-input id="empresa" v-model="usuario.companyName" placeholder="Digite Nome"></b-form-input>
            </b-form-group>

            <b-form-group label="Slogan" >
                <b-form-input id="slogan" v-model="usuario.companyCatchPhrase" placeholder="Digite Slogan"></b-form-input>
            </b-form-group>

            <b-form-group label="Proposito" >
                <b-form-input id="proposito" v-model="usuario.companyBs" placeholder="Digite Proposito"></b-form-input>
            </b-form-group>

            <br>

            <div class="centralizado">
                <br>
                <router-link :to="{ name: 'home' }"><b-button variant="secondary" class="botao"><i class="fa fa-angle-double-left"></i> Voltar</b-button></router-link>
                <b-button variant="secondary" type="submit-light" class="botao">Salvar <i class="fa fa-check"></i></b-button>
                <br>
                <br>
            </div>

        </b-form>
    </div>

</template>

<script>

import Usuario from '../../domain/usuario/Usuario';
import UsuarioService from '../../domain/usuario/UsuarioService';

export default {
    
    data(){

        return {

            usuario: new Usuario(),
            id: this.$route.params.id,
            }
        },
    

    methods: {

        grava() {
            
            this.service
              .cadastra(this.usuario)
              .then(res=>{
                //trata sucesso aqui
                  this.usuario = new Usuario()
                  this.$router.push({ name: 'home' })
        })
        .catch(res=>{
            cosole.log("Erro");
            alert('Não foi possivel salvar o usuario');
        })
        }
    },

    created() { 

        this.service = new UsuarioService(this.$resource);

        if(this.id){
            this.service
                .busca(this.id)
                .then(usuario => this.usuario = usuario);
        }
    }

}

</script>

<style scoped>

    .cadastro{
        width: 70%;
        margin: 50px auto 0px auto;
    }

    .centralizado{
        text-align: center;
    }

    .botao{
        padding:5px 50px 5px 50px;
        margin:10px;
    }

</style>
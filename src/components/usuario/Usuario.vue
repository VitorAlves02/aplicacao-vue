<template>
    
    <div class="usuario">
        <h1 class="centralizado">Usuario {{usuario.name}}</h1>

        <meu-painel :name="usuario.name" :username="usuario.username" 
        :email="usuario.email" :phone="usuario.phone" :website="usuario.website" 
        :addressStreet="usuario.addressStreet" :addressSuite="usuario.addressSuite" 
        :addressCity="usuario.addressCity" :addressZipcode="usuario.addressZipcode" 
        :addressGeoLat="usuario.addressGeoLat" :addressGeoLng="usuario.addressGeoLng" 
        :companyName="usuario.companyName" :companyCatchPhrase="usuario.companyCatchPhrase" 
        :companyBs="usuario.companyBs">
        </meu-painel>
        
        <br>
        <div class="centralizado"><router-link :to="{ name: 'home' }"><b-button variant="dark" class="botao"><i class="fa fa-angle-double-left"></i> Voltar</b-button></router-link></div>
        <br>
        <br>
        <br>
    </div>

</template>

<script>

import Usuario from '../../domain/usuario/Usuario';
import UsuarioService from '../../domain/usuario/UsuarioService';
import PainelCompleto from '../shared/painel-completo/PainelCompleto.vue';

export default {

    components: {
        'meu-painel' : PainelCompleto
    },
    
    data(){

        return {

            usuario: new Usuario(),
            id: this.$route.params.id
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

    .centralizado{
        text-align: center;
    }

    .usuario{
        width: 80%;
        margin: 50px auto 0px auto;
    }

    .botao{
        padding: 5px 200px 5px 200px;
    }
</style>
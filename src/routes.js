import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';
import Usuario from './components/usuario/Usuario.vue';

export const routes = [
    { path: '', name: 'home', component: Home},
    { path: '/cadastro', name: 'cadastro', component: Cadastro},
    { path: '/cadastro/:id', name: 'altera', component: Cadastro},
    { path: '/usuario/:id', name: 'mostra', component: Usuario},
    { path: '*', component: Home}
];
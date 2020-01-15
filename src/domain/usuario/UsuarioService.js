export default class UsuarioService {

    constructor(resource){

        this._resource = resource('usuarios{/id}');

    }

    lista() {

        return this._resource
            .query()
            .then(res => res.json());
    }

    cadastra(usuario) {
        
        if(usuario._id){
            return this._resource
                .update({ id: usuario._id }, usuario);
        }else{
            return this._resource
                .save(usuario);
        }

    }

    apaga(id) {

        return this._resource.delete( { id } );
    }

    busca(id) {
        
        return this._resource
            .get({ id })
            .then( res => res.json() );
    }
}
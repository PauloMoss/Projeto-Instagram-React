import Post from './Post';

export default function Posts() {

    const dadosDosPosts =[
        {usuario: "meowed", imagem: "assets/img/meowed.svg", conteudo: "assets/img/gato-telefone.svg", curtida: "respondeai", outrasCurtidas: "101.523"},
        {usuario: "barked", imagem: "assets/img/barked.svg", conteudo: "assets/img/dog.svg", curtida: "adorable_animals", outrasCurtidas: "99.159"}
    ];
    return (
        <div class="posts">

            {dadosDosPosts.map(post => (
                <Post usuario={post.usuario} imagem={post.imagem} conteudo={post.conteudo} curtida={post.curtida} outrasCurtidas={post.outrasCurtidas}/>
            ))}

        </div>
    );
}

export default function PerfilDoUsuario() {

    const dadosDoUsuario = {nome: "Catana", apelido: "catanacomics", imagem: "assets/img/catanacomics.svg"};

    return (
        <div class="usuario">
            <img src={dadosDoUsuario.imagem} />
            <div class="texto">
                <strong>{dadosDoUsuario.apelido}</strong>
                {dadosDoUsuario.nome}
            </div>
        </div>
    );
}
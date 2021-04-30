
export default function PerfilDoUsuario(props) {

    return (
        <div class="usuario">
            <img src={props.imagem} />
            <div class="texto">
                <strong>{props.apelido}</strong>
                {props.nome}
            </div>
        </div>
    );
}
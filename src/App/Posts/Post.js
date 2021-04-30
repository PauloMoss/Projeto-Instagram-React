import Acoes from './Icones';

export default function Post(props) {
    return(
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagem} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.conteudo} />
            </div>

            <div class="fundo">
                
                <Acoes />
                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" />
                    <div class="texto">
                        Curtido por <strong>{props.curtida}</strong> e <strong>outras {props.outrasCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
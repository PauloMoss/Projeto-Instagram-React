

export default function Storie(props) {
    return(
        <div class="story">
            <div class="imagem">
                <img src={props.image} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    );
}
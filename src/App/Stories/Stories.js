import Storie from './Storie';


export default function Stories() {

    const dadosDosStories = [
        {usurario: "9gag", image: "assets/img/9gag.svg"},
        {usurario: "meowed", image: "assets/img/meowed.svg"},
        {usurario: "barked", image: "assets/img/barked.svg"},
        {usurario: "nathanwpylestrangeplanet", image: "assets/img/nathanwpylestrangeplanet.svg"},
        {usurario: "wawawicomics", image: "assets/img/wawawicomics.svg"},
        {usurario: "respondeai", image: "assets/img/respondeai.svg"},
        {usurario: "filomoderna", image: "assets/img/filomoderna.svg"}
    ];

    return (
        <div class="stories">
            
            {dadosDosStories.map(storie => (
                <Storie usuario={storie.usurario} image={storie.image} />
            ))}
            
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
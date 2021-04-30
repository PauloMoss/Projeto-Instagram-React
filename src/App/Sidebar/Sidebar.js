import PerfilDoUsuario from './Usuario';
import Sugestoes from './Sugestoes';

export default function Sidebar() {
    
    return(
        <div class="sidebar">
            
            <PerfilDoUsuario />

            <Sugestoes />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}
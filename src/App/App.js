import EstruturaTopo from './Topo/EstruturaTopo';
import Stories from './Stories/Stories';
import Posts from './Posts/Posts';
import Sidebar from './Sidebar/Sidebar';
import Mobile from './ModoMobile';

export default function App() {
    return (
    <>
        <EstruturaTopo />

        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>

            <Sidebar />
        </div>

        <Mobile />
    </>
    );
}
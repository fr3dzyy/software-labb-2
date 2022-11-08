import LogRocket from 'logrocket'
import { ImageCarousel } from "./components/ImageCarousel";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

LogRocket.init('znathy/mango-tree')

function App() {

    return (
        <div className="App">
            <Header />
            <ImageCarousel />
            <Footer />
        </div>
    )
}

export default App

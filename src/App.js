import LogRocket from 'logrocket'
import { ImageCarousel } from "./components/ImageCarousel";
import {Header} from "./components/Header";

LogRocket.init('znathy/mango-tree')

function App() {

    return (
        <div className="App">
            <Header />
            <ImageCarousel />
        </div>
    )
}

export default App

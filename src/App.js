import "./App.css";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dvvauf785",
    },
  });
  const myImage = cld.image("pexels-sharath-g-4418671_bef62x");
  myImage.resize(fill().width(250).height(250));
  return (
    <div className="App">
      <header className="App-header">
        <AdvancedImage cldImg={myImage} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

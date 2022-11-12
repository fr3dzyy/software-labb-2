import { Cloudinary } from "@cloudinary/url-gen";
import { fit } from "@cloudinary/url-gen/actions/resize";
import {
  Facebook,
  Instagram,
  SuitHeartFill,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";

export const Footer = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dvvauf785",
    },
  });

  const logoImage2 = cld.image("TMDb_af2p0i");
  const tmdbLogo = logoImage2.resize(fit().width(80).height(80)).toURL();

  return (
    <footer className="border-top border-light" style={{ marginTop: 125 }}>
      <div className="d-flex justify-content-evenly pt-3">
        <Instagram size="30" />
        <Facebook size="30" />
        <Twitter size="30" />
        <Youtube size="30" />
      </div>
      <div className="d-flex justify-content-evenly mt-3">
        <div>
          <p>Contact</p>
          <p>About</p>
          <p>Help</p>
          <p>
            Sharks
            <SuitHeartFill />
          </p>
        </div>
        <div>
          <img alt="logo" src={tmdbLogo} className="mt-5" />
        </div>
      </div>
      <p>&copy; SharkMovies 2022</p>
    </footer>
  );
};

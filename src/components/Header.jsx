import { Cloudinary } from "@cloudinary/url-gen";
import "bootstrap/dist/css/bootstrap.min.css";
import {fit} from "@cloudinary/url-gen/actions/resize";

export const Header = () => {
    const cld = new Cloudinary({
        cloud: {
            cloudName: "dvvauf785",
        },
    });
    const logoImage = cld.image("TMDb_af2p0i");
    const tmdbLogo = logoImage.resize(fit().width(300).height(300)).toURL();

    return(
        <header>
            <img alt="logo" src={tmdbLogo} className="m-5" />
        </header>
    )
}

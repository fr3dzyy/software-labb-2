import Carousel from "react-bootstrap/Carousel";
import { Cloudinary } from "@cloudinary/url-gen";
import "bootstrap/dist/css/bootstrap.min.css";
import {fill} from "@cloudinary/url-gen/actions/resize";

export const ImageCarousel = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dvvauf785",
    },
  });
  const myImage1 = cld.image("robo3_ju2kez");
  const myImage2 = cld.image("raidersofTheLostShark_cvx5z6");
  const myImage3 = cld.image("sharkExorcist_n3xyzr");
  const myImage4 = cld.image("toxicshark_em3rwd");
  const myImage5 = cld.image("noahs-shark-movie-cover_zfgjel");
    const roboCop3 = myImage1.resize(fill().width(250).height(350)).toURL();
    const lostShark = myImage2.resize(fill().width(250).height(350)).toURL();
    const sharkExorcist = myImage3.resize(fill().width(250).height(350)).toURL();
    const toxicShark = myImage4.resize(fill().width(250).height(350)).toURL();
    const noahsShark = myImage5.resize(fill().width(250).height(350)).toURL();



  return (
    <Carousel>
      <Carousel.Item>
          <img alt="models" src={roboCop3} className="d-block"/>
      </Carousel.Item>
      <Carousel.Item>
          <img alt="models" src={lostShark} className="d-block" />
      </Carousel.Item>
      <Carousel.Item>
          <img alt="models" src={sharkExorcist} className="d-block" />
      </Carousel.Item>
        <Carousel.Item>
            <img alt="models" src={toxicShark} className="d-block" />
        </Carousel.Item>
        <Carousel.Item>
            <img alt="models" src={noahsShark} className="d-block" />
        </Carousel.Item>
    </Carousel>
  );
};

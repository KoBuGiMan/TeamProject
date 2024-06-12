import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const setting = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    speed: 1000,
  };

  return (
    <Slider {...setting}>
      <div>
        <img src="./images/standardBed.jpg" alt="Image1" />
      </div>
      <div>
        <img src="./images/standardBath.jpg" alt="Image2" />
      </div>
      <div>
        <img src="./images/object.jpg" alt="Image3" />
      </div>
      <div>
        <img src="./images/breakfast.jpg" alt="Image4" />
      </div>
    </Slider>
  );
}
export default SimpleSlider;

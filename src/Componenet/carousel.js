import Carousel from "react-bootstrap/Carousel";
import black from "./image/BLACK.jpg";
import navy from "./image/NAVY MOCKUP 1.jpg";
import peach from "./image/HEATHER PEACH MOCKUP_.jpg";
import maron from "./image/MAROON MOCKUP.jpg";
function Carouselshirt() {
  return (
    <Carousel variant="dark rounded shadow-lg  p-0 m-0 rounded ">
      <Carousel.Item interval={1000} >
        <img className="d-block w-100 " src={black} alt="First slide" />
       
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={navy} alt="Third slide" />

      
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={peach} alt="Third slide" />

     
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={maron} alt="Third slide" />
 
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselshirt;

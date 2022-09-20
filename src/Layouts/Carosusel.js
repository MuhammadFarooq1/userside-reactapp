import images from "./ImageSlider";
import ImageSlider from "./Slider";

const Carousel = ({ mysliders }) => {
  return (
    <div>
      <ImageSlider sliders={mysliders} />
    </div>
  );
};
// const Carousel = () => {
//   return (
//     <div>
//       <ImageSlider images={images} />
//     </div>
//   );
// };

export default Carousel;

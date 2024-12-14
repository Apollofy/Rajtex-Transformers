import Description from "../components/Description";
import Carousel from "../components/Carousel";
import Transformer from "../components/Transformer";
import Certificates from "../components/Certificates";
import Serve from "../components/Serve";
import ImageCarousel from "../components/ImageCarousel";

export default function Home() {
  return(
    <div className="m-4">
      <Carousel/>
      <Certificates/>
      <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 p-4">
      <Description/>
      <Transformer/>
      </div>
      <Serve/>
      <ImageCarousel/>
    </div>
  );
}

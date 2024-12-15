import Description from "../components/Description";
import Carousel from "../components/Carousel";
import Certificates from "../components/Certificates";
import ProductGrid from "../components/ProductGrid";
import Serve from "../components/Serve";
import ImageCarousel from "../components/ImageCarousel";

export default function Home() {
  return(
    <div className="m-4">
      <Carousel/>
      {/* <Certificates/> */}
      <Description/>
      <Serve/>
      <ProductGrid/>
      <div className="h-[2px] bg-indigo-900 mt-4"></div>
      <ImageCarousel/>
    </div>
  );
}

import Sliderimg1 from "@/assets/slider/slider1.jpg";
import Sliderimg2 from "@/assets/slider/slider2.jpg";
import Sliderimg3 from "@/assets/slider/slider3.jpg";
import Sliderimg4 from "@/assets/slider/slider4.jpg";
import Sliderimg5 from "@/assets/slider/slider5.jpg";
import Sliderimg6 from "@/assets/slider/slider6.jpg";

import { ImageSlider } from "@/components/image-slider";

const sliderData = [
  {
    id: 1,
    image: Sliderimg1,
  },
  {
    id: 2,
    image: Sliderimg2,
  },
  {
    id: 3,
    image: Sliderimg3,
  },
  {
    id: 4,
    image: Sliderimg4,
  },
  {
    id: 5,
    image: Sliderimg5,
  },
  {
    id: 6,
    image: Sliderimg6,
  },
]

export default function Slider() {
  return (
    <div className="mt-20 max-w-300 w-full h-125">
      <ImageSlider imageUrls={sliderData.map((item) => item.image)} />
    </div>
  )
}
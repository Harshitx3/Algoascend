import {
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

type ImageSliderProps = {
  imageUrls: string[];
}

export function ImageSlider({ imageUrls }: ImageSliderProps) {

  const [imageIndex, setImageIndex] = useState(0);


  return (
    <div className="w-full h-full">
      <img src={imageUrls[imageIndex]} alt="" className="img-slider-img" />
      <button>
        <ChevronRight />
      </button>
      <button>
        <ChevronLeft />
      </button>
    </div>
  )
}
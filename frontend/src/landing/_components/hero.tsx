import { Button } from "@/components/ui/button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Hero() {
  return (
    <div className="mt-10">
      {/* <div className="absolute inset-0 flex justify-center items-center">
        <div className="blob mr-50"></div>
      </div> */}
      <div className="ml-20 w-[60%] mt-50">
        <h1 className="text-8xl font-bold">
          Launchpad to tech excellence
        </h1>
      </div>
      <div className="ml-22 w-[30%] mt-10">
        <p className="text-2xl text-[#A1A1AA]">
          Not just another ed-tech--we’re a SaaS-powered talent accelerator where you learn by building, ship real AI/ML products, and grow continuously
        </p>
      </div>
      <div className="ml-10">
        <Button
          variant="ghost"
          size="lg"
          className="text-white font-medium text-xl bg-[#3B82F6] hover:bg-[#2563EB] hover:text-white self-center justify-self-start ml-12 mt-10">
          Explore Track
          <MdOutlineKeyboardArrowRight className="size-8 justify-center items-center ml-5" />
        </Button>
      </div>
    </div>
  );
};
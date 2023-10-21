import Link from "next/link";
import Test from "./Test";

const Header = () => {
  return (
    <div className="w-full overflow-hidden h-screen relative">
      <Test />

      <div className="w-full h-full absolute top-0 left-0 z-10 bg-black/30 flex flex-col items-center justify-center">
        <h1 className="text-white text-center max-w-[1000px] leading-[65px]">
          LatSat - private independent satelite network
        </h1>

        <div className="flex items-center justify-center gap-4 mt-8">
          <Link
            href="#learn-more"
            className="flex items-center justify-center w-60 h-16 border-2 border-white text-white bg-black text-xl rounded-full"
          >
            Learn more
          </Link>
          <button className="w-60 h-16 bg-white text-black text-xl rounded-full">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

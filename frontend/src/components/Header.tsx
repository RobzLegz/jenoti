import Link from "next/link";
import Test from "./Test";

const Header = () => {
  return (
    <div className="w-full overflow-hidden h-screen relative">
      <Test />

      <div className="w-full h-full absolute top-0 left-0 z-10 bg-black/30 flex flex-col items-center justify-center">
        <h1 className="text-white text-center mb-4">LatSat</h1>

        <h2 className="text-white text-center max-w-[1000px] leading-[65px] opacity-80">
          Private independent satelite network
        </h2>

        <div className="flex items-center justify-center gap-4 mt-10">
          <Link
            href="#learn-more"
            className="flex items-center justify-center w-60 h-16 border-2 border-white text-white bg-black text-xl rounded-full"
          >
            Learn more
          </Link>
          <button
            className="w-60 h-16 bg-white text-black text-xl rounded-full opacity-50"
            disabled
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

import Image from "next/image";
import React from "react";

const Satelite = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center md:flex-row z-10 bg-black/70 py-10 gap-4 md:gap-8 px-4"
      id="learn-more"
    >
      <div className="flex flex-col">
        <strong className="text-white text-3xl max-w-[500px] leading-[45px]">
          Powerful nano satelite + launch for 20'000€
        </strong>

        <button
          className="w-[150px] md:w-48 h-12 mt-4 bg-white text-black text-xl rounded-full opacity-50"
          disabled
        >
          Comming soon
        </button>
      </div>

      <Image
        src="/resources/satelite.jpg"
        alt="LatSat"
        width={400}
        height={700}
        className="w-full max-w-[300px] h-[400px] object-cover rounded-lg"
      />
    </section>
  );
};

export default Satelite;

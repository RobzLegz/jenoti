import Image from "next/image";
import React from "react";

const Description = () => {
  return (
    <section
      className="w-full p-20 flex flex-col gap-36 z-20 bg-black/90"
      id="learn-more"
    >
      <div className="flex w-full items-center justify-center gap-8">
        <Image
          src="/resources/communication.jpg"
          alt="3D satelite position"
          width={400}
          height={400}
          className="w-[400px] rounded-lg"
        />

        <strong className="text-white text-4xl max-w-[500px]">
          24/7 data collection & comunication
        </strong>
      </div>

      <div className="flex w-full items-center justify-center gap-8">
        <strong className="text-white text-4xl max-w-[500px]">
          Real-time 3D satelite geopositioning
        </strong>

        <Image
          src="/resources/3d-satelite-positioning.png"
          alt="3D satelite position"
          width={400}
          height={400}
          className="w-[400px] rounded-lg"
        />
      </div>

      <div className="flex w-full items-center justify-center gap-8">
        <Image
          src="/resources/independence.jpg"
          alt="3D satelite position"
          width={400}
          height={400}
          className="w-[400px] rounded-lg"
        />

        <strong className="text-white text-4xl max-w-[500px]">
          Independent from other networks and entities
        </strong>
      </div>

      <div className="flex w-full items-center justify-center gap-8">
        <strong className="text-white text-4xl max-w-[500px]">
          Self-deorbiting mechanism
        </strong>

        <div className="grid grid-cols-2 gap-2">
          <Image
            src="/resources/deorbiting.jpg"
            alt="3D satelite position"
            width={400}
            height={400}
            className="w-[200px] h-[200px] object-cover rounded-lg"
          />

          <Image
            src="/resources/deorbiting-1.jpg"
            alt="3D satelite position"
            width={400}
            height={400}
            className="w-[200px] h-[200px] object-cover rounded-lg"
          />

          <Image
            src="/resources/deorbiting.gif"
            alt="3D satelite position"
            width={400}
            height={400}
            className="w-[200px] h-[200px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Description;

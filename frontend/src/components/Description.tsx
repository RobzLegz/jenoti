import Image from "next/image";
import React, { useState } from "react";

const Description = () => {
  const [activeItem, setActiveItem] = useState<{
    title: string;
    images: string[];
    description: string;
  } | null>(null);

  return (
    <section
      className="w-full p-20 flex flex-col gap-36 z-20 bg-black/80"
      id="learn-more"
    >
      {activeItem ? <div className="w-full h-screen absolute top-0 left-0"></div> : null}

      {data.map((item, i) => (
        <div className="flex w-full items-center justify-center gap-8" key={i}>
          {i % 2 === 0 ? (
            item.images.length === 1 ? (
              <Image
                src={item.images[0]}
                alt={item.title}
                width={400}
                height={400}
                className="w-[400px] rounded-lg"
              />
            ) : item.images.length > 1 ? (
              <div className="grid grid-cols-2 gap-2">
                {item.images.map((img, i) => (
                  <Image
                    src={img}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="w-[200px] h-[200px] object-cover rounded-lg"
                  />
                ))}
              </div>
            ) : null
          ) : null}

          <div className="flex flex-col">
            <strong className="text-white text-4xl max-w-[500px]">
              {item.title}
            </strong>

            <button
              className="w-48 h-12 rounded-full bg-black text-white border-2 border-white mt-6"
              onClick={() => setActiveItem(item)}
            >
              Learn more
            </button>
          </div>

          {i % 2 !== 0 ? (
            item.images.length === 1 ? (
              <Image
                src={item.images[0]}
                alt={item.title}
                width={400}
                height={400}
                className="w-[400px] rounded-lg"
              />
            ) : item.images.length > 1 ? (
              <div className="grid grid-cols-2 gap-2">
                {item.images.map((img, i) => (
                  <Image
                    src={img}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="w-[200px] h-[200px] object-cover rounded-lg"
                  />
                ))}
              </div>
            ) : null
          ) : null}
        </div>
      ))}
    </section>
  );
};

export default Description;

const data = [
  {
    title: "24/7 data collection & comunication",
    images: ["/resources/communication.jpg"],
    description: "",
  },
  {
    title: "Real-time 3D satelite geopositioning",
    images: ["/resources/3d-satelite-positioning.png"],
    description: "",
  },
  {
    title: "Independent from other networks and entities",
    images: ["/resources/independence.jpg"],
    description: "",
  },
  {
    title: "Self-deorbiting mechanism",
    images: [
      "/resources/deorbiting.jpg",
      "/resources/deorbiting-1.jpg",
      "/resources/deorbiting.gif",
    ],
    description: "",
  },
];

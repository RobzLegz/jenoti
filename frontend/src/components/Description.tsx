import Image from "next/image";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Description = () => {
  const [activeItem, setActiveItem] = useState<{
    title: string;
    images: string[];
    description: string;
  } | null>(null);

  return (
    <section className="w-full p-4 pb-20 md:p-20 flex flex-col gap-16 md:gap-36 z-20 bg-black/80">
      {activeItem ? (
        <div className="w-full h-screen overflow-y-auto fixed top-0 left-0 bg-black p-4 pt-20 md:pt-20 md:p-20">
          <button
            className="absolute top-4 right-4"
            onClick={() => {
              setActiveItem(null);
              document.body.style.overflow = "auto";
            }}
          >
            <XMarkIcon className="text-white h-12" />
          </button>

          <div className="flex flex-col md:flex-row md:gap-8 gap-4 md:items-end mb-4">
            {activeItem.images.length === 1 ? (
              <Image
                src={activeItem.images[0]}
                alt={activeItem.title}
                width={400}
                height={400}
                className="w-[400px] rounded-lg"
              />
            ) : activeItem.images.length > 1 ? (
              <div className="grid grid-cols-2 gap-2">
                {activeItem.images.map((img, i) => (
                  <Image
                    src={img}
                    alt={activeItem.title}
                    width={400}
                    height={400}
                    className="w-[200px] h-[200px] object-cover rounded-lg"
                  />
                ))}
              </div>
            ) : null}

            <h1 className="text-white text-2xl md:text-5xl">
              {activeItem.title}
            </h1>
          </div>

          <p className="text-gray-300 md:mt-8 whitespace-pre-line">
            {activeItem.description}
          </p>
        </div>
      ) : null}

      {data.map((item, i) => (
        <div
          className={`flex w-full items-center justify-center gap-4 md:gap-8 ${
            i % 2 === 0 ? "flex-col" : "flex-col-reverse"
          } md:flex-row`}
          key={i}
        >
          {i % 2 === 0 ? (
            item.images.length === 1 ? (
              <Image
                src={item.images[0]}
                alt={item.title}
                width={400}
                height={400}
                className="w-full max-w-[500px] lg:w-[400px] rounded-lg"
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
            <strong className="text-white text-3xl md:text-4xl max-w-[500px]">
              {item.title}
            </strong>

            <button
              className="w-48 h-12 rounded-full bg-black text-white border-2 border-white mt-6"
              onClick={() => {
                setActiveItem(item);
                document.body.style.overflow = "hidden";
              }}
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
                className="w-full max-w-[500px] lg:w-[400px] rounded-lg"
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

const dummyDescription = `In the fast-paced world of modern technology, 24/7 data collection and communication have become the lifeblood of our digital existence. This unceasing process is akin to a tireless sentinel, continuously monitoring, gathering, and disseminating information around the clock.

In a world where data is the new currency, our systems tirelessly work day and night, tirelessly sifting through the vast digital landscape to acquire valuable insights and information. These tireless digital sentinels are the backbone of businesses, governments, and individuals, ensuring that the flow of data is unbroken and relentless.

Around the clock, data collectors tirelessly track and record information from various sources, including sensors, devices, and online platforms. They meticulously capture and store data, ensuring that no fragment of information escapes their watchful eyes. It is as though they never sleep, perpetually alert to the digital universe's happenings.

Simultaneously, the communication networks remain fully operational, facilitating the rapid exchange of information. In this ever-connected world, data is transmitted seamlessly and instantaneously, bridging distances and allowing individuals and organizations to be in perpetual contact. It's as if there's a digital heartbeat that never stops, pulsating with the constant flow of data.

The 24/7 data collection and communication infrastructure is not only an integral part of our digital lives but also the driving force behind innovation and progress. It fuels the algorithms that make personalized recommendations, optimizes traffic flows, and even enables the swift response to emergencies. It is the life force of the information age, perpetually active and vigilant, ensuring the world never misses a beat.
`;

const data = [
  {
    title: "24/7 data collection & comunication",
    images: ["/resources/communication.jpg"],
    description: dummyDescription,
  },
  {
    title: "Real-time 3D satelite geopositioning",
    images: ["/resources/3d-satelite-positioning.png"],
    description: dummyDescription,
  },
  {
    title: "Independent from other networks and entities",
    images: ["/resources/independence.jpg"],
    description: dummyDescription,
  },
  {
    title: "Self-deorbiting mechanism",
    images: [
      "/resources/deorbiting.jpg",
      "/resources/deorbiting-1.jpg",
      "/resources/deorbiting-1.gif",
      "/resources/deorbiting.gif",
    ],
    description: dummyDescription,
  },
];

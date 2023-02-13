import Navbar from '@/components/Navbar'
import Boxitems from '../assets/images/Box1.png'
import Image from 'next/image'
import { useState } from 'react'
import ItemList from '@/components/ItemList'
import phoneFront from "../assets/images/Front1.png"
import phoneBack from "../assets/images/Back2.png";
import Link from 'next/link'


const Index = () => {

  const listData = [
    {
      itemName: "M-Phone Note 13 Pro Max",
      itemDescription:
        "Slim and powerful with a powerful camera and a long lasting Battery",
    },
    {
      itemName: "Charger",
      itemDescription: "Free 5000mAh fast Charger ",
    },
    {
      itemName: "Cable",
      itemDescription: "Free 3m connection cable ",
    },
    {
      itemName: "EarPods",
      itemDescription: " 15 Hours Playback, 40MM Drivers with Integrated Controls",
    },
  ];

  const features = [
    {
      heading: "108MP pro-grade main camera",
      details:
        " flagship imaging system.Three cameras work together to capture magnificent landscapes",
    },
    {
      heading: "5000mAh Battery",
      details:
        "A massive 5000mAh battery ensures you don't run out of battery while you are on the go.",
    },
    {
      heading: "69W turbo charging",
      details: "Faster charging for a longer lasting experience",
    },
    {
      heading: "120Hz refresh rate",
      details:
        "120Hz display gives you a higher refresh rate which will feel smoother and faster to use.",
    },
    {
      heading: "FHD+ AMOLED display",
      details: "Crystal clear Eye care display to make sure that you do not miss any details",
    },
    {
      heading: "Snapdragon® 695",
      details: "Smoother, faster and more efficient experience",
    },
  ];


  return (
    <div className="overflow-x-hidden min-h-screen bg-mainBg ">
      <Navbar />

      <div className=" grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 place-items-center">
        <div className="ml-4 sm:ml-10">
          <p className="text-mainText text-3xl font-sans">The New</p>
          <p className="text-mainText text-4xl md:text-5xl font-semibold font-sans mb-8 ">
            M-Phone Note 13 Pro Max
          </p>
          <p className="font-sans text-mainText text-xl my-2">
            110MP Powerhouse120Hz{" "}
          </p>
          <p className="font-sans text-mainText text-xl my-2">
            FHD+ AMOLED DotDisplay{" "}
          </p>
          <p className="font-sans text-mainText text-xl my-2">
            69W turbo charging
          </p>
        </div>

        <Image
          src={phoneFront}
          className="object-fill w-56 py-5"
          alt="Product front and Back"
        />
      </div>

      {/* part 2 */}
      <div className="flex flex-col h-fit">
        <div>
          <p className="w-screen mt-20 md:mt-0 flex justify-center font-sans font-semibold text-mainText text-3xl sm:text-4xl mb-10 sm:mb-20">
            What’s in the Box
          </p>

          <div className=" md:grid place-items-center mx-10 grid-cols-2 mb-10">
            <div>
              <div className="w-full lg:w-[30rem] rounded-2xl shadow-neoShadowOut overflow-hidden transition-all">
                {listData.map((item) => {
                  return <ItemList key={item.itemName} item={item} />;
                })}
              </div>
            </div>

            <div className="w-full flex justify-center">
              <div className="flex justify-center my-8 w-10/12 shadow-neoShadowOut rounded-2xl">
                <Image
                  className=" w-10/12 sm:w-96 m-5  sm:h-96 object-cover shadow-neoShadowOut rounded-3xl"
                  src={Boxitems}
                  alt="Contents"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part 3 */}

      <div>
        <p className="font-sans text-4xl font-semibold flex justify-center mb-20 text-mainText">
          Features
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-10  ">
          {features.map((item) => {
            return (
              <div
                key={item.heading}
                className="flex justify-center items-center font-sans text-m shadow-neoShadowOut w-80  h-full font-semibold text-mainText mb-10 rounded-xl"
              >
                <div className="px-3 py-5 h-44 shadow-neoShadowInLg w-10/12 sm:w-11/12">
                  <p className="text-xl t pl-1 pb-3">{item.heading}</p>
                  <p className="px-4 text-mainText opacity-60 text-sm">
                    {item.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Link href="/Specs">
        <div className=" h-40 sm:h-52 cursor-pointer flex justify-center items-center">
          <div className="transition-all shadow-neoShadowOut rounded-3xl hover:shadow-neoShadowInMed w-10/12 sm:w-96 h-20 flex justify-center items-center">
            <p className="text-mainText text-3xl sm:text-5xl pb-2">
              See Specs {"\u276F"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Index


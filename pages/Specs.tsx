import ItemList from '@/components/ItemList'
import Navbar from '@/components/Navbar'
import React from 'react'
import Index from '.';

const Specs = () => {

  const Specifications = [
    {
      heading: "Processor",
      subheading: "Snapdragon® 695",
      details: "CPU: Octa-core CPU up to 2.2GHz $ GPU: Qualcomm® Adreno™ 619",
    },
    {
      heading: "Storage and RAM",
      subheading: "6+64/6+128/8+128GB",
      details: "LPDDR4X + UFS2.2 $ Expandable storage up to 1TB",
    },
    {
      heading: "Dimensions",
      subheading: "",
      details: "Height: 164.19mm $ Width: 76.1mm $ Thickness: 8.12mm $ Weight: 202g",
    },
    {
      heading: "Display",
      subheading: "",
      details:
        `6.67 FHD+ AMOLED DotDisplay $ Refresh rate: Up to 120Hz $ Brightness: HBM 700 nits (typ), 1200 nits peak brightness (typ) $ Contrast ratio: 4,500,000:1 $ Resolution: 2400 x 1080DCI-P3 wide color gamut $ 395 ppi $ Sunlight display $Reading mode 3.0`,
    },
    {
      heading: "Rear camera",
      subheading: "108MP wide camera",
      details:
        "f/1.9 $0.7μm, 9-in-1 binning into one large 2.1μm pixel $1/1.52” sensor size",
    },
    {
      heading: "Front camera",
      subheading: "16MP front camera",
      details:
        "f/2.4 Front camera $ video recording 1080p 1920x1080 | 30fps720p 1280x720 | 30fps",
    },
    {
      heading: "Battery & Charging",
      subheading: "",
      details: "5000mAh (typ)67W turbo charging $ 67W in-box chargerUSB-C",
    },
    {
      heading: "Security",
      subheading: "",
      details: "Side fingerprint sensor $ AI Face Unlock",
    },
    {
      heading: "NFC",
      subheading: "",
      details:
        "Availability varies between market $ *Functions may vary in some markets.",
    },
    {
      heading: "Network & Connectivity",
      subheading: "",
      details:
        "SIM 1 + Hybrid (SIM or MicroSD) $2G: GSM: 850 900 1800 1900MHz $3G: WCDMA:1/2/4/5/8/19 $4G: LTE FDD:1/2/3/4/5/7/8/12/13/17/18/19/20/26/28/32/66 $4G: LTE TDD:38/40/41 $5G: n1/3/5/7/8/20/28/38/40/41/66/77/78 $Bluetooth 5.1 $Wi-Fi Protocol: 802.11a/b/g/n/ac",
    },
    {
      heading: "Navigation & Positioning",
      subheading: "",
      details: "GPS L1 | Glonass G1 | BDS B1 | Galileo E1",
    },
    {
      heading: "Audio",
      subheading: "",
      details: "Dual speakers $3.5mm headphone jack $ Hi-Res Audio certification",
    },
    {
      heading: "Sensors",
      subheading: "",
      details:
        "Proximity sensor | Ambient light sensor | Accelerometer | Electronic compass | IR blaster ｜Gyroscope",
    },
    {
      heading: "Operating System",
      subheading: "",
      details: "Android SnowCone",
    },
    {
      heading: "Package Contents",
      subheading: "",
      details:
        "M-Phone Note 13 Pro Max/ Adapter / USB Type-C Cable / SIM Eject Tool / Protective Case /Quick Start Guide / Warranty Card",
    },
  ];


  return (
    <div className=" min-h-screen bg-mainBg w-full">
      <Navbar />

      <div className='pb-20 p-auto sm:pl-10 md:pl-20'>
        {Specifications.map((item) => {

          const detailArray = item.details.split('$')
          return (
            <div
              className=" sm:grid grid-cols-3 items-center mt-10 px-5 "
              key={item.heading}
            >
              <div>
                <p className="text-xl sm:text-2xl text-mainText font-semibold">
                  {item.heading}
                </p>
              </div>
              <div className="">
                <p className=" sm:text-2xl text-mainText font-semibold pb-2">
                  {item.subheading}
                </p>
                <div>
                  {detailArray.map((detail) => {
                    return <div key={detail}>{detail}</div>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Specs
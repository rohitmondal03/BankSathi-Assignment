import Image, { type StaticImageData } from "next/image";

import multipleProdImage from "../../public/assets/multipleProdImage.png"
import transparencyImg from "../../public/assets/safety&transparencyImg.png"
import engagementImg from "../../public/assets/support&engagementImg.png"
import trustBrandImg from "../../public/assets/trustBrandImg.png"
import riskManagementImg from "../../public/assets/riskManagementImg.png"
import excellentResultImg from "../../public/assets/excellentResultImg.png"



type TFeatures = {
  img: StaticImageData;
  label: string;
  feature: string;
}


// List to map the features in the page with their respective images and labels
const features: TFeatures[] = [
  {
    img: multipleProdImage,
    label: "Multiple Products",
    feature: "Variety of products, one platform – your ultimate destination for diverse choices & convenience.",
  },
  {
    img: transparencyImg,
    label: "Safety & Transparency",
    feature: "Transparent process We are Committed to Providing a Safe, secure and clear approach"
  },
  {
    img: engagementImg,
    label: "Support & Engagement",
    feature: "Consistent insights: Stay informed on product performance, key metrics, & conversion updates.",
  },
  {
    img: trustBrandImg,
    label: "Trusted Brand Name",
    feature: "India's leading financial distributor, entrusted by leading institutions for exceptional services and expertise.",
  },
  {
    img: riskManagementImg,
    label: "Risk Management",
    feature: "Empowering Partners with Cutting-edge Risk Management Solutions for Financial Success.",
  },
  {
    img: excellentResultImg,
    label: "Excellent results",
    feature: "Enhanced leads, elevated conversions – achieving more with our optimized strategies."
  }
]


export default function AdvantagesSection() {
  return (
    <section className="space-y-12 pb-10 text-center">
      <div className="text-4xl py-10">
        <h1>
          Partner with us for:
          <span className="text-green-400">&nbsp;Mutual Growth,</span>
        </h1>

        <h1>
          Extended Reach & Collaborative Success
        </h1>
      </div>


      <div className="flex items-center justify-center gap-24 flex-wrap flex-1 py-10">
        {features.map((feat, idx) => (
          <div
            key={feat.label}
            className={`bg-white p-4 rounded-2xl w-[25vw] h-[45vh] flex flex-col items-center justify-center gap-y-6 ${idx < 3 ? "shadow-[0_0_150px] shadow-purple-300" : null}`}
          >
            <Image
              src={feat.img}
              alt="img"
              height={100}
              width={100}
              loading="lazy"
              className="mx-auto"
            />

            <div className="space-y-2">
              <h1 className="text-xl">
                {feat.label}
              </h1>

              <p>
                {feat.feature}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

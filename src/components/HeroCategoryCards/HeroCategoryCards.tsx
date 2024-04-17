import Image from "next/image"
import { RxCaretRight } from "react-icons/rx"
import cardImage from "../../assets/Images/hero/card/01.jpg"
import cardImage2 from "../../assets/Images/hero/card/02.jpg"
import cardImage3 from "../../assets/Images/hero/card/03.jpg"
import cardImage4 from "../../assets/Images/hero/card/04.jpg"

const HeroCategoryCards = () => {
  const cardsData = [
    {
      category: "Service",
      backgroundColor: "",
      image: cardImage,
      title: "Experience superior service that serves what your Enterprise needs",
      description: "A global retailer and Accenture co-created a multiyear inclusion and diversity strategy to facilitate a greater sense of belonging for their people."
    },
    {
      category: "Connectivity",
      backgroundColor: "",
      image: cardImage2,
      title: "Experience superior service that serves what your Enterprise needs",
      description: "A global retailer and Accenture co-created a multiyear inclusion and diversity strategy to facilitate a greater sense of belonging for their people."
    },
    {
      category: "ICT Solutions",
      backgroundColor: "#6422F1",
      image: "",
      title: "Experience superior service that serves what your Enterprise needs",
      description: "A global retailer and Accenture co-created a multiyear inclusion and diversity strategy to facilitate a greater sense of belonging for their people."
    },
    {
      category: "Cloud Solutions",
      backgroundColor: "",
      image: cardImage3,
      title: "Experience superior service that serves what your Enterprise needs",
      description: "A global retailer and Accenture co-created a multiyear inclusion and diversity strategy to facilitate a greater sense of belonging for their people."
    },
    {
      category: "Selfcare Portal",
      backgroundColor: "#006204",
      image: "",
      title: "Experience superior service that serves what your Enterprise needs",
      description: "A global retailer and Accenture co-created a multiyear inclusion and diversity strategy to facilitate a greater sense of belonging for their people."
    }, {
      category: "Cloud Solutions",
      backgroundColor: "",
      image: cardImage3,
      title: "Experience superior service that serves what your Enterprise needs",
      description: "A global retailer and Accenture co-created a multiyear inclusion and diversity strategy to facilitate a greater sense of belonging for their people."
    }, {
      category: "IoT & Smart Solution",
      backgroundColor: "",
      image: cardImage4,
      title: "Experience superior service that serves what your Enterprise needs",
      description: "A global retailer and Accenture co-created a multiyear inclusion and diversity strategy to facilitate a greater sense of belonging for their people."
    }, {
      category: "SAdTech & Data Analytics",
      backgroundColor: "#631200",
      image: "",
      title: "Experience superior service that serves what your Enterprise needs",
      description: "A global retailer and Accenture co-created a multiyear inclusion and diversity strategy to facilitate a greater sense of belonging for their people."
    }

  ]


  return (
    <div className="grid grid-cols-4 gap-6 container mx-auto my-10">

      {
        cardsData.map((cardItem, index) => (
          <div key={index}>
            <div className={`w-full h-full overflow-hidden group relative`} style={{ backgroundColor: cardItem.backgroundColor }}>
              <div className="absolute top-0 left-0 w-full h-full ">

                {cardItem?.image && <Image
                  fill
                  src={cardItem?.image}
                  alt=""
                  className="object-cover w-full h-full group-hover:scale-125 group-hover:blur-2xl transition-all ease-in-out"
                />}

              </div>


              <div className="w-full h-full py-10 px-5">
                <h1 className="text-[18px] font-normal text-white mb-6">
                  {cardItem?.category}
                </h1>
                <h1 className="text-[24px] font-medium text-white relative z-10">
                  Experience superior service that serves what your Enterprise
                  needs
                </h1>

                <div className="mt-5 translate-x-[120%] group-hover:translate-x-[0px] duration-700">
                  <h1 className="text-[16px] font-medium text-white">
                    A global retailer and Accenture co-created a multiyear
                    inclusion and diversity strategy to facilitate a greater sense
                    of belonging for their people.
                  </h1>
                </div>

                <div className="relative opacity-0 group-hover:opacity-100 transition-all ease-in-out z-10">
                  <a className="text-lg font-medium text-white flex items-center justify-end mt-10 gap-2 ">
                    Find Out More <RxCaretRight className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))
      }




    </div>
  )
}

export default HeroCategoryCards

{/*  */ }


{/*  */ }


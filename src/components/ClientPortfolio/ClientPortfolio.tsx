
import Image from "next/image";
import Marquee from "react-fast-marquee";
import clientLogo1 from "../../assets/Images/portfolios/01.svg"
import clientLogo2 from "../../assets/Images/portfolios/02.svg"
import clientLogo3 from "../../assets/Images/portfolios/05.svg"
import FindOutMore from "../Shared/FindOutMore";
import SectionTitle from "../Shared/SectionTitle";


const ClientPortfolio = () => {
    const clientLogos = [
        {
            name: "logo",
            logo: clientLogo1
        },
        {
            name: "Logo",
            logo: clientLogo2
        },
        {
            name: "Logo",
            logo: clientLogo3
        },
        {
            name: "logo",
            logo: clientLogo1
        },
        {
            name: "Logo",
            logo: clientLogo2
        },
        {
            name: "Logo",
            logo: clientLogo3
        },
    ]
    return (
        <div className="container mx-auto my-12 text-white ">
            <div>
                <SectionTitle title="Discover our client portfolio" />
            </div>
            <div><FindOutMore /></div>
            <Marquee>
                {
                    clientLogos.map((data, index) => <div key={index}>
                        <div style={{ marginRight: "20px" }}>
                            <Image src={data.logo} alt="" width={214} height={64} />
                        </div>

                    </div>
                    )
                }

            </Marquee>

        </div>
    )
}

export default ClientPortfolio
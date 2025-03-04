import { useState } from "react";
import ServicesCard from "../Components/ServicesCard";
const ServicesPage = () => {
    const [serviceCardProps, setServiceCardProps] =
        useState([
            {
                "serviceHeading": "Mental Health Diagnose",
                "serviceDescription": "The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention",
                "imgUrl": "/assets/image 27.svg"
            },
            {
                "serviceHeading": "Eye Diseasses Diagnose",
                "serviceDescription": "The service provides immediate  medical care to patients with acute illnesses or injuries that require immediate attention",
                "imgUrl": "/assets/Screen Shot 2023-09-14 at 14.01.svg"
            },
            {
                "serviceHeading": "Vaccination Diagnose",
                "serviceDescription": "The service provides immediate  medical care to patients with acute illnesses or injuries that require immediate attention",
                "imgUrl": "/assets/Screen Shot 2023-09-14 at 14.01(1).svg"
            },
            {
                "serviceHeading": "Cardiology Diagnose",
                "serviceDescription": "The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention",
                "imgUrl": "/assets/Screen Shot 2023-09-14 at 14.02.svg"
            }
        ])
    return (
        <section>
            <div className="my-[100px]" >
            <p className="flex justify-start text-[#09A4AD] font-bold text-[16px]">DIAGNOSES & TREATMENTS</p>
            <div className="flex justify-between w-[1120px]">
                <h2 className="text-[46px] font-bold w-[540px] text-start"> More than 40 specialty and health care diagnose</h2>
                <button className="text-[20px] font-bold text-[#ffffff] bg-[#00A0AA] w-[187px] h-[55px] rounded-lg "> See All diagnoses</button>
            </div>
            <div className="grid grid-cols-2">
                {
                    serviceCardProps.map((detail, index) => {
                        return (
                            <ServicesCard
                                serviceHeading={detail.serviceHeading}
                                serviceDescription={detail.serviceDescription}
                                imgUrl={detail.imgUrl}
                            />
                        )
                    })
                }
            </div>
        </div>
        </section>
    );
}

export default ServicesPage;
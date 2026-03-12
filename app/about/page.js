import axios from "axios";
import PageBanner from "@/components/PageBanner";
export default async function About() {
  const response = await axios.get(
    "https://appy.trycatchtech.com/v3/maganlalchikki/about"
  );

//   const data = response.data;
  console.log(response.data)
  const data = response.data[0]
 console.log(data.title)

  return (
    <>

         <PageBanner
        title="About Us"
        image={data.image}
      />

 
   <div className="w-full mt-10">
      <div className="w-full flex flex-col md:flex-row gap-8">
        
        {/* Image */}
        <div className="md:w-1/2 w-full ">
          <img
            src={data.image}
            alt="About"
            className="w-full md:w-auto h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 w-full  flex flex-col justify-center text-justify mt-5">
          <h1 className="text-2xl mb-4 text-[#666]">{data.title}</h1>
          <p className="text-[13px] leading-[23px] text-[#666] mb-4">{data.description}</p>
              <h1 className="text-2xl  mb-4 text-[#666]">OUR TEAM</h1>
               <p className="text-[13px] leading-[23px] text-[#666] mb-4">{data.our_team}</p>
        </div>
      </div>
    </div>
    <div> 
      <p className="text-[#666] font-bold">History</p> 
      <p  className="text-[13px] leading-[23px] text-[#666] mb-4">{data.history}
        </p>       
    </div>

    <div>
      <h2 className=" text-[#666] font-bold uppercase">Client satisfaction</h2>
       <p  className="text-[13px] leading-[23px] text-[#666] mb-4">{data.client_satisfaction}
        </p> 
    </div>
    <div>
      <h1 className=" text-[#666]" >OUR USP</h1>
      <p className=" text-[13px] leading-[23px] text-[#666] mb-4">We are one of the fastest-growing organizations dealing in manufacturing, exporting and supplying Chikki, Dry Fruit Rolls, Fudges, Jellies, and Savouries(Namkeens) Some factors, which set us apart are as follows:
</p>
<ul className="list-disc pl-5 text-[13px] leading-[23px] text-[#666]">
  <li>
    Excellent state-of-the-art infrastructure
  </li>
  <li>
    Cost-effective and quality products within ‘On-Time’ delivery
  </li>
  <li>
    Customer-centric approach
  </li>
  <li>
    Flavorsome products
  </li>
  <li>
    Hygienically processed
  </li>
  <li>
    On-time product delivery
  </li>
  <li>
    Competitive prices
  </li>
  <li>
    Ethical business practices
  </li>
  <li>
    Strong distribution network
  </li>
</ul>
    </div>
     </>
  );
}
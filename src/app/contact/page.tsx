import Footer from "../components/footer";
import Herosection from "../components/hero";
import Image from "next/image";
export default function Contact() {
  return (
    <div className="">
      <div>
        <Herosection current_page="Contact" />
      </div>

      <div className="font-semibold text-[26px] md:text-[36px] leading-8 mt-5 md:mt-10 mx-5 text-center text-black">
        Get In Touch With Us
      </div>
      <div className="mt-2 font-normal text-[15px] px-1 leading-5 md:text-[18px] md:px-6 md:leading-6 text-center">
        For More Information, Please Feel Free To Drop Us An Email. We Are
        Always Be Here To Help You Out. Do Not Hesitate!
      </div>

      <div className="mt-10 md:flex md:m-5 md:justify-around">
        <div className="form flex flex-col md:m-5 md:justify-between m-10">
          <div className="flex flex-col">
            <p>Your name</p>
            <input
              type="text"
              placeholder="Abc"
              className="mt-2 p-2 border-[1px] rounded-md border-[#9f9f9f]"
            />
          </div>

          <div className="flex flex-col mt-6">
            <p>Email address</p>
            <input
              type="text"
              placeholder="abc@def.com"
              className="mt-2 p-2 border-[1px] rounded-md border-[#9f9f9f]"
            />
          </div>

          <div className="flex flex-col mt-6">
            <p>Subject</p>
            <input
              type="text"
              placeholder="This is an optional"
              className="mt-2 p-2 border-[1px] rounded-md border-[#9f9f9f]"
            />
          </div>

          <div className="flex flex-col mt-6">
            <p>Message</p>
            <input
              type="text"
              placeholder="Hi! i’d like to ask about"
              className="mt-2 p-2 border-[1px] rounded-md border-[#9f9f9f]"
            />
          </div>

          <div className="mt-8 ">
            <button className="bg-black text-white rounded-md px-14 py-3 text-[16px] leading-[24px] font-normal">
              Submit
            </button>
          </div>
        </div>

        <div className="address sec flex flex-col mt-14 md:mt-24 m-10 gap-10 md:gap-10">
          <div className="flex ">
            <div className="h-5 w-4 relative">
              <Image
                src="/location.png"
                alt="icon"
                fill
                className="object-cover"
              />
            </div>
            <div className="ml-2">
              <p className="text-[16px] font-bold">Address</p>
              <p className="text-[14px] font-medium leading-5">
                Dastagir, F.B area block-15, Karachi
              </p>
            </div>
          </div>

          <div className="flex ">
            <div className="h-5 w-4 relative">
              <Image
                src="/phone.png"
                alt="icon"
                fill
                className="object-cover"
              />
            </div>
            <div className="ml-2">
              <p className="text-[16px] font-bold">Phone</p>
              <p className="text-[14px] font-medium leading-5">
                Mobile: +92 3158147021
              </p>
            </div>
          </div>

          <div className="flex ">
            <div className="h-4 w-4 relative">
              <Image
                src="/clock.png"
                alt="icon"
                fill
                className="object-cover"
              />
            </div>
            <div className="ml-2">
              <p className="text-[16px] font-bold">Working Time</p>
              <p className="text-[14px] font-medium leading-5">
                Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

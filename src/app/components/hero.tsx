import Image from "next/image";
import Link from "next/link";
export default function Herosection({ current_page = "" }) {
  return (
    <div className="h-96 w-full relative flex justify-center items-center text-black">
      <Image
        src="/blog-pic2.jpg"
        alt="image"
        fill
        className="object-cover px-4 pt-24 blur-[2px]"
      />

      <div className="flex flex-col ">
        <div className="text-[26px] text-center md:text-[48px] font-medium leading-[72px] relative">
          {current_page}
        </div>
        <div className="flex flex-row justify-between items-center relative  ">
          <Link href={"/"}>
            <div className="text-[16px] font-medium leading-[24px]">Home</div>
          </Link>
          <Image src="/arrow.png" alt="vector" height={20} width={20} />
          <Link href={`/${current_page.toLowerCase()}`}>
            <div className="text-[16px] font-light leading-[24px]">
              {current_page}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

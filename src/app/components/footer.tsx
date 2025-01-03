import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <div className=" pt-10 md:pt-20 bg-white text-black">
      <div className="border-t-2 flex flex-col justify-between items-center">
        <div className="mt-5 md:mt-12 flex ">
          <Link href={"https://www.facebook.com/share/1GwYPjNV1F/"}>
            <Image
              src={"/fb.svg"}
              alt="image"
              height={24}
              width={24}
              className="mr-8"
            />
          </Link>
          <Link
            href={
              "https://www.instagram.com/ghulamahmed002/profilecard/?igsh=MXhhd3pkbHpmNWx1dw=="
            }
          >
            <Image
              src={"/insta.svg"}
              alt="image"
              height={24}
              width={24}
              className="mr-8"
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/ghulam-ahmed-98a758246/"}>
            <Image
              src={"/Linkedin.svg"}
              alt="image"
              height={24}
              width={24}
              className="mr-8"
            />
          </Link>
          <Link href={"/"}>
            <Image src={"/twiter.svg"} alt="image" height={24} width={24} />
          </Link>
        </div>
        <div className="text-center mt-4 mb-2 md:mt-10">
          Copyright &copy; 2024 Blog Website. All rights reverved
        </div>
      </div>
    </div>
  );
}

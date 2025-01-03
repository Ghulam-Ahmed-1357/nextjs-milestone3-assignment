import Image from "next/image";
import Link from "next/link";
export default function SidePost(props: {
  src: string;
  title: string;
  description: string;
  id: string;
}) {
  return (
    <div className="mt-10 bg-zinc-200 text-black">
      <Link href={`/post/${props.id}`}><div className="flex gap-2 ">
        <div className="rounded-full h-32 w-1/3 relative">
          <Image src={props.src} alt="image" fill className="object-cover " />
        </div>
        <div className="w-2/3 flex flex-col">
          <div className="font-bold text-[20px] leading-4 md:text-[26px] md:leading-6 pt-3 truncate">
            {props.title}
          </div>
          <div className="h-10 font-normal leading-4 text-[12px] md:text-[16px] md:leading-5 pt-3 lg:pt-1 flex-wrap ">
            <span className="block sm:hidden">
              {props.description.slice(0, 117)}
            </span>
            <span className="hidden sm:block md:hidden">
              {props.description.slice(0, 100)}
            </span>
            <span className="hidden md:block lg:hidden">
              {props.description.slice(0, 80)}
            </span>
            <span className="hidden lg:block">
              {props.description.slice(0, 60)}
            </span>
            <div className="mt-2 md:mt-0">
              <Link href={`/post/${props.id}`}>
                <span className=" text-blue-500">Readmore</span>
              </Link>
            </div>
          </div>
        </div>
      </div></Link>
    </div>
  );
}

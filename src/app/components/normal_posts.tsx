import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

export default function NormalPost(props: {
  id: string;
  src: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white text-black">
      <Link href={`/post/${props.id}`}>
        <div className=" md:h-[550px]  mt-10 bg-zinc-200">
          <div className="md:h-96 w-full relative">
            <Image src={props.src} alt="image" fill className="object-fill" />
          </div>

          <div className="font-bold text-[20px] leading-2 md:text-[26px] md:leading-7 pt-3 pl-1 truncate">
            {props.title}
          </div>
          <div className="text-[12px] pt-1 leading-1 md:text-[14px] font-normal md:leading-5 md:pt-3 break-words pl-1">
            <span className="block sm:hidden">
              {props.description.slice(0, 65)}
            </span>
            <span className="hidden sm:block lg:hidden">
              {props.description.slice(0, 110)}
            </span>
            <span className="hidden lg:block">
              {props.description.slice(0, 130)}
            </span>
          </div>
          <div className="pt-11 md:pt-1 mt-2 pl-1">
            <Link
              href={`/post/${props.id}`}
              className="text-blue-500 hover:underline text-[12px] md:text-[16px]"
            >
              Read More
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}
NormalPost.PropTypes = {
  id: PropTypes.string.isRequired,
};

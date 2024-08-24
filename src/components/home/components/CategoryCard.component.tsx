import Link from "next/link";

export const CategoryCard = ({
  title,
  image,
  url,
}: {
  title: string;
  image: React.ReactNode;
  url: string;
}) => {
  return (
    <Link href={url} className="text-center border border-gray-300 p-10 flex flex-col gap-4 items-center justify-center w-60 hover:bg-red  hover:text-white cursor-pointer">
      <div className="  ">{image}</div>
      <div className=" text-base ">{title}</div>
    </Link>
  );
};

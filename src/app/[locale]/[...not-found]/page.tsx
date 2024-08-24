import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div className="flex  gap-2 mt-20 ml-[8.438rem] mb-[8.75rem]">
        <p className="text-[#808080]">Home /</p> <p>404 Error</p>
      </div>
      <p className="text-center font-bold text-9xl drop-shadow-2xl">
        {" "}
        404 Not Found
      </p>
      <p className="text-center mt-10">
        Your visited page not found. You may go home page.
      </p>
      <Link
        href={"/"}
        className="bg-red px-8 py-5 rounded-lg mx-auto mt-20 flex w-fit text-white"
      >
        Back to home page
      </Link>
    </div>
  );
}

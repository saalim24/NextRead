import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex-shrink-0 text-center text-md p-4 bg-black">
      Created by{" "}
      <Link
        className={
          "text-blue-500 hover:text-red-300 transition duration-300 ease-in-out"
        }
        href={"https://github.com/saalim24/NextRead"}
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        Saalim, Shoaib and Sabiya
      </Link>
    </div>
  );
}

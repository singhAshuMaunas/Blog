import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishDate: string;
  id:number
}

export const BlogCard = ({
    id,
  authorName,
  title,
  content,
  publishDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="p-4 border-b border-slate-2 pb-4 w-screen max-w-screen-md cursor-pointer">
      <div className=" flex">
        <AvatarCard name={authorName} />

        <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
          {authorName}
        </div>
        <div className="flex justify-center flex-col pl-2">
          <Circle />
        </div>
        <div className="font-thin pl-2 text-slate-600 text-sm flex justify-center flex-col">
          {publishDate}
        </div>
      </div>
      <div className="text-xl font-semibold">{title}</div>
      <div className="text-md font-thin">{content.slice(0, 100) + "...."}</div>
      <div className="text-slate-400 font-thin pt-2">
        {`${Math.ceil(content.length / 1000)} minute(s)read`}
      </div>
    </div>
    </Link>
  );
};

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-800 "></div>;
}

export function AvatarCard({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center 
         overflow-hidden bg-gray-300 rounded-full dark:bg-gray-900 ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}
    >
      <span className={` ${size ==="small" ? "text-xs" : "text-md"}font-sm text-gray-600 dark:text-gray-300`}>
        {name[0]}
      </span>
    </div>
  );
}

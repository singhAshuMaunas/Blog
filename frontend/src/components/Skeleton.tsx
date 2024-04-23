import { Circle } from "./BlogCard";

export const BlogSkeleton = () => {
  return (
    <div>
      <div role="status" className="animate-pulse">
        <div className="p-4 border-b border-slate-2 pb-4 w-screen max-w-screen-md cursor-pointer">
          <div className=" flex">
            <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

            <div className="flex justify-center flex-col pl-2">
              <Circle />
            </div>
            <div className="font-thin pl-2 text-slate-600 text-sm flex justify-center flex-col">
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
          </div>
          <div className="text-xl pt-2 font-semibold">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
          <div className="text-md font-thin">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
          <div className="text-slate-400 font-thin pt-2">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
        </div>
        <div className="h-4 w-4 bg-gray-200 rounded-full  w-48 mb-4"></div>

        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

import React from "react";

function Steps() {
  return (
    <div className="mb-20 flex items-center justify-between text-base text-neutral-400 dark:text-gray-400">
      <div className="flex items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-300 text-xl text-neutral-900">
          1
        </div>
      </div>
      <div className="h-1 w-56 bg-stone-300"></div>
      <div className="flex items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-300 text-xl text-neutral-900">
          2
        </div>
      </div>
      <div className="h-1 w-56 bg-stone-300 dark:bg-blue-600"></div>
      <div className="flex items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-300 text-xl text-neutral-900">
          3
        </div>
      </div>
    </div>
  );
}

export default Steps;

import Link from "next/link";
import React from "react";

function Steps() {
  return (
    <div className="col-start-3 col-end-7 mx-auto mb-20 flex items-center justify-between gap-10 pt-10 text-base text-neutral-400 dark:text-gray-400">
      <Link href="/">
        <div className="flex items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 bg-neutral-300 text-xl text-neutral-900">
            1
          </div>
        </div>
      </Link>
      <div className="h-[2px] w-28 bg-neutral-500"></div>
      <Link href="/step-2">
        <div className="flex items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 bg-neutral-300 text-xl text-neutral-900">
            2
          </div>
        </div>
      </Link>
      <div className="h-[2px] w-28 bg-neutral-500"></div>
      <Link href="/step-3">
        <div className="flex items-center">
          <div className="text-x border-neutral-900l flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 bg-neutral-300 text-neutral-900">
            3
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Steps;

"use client";

import { GlobalState, useStateMachine } from "little-state-machine";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function Steps() {
  const path = usePathname();
  const [state, setState] = useState<GlobalState>();
  const { getState } = useStateMachine();

  useEffect(() => {
    setState(getState());
  }, []);

  return (
    <div className="col-start-3 col-end-7 mx-auto mb-20 flex items-center justify-between gap-10 pt-10 text-base text-neutral-400 dark:text-gray-400">
      <Link href={state?.firstName && state.lastName && state.email ? "/" : ""}>
        <div className="flex items-center">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 bg-neutral-300 text-xl text-neutral-900 ${path === "/" && "border-0 bg-neutral-500 text-neutral-300"}`}
          >
            1
          </div>
        </div>
      </Link>
      <div className="h-[2px] w-28 bg-neutral-500"></div>
      <Link href={state?.town && state.address && state.phone ? "/step-2" : ""}>
        <div className="flex items-center">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 bg-neutral-300 text-xl text-neutral-900 ${path === "/step-2" && "border-0 bg-neutral-500 text-neutral-300"}`}
          >
            2
          </div>
        </div>
      </Link>
      <div className="h-[2px] w-28 bg-neutral-500"></div>
      <Link
        href={state?.billing && state.company && state.crn ? "/step-3" : ""}
      >
        <div className="flex items-center">
          <div
            className={`text-x border-neutral-900l flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 bg-neutral-300 text-neutral-900 ${path === "/step-3" && "border-0 bg-neutral-500 text-neutral-300"}`}
          >
            3
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Steps;

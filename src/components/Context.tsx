"use client";

import { StateMachineProvider, createStore } from "little-state-machine";
import { DevTool } from "little-state-machine-devtools";
import React from "react";

createStore({
  firstName: "",
  lastName: "",
  email: "",
  town: "",
  address: "",
  phone: "",
  billing: "",
  company: "",
  crn: "",
});

function Context({ children }: { children: React.ReactNode }) {
  return (
    <StateMachineProvider>
      <DevTool />
      {children}
    </StateMachineProvider>
  );
}

export default Context;

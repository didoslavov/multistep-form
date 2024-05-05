import { GlobalState } from "little-state-machine/dist/types";

export function updateStep1Data(
  state: GlobalState,
  payload: {
    firstName: string;
    lastName: string;
    email: string;
  },
): GlobalState {
  return {
    ...state,
    ...payload,
  };
}

export function updateStep2Data(
  state: GlobalState,
  payload: {
    town: string;
    address: string;
    phone: string;
  },
): GlobalState {
  return {
    ...state,
    ...payload,
  };
}

export function updateStep3Data(
  state: GlobalState,
  payload: {
    billing: string;
    company: string;
    crn: string;
  },
): GlobalState {
  return {
    ...state,
    ...payload,
  };
}

export function resetState(
  state: GlobalState,
  payload: {
    firstName: string;
    lastName: string;
    email: string;
    town: string;
    address: string;
    phone: string;
    billing: string;
    company: string;
    crn: string;
  },
): GlobalState {
  return {
    firstName: "",
    lastName: "",
    email: "",
    town: "",
    address: "",
    phone: "",
    billing: "",
    company: "",
    crn: "",
  };
}

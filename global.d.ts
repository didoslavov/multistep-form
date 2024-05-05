import "little-state-machine";

declare module "little-state-machine" {
  interface GlobalState {
    firstName: string;
    lastName: string;
    email: string;
    town: string;
    address: string;
    phone: string;
    billing: string;
    company: string;
    crn: string;
  }
}

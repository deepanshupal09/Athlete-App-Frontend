import {  Doc, TeleMed, Med } from "./icons";
import { AI_icon } from "../analytics/_components/icons";

export async function getCardsData() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  
    return {
      last: {
        value: "2nd position at Reliance Trials",
      },
      highest: {
        value: "Qualified for national team",
      },
      target: {
        value: "TOPS",
      },
    };
  }
  
import {  Doc, TeleMed, Med } from "./icons";
import { AI_icon } from "../analytics/_components/icons";

export async function getCardsData() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  
    return {
      income: {
        value: "Rupees 50,000",
      },
      expenses: {
        value: "Rupees 30,000",
      },
      savings: {
        value: "Rupees 5000",
      },
    };
  }
  
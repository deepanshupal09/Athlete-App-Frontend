import {  Doc, TeleMed, Med } from "./icons";
import { AI_icon } from "../analytics/_components/icons";

export async function getDoctorAnalyticsData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      name: "Current Doctor Contact",
      icon: Doc,
      isAvailable: true,
      description: "Get in touch with your assigned doctor instantly.",
    },
    {
      name: "Get Tele Medication",
      icon: TeleMed,
      isAvailable: false,
      description: "Get Connected with your doctor online.",
    },
    {
      name: "Current Medication",
      icon: Med,
      isAvailable: true,
      description: "Your Current Medication Plan.",
    },
    {
      name: "AI Recommended Plans",
      icon: AI_icon,
      isAvailable: true,
      description: "Personalized treatment plans based on AI insights.",
    },
  ];
}


export async function getCardsData() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  
    return {
      lastInjury: {
        value: "Ankle Sprain (Since 12th March)",
      },
      recoveryStatus: {
        value: "Recovering (Est. 2 weeks)",
      },
      rehabProgress: {
        value: "Physical therapy in progress",
      },
    };
  }
  
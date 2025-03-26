import { Rec, Vid, Motion, Train, Trends} from "./_components/icons";
export async function getCardsData() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  
    return {
      wearableDevice: {
        value: "Fitbit Sense 2",
      },
      aiInsights: {
        value: "You ran 5 miles today",
      },
      motionAnalysis: {
        value: "Running",
      },
    };
  }
  export async function getAnalyticsData() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    return [
      {
        name: "Video Analytics",
        icon: Vid,
        isAvailable: true,
        description: "Analyzing performance footage in real-time.",
      },
      {
        name: "Motion Detector",
        icon: Motion,
        isAvailable: false,
        description: "Detecting movement patterns and anomalies.",
      },
      {
        name: "Training Loads",
        icon: Train,
        isAvailable: true,
        description: "Monitoring athlete workload over time.",
      },
      {
        name: "Trends",
        icon: Trends,
        isAvailable: true,
        description: "Insights into performance improvements and drops.",
      },
      {
        name: "Recommendation",
        icon: Rec,
        isAvailable: true,
        description: "AI-driven performance and recovery suggestions.",
      },
    ];
  }
  
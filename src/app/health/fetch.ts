export async function getHealthData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    heartRate: {
      value: "72 bpm",
    },
    sleepHours: {
      value: "7.5 hours",
    },
    height: {
      value: "175 cm",
    },
    weight: {
      value: "70 kg",
    },
  };
}

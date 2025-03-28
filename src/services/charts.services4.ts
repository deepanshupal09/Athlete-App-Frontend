export async function getRunningTrainingData(timeFrame?: string) {
    return {
      totalSteps: [
        { x: "Monday", y: 8500 },
        { x: "Tuesday", y: 9200 },
        { x: "Wednesday", y: 7800 },
        { x: "Thursday", y: 10400 },
        { x: "Friday", y: 11000 },
        { x: "Saturday", y: 9500 },
        { x: "Sunday", y: 7000 },
      ],
      distanceCovered: [
        { x: "Monday", y: 6.5 },
        { x: "Tuesday", y: 7.2 },
        { x: "Wednesday", y: 5.8 },
        { x: "Thursday", y: 8.0 },
        { x: "Friday", y: 8.5 },
        { x: "Saturday", y: 7.0 },
        { x: "Sunday", y: 5.2 },
      ],
      maxSpeed: [
        { x: "Monday", y: 18.2 },
        { x: "Tuesday", y: 19.5 },
        { x: "Wednesday", y: 17.8 },
        { x: "Thursday", y: 20.0 },
        { x: "Friday", y: 21.2 },
        { x: "Saturday", y: 19.0 },
        { x: "Sunday", y: 16.5 },
      ],
    };
  }
  export async function getMenstrualCycleData(
    timeFrame?: "monthly" | "yearly" | (string & {})
  ) {
    await new Promise((resolve) => setTimeout(resolve, 500));
  
    const data = [
      {
        name: "Iron & Hydration (Menstrual Phase)",
        percentage: 0.25,
        amount: 250,
      },
      {
        name: "Energy & Estrogen Boost (Follicular Phase)",
        percentage: 0.30,
        amount: 300,
      },
      {
        name: "Anti-inflammatory Foods (Ovulatory Phase)",
        percentage: 0.20,
        amount: 200, 
      },
      {
        name: "Magnesium & Mood Regulation (Luteal Phase)",
        percentage: 0.25,
        amount: 250,
      },
    ];
  
    if (timeFrame === "yearly") {
      data[0].amount = 3000;
      data[1].amount = 3600;
      data[2].amount = 2400;
      data[3].amount = 3000;
    }
  
    return data;
  }
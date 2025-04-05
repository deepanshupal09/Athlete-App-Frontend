export async function getDevicesUsedData(
  timeFrame?: "monthly" | "yearly" | (string & {}),
) {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = [
    {
      name: "Carbohydrates",
      percentage: 0.55, 
      amount: 1375,
    },
    {
      name: "Proteins",
      percentage: 0.15, 
      amount: 375,
    },
    {
      name: "Fats",
      percentage: 0.2, 
      amount: 500,
    },
    {
      name: "Vitamins & Minerals",
      percentage: 0.05, 
      amount: 125,
    },
    {
      name: "Fibers",
      percentage: 0.03, 
      amount: 75,
    },
    {
      name: "Water",
      percentage: 0.02, 
      amount: 50,
    },
  ];  

  if (timeFrame === "yearly") {
    data[0].amount = 19500;
    data[1].amount = 3000;
    data[2].amount = 6000;
    data[3].amount = 1500;
  }

  return data;
}

export async function getHeartRateData(
  timeFrame?: "monthly" | "yearly" | (string & {}),
) {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (timeFrame === "yearly") {
    return {
      heartRate: [
        { x: 2020, y: 80 },
        { x: 2021, y: 90 },
        { x: 2022, y: 80 },
        { x: 2023, y: 100 },
        { x: 2024, y: 120 },
        { x: 2025, y: 110 },
      ],
    };
  }

  return {
    heartRate: [
      { x: "6 AM", y: 80 },
      { x: "7 AM", y: 90 },
      { x: "8 AM", y: 80 },
      { x: "9 AM", y: 100 },
      { x: "10 AM", y: 120 },
      { x: "11 AM", y: 110 },
    ]
  };
}

export async function getWeeksSleepData(timeFrame?: string) {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (timeFrame === "last week") {
    return {
      sleep: [
        { x: "Sat", y: 8 },
        { x: "Sun", y: 6 },
        { x: "Mon", y: 7 },
        { x: "Tue", y: 10 },
        { x: "Wed", y: 5 },
        { x: "Thu", y: 6 },
        { x: "Fri", y: 9 },
      ],
      awake: [
        { x: "Sat", y: 16 },
        { x: "Sun", y: 18 },
        { x: "Mon", y: 17 },
        { x: "Tue", y: 14 },
        { x: "Wed", y: 19 },
        { x: "Thu", y: 18 },
        { x: "Fri", y: 15 },
      ],
    };
  }

  return {
    sleep: [
      { x: "Sat", y: 8 },
      { x: "Sun", y: 6 },
      { x: "Mon", y: 7 },
      { x: "Tue", y: 10 },
      { x: "Wed", y: 5 },
      { x: "Thu", y: 6 },
      { x: "Fri", y: 9 },
    ],
    awake: [
      { x: "Sat", y: 16 },
      { x: "Sun", y: 18 },
      { x: "Mon", y: 17 },
      { x: "Tue", y: 14 },
      { x: "Wed", y: 19 },
      { x: "Thu", y: 18 },
      { x: "Fri", y: 15 },
    ],
  };
}

export async function getCampaignVisitorsData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    total_visitors: 784_000,
    performance: -1.5,
    chart: [
      { x: "S", y: 168 },
      { x: "S", y: 385 },
      { x: "M", y: 201 },
      { x: "T", y: 298 },
      { x: "W", y: 187 },
      { x: "T", y: 195 },
      { x: "F", y: 291 },
    ],
  };
}

export async function getVisitorsAnalyticsData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112, 123, 212, 270,
    190, 310, 115, 90, 380, 112, 223, 292, 170, 290, 110, 115, 290, 380, 312,
  ].map((value, index) => ({ x: index + 1 + "", y: value }));
}

export async function getCostsPerInteractionData() {
  return {
    avg_cost: 560.93,
    growth: 2.5,
    chart: [
      {
        name: "Google Ads",
        data: [
          { x: "Sep", y: 15 },
          { x: "Oct", y: 12 },
          { x: "Nov", y: 61 },
          { x: "Dec", y: 118 },
          { x: "Jan", y: 78 },
          { x: "Feb", y: 125 },
          { x: "Mar", y: 165 },
          { x: "Apr", y: 61 },
          { x: "May", y: 183 },
          { x: "Jun", y: 238 },
          { x: "Jul", y: 237 },
          { x: "Aug", y: 235 },
        ],
      },
      {
        name: "Facebook Ads",
        data: [
          { x: "Sep", y: 75 },
          { x: "Oct", y: 77 },
          { x: "Nov", y: 151 },
          { x: "Dec", y: 72 },
          { x: "Jan", y: 7 },
          { x: "Feb", y: 58 },
          { x: "Mar", y: 60 },
          { x: "Apr", y: 185 },
          { x: "May", y: 239 },
          { x: "Jun", y: 135 },
          { x: "Jul", y: 119 },
          { x: "Aug", y: 124 },
        ],
      },
    ],
  };
}
export async function getAchievementsData() {
  return [
    { year: "2015", local: 3, district: 0, junior: 0, national: 0 },
    { year: "2016", local: 2, district: 1, junior: 1, national: 0 },
    { year: "2017", local: 5, district: 2, junior: 1, national: 0 },
    { year: "2018", local: 4, district: 3, junior: 2, national: 0 },
    { year: "2019", local: 6, district: 3, junior: 2, national: 0 },
    { year: "2020", local: 7, district: 3, junior: 3, national: 0 },
    { year: "2021", local: 6, district: 5, junior: 4, national: 0 },
    { year: "2022", local: 8, district: 5, junior: 5, national: 0 },
    { year: "2023", local: 9, district: 6, junior: 6, national: 0 },
    { year: "2024", local: 10, district: 7, junior: 7, national: 1 },
  ];
}

export async function getMonthlyFinancialData(timeFrame?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (timeFrame === "Last Month") {
    return {
      income: [
        { x: "Week 1", y: 5000 },
        { x: "Week 2", y: 7000 },
        { x: "Week 3", y: 6500 },
        { x: "Week 4", y: 8000 },
      ],
      expenses: [
        { x: "Week 1", y: 3000 },
        { x: "Week 2", y: 4000 },
        { x: "Week 3", y: 3500 },
        { x: "Week 4", y: 5000 },
      ],
    };
  }

  return {
    income: [
      { x: "Week 1", y: 6000 },
      { x: "Week 2", y: 7500 },
      { x: "Week 3", y: 7000 },
      { x: "Week 4", y: 8500 },
    ],
    expenses: [
      { x: "Week 1", y: 3500 },
      { x: "Week 2", y: 4200 },
      { x: "Week 3", y: 4000 },
      { x: "Week 4", y: 5200 },
    ],
  };
}
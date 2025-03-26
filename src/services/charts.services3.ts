export async function getWeeksTrainingData(timeFrame?: string) {
    return {
      coreExercises: [
        { x: "Monday", y: 3 },
        { x: "Tuesday", y: 2 },
        { x: "Wednesday", y: 4 },
        { x: "Thursday", y: 3 },
        { x: "Friday", y: 5 },
        { x: "Saturday", y: 2 },
        { x: "Sunday", y: 1 },
      ],
      newTrainings: [
        { x: "Monday", y: 1 },
        { x: "Tuesday", y: 2 },
        { x: "Wednesday", y: 1 },
        { x: "Thursday", y: 3 },
        { x: "Friday", y: 2 },
        { x: "Saturday", y: 1 },
        { x: "Sunday", y: 0 },
      ],
      rest: [
        { x: "Monday", y: 2 },
        { x: "Tuesday", y: 3 },
        { x: "Wednesday", y: 2 },
        { x: "Thursday", y: 1 },
        { x: "Friday", y: 2 },
        { x: "Saturday", y: 4 },
        { x: "Sunday", y: 5 },
      ],
    };
  }
  
"use server"

export async function fetchWeather() {
    const res = await fetch(
      `https://pro.openweathermap.org/data/2.5/weather?q=Delhi,India&APPID=${process.env.OPEN_WEATHER_API_KEY}`,
    );
  
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(
        errorData.message || "Something went wrong! Please try again.",
      );
    }
  
    return await res.json();
  }
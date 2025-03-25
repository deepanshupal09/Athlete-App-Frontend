"use client"
import { cn } from "@/lib/utils";
import { Weather } from "./icons";
import { fetchWeather } from "@/actions/api";
import { useEffect, useState } from "react";



export function WeatherCard({ className }: { className?: string }) {

  const [weatherData, setWeatherData] = useState<{
    temp: number;
    feels_like: number;
    pressure: number,
    humidity: number,
    weather: string,
    wind_speed: number,
    wind_deg: number,
    weather_icon: string
  } | null>(null);

  const fetch = async () => {
    try {

      const res = await fetchWeather();
      setWeatherData({
        temp: res.main.temp - 273.15,
        feels_like: res.main.feels_like - 273.15,
        pressure: res.main.pressure,
        humidity: res.main.humidity,
        weather: res.weather[0].main,
        wind_speed: res.wind.speed,
        wind_deg: res.wind.deg,
        weather_icon: res.weather[0].icon
      })
      console.log("res: ", res)
    } catch (error) {
      console.log("Error fetching weather: ", error);
    }
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className={cn("rounded-[10px] sky-gradient-14 p-6 shadow-1", className)}>
      <div className="inline-flex space-x-4 items-start">
        <Weather />
        <div className="text-2xl text-gray-200 font-semibold">
          <div>
            New Delhi
          </div>
          <div className="text-xl text-gray-300">India</div>

        </div>
      </div>

      <div className="mt-6 flex flex-col gap-y-2 ">
        <div className="text-4xl text-white font-semibold">{weatherData?.temp.toFixed(1)}° C</div>
        <div className="inline-flex gap-x-5 items-center">
          <div className="text-2xl text-white font-semibold">{weatherData?.weather}</div>
        </div>
        <div className="text-2xl text-gray-200 font-semibold">Feels like {weatherData?.feels_like.toFixed(1)}° C</div>

        <div className="text-3xl dark:text-white text-dark font-semibold mt-5">
          Pollutants
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-2">
          <div><span className="text-3xl text-white font-medium text-center">120</span><span className="ml-1 text-sm text-gray-300">Moderate</span></div>
          <div><span className="text-3xl text-white font-medium text-center">40</span><span className="ml-1 text-sm text-gray-300">µg/m³</span></div>
          <div><span className="text-3xl text-white font-medium text-center">360</span><span className="ml-1 text-sm text-gray-300">µg/m³</span></div>
          <div className="pl-2 text-gray-200">AQI</div>
          <div className="pl-2 text-gray-200">PM 2.5</div>
          <div className="pl-2 text-gray-200">PM 10</div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";

const Weather = ({ weatherInfo }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const convertCelsius = (temp) => {
    return parseInt(temp - 273.15);
  };

  const convertFarenheit = (temp) => {
    return parseInt((temp - 273.15) * (9 / 5) + 32);
  };

  const handleConvertTemp = () => {
    setIsCelsius(!isCelsius);
  };
  return (
    <>
      <main className="flex flex-col gap-6 w-80">
        <section className="flex flex-row justify-between">
          <p>Weather app</p>
          <div>
            <img src="/images/mode.png" alt="mode image" />
          </div>
        </section>
        <section>
          <input
            className="block w-full rounded-lg bg-[url(/images/search.png)] bg-no-repeat bg-left p-1 px-8"
            type="text"
            placeholder="Search a city"
          />
        </section>
        <section>
          
          <img className="w-full" src="/images/bgapp.png" alt="imagebg app" />
          <div className="relative top-[-190px] right-[-20px] flex flex-col bg-red m-1 w-72 gap-2">
            <section className="flex items-center justify-between h-10 gap-10">
              <span className="text-5xl">
                {isCelsius
                  ? convertCelsius(weatherInfo?.main.temp) + "°"
                  : convertFarenheit(weatherInfo?.main.temp) + "°"}
              </span>

              <span className="h-35">
                <img
                  src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
                  alt="imagen clima"
                />
              </span>
            </section>
            <section className="flex items-start gap-1 flex-col">
              <span className="flex flex-row gap-2">Wind:{weatherInfo?.wind.speed}[m/s]</span>
              <span className="flex gap-1">Clouds:{weatherInfo?.clouds.all}</span>
              <span className="flex gap-1">Presure:{weatherInfo?.main.pressure}[atm]</span>

            </section>
            <section className="flex items-center justify-between">
              <span>
                {weatherInfo?.sys.country}, {weatherInfo?.name}
              </span>
              <span>{weatherInfo?.weather[0].description}</span>
            </section>
          </div>
        </section>
        <section>
          <button className="m-2 bg-[#7D69F1] shadow-[#00000040] shadow-lg" onClick={handleConvertTemp}>Change to {(isCelsius)?("°F"):("°C")} </button>
        </section>
      </main>
    </>
  );
};

export default Weather;

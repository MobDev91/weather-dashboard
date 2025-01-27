import ToDaySunRiseAndSet from "./ToDaySunRiseAndSet";
import ToDayListBox from "./ToDayListBox";
import TomorrowBox from "./TomorrowBox";
import { useWeatherStore } from "@/store";
import useFetchForecastByGeoLocation from "@/hooks/useFetchForecastByGeoLocation";
import Loading from "@/layouts/Loading";
import { useEffect } from "react";
import { IWeather, IWeatherForecast } from "@/interfaces";

function ToDayWeatherBox() {
	// get the store------
	const { weatherData, setForeCastFivedays, foreCastFivedays } =
		useWeatherStore();

	// get the geoLocation form weatherData---
	const geoLocation = {
		lat: weatherData?.coord.lat,
		lon: weatherData?.coord.lon,
	};

	// call the useFetchForecastByGeoLocation and send the location from weatherData to get the Forecast data---
	const foreCastfetchedData: IWeatherForecast | undefined =
		useFetchForecastByGeoLocation(geoLocation);

	// Update the store when foreCastData changes
	useEffect(() => {
		if (foreCastfetchedData) setForeCastFivedays(foreCastfetchedData);
	}, [foreCastfetchedData, setForeCastFivedays]);

	// return loading until geting data-----
	if (!weatherData || !foreCastFivedays) return <Loading />;

	return (
		<div className="space-y-5 size-full flex flex-col h-[calc(100%-40px)] justify-evenly">
			{/* top part- today/week */}
			<ToDayListBox
				foreCastFivedays={foreCastFivedays}
				backGround={"bg-transparent"}
			/>

			{/* bottom part- sunrise, sunset , Tomorrow box */}
			<div className="grid grid-cols-2 gap-6">
				<TomorrowBox
					foreCastFivedays={foreCastFivedays}
					backGround={"bg-transparent"}
				/>
				<ToDaySunRiseAndSet
					backGround="bg-transparent"
					weatherData={weatherData as IWeather}
				/>
			</div>
		</div>
	);
}

export default ToDayWeatherBox;

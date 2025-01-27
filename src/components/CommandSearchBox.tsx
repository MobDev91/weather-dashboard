import CityItem from "@/components/CityItem";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandList,
} from "@/components/ui/command";
import { suggestionsOptions } from "@/constants/globalVariables";
import { ICity, ICommandSearchBoxProps } from "@/interfaces";
import { useWeatherStore } from "@/store";

function CommandSearchBox({
	handleInputChange,
	handleItemSelect,
	searchValue,
}: ICommandSearchBoxProps) {
	// get the cities state from the store---
	const city = useWeatherStore((state) => state.city);

	return (
		<Command className="command-search-box bg-[#09090b] rounded-lg border shadow-md w-full md:min-w-[450px] text-white relative z-50">
			<CommandInput
				onChangeCapture={handleInputChange}
				value={searchValue}
				placeholder="search city..."
			/>

			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>

				<CommandGroup heading="Suggestions">
					{city.length !== 0
						? city.map((city: ICity) => (
								<CityItem
									key={`${city.name}-${city.country}`}
									handleItemSelect={handleItemSelect}
									city={city}
								/>
							))
						: suggestionsOptions.map((city: ICity, i: number) => (
								<CityItem
									key={i}
									handleItemSelect={handleItemSelect}
									city={city}
								/>
							))}
				</CommandGroup>
			</CommandList>
		</Command>
	);
}

export default CommandSearchBox;

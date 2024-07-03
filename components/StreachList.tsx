import React from "react";
import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";

interface StreachingListProps {
	data: Record<string, any>[],
	title: string,
}

const StreachingList: React.FC<StreachingListProps> = ({ data, title }) => {
	if (isEmpty(data)) {
		return null
	}
	const streachingMovies = data.filter((movie) => movie.genre === "streaching");
	//console.log(streachingMovies);

	return (
		<div id="estiramientos" className="px-4 md:px-12 mt-4 space-y-3">
			<div>
				<p className="
						text-white 
						text-md 
						md:text-xl 
						lg:text-2xl 
						font-semibold 
						mb-4">
					{title}
				</p>
				<div className="grid grid-cols-4 gap-2">
					{streachingMovies.map((movie) => (
						<MovieCard key={movie.id} data={movie} />
					))}
				</div>
			</div>
		</div>
	)
}

export default StreachingList;
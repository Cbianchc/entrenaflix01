import React from "react";
import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";

interface JuegoListProps {
	data: Record<string, any>[],
	title: string,
}

const JuegoList: React.FC<JuegoListProps> = ({ data, title }) => {
	if (isEmpty(data)) {
		return null
	}
	const juegosMovies = data.filter((movie) => movie.genre === "juegos");
	console.log(juegosMovies);

	return (
		<div id="juegos" className="px-4 md:px-12 mt-4 space-y-3">
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
					{juegosMovies.map((movie) => (
						<MovieCard key={movie.id} data={movie} />
					))}
				</div>
			</div>
		</div>
	)
}

export default JuegoList;
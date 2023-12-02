import React from "react";
import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";

interface MovieListProps {
    data: Record<string, any>[],
    title: string,
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
    if (isEmpty(data)) {
        return null
    }

    return (
        <div className="px-4 md:px-12 mt-4 space-y-3">
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
                    {data.map((Movie) => (
                        <MovieCard key={Movie.id} data={Movie}  />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList;
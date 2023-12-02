import axios from "axios";
import React, { useCallback, useMemo } from "react";

import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";

import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai'
import { divide } from "lodash";

//import favorite from "@/pages/api/favorite";

interface FavoriteButtonProps {
    movieId: string,
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
    const { mutate: mutateFavorites } = useFavorites();
    const { data: currentUser, mutate } = useCurrentUser();

    const isFavorite = useMemo(() => {
        const list = currentUser?.favoriteIds || [];
    
        return list.includes(movieId)
    }, [currentUser, movieId])

    // const toggleFavorites = useCallback(async () => {
    //     let response;

    //     if (isFavorite) {
    //         response = await axios.delete('/api/favorite', { data: { movieId } })
    //     } else {
    //         response = await axios.post('/api/favorite', { movieId })
    //     }

    //     const updatedFavoriteIds = response?.data?.favoriteIds;

    //     mutate({
    //         ...currentUser,
    //         favoriteIds: updatedFavoriteIds

    //     })
    //     mutateFavorites();
    // }, [movieId, favorties, currentUser, mutate, mutateFavorites])
    
    const IconFav = isFavorite? AiOutlineCheck : AiOutlinePlus;
    return(
        <div>es solo para que no de error por no tener favorito</div>
    )
    // return(
    //     <div 
    //     onClick={toggleFavorites}
    //     className="
    //         cursor-pointer
    //         group/item
    //         w-6
    //         h-6
    //         lg:w-10
    //         lg:h-10
    //         border-white
    //         border-2
    //         rounded-full
    //         flex
    //         justify-center
    //         items-center
    //         transition
    //         hover:border-neutral-300
    //     ">
    //         <IconFav className="text-white" size={25}/>
    //     </div>
    // )
}
export default FavoriteButton;
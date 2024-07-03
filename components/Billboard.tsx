import useBillboard from "@/hooks/useBillboard";
import React, { useCallback } from "react";

import { AiOutlineInfoCircle } from 'react-icons/ai';
import PlayButton from "./PlayButton";
import useInfoModalStore from "@/hooks/useInfoModal";

const Billboard = () => {
    const { data } = useBillboard();
    const { openModal } = useInfoModalStore()

    const handleOpenModal = useCallback(() => {
        openModal(data?.id);
    }, [openModal, data?.id])
    
    return(
        <div className="relative h-[56.25vw]">
            <video 
                className="
                    w-full
                    h-[56.25vw]
                    object-cover
                    brightness-[50%]
                "
                autoPlay
                muted
                loop
                poster={data?.thumbnailUrl} 
                src={data?.videoUrl}>
            </video>
            <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                <p className="text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl"
                >Video del dia </p>
                <p className="
                    text-white 
                    text-xs
                    md:text-lg 
                    mt-3 
                    md:mt-8 
                    w-[50%] 
                    md:w-[80%] 
                    lg:w-[40%] 
                    drop-shadow-xl
                ">
                    Este es un video de la base de datos aleatorio... por si no sabes que hacer 😉
                </p>
                <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                    <PlayButton movieId={data?.id}/>
                    
                    <button className="
                        bg-gray-600
                        text-white
                        bg-opacity-30 
                        rounded-xl 
                        py-1 md:py-2 
                        px-2 md:px-4
                        w-auto 
                        text- 
                        lg:text-lg 
                        font-semibold
                        flex
                        flex-row
                        items-center
                        hover:bg-opacity-20
                        transition
                    "
                    onClick={handleOpenModal}>
                        <AiOutlineInfoCircle className="mr-1" />
                        Mas Info
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Billboard;
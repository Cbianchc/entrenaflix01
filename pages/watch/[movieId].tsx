import React from 'react';

import useMovie from '@/hooks/useMovie';
import { useRouter } from 'next/router';

import { AiOutlineArrowLeft } from 'react-icons/ai';

const Watch = () => {
    const router = useRouter();
    const { movieId } = router.query;

    const { data } = useMovie(movieId as string);

    return(
        <div className='h-screen w.screen bg-black'>
            <nav className='
                fixed
                w-full
                p-3
                z-10
                flex
                flex-row
                items-center
                gap-8
                bg-black
                bg-opacity-50
            '>
                <AiOutlineArrowLeft 
                    onClick={() => router.push('/')}
                    className='text-white hover:text-opacity-60' size={30} />
                <p className='text-white text-lg md:text-xl font-bold'>
                    <span className='font-light'>
                        Estas mirando: 
                    </span>
                    {data?.title}
                </p>
            </nav>
            {/* <video 
                src={data?.videoUrl}
                className='h-full w-full'
                autoPlay 
                controls>
            </video> */}
             
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
            src={data?.videoUrl}
        //src='https://player.vimeo.com/video/889303724?badge=0&amp;autoplay=1&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479'
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          style={{ position: 'absolute', top: '0', left: '0', width: '100vw', height: "100vh" }}
          title="Ejercicio"
        ></iframe>
      </div>
      {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
          
        </div>
    )
}
export default Watch;
import React, { useState, useEffect } from 'react';
import useMovie from '@/hooks/useMovie';
import { useRouter } from 'next/router';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Watch = () => {
    const router = useRouter();
    const { movieId } = router.query;
    const { data } = useMovie(movieId as string);

    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        let timeoutId: any;

        const handleMouseMove = () => {
            setShowNav(true);

            // Reiniciar el temporizador para ocultar la barra después de cierto tiempo
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setShowNav(false);
            }, 2000); // Puedes ajustar el tiempo de inactividad aquí
        };

        const mouseMoveListener = window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className='h-screen w-screen bg-black'>
            {showNav && (
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
                        className='text-white hover:text-opacity-60'
                        size={30}
                    />
                    <p className='text-white text-lg md:text-xl font-bold'>
                        <span className='font-light'>Estas mirando: </span>
                        {data?.title}
                    </p>
                </nav>
            )}

            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                    src={data?.videoUrl}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    style={{ position: 'absolute', top: '0', left: '0', width: '100vw', height: '100vh' }}
                    title="Ejercicio"
                ></iframe>
            </div>
        </div>
    );
};

export default Watch;


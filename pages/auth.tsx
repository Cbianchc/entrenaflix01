import Input from "@/components/Input";
import { useCallback, useState } from "react";
import axios from 'axios';
import { signIn } from 'next-auth/react';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
//import Image from "next/image";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
      setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, [])

    const login = useCallback(async () => {
      try {
        await signIn('credentials', {
          email,
          password,
          callbackUrl: '/profiles'
        })
      } catch (error) {
        console.log(error);
      }
    }, [email, password])

    const register = useCallback(async () => {
      try {
        await axios.post('/api/register' ,{
          email,
          name,
          password
        })

        login();
      } catch (error) {
        console.log(error)
      }
    }, [email, name, password, login])

    

    return(
      <div className="
        relative
        h-full
        w-full
        bg-[url('/images/heroGym-final.png')]
        bg-no-repeat
        bg-center
        bg-fix
        bg-cover
      ">
        <div className="bg-black w-full h-full lg:bg-opacity-50">
          <nav className="px-12 py-5">
            <img src="/images/entrenaflix.png" alt="logo" className="h-12" />
          </nav>
          <div className="flex justify-center">
            <div className="
              bg-black 
                bg-opacity-70 
                px-16 
                py-16 
                self-center
                mt-2
                lg:w-2/5
                lg:max-w-md
                rounded-md
                w-full  
              ">
                <h2 className="text-white text-4xl mb-4 font-semibold">
                  {variant === 'login'? 'Ingresar' : 'Registrate'} 
                </h2>
                <div className="flex flex-col gap-4">
                  {variant === 'register' && (
                    <Input 
                      label="Username"
                      onChange={(ev: any) => setName(ev.target.value)}
                      id="name"
                      value={name}
                    />
                  )}
                  <Input 
                    label="Email"
                    onChange={(ev: any) => setEmail(ev.target.value)}
                    id="email"
                    type="email"
                    value={email}
                  />
                  <Input 
                    label="Password"
                    onChange={(ev: any) => setPassword(ev.target.value)}
                    id="password"
                    type="password"
                    value={password}
                  />
                </div>
                <button className="
                  bg-red-600 
                    py-3  
                    text-white 
                    rounded-md
                    w-full
                    mt-10
                    hover:bg-red-700
                    transition
                    "
                    onClick={variant === 'login' ? login : register}>
                      {variant === 'login' ? 'Login' : 'Registrarme'}
                </button>
                <div className="
                  flex
                  flex-row
                  items-center
                  gap-4
                  mt-8
                  justify-center
                ">
                  <div className="
                    w-10
                    h-10
                    bg-white
                    rounded-full
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    hover:opacity-60
                    transition
                  "
                  onClick={() => signIn('google', { callbackUrl: '/profiles' })}
                  >
                    <FcGoogle size={30}/>
                  </div>
                  <div 
                    className="
                      w-10
                      h-10
                      bg-white
                      rounded-full
                      flex
                      items-center
                      justify-center
                      cursor-pointer
                      hover:opacity-60
                      transition
                    "
                    onClick={() => signIn('github', { callbackUrl: '/profiles' })}
                    >
                      <FaGithub size={30}/>
                  </div>
                </div>
                <p className="text-neutral-500 mt-12 flex justify-center">
                  {variant === 'login' ? '¿Primera vez?' : 'Ya tengo una cuenta'}
                  <span 
                    onClick={toggleVariant}
                    className="text-white ml-3 hover:underline cursor-pointer">
                      {variant === 'login' ? 'Hacete una cuenta' : 'Ingresa tus datos'}
                  </span>
                </p>
            </div>
          </div>
        </div>
      </div>        
    )
}
export default Auth;
// import {getProviders, signIn} from 'next-auth';

import { getProviders, signIn  } from "next-auth/react";
import Header from "@/components/Header";
import Image from "next/image";

//fetching providers on server because there it will be fast
//on client also they can be fetched using useEffect
export default function SignIn({providers}) {
  return (
    <>
    <Header/>
   <div className=" flex justify-center space-x-7 mt-20">
    <Image 
    className='hidden object-cover rotate-6 md:inline-flex md:w-48' 
    src="/insta_image.png"
    alt="Instagram Image" />
    <div className=''>
        {Object.values(providers).map(provider=>(
            <div key={provider.name} className='flex flex-col items-center'>
                <Image 
                className='w-32 object-cover'
                src="/insta_logo.png" 
                alt="Instagram Logo" />
                <p className='text-sm italic my-10 text-center'>This app is created for learning purpose</p>
                
                {/* we need to configure a redirect uri on google cloud before this works 
                
                http://localhost:3000/api/auth/callback/google
                
                */}
                
                <button 
                onClick={() => signIn(provider.id,{
                    callbackUrl:"/"
                })}
                className='bg-red-400 rounded-lg p-3 text-white hover:bg-red-500'>Sign in with {provider.name}</button>
            </div>
        ))}
    </div>
   </div>
   </>
  )
}

export async function getServerSideProps(context){
  const providers = await getProviders();
  //console.log("Providers", providers)
  return {
    props:{
        providers
      }
  } 
}

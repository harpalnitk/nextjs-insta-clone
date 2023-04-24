
import Header from "@/components/Header";
import Image from "next/image";
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'; 
import { db } from "@/firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";


import { useRouter } from "next/router";
export default function SignIn() {

  const router = useRouter();

  const onGoogleClick = async ()=> {
try {
  
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
  const user = auth.currentUser.providerData[0];
  //console.log('user in signin', user)
  const docRef = doc(db,'insta-users',user.uid);
  //check if user already exists
  const docSnap = await getDoc(docRef);
  //console.log('docSnap', docSnap);
  if(!docSnap.exists()){
   // console.log('docSnap does not exists', docSnap)
    await setDoc(docRef,{
      name:user.displayName,
      email:user.email,
      userImg: user.photoURL,
      uid:user.uid,
      timestamp: serverTimestamp(),
      username:user.displayName.split(' ').join('').toLocaleLowerCase()

    })
  }
  router.push('/');

} catch (error) {
  console.log(error)
  
}
  }


  return (
    <>
    <Header/>
   <div className=" flex justify-center space-x-7 mt-20">
    <Image 
    className='hidden object-cover rotate-6 md:inline-flex md:w-48' 
    src="/insta_image.png"
    alt="Instagram Image" 
    width={250}
    height={250}
    />
    <div className=''>
       
            <div className='flex flex-col items-center'>
                <Image 
                className='w-32 object-cover'
                src="/insta_logo.png" 
                alt="Instagram Logo"
                width={150}
                height={150}
                 />
                <p className='text-sm italic my-10 text-center'>This app is created for learning purpose</p>
                
                {/* we need to configure a redirect uri on google cloud before this works 
                
                http://localhost:3000/api/auth/callback/google
                
                */}
                
                <button 
                onClick={onGoogleClick}
                className='bg-red-400 rounded-lg p-3 text-white hover:bg-red-500'>Sign in with Google</button>
            </div>
      
    </div>
   </div>
   </>
  )
}


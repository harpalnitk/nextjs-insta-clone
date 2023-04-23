import {array,jobTitle,username} from 'minifaker';
import 'minifaker/locales/en';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Suggestions() {

    const [suggestions,setSuggestions] = useState([]);

    useEffect(()=>{
      const suggestions = array(5, (i) => (
        {
            username: username({locale:'en'}),
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
            id: i,
            jobTitle: jobTitle({locale:'en'})
        }
      ))
      setSuggestions(suggestions);
      //console.log(suggestions);
    },[]);
  return (
    <div className='mt-4 ml-10'>
        <div className='flex justify-between mb-5 text-sm'>
            <h3 className='font-bold text-gray-400'>Suggestion for you</h3>
            <button className='text-gray-600 font-semibold'>See All</button>
        </div>
        {suggestions.map(suggestion=>(
            <div key={suggestion.id} className='flex items-center justify-between mt-3'>
                <Image 
                className='h-10 rounded-full border p-[2px]' 
                src={suggestion.img} alt={suggestion.username} />
                <div className='flex-1 ml-4'>
                    <h2 className='font-semibold text-sm'>{suggestion.username}</h2>
                    <h3 className='font-sm text-gray-400 truncate w-[230px]'>{suggestion.jobTitle}</h3>
                </div>
                <button className='font-semibold text-blue-400 text-sm'>Follow</button>
            </div>
        ))}
    </div>
  )
}

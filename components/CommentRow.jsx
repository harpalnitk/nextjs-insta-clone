import Image from 'next/image';
import Moment from 'react-moment';

export default function CommentRow({image,username,comment,timestamp}) {
  return (
    <div className='flex items-center space-x-2 mb-2'>
    <Image className='h-7 w-7 rounded-full object-cover' src={image} alt={username} width={100} height={100}/>
    <p className='font-semibold'>{username}</p>
    <p className='flex-1 truncate'>{comment}</p>
    <Moment fromNow>{timestamp?.toDate()}</Moment>
</div>
  )
}

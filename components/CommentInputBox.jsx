import {
    FaceSmileIcon,
  } from '@heroicons/react/24/outline';
  import { useState } from 'react';

export default function CommentInputBox(props) {

    const [comment, setComment] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        const commentToSend = comment;
        setComment('');
        props.onPost(commentToSend);
    }

  return (
    <form className='flex items-center p-4'>
    <FaceSmileIcon className='h-7' />
    <input
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      className='border-none flex-1 focus:ring-0'
      type='text'
      placeholder='Enter your comment...'
    />
    <button
      type='submit'
      onClick={handleSubmit}
      disabled={!comment.trim()}
      className='text-blue-400 font-bold disabled:text-blue-200'
    >
      Post
    </button>
  </form>
  )
}

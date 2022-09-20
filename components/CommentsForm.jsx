import React, {useState, useRef, useEffect} from 'react'
import { submitComment } from '../services';

export default function CommentsForm({slug}) {
 const [error, setError] = useState(false);
 const [localStorage, setLocalStorage] = useState(null);
 const [success, setSuccess] = useState(false);
 const commentRef = useRef()
 const nameRef = useRef()
 const emailRef = useRef()
 const storeDataRef = useRef()


 useEffect(() => {
  nameRef.current.value = window.localStorage.getItem('name')
  emailRef.current.value = window.localStorage.getItem('email')
 }, []);

 const handleCommentSubmission = () => {
  setError(false)
  const {value: comment} = commentRef.current
  const {value: name} = nameRef.current
  const {value: email} = emailRef.current
  const {checked: storeData} = storeDataRef.current

  if(!comment || !name || !email){
    setError(true)
    return;
  }

  const commentFormData = {name, email, comment, slug}

  if(storeData) {
    window.localStorage.setItem('name', name)
    window.localStorage.setItem('email', email)
  } else {
    window.localStorage.removeItem('name', name)
    window.localStorage.removeItem('email', email)
  }

  submitComment(commentFormData)
  .then((res) => {
    setSuccess(true)

    setTimeout(() => {
      setSuccess(false)
    }, 5000);
  })
 }
  return (
    <div className='bg-white shadow-xl rounded-lg p-8 pb-12 mb-8'>
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave a comment</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea ref={commentRef} placeholder="Comment" name="comment"
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'/>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input type="text" ref={nameRef} name='name' placeholder='Name'
          className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' />
        <input type="text" ref={emailRef} name='email' placeholder='Email'
          className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="">
          <input type="checkbox" ref={storeDataRef} id='storeData' name='storeData' value="true" />
          <label htmlFor="storeData" className='text-gray-500 cursor-pointer ml-2'>Save my email and name for the next time I comment.</label>
        </div>
      </div>
      {error && <p className='text-xs text-red-500'>All fields are required</p>}
      <div className="mt-8 flex items-center justify-center">
        <button type='button' onClick={handleCommentSubmission}
          className='transition duration-500 ease hover:bg-indigo-900 bg-pink-600 text-lg rounded-full text-white px-8 py-3 items-center justify-center'>
            Post Comment
        </button>
      </div>
      <br/>
      {success && <span className='text-xl flex text-center justify-center items-center font-semibold mt-3 text-green-500'>Comment submitted for review</span>}
    </div>
  )
}

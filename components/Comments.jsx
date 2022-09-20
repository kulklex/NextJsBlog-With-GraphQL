import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import parse from 'html-react-parser'
import moment from 'moment'
import { getComments } from './../services/index';

export default function Comments({slug}) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug)
    .then((result) => setComments(result))
  })
  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-xl rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} {' '} {comments.length == 1 ? 'Comment' : 'Comments' }
          </h3>
          {comments.map((comment) => (
            <div key={comment?.createdAt} className="border-b border-gray-100 mb-4 pb-4">
              <p className='mb-4'>
                <span className='font-semibold'>
                  {comment?.name}
                </span>
                {' '} on {' '} {moment(comment?.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className='whitespace-pre-line text-gray-600 w-full'>{parse(comment?.comment)}</p>
              <p className='float-right text-sm italic'> <span className='text-orange-300'>{comment?.email}</span></p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

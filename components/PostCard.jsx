import React from 'react'

const PostCard = ({post}) => {
  return (
    <div>
        <p>{post?.title}</p>
        <p>{post?.excerpt}</p>
        <hr/><br/>
    </div>
  )
}

export default PostCard
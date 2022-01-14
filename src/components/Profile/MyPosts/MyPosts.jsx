import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  let posts = [
    { id: 1, post: 'Siper-Man cool', likesCount: 100 },
    { id: 2, post: 'It\'s my first post', likesCount: 1 },
    { id: 3, post: 'I love Andrew Garfield', likesCount: 100 },
    { id: 4, post: 'S.W.A.G', likesCount: 150 },
    { id: 4, post: 'I love Spider-Man Andrew Garfield', likesCount: 150000000 },
  ]

  let postsElement = posts.map(p => (
    <Post message={p.post} likesCount={p.likesCount} />
  ))

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  )
}

export default MyPosts

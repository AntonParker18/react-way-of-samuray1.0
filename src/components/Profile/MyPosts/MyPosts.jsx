import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

let MyPosts = props => {
  const postsElement = props.posts.map(p => (
    <Post message={p.post} likesCount={p.likesCount} />
  ))

  const newPostElement = React.createRef()

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'})
  }

  let onPostChange = () => {
    const text = newPostElement.current.value
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})

  }

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  )
}

export default MyPosts

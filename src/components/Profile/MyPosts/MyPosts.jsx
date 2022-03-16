import React from 'react'
import { reduxForm, Field } from 'redux-form'
import s from './MyPosts.module.css'
import Post from './Post/Post'

let MyPosts = props => {
  const postsElement = props.posts.map(p => (
    <Post message={p.post} likesCount={p.likesCount} />
  ))

  const onAddPost = values => {
    props.addPost(values.newPostElement)
    values.newPostElement = ''
  }

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <MyPostsFormRedux onSubmit={onAddPost} />
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  )
}

const MyPostsForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='newPostElement' component={'textarea'} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const MyPostsFormRedux = reduxForm({
  form: 'myPostsAddMessageForm',
})(MyPostsForm)

export default MyPosts

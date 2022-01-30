import React from 'react'
import { connect } from 'react-redux'
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

let mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

let mapDispathToProps = dispatch => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPostText: text => {
      let action = updateNewPostTextActionCreator(text)
      dispatch(action)
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispathToProps)(MyPosts)
export default MyPostsContainer

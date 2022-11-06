import React from 'react'
import { connect } from 'react-redux'
import { actions, addPostActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

let mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
  }
}

let mapDispatchToProps = dispatch => {
  return {
    addPost: newPostElement => {
      dispatch(actions.addPostActionCreator(newPostElement))
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer

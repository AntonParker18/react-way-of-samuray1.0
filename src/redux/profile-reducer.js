const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.profilePage.posts.length + 1,
        post: state.profilePage.newPostText,
        likesCount: 0,
      }
      state.profilePage.posts.push(newPost)
      state.profilePage.newPostText = ''
      break
    case UPDATE_NEW_POST_TEXT:
      state.profilePage.newPostText = action.newText
      break
    default:
      return state
  }
}

// if (state.profilePage.newPostText[0].length <= 0) {
//   return state.addPost
// }

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export default profileReducer

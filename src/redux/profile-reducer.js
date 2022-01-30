const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  posts: [
    { id: 1, post: 'Siper-Man cool', likesCount: 100 },
    { id: 2, post: "It's my first post", likesCount: 1 },
    { id: 3, post: 'I love Spider-Man', likesCount: 150 },
    { id: 4, post: 'ReactJS top PHP and Java is shit', likesCount: 100 },
  ],
  newPostText: '',
}
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: state.posts.length + 1,
        post: state.newPostText,
        likesCount: 0,
      }
      return { ...state, posts: [...state.posts, newPost], newPostText: '' }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      }
    }
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

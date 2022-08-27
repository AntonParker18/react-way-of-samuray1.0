
type FriendsType = {
  id: number
  name: string
}


type InitialStateType = {
  friends: Array<FriendsType>
}

let initialState: InitialStateType = {
  friends: [
    { id: 1, name: 'Anton' },
    { id: 2, name: 'Vlad' },
    { id: 3, name: 'Artur' },
    { id: 4, name: 'Dimych' },
  ] ,
}



const sidebarReducer = (state = initialState, action: any): InitialStateType => {
  return state
}
export default sidebarReducer

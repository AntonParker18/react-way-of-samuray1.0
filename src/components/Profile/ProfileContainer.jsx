import * as axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { UsersAPI } from '../../api/api'
import { setUserProfile } from '../../redux/profile-reducer'
import Profile from './Profile'

const withRouter = WrappedComponent => props => {
  const params = useParams()
  // etc... other react-router-dom v6 hooks
  return (
    <WrappedComponent
      {...props}
      params={params}
      // etc...
    />
  )
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId
    if (!userId) {
      userId = 2
    }
    UsersAPI.getProfile(userId)
      .then(data => {
        this.props.setUserProfile(data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = state => ({
  profile: state.profilePage.profile,
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent
)

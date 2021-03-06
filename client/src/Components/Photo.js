import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import history from '../history'
import Loading from './Loading'

class Photo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photo: null,
      addDeleteButtonVisible: false
    }
  }

  componentWillMount() {
    const photoID = this.props.match.params.photo_id

    // use axios to fetch the API and update state
    axios.get(`/api/photos/${photoID}`).then(response => {
      this.setState({
        photo: response.data.photo
      })
    })
  }

  deletePhoto = event => {
    event.preventDefault()

    const photoID = this.props.match.params.photo_id

    axios.delete(`/api/photos/${photoID}`).then(response => {
      history.push(`/Places/${this.props.match.params.place_id}`)
    })
  }

  toggleDeleteButton = () => {
    this.setState({
      addDeleteButtonVisible: !this.state.addDeleteButtonVisible
    })
  }

  render() {
    // If we don't have a photo yet...
    if (!this.state.photo) {
      // don't show anything
      return <Loading />
    }

    return (
      <div className="individualPhoto">
        <div className="photoPageBack">
          <Link
            className="photoPageBack"
            to={`/Places/${this.props.match.params.place_id}`}
          >
            &lt; back
          </Link>
        </div>

        <div className="photo">
          <div className="photoDotsIcon">
            <i
              className="fas fa-ellipsis-h"
              onClick={this.toggleDeleteButton}
            />
          </div>
          <button
            className={`deletePhoto ${
              this.state.addDeleteButtonVisible ? '' : 'hidden'
            }`}
            onClick={this.deletePhoto}
          >
            <i className="fas fa-trash-alt deleteAlbum" />
            Delete Photo
          </button>
          <img className="photo" src={this.state.photo.image} alt="" />
          <p className="timeStamp">
            {new Date(this.state.photo.timestamp).toLocaleTimeString([], {
              month: 'short',
              day: '2-digit',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric'
            })}
          </p>
          <h4 className="caption"> {this.state.photo.caption} </h4>
        </div>
      </div>
    )
  }
}

export default Photo

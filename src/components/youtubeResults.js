import React from 'react'

export default class YoutubeResults extends React.Component {

  render () {

var searchResults=this.props.data.map(function(searchResult, index)
 {
 return(
  <div className="col-md-4">
  <div className="videoGrid">
  <iframe allowfullscreen="" frameborder="0" height="250" src={"https://www.youtube.com/embed/" + searchResult.id.videoId}  width="100%"></iframe>
  </div>
  </div>
 )
 }, this);

    return (
  <div className="row resultsGrid">
  {searchResults}
  </div>
    )
  }
}

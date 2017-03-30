import React from 'react'
import ReactDOM from 'react-dom'
import xhr from 'xhr'
import YoutubeResults from './youtubeResults'
export default class YoutubeSearch extends React.Component {

state = {
    
    data: []
  };

    componentDidMount() {
    ReactDOM.findDOMNode(this.refs.searchInput).focus();
    }

    searchAction = (evt) => {
    var finalSearchKey = encodeURIComponent(evt.target.value);
    var urlAPI = 'https://www.googleapis.com/youtube/v3/search?q=';
    var urlKey = '&key=AIzaSyANIocm8z3jrCC-wkteNyxmUEqm2YvIfN8&maxResults=18&part=snippet';
    var url = urlAPI + finalSearchKey + urlKey;
    //var url ='/public/sample.json';
    var reactThis=this;
    console.log(finalSearchKey);
    if(finalSearchKey.length>1)
    {
    xhr({
      url: url
    }, function (err, data) {
      var finalData=JSON.parse(data.body);
      reactThis.setState({data: finalData.items})
    });
    }
  };
  
  render () {
    return (
  <div className="row">
  <div className="col-md-12">
  <div className="form-group">
  <input type="text" className="form-control" id="searchKey" placeholder="Food.." onKeyUp={this.searchAction} ref="searchInput"/><br/>
  Keyword: Food, Songs, Fun etc..
  </div>
  </div>
  <YoutubeResults data={this.state.data}/>
  </div>
    )
  }
}

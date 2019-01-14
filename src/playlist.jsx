import React, { PureComponent, Fragment } from "react";
import axios from "axios";

export class Playlist extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      info: {}
    };
  }

  componentDidMount() {
    let self = this;
    const apiKey = "AIzaSyBvom--SASjWG4Ah-2aIF1l_vGIo5AfKhQ";
    const apiUrl = "https://www.googleapis.com/youtube/v3/playlistItems?";
    axios
      .get(apiUrl, {
        part: "snippet,contentDetails",
        maxResults: 25,
        playlistId: "PLOUzUrKhNae51rhMgkY_v1BWWISuvjmkk",
        key: apiKey,
        pageToken: "CBkQAA",
        fields: "items,nextPageToken,pageInfo,tokenPagination"
      })
      .then(function(response) {
        console.log(response);
        self.setState({
          items: response.data.items,
          info: response.data.pageInfo
        });
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  }

  render() {
    const { items, info } = this.state;
    return (
      <Fragment>
        {items.map(item => (
          <div key={item.id}>
            <img src={item.snippet.thumbnails.default.url} />
            <p>{item.snippet.title}</p>
          </div>
        ))}

        <p> Page - {info.resultsPerPage} </p>
        <p> Total - {info.totalResults} </p>
      </Fragment>
    );
  }
}

export default Playlist;

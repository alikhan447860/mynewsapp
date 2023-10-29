import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
      <h2>News Flick -Top headings</h2>
      <div className="row">
        <div className="col-md-4">
            <Newsitem title="mytitle"discription="mydesc" imgurl="https://www.nalandaopenuniversity.com/wp-content/uploads/2023/07/ICC-WORLD-CUP-2023-SCHEDULE-2-1024x683.jpg"/>
        </div>
        <div className="col-md-4">
            <Newsitem title="mytitle"description="mydesc"/>
        </div>
        <div className="col-md-4">
            <Newsitem title="mytitle"description="mydesc"/>
        </div>
      </div>
      </div>
    )
  }
}

export default News

import React from 'react';
import axios from 'axios';
export default class BlogGetChild extends React.Component {

    state = {
     bloglist: [],
     limit:4
    
    }

componentDidMount() {
    axios.get(`http://178.62.198.162/api/posts?page=1`, {
      headers: {
        'token': 'pj11daaQRz7zUIH56B9Z'
      }
    })

      .then(res => {
        const bloglist = res.data;
        this.setState({ bloglist });
        console.log(res)
        console.log(res.data)
      })
  }
loadmore=() =>{

this.setState({limit:this.state.limit + 2})

}
  render() {
    //   console.log(this.state.limit)
      let data = this.state.bloglist;
      
      let itemCount = this.state.bloglist.length - this.state.limit;
      data = data.slice(0, this.state.limit);

      console.log(this.state.bloglist)
    return (  <>
    {data.map((item)=>{
            return ( 
            <div className="col mb-4 shadow-sm p-3 mb-5 bg-white rounded" id='BlogRender'>
                    
            <div className="card">
            <div class="card-img-caption">
          
            <img src={item.img_url} className="card-img-top" name={'img_url'} alt="..."></img>
            </div>
            <div className="card-body">
                
              <h3 className="card-title"> {item.title}</h3>
              <p className="card-text">{item.content}</p>
            </div>
          </div>
          
          </div>
          
        )})}

        {(itemCount > 0) &&  <button type="submit" className="btn btn-primary" onClick={this.loadmore}>Meer laden</button>}
        
        </>
    
         
          


    )
  }


  }


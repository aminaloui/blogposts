import React from 'react';
import axios from 'axios';
import BlogCategories from './BlogCategories';


export default class BlogPost extends React.Component {
  state = {
    title: '',
    content: '',
    category_id: 1,
  }

  handleChange = event => {
    this.setState({ title: event.target.value, console: event.target.value, category_id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
   

    const blog = {
      title: this.state.title,
      content: this.state.content,
      category_id: this.state.category_id
    };

    

    axios.post(`http://178.62.198.162/api/posts`, blog , {
      headers: {
        'token': 'pj11daaQRz7zUIH56B9Z'
      }
    }).catch(function (error) {
    // handle error
    alert("Zorg er voor dat het blogbericht volledig is ingevuld.");
    console.log(error);
  })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      this.setState({  title: '',
      content: '',
      category_id: 1})
    
  }

  onChange = (event)=>{
    this.setState({[event.target.name]: event.target.value})
  }
  
  CategoriesChange = (value)=> {
    this.setState({category_id: parseInt(value)})
  } 

  render() {
    console.log(this.state)
    return (
      <div>
        <div className="col-md BlogPostForm">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label > Berichtnaam</label>
                <input type="text" value= {this.state.title} name={'title'} required onChange={this.onChange} className="form-control" placeholder="Geen titel" />
              </div>

              <div className="form-group">
                <label for="exampleFormControlSelect1">Categorie</label>

            <BlogCategories onChange={(value)=>this.CategoriesChange(value)}/>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Bericht</label>
                <textarea className="form-control" name={'content'} required onChange={this.onChange}value={this.state.content}id="exampleFormControlTextarea1" rows="26"/>
              </div>
              <button type="submit" className="btn btn-primary" >Bericht aanmaken</button>
            </form>

          </div>
      
      </div>
    )
  }
}
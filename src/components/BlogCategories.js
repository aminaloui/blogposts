import React from 'react';

import axios from 'axios';

export default class BlogCategories extends React.Component {
  state = {
    categories: []
  }

  componentDidMount() {
    axios.get(`http://178.62.198.162/api/categories`,{
        headers: {
          'token': 'pj11daaQRz7zUIH56B9Z'
        }
      })
      .then(res => {
        const bloglist = res.data;
        this.setState({ categories: bloglist });
      })
  }

  onChange= (event) =>{
    this.props.onChange(event.target.value)
  }

  render() {
    return (

      <select required onChange={this.onChange} className="custom-select mr-sm-2" id="inlineFormCustomSelect"placeholder="Geen categorie">
        { this.state.categories.map(categories => <option value={categories.id}>{categories.name}</option>)}
      </select>
    
    )
  }
}
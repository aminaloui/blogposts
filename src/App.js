import React from 'react';
import './App.css';
import BlogPost from './components/BlogPost';
// import BlogCategories from './components/BlogCategories';
import BlogGet from './components/BlogGet';


function App() {
  return (
    <div className="body">
      <img className="banner-image" src={require('./images/social-brothers-banner.png')} alt="banner" />
      <div className="container">
        <div className="row">
          <div className="col">
            <BlogPost />
          </div>
          <div className="col RenderedPosts">
            <div class="row row-cols-1 row-cols-md-2">
              <BlogGet />
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}

export default App;

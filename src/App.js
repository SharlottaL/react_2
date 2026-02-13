//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Hello from './Hello.js';
import Length  from './Lenth.js';
import Range from './Range.js';
import Form from './Form.js';
import Posts from './posts/Posts.js';
import React from 'react';
import { render } from '@testing-library/react';

class App extends React.Component{
 state = {
    posts : 
    [
    {id:'1', title:'C++ p', content:'C++ proc'},
    {id:'2', title:'C++ OOP', content:'C++ OOP'},
    {id:'3', title:'WD', content:'Windows Desktop'},
  ]
}
 removePost = (id) => {
  alert(id);
 //posts = posts.filter(post => post.id !== id);
 this.setState({posts: this.state.posts.filter(post => post.id !== id)})
}
render() {
  return (
    <div className="App">
     {/* <Header/>
<Hello/>
<Length/>
<Range/>
<Form/> */}
<Posts posts={this.state.posts} removePost={this.removePost}/>
    </div>
  );
}
}
export default App;


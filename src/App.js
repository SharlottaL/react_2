//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Hello from './Hello.js';
import Length  from './Lenth.js';
import Range from './Range.js';
import Form from './Form.js';
import Posts from './posts/Posts.js';

 let posts = [
    {id:'1', title:'C++ p', content:'C++ proc'},
    {id:'2', title:'C++ OOP', content:'C++ OOP'},
    {id:'3', title:'WD', content:'Windows Desktop'},
  ]

function removePost(id)
{
posts = posts.filter(post => post.id !== id);
}
function App() {
 
  return (
    <div className="App">
     {/* <Header/>
<Hello/>
<Length/>
<Range/>
<Form/> */}
<Posts posts={posts}/>
    </div>
  );
}

export default App;

import './App.css';
import Post from "./components/post";

function App() {

  const ANAKIN_IMAGE = "https://static.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png";
  const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg";
  const postData = {
    author: {
      name: "Anakin skywalker",
      photo: ANAKIN_IMAGE,
      nickname: "@dart_vader",
    },
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
    date: "27 лют.",
  };

  return (
    <div className="App">
      <div className="posts-list">
        <Post postData={postData} />
      </div>
    </div>
  );
}

export default App;

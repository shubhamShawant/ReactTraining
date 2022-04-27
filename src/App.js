import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import PageNotfound from "./Components/PageNotfound";
import PostDetails from "./Components/PostComponent/PostDetails";
import Posts from "./Components/PostComponent/Posts";

const helloGreet = () => {
  alert("Hello Greet");
};

function App() {
  return (
    <div className="App">
      <h1>React app</h1>
      {/* <Layout
        data={{
          name: "himanshu lal",
          name1: "sdkjfshdkfjh",
          name2: "sdkjfshdkfjh",
          name3: "sdkjfshdkfjh",
        }}
        helloGreet={helloGreet}
      >
        <h3>adskfjaskfjhdf s sfdg sfd g</h3>
      </Layout> */}
      {/* <Posts /> */}
      {/* <PostDetails /> */}
      <Routes>
        {/* <Route path="/"  render={() => <Posts />} /> */}
        <Route path="/" element={<h1> App Components</h1>} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/PostDetails/:id" element={<PostDetails />} />
        <Route path="*" element={<PageNotfound />} />
      </Routes>
    </div>
  );
}

export default App;

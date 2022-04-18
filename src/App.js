import "./App.css";
import Layout from "./Components/Layout";

const helloGreet = () => {
  alert("Hello Greet");
};

function App() {
  return (
    <div className="App">
      <h1>React app</h1>
      <Layout
        data={{
          name: "himanshu lal",
          name1: "sdkjfshdkfjh",
          name2: "sdkjfshdkfjh",
          name3: "sdkjfshdkfjh",
        }}
        helloGreet={helloGreet}
      >
        <h3>adskfjaskfjhdf s sfdg sfd g</h3>
      </Layout>
    </div>
  );
}

export default App;

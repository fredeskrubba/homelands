import Nav from "./components/Nav";
import { Route } from "wouter";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Login from "./pages/Login";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Footer/>
      <Route path="/" component={Home} />
      <Route path="/listings" component={Listings} />
      <Route path="/Login" component={Login} />
    </div>
  );
}

export default App;

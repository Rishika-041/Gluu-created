import React from "react";
//import Header from "../components/Header";
import Register from "./Register";
import Attendees from "./Attendees";
import history from "../history";
const Home = () => {
  return (
    <div class="w-96 max-w-sm">
    <div class="w-96 bg-slate-200 shadow-md rounded px-10 pt-10 pb-8 mb-4 box-content content-center object-center">
    <div class="md:flex md:items-center mb-6">
      <h1 class ="table mt-5 text-center">Home page</h1>
      </div>
      <div>
          <p class ="table mt-5 text-center">Register for webinar which is happening this monday on Zoom</p>
          </div>
          <form  class ="table mt-5 text-center">
            <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" variant="btn btn-success" onClick={() => history.push('/attendees')}>Attendees</button>
          </form>
          <form  class ="table mt-5 text-center">
            <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" variant="btn btn-success" onClick={() => history.push('/register')}>Register</button>
          </form>
    </div>
    </div>
    
  );
};

export default Home;
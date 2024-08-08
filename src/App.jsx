import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"


function App() {

  const [data, setData] = useState(null) // State to hold fetched data
  const [loading, setLoading] = useState(false)
  const [showModel, setShowModel] = useState(false)

  {/* setShowModle will invert the showModel boolen value */}
  function handleToggleModel(){
    setShowModel(!showModel)
  }

  {/* This hook is used to fetch DATA from API takes in a function and a dependency array */}
  useEffect(() => {

    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

      {/* 1.) Generate a key based on today's date for local storage
          2.) Checks if there is cached data for today in local storage 
          3.) If found, retrieves it, then parses it from JSON
          4.) sets it into the component’s state (data) using setData.
     */}
      const today = (new Date()).toDateString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log('Fetched from cache today');
        return;
      }

      localStorage.clear();

      {/* 1.) Fetches data from the API and converts the response to JSON.
          2.) Stores the fetched data in local storage for future use.
          3.) Sets the data into the component’s state (data) using setData.
          4.) Catches and logs any errors that occur during the fetch operation.*/ }
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log('Fetched from API today');
      } catch (err) {
        console.log('Fetch error:', err.message);
      }
    }

    fetchAPIData();

  }, []);
  
  return (
    <>
    {/* If data is available, render the Main component and pass the data as a prop(?) */}
      {data ? (<Main data={data}/>): (
        // Else display a loading state if data is not yet available (:())
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}


      {/* If showModel is true we render the Sidebar (in this case it is false so it is not displayed) */}
      {showModel && (
        <SideBar data={data} handleToggleModel={handleToggleModel} />
      )}

      {/* If data is available (&&) we render the Footer component */}
      {data && (
        <Footer data={data} handleToggleModel={handleToggleModel}/>)}
    </>
  )
}

export default App

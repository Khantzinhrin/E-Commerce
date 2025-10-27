// import React, { useState, useEffect } from "react";
// import DataFetcher from "./loading";
import NavBar from "./components/Navbar";
import Body from "./components/body";

function App() {
//   const [appData, setAppData] = useState(null);

//   useEffect(() => {
//     // Simulate fetching data from a real API
//     setTimeout(() => {
//       const fetchedData = ["Product 1", "Product 2", "Product 3"];
//       setAppData(fetchedData);
//     }, 2000); // 2 seconds delay
//   }, []);

  return (
    <div className="App">
      {/* <DataFetcher data={appData} /> */}
      <NavBar />
      <Body />
    </div>
  );
}

export default App;

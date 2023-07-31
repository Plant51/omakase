"use client";
import React, { useEffect, useState } from "react";

function MainApp() {
  const [data, setData] = useState(null);
  useEffect(() => {
    // Fetch data from the API route
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return <div>{data ? <p>{data.text}</p> : <p>Loading...</p>}</div>;
}

export default MainApp;

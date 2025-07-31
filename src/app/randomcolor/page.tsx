"use client"
import React, { useEffect, useState } from 'react';

function page() {
  const [randomColor, setRandomColor] = useState("");

  useEffect(() => {
    const colors = ["red", "white", "green", "yellow", "blue", "black"];
    const random = Math.floor(Math.random() * colors.length);
    setRandomColor(colors[random]);
  }, []);

  return (
    <div
      className='w-screen h-screen'
      style={{
        backgroundColor: randomColor
      }}></div>
  )
}

export default page
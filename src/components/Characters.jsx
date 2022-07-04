import React from "react";
import Card from "./Card";

const Characters = ({ characters = [] }) => {
  return (
    <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl">
      {characters.map((item, index) => (     
        <Card item={item} index={index}/>
        
      ))}
      
    </div>
  );
};

export default Characters;

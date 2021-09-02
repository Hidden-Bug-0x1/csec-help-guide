import React from 'react';

// add prop types
const Heading = ({title}) => {

  const handleClick = () => {
    let arrow = document.getElementById("arrow");
    let classes = arrow.classList;
    switch(classes[1]) {
      case "down":
        classes.remove("down");
        classes.add("up");
        break;
      case "up":
        classes.remove("up");
        classes.add("down");
        break;
    }
  };

  return (
    <div className="container card disable-select" onClick={handleClick}>
      <h1 className="card">{ title }</h1>
      <div id="arrow" className="arrow down"></div>
    </div>
  );
};

export default Heading;
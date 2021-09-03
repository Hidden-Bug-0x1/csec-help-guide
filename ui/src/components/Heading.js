import React, { useState } from 'react';

// add prop types
const Heading = (props) => {
  const { title, id } = props;
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    let arrow = document.getElementById(`arrow${id}`);
    let classes = arrow.classList;
    switch (classes[1]) {
      case "down":
        classes.remove("down");
        classes.add("up");
        setOpen(true);
        break;
      case "up":
        classes.remove("up");
        classes.add("down");
        setOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="container card disable-select" onClick={handleClick}>
        <h1 className="card">{title}</h1>
        <div id={`arrow${id}`} className="arrow down"></div>

      </div>
      {isOpen &&
        <div className="container bg-secondary">
          {props.children}
        </div>
      }
    </>
  );
};

export default Heading;
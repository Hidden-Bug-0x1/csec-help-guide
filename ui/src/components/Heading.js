import React, { useState } from 'react';

// add prop types
const Heading = (props) => {
  const { title, id } = props;
  const [isOpen, setOpen] = useState(false);
  const [tm, setTM] = useState(()=>{});

  const handleClick = () => {
    let arrow = document.getElementById(`arrow${id}`);
    let aclasses = arrow.classList;

    let childcont = document.getElementById(`content${id}`);
    let cclasses = childcont.classList;
    
    switch (aclasses[1]) {
      case "down":
        aclasses.remove("down");
        aclasses.add("up");
        cclasses.remove("fadeout");
        cclasses.add("fadein");
        setOpen(true);
        clearTimeout(tm);
        break;
      case "up":
        aclasses.remove("up");
        aclasses.add("down");
        cclasses.remove("fadein");
        cclasses.add("fadeout");
        setTM(setTimeout(() => {
          setOpen(false);
        }, 1000));
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
        <div id={`content${id}`} className="container bg-secondary mt-0"
        style={{
          display: (isOpen ? "block":"none")
        }}>
          {props.children}
        </div>
      
      
    </>
  );
};

export default Heading;
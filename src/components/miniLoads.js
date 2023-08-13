


import React from 'react';

function MiniLoad({ item, handleClickOneData }) {

  // const handleItemClick = () => {
    // handleClick(item.id);
  // };

  return (
    <div className="frontloadDisplay"  >
      <h3>
        Company name <span className="spaninMini">{item.companyName}</span>
      </h3>
      <p>
        Type of load: <span className="spaninMini">{item.typeofLoad}</span>
      </p>
      <p>
        From <span className="spaninMini">{item.fromLocation}</span> to{' '}
        <span className="spaninMini">{item.toLocation}</span>
      </p>
      <p>
        Rate <span className="spaninMini">{item.ratePerTonne}</span>
      </p>
      <button onClick={handleClickOneData} >more</button>

    </div>
  );
}

export default MiniLoad;
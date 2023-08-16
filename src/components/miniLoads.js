import React from 'react';

const MiniLoad = ({ item, handleClickOneData }) => {
  const handleClick = () => {
    handleClickOneData(item.userId);
  };

  return (
    <div className="frontloadDisplay">
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
      <button onClick={handleClick}>more</button>
    </div>
  );
};

export default MiniLoad;
import React from 'react';

// .awful-selfie{
//   background: url(../img/bg.jpg);
//   width: 300px;
//   height: 300px;
//   background-size: 100% auto;
//   background-repeat: no-repeat;
// }

const Test = () => {
  return (
    <div className="flex flex-col items-center w-screen p-4">
      <h1 className="text-lg font-bold">Router test</h1>
      <div>
        <img src="images/bg.jpg" />
      </div>
    </div>
  );
};

export default Test;

import React, { useState } from 'react';

import axios from 'axios';
import styled from 'styled-components';

const Component = () => {
  const [value, setValue] = useState('');
  const [responce, setResponce] = useState('');
  return (
    <Wrapper className="flex flex-col items-center w-screen p-4">
      <h1 className="text-lg font-bold">React, Express and Webpack Boilerplate Application</h1>
      <p className="text-lg">Includes React, Express, Webpack, TailwindCSS</p>
      <input
        className="text-black p-1 m-1 border border-gray-600"
        type="text"
        placeholder="enter smth"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="border border-blue-600 bg-blue-400 hover:bg-blue-600 p-2 m-2"
        onClick={() => {
          axios('/api/v1/test').then(({ data }) => setResponce(data));
        }}
      >
        Try axios request
      </button>
      <div className="text-red-600 font-bold p-2 m-2">{responce}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    font-family: helvetica;
    color: #3e3e3e;
  }
`;

export default Component;

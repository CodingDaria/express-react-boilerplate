import React, { useState } from 'react'

const Component = () => {
  const [value, setValue] = useState('')
  return (
    <div className="flex flex-col items-center w-screen p-4">
      <h1 className="text-lg font-bold">React, Express and Webpack Boilerplate Application</h1>
      <p className="text-lg">Includes React, Express, Webpack, TailwindCSS</p>
      <div className="awful-selfie"></div>
      <input
        className="text-black p-1 m-1 w-1/5 border border-gray-600"
        type="text"
        placeholder="enter smth"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default Component

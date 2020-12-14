import React, { useState } from 'react'

const Component = () => {
  const [value, setValue] = useState('')
  return (
    <div className="content">
      <h1>React, Express and Webpack</h1>
      <p className="description">React, Express, and Webpack Boilerplate Application</p>
      <div className="awful-selfie"></div>
      <input
        type="text"
        placeholder="enter smth"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default Component

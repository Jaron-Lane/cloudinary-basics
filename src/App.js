import React from 'react';
import './App.css';

function App() {

  const uploadImage = async e => {
    
  }

  return (
    <div className="App">
      <h1>Upload Images to Cloudinary with React</h1>
      <input type="file" placeholder="Upload an Image"
      onChange={uploadImage} />
    </div>
  );
}

export default App;

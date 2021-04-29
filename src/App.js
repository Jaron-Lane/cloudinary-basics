import React, { useState } from 'react';
import './App.css';

function App() {

  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState("")

  const uploadImage = async e => {
    const files = e.target.files
    const data = FormData()
    data.append("file", files[0])
    data.append("upload_preset", "practiceimages")
    setLoading(true)
  }

  return (
    <div className="App">
      <h1>Upload Images to Cloudinary with React</h1>
      <input type="file" name="file" placeholder="Upload an Image"
      onChange={uploadImage} />
    </div>
  );
}

export default App;

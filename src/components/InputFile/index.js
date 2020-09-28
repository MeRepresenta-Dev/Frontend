import React, { useState } from 'react'

export default function InputFile() {
  const [imageURI, getImageURI] = useState(null)
  const [imgTag, handleImgTag] = useState(null)
  const id = "algumId"
  
  const buildImgTag = () => {
    if (imageURI !== null)
    handleImgTag(
        <div className="row">
          <div className="small-9 small-centered columns">
            <img className="thumbnail" src={imageURI} />
          </div>
        </div>)

    return imgTag
  }
  
  const readURI = (e) => {
    if (e.target.files && e.target.files[0]){
      let reader = new FileReader()

      reader.onload = function(ev){
        getImageURI({imageURI:ev.target.result})
      }

      reader.readAsDataURL(e.target.files[0])
    }
  }
  
  const handleChange = (e) => {
    readURI(e);
    buildImgTag();
  }

  return (
    <div>
      <label
        htmlFor={id}
        className="button">
        Upload an image
      </label>
      <input
        id={id}
        type="file"
        onChange={handleChange()}
        className="show-for-sr" 
      />
      {imgTag}
    </div>
  )
}

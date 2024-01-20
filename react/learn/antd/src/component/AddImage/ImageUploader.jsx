import React, { useState } from "react";

function ImageUploader() {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setSelectedImages((prevSelectedImages) => [
      ...prevSelectedImages,
      ...selectedFiles,
    ]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h2>Add Image</h2>
      </div>
      <div>
        <h3>Recommended size (1000px*1000px)</h3>
      </div>

      <label htmlFor="file-upload">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            gap: "10px",
          }}
        >
          {selectedImages.map((image, index) => (
            <div
              style={{
                border: "solid 1px red",
                padding: "10px",
              }}
            >
              <img
                style={{
                  display: "inline-block",
                  width: "100px",
                  height: "100px",
                }}
                key={index}
                src={URL.createObjectURL(image)}
                alt={`Image ${index}`}
                className="selected-image"
              />
            </div>
          ))}
          <div
            style={{
              border: "solid 1px red",
              padding: "10px",
            }}
          >
            <img
              src="upload-image-ui.png" // Replace with your image icon
              alt="Add Image"
              style={{
                display: "inline-block",
                width: "100px",
                height: "100px",
              }}
            />
            <input
              type="file"
              id="file-upload"
              accept="all"
              multiple
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <div style={{ color: "blue" }}>Click here to add image</div>
          </div>
        </div>
      </label>
    </div>
  );
}

export default ImageUploader;

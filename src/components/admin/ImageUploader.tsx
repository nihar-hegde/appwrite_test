"use client";
import { useState, ChangeEvent } from "react";

interface ImageUploadProps {
  images: File[];
  setImages: (images: File[]) => void; // Add this prop
}

export const ImageUpload = ({ images, setImages }: ImageUploadProps) => {
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-4">
      <label htmlFor="image-upload" className="cursor-pointer">
        <div className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg p-4">
          <p className="text-gray-600">
            Drag and drop images here, or click to select.
          </p>
        </div>
      </label>
      <input
        id="image-upload"
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
      <div className="flex flex-wrap mt-4">
        {images.map((image, index) => (
          <div key={index} className="relative m-2">
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-lg"
            />
            <button
              onClick={() => removeImage(index)}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 focus:outline-none"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

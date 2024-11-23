import axios from 'axios';

const url = 'https://api.cloudinary.com/v1_1/dnnymoz37/image/upload';

export const UploadImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'e-commerce'); // Your Cloudinary upload preset

  try {
    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data; // Return the Cloudinary response data
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error; // Rethrow the error to handle it in calling code
  }
};

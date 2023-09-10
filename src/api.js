// api.js
import axios from 'axios';

const API_BASE_URL = 'https://api.whatindiathinks.com/public/api';

const handleResponse = (response) => {
  if (response.status !== 200) {
    throw new Error('Network response was not ok.');
  }
  return response.data;
};

export const registerUser = async (formData) => {
  try {
    const requestOptions = {
      method: 'post',
      url: `${API_BASE_URL}/newregister/register`,
      data: formData,
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error registering user.');
  }
};

export const blogPost = async (formData) => {
    try {
      const requestOptions = {
        method: 'post',
        url: `${API_BASE_URL}/blog/blogpost`,
        data: formData,
      };
  
      const response = await axios(requestOptions);
      return handleResponse(response);
    } catch (error) {
      throw new Error('Error registering user.');
    }
  };

  export const registerAllUser = async () => {
    try {
      const requestOptions = {
        method: 'get',
        url: `${API_BASE_URL}/select/getdata`,
        // data: formData,
      };
  
      const response = await axios(requestOptions);
      return handleResponse(response);
    } catch (error) {
      throw new Error('Error registering user.');
    }
  };

  export const allContact = async () => {
    try {
      const requestOptions = {
        method: 'get',
        url: `${API_BASE_URL}/contactform/getcontactdetails`,
        // data: formData,
      };
  
      const response = await axios(requestOptions);
      return handleResponse(response);
    } catch (error) {
      throw new Error('Error registering user.');
    }
  };
  export const blogComment = async () => {
    try {
      const requestOptions = {
        method: 'get',
        url: `${API_BASE_URL}/comment/commentget`,
        // data: formData,
      };
  
      const response = await axios(requestOptions);
      return handleResponse(response);
    } catch (error) {
      throw new Error('Error registering user.');
    }
  };

  export const pollComment = async () => {
    try {
      const requestOptions = {
        method: 'get',
        url: `${API_BASE_URL}/pole/pollcomment`,
        // data: formData,
      };
  
      const response = await axios(requestOptions);
      return handleResponse(response);
    } catch (error) {
      throw new Error('Error registering user.');
    }
  };

  export const registerLogin = async (formData) => {
    try {
      const requestOptions = {
        method: 'post',
        url: `${API_BASE_URL}/loginadmin/admin`,
        data: formData,
      };
  
      const response = await axios(requestOptions);
      return handleResponse(response);
    } catch (error) {
      throw new Error('Error registering user.');
    }
  };
    
import axios from 'axios';

const API_URL = "http://localhost:4000/api";

export const subscribeToNewsletter = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/subscribe`, { email });
    return response.data;
  } catch (error) {
    throw new Error("Error subscribing to newsletter");
  }
};

export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_URL}/orders`, orderData);
    return response.data;
  } catch (error) {
    throw new Error("Error creating order");
  }
};
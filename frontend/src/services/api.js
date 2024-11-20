import axios from 'axios';

// Set the base URL for the backend API
const API = axios.create({
  baseURL: 'http://localhost:5001/api',
});

// Function to set Authorization token (for protected routes)
export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common['Authorization'];
  }
};

const token = localStorage.getItem('token');
if (token) {
    setAuthToken(token);
}

// Listing APIs
export const fetchListings = () => API.get('/listings');
export const fetchListingById = (id) => API.get(`/listings/${id}`);
export const createListing = (listingData) => API.post('/listings', listingData);

export default API;

API.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response?.data || error.message);
        alert(error.response?.data?.message || 'An error occurred'); // Replace with toast later
        return Promise.reject(error);
    }
);


// Authentication APIs
export const registerUser = (userData) => API.post('/auth/register', userData);
export const loginUser = async (credentials) => {
  const response = await API.post('/auth/login', credentials);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    setAuthToken(response.data.token);
  }
  return response.data;
};


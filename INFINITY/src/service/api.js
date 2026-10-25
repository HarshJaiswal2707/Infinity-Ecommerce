import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data);
    } catch (error) {
        console.log("Error while calling signup api:", error);
        return null;
    }
};

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data);
    } catch (error) {
        console.log("Error while calling login api:", error);
        return null;
    }
};


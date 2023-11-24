import axios from "axios";

const axiosRequests = async (url) => {
  try {
    const data = await axios(url);
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};

export default axiosRequests;

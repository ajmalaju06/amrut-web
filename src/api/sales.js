import { post } from "./requestManager";

const getSalesData = async(values) => {
  try {
    const { data } = await post("/get-sales", values);
    return data;
  } catch (error) {
    return error;
  }
},

export default {
  getSalesData,
};
import { post } from "./requestManager";

const getCustomerData = async(values) => {
  try {
    const { data } = await post("/get-customer", values);
    return data;
  } catch (error) {
    return error;
  }
},

export default {
  getCustomerData,
};

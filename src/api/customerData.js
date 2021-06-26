import { post } from "./requestManager";

const getCustomerData = (values) => {
  try {
    const { data } = await post("/get-customer", values);
    return data;
  } catch (error) {
    return error;
  }
},

export default getCustomerData;

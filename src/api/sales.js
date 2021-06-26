import { post } from "./requestManager";

export const getSalesData = async(values) => {
  try {
    const { data } = await post("/get-sales", values);
    return data;
  } catch (error) {
    return error;
  }
},

import { post } from "./requestManager";

export const loginUser =  async(values) => {
  try {
    const { data } = await post("/login", values);
    return data;
  } catch (error) {
    return error;
  }
},

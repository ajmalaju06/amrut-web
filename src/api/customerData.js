import { post } from "./requestManager";

export default {
  async getCustomerData(values) {
    try {
      const { data } = await post("/get-customer", values);
      return data;
    } catch (error) {
      return error;
    }
  },
};

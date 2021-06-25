import { post } from "./requestManager";

export default {
  async getSalesData(values) {
    try {
      const { data } = await post("/get-sales", values);
      return data;
    } catch (error) {
      return error;
    }
  },
};

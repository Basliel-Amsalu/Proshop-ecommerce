import { apiSlice } from "./apiSlice";
import { ORDERS_URL } from "../constants";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addOrderItems: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: "POST",
        body: order,
      }),
    }),
    getMyOrders: builder.mutation({
      query: () => ({
        url: `${ORDERS_URL}/mine`,
      }),
    }),
  }),
});

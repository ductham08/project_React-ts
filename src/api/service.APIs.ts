import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { I_Service } from "../interfaces/service.interface";

export const Service_APIs = createApi({
  reducerPath: "product_Api",
  tagTypes: ["product"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://login-1d6b8-default-rtdb.firebaseio.com",
  }),
  endpoints: (builder) => ({
    getServices: builder.query<I_Service[], void>({
      query: () => "/Services.json",
    }),
  }),
});

export const { useGetServicesQuery } = Service_APIs;

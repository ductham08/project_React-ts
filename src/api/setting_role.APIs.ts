import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { I_History } from "../interfaces/history.interface";
import { I_Role } from "../interfaces/role.interface";

export const Role_settingAPIs = createApi({
  reducerPath: "product_Api",
  tagTypes: ["product"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://login-1d6b8-default-rtdb.firebaseio.com",
  }),
  endpoints: (builder) => ({
    getRole_setting: builder.query<I_Role[], void>({
      query: () => "/Role_setting.json",
    }),
  }),
});

export const { useGetRole_settingQuery } = Role_settingAPIs;

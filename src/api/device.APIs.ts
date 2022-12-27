import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { device } from "../interfaces/device.interface";

export const deviceAPIs = createApi({
  reducerPath: "product_Api",
  tagTypes: ["product"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://login-1d6b8-default-rtdb.firebaseio.com/",
  }),
  endpoints: (builder) => ({
    getDevices: builder.query<device[], void>({
      query: () => "Devices.json",
    }),
    updateDevices: builder.mutation<{ success: boolean; id: any }, number>({ 
      query(device) { 
            return { 
                url: 'Devices.json', 
                method: 'PUT', 
                body: device 
            } 
        }, 
    }),
  }),
});

export const { useGetDevicesQuery, useUpdateDevicesMutation } = deviceAPIs;

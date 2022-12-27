import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { I_History } from "../interfaces/history.interface"




export const History_settingAPIs = createApi({
    reducerPath: "product_Api",
    tagTypes: ["product"],
    baseQuery: fetchBaseQuery({ baseUrl: "https://login-1d6b8-default-rtdb.firebaseio.com" }),
    endpoints: (builder) => ({
        getHistory_setting: builder.query<I_History[], void>({
            query: () => "/History_setting.json"
        })
    })

})

export const { useGetHistory_settingQuery } = History_settingAPIs
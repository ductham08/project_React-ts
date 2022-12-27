import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { I_User } from "../interfaces/user.interface"




export const userAPIs = createApi({
    reducerPath: "product_Api",
    tagTypes: ["product"],
    baseQuery: fetchBaseQuery({ baseUrl: "https://login-1d6b8-default-rtdb.firebaseio.com" }),
    endpoints: (builder) => ({
        getUsers: builder.query<I_User[], void>({
            query: () => "/Users.json"
        })
    })

})

export const { useGetUsersQuery } = userAPIs
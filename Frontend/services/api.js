import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shiftyApi = createApi({
  reducerPath: "shiftyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8800/",
    prepareHeaders: (headers) => {
      // const token = getState().auth.token;
      const token = null; // setup auth token here
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllShifts: builder.query({
      query: () => "/shift",
    }),
    getShift: builder.query({
      query: (id) => `/shifts/${id}`,
    }),
    createShift: builder.mutation({
      query: (shift) => ({
        url: "/shifts",
        method: "POST",
        body: shift,
      }),
      invalidatesTags: ["shifts"],
    }),
    updateShift: builder.mutation({
      query: (shift) => ({
        url: `/shifts/${shift.id}`,
      }),
    }),
    getAllStaffs: builder.query({
      query: () => "/user",
    }),
    getAllClients: builder.query({
      query: () => "/client",
    }),
  }),
});

export const { useGetAllShiftsQuery, useGetShiftQuery, useCreateShiftMutation, useUpdateShiftMutation, useGetAllStaffsQuery, useGetAllClientsQuery } =
  shiftyApi;

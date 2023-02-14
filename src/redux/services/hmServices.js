import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const hmServicesApi = createApi({
  reducerPath: "hmServicesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", process.env.REACT_APP_RAPID_API_HM_KEY);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getSearchResults: builder.query({
      query: () =>
        "/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN",
    }),
    getProductDetails: builder.query({
      query: ({ clothCode }) =>
        `/products/detail?lang=en&country=us&productcode=${clothCode}`,
    }),
  }),
});

export const { useGetSearchResultsQuery, useGetProductDetailsQuery } =
  hmServicesApi;
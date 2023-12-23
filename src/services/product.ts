import BaseResponse from "@/types/response";
import { Product } from "@prisma/client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

interface ProductsResponse extends BaseResponse {
  data: {
    total: number;
    data: Product[];
  };
}

interface productAPIParams {
  page?: string | undefined;
}

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/product",
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductsResponse, productAPIParams>({
      query: ({ page }) => ({
        url: "/",
        params: {
          page: page || undefined,
        },
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;

import { mainApi } from './index'

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getPruducts: build.query({
      query: () => '/products',
    }),
  }),
  overrideExisting: false,
})

export const { useGetPruductsQuery } = extendedApi
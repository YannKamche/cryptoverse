import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//Create new Headers for the News from RapidAPI
const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

//News Api
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      //pass newsCategory and count of news to the getCryptoNews query
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

//export the useQuery
export const { useGetCryptoNewsQuery } = cryptoNewsApi;

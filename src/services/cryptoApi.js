import create from '@ant-design/icons/lib/components/IconFont';
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';



const cryptoApiHeaders={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    //'x-rapidapi-key': '5820da373bmsh060d85d1ff3edefp13e661jsndea78bcfd3fc'
} 

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest =(url) => ({url,headers:cryptoApiHeaders})


export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptos:builder.query({
            query:() => createRequest('/coins') 
    })
    }) 
    
});
export const {
    useGetCryptosQuery,
} =cryptoApi;
    
    
 
import { AppProps } from 'next/app';
import { theme } from '../styles/theme';

import { QueryClientProvider, QueryClient } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactQueryDevtools } from 'react-query/devtools'
import { SidebarDrawerProvider } from '../contexts/SideDrawerContext';

import { makeServer } from '../services/mirage';
import { queryClient } from '../services/mirage/queryClient';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>

    <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp

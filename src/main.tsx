import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import router from './Routes.tsx';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

const client = new QueryClient();
const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={client}>
      <RouterProvider router={router} />
      </QueryClientProvider>

    </ChakraProvider>
  </StrictMode>,
);

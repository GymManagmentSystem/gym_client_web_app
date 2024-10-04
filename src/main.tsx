import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom'; // Ensure you are importing from 'react-router-dom'
import router from './Routes.tsx'; // Adjust the path as necessary

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>,
);

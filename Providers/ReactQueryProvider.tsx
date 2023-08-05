'use client';
import { FC } from 'react';
import {  QueryClient, QueryClientProvider } from 'react-query';
interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const ReactQueryProvider: FC<Props> = ({ children }): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;

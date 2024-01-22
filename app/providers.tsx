"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: any) {
  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: { staleTime: 60 * 1000 },
      },
    });
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="bottom-right" />
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  QueryClient,
  QueryClientProvider,
  useQueryErrorResetBoundary,
} from "react-query";
import { Header } from "../components/header";
import { Navigation } from "./navigation";
import { Button } from "../components/ui/button";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
      staleTime: 1000 * 60 * 60 * 30, // 1 month
    },
  },
});

const MainErrorBoundaryFallbackRender = (props: FallbackProps) => {
  const retry = () => props.resetErrorBoundary();
  return (
    <div>
      There was an error! <Button onClick={retry}>Try again</Button>
      <pre style={{ whiteSpace: "normal" }}>{props.error.message}</pre>
    </div>
  );
};

function App() {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <Header />
        <ErrorBoundary
          fallbackRender={MainErrorBoundaryFallbackRender}
          onReset={reset}
        >
          <Navigation />
        </ErrorBoundary>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </div>
  );
}

export default App;

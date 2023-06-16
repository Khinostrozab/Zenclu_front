import { memo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./layout/router";
import GlobalStateProvider from "./context/global-state-provider";
import "./App.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalStateProvider>
      <RouterProvider router={router} />;
    </GlobalStateProvider>
  </QueryClientProvider>
);

export default memo(App);

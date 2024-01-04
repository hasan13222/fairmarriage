import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./Providers/AuthProvider.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const queryClient = new QueryClient();

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        
      <Elements stripe={stripePromise}>
        <App />
        </Elements>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

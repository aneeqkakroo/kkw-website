import { Analytics } from "@vercel/analytics/react";
import { AppRoutes } from "./router/routes";

export default function App() {
  return (
    <>
      <AppRoutes />
      <Analytics />   {/* 👈 Tracks all page views */}
    </>
  );
}

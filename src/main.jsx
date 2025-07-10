import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CoinContextProvider from "./context/CoinContext.jsx";

const root = createRoot(document.getElementById("root"));

try {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <CoinContextProvider>
          <App />
        </CoinContextProvider>
      </BrowserRouter>
    </StrictMode>
  );
} catch (error) {
  console.error("Error rendering app:", error);
  root.render(
    <div className="error-fallback">
      <h1>Welcome to CRYPTO X TRACKER</h1>
      <p>Loading application...</p>
      <p className="error-note">If this persists, please refresh the page.</p>
    </div>
  );
}

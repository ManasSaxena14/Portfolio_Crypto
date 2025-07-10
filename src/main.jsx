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
    <div style={{
      minHeight: "100vh",
      color: "white",
      background: "linear-gradient(to right, #2b2e4a, #4b6cb7, #182848)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }}>
      <h1>Welcome to Crypto Portfolio</h1>
      <p>Loading application...</p>
      <p style={{fontSize: "12px", marginTop: "20px"}}>If this persists, please refresh the page.</p>
    </div>
  );
}

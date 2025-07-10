import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));

try {
  console.log("Starting CRYPTO X TRACKER app...");
  root.render(
  <StrictMode>
        <App />
  </StrictMode>
);
  console.log("CRYPTO X TRACKER app rendered successfully!");
} catch (error) {
  console.error("Error rendering CRYPTO X TRACKER app:", error);
  root.render(
    <div style={{
      minHeight: "100vh",
      color: "white",
      background: "linear-gradient(to right, #2b2e4a, #4b6cb7, #182848)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{fontSize: "2.5rem", marginBottom: "1rem"}}>CRYPTO X TRACKER</h1>
      <p style={{fontSize: "1.2rem", marginBottom: "0.5rem"}}>Error Loading Application</p>
      <p style={{fontSize: "0.75rem", marginTop: "1.25rem", color: "#ccc"}}>Error: {error.message}</p>
      <button 
        onClick={() => window.location.reload()} 
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#7929ff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Refresh Page
      </button>
    </div>
  );
}

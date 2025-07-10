import React from "react";

const App = () => {
  console.log("App component rendering");
  
  return (
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
      <h1 style={{fontSize: "3rem", marginBottom: "1rem"}}>CRYPTO X TRACKER</h1>
      <p style={{fontSize: "1.5rem", marginBottom: "2rem"}}>Welcome to the Crypto Tracker!</p>
      <div style={{
        background: "rgba(255, 255, 255, 0.1)",
        padding: "2rem",
        borderRadius: "15px",
        backdropFilter: "blur(10px)",
        maxWidth: "600px"
      }}>
        <p style={{fontSize: "1.2rem", marginBottom: "1rem"}}>✅ App is working!</p>
        <p style={{fontSize: "1rem", marginBottom: "1rem", color: "#ccc"}}>React is successfully rendering</p>
        <p style={{fontSize: "0.9rem", color: "#aaa"}}>If you can see this, the app is working correctly!</p>
      </div>
    </div>
  );
};

export default App;

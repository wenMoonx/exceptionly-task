import "./App.css";
import { Box } from "@mui/material";
import { WelcomeBoard } from "./components/widgets/WelcomeBoard";
import { SignUpBoard } from "./components/widgets/SignUpBoard";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        component="section"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          width: 850,
          margin: "auto",
          background: " #FFFFFF",

          /* 1 Elevation */
          boxShadow:
            "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)",
          borderRadius: "4px",
        }}
      >
        <WelcomeBoard />
        <SignUpBoard />
      </Box>
    </div>
  );
}

export default App;

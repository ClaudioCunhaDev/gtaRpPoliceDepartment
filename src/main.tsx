import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { VisibilityProvider } from "./providers/VisibilityProvider";
import { RecoilRoot } from "recoil";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <VisibilityProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </VisibilityProvider>
  </React.StrictMode>
);

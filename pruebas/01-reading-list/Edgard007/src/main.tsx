import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// ==> Contexts
import { ConfigProvider } from "@utils/providers/ConfigProvider";
import { LibraryProvider } from "@utils/providers/LibraryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider>
      <LibraryProvider>
        <App />
      </LibraryProvider>
    </ConfigProvider>
  </React.StrictMode>
);

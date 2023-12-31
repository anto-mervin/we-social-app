import React from "react";
import ReactDOM from "react-dom/client";
import { Amplify } from "aws-amplify";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";
import "@fontsource/poppins/500.css";
import "@aws-amplify/ui-react/styles.css";
import "./index.css";
import "@fontsource/poppins/500.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AmplifyProvider>
    <App />
  </AmplifyProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

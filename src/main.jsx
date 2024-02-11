import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
	<GoogleOAuthProvider clientId='181727105626-pr3au99j5is16fdgbosduie6d8k7oe5l.apps.googleusercontent.com'>
		<App />
	</GoogleOAuthProvider>
);

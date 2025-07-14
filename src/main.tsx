// import React from "react";
import { HelmetProvider } from "react-helmet-async";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	// <React.StrictMode>
	<HelmetProvider>
		<App />
	</HelmetProvider>
	// </React.StrictMode>
);

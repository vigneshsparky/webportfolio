import { createRoot } from "react-dom/client";
import App from "./App";
const value = document.getElementById("head");
const element = createRoot(value);
element.render(<App />);

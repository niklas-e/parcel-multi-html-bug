import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Couldn't get root for react");
const root = createRoot(rootElement);
root.render(<div>This is A</div>);

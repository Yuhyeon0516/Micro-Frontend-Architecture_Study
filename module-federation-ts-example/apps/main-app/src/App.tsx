import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { ErrorBoundary } from "react-error-boundary";

const Button = React.lazy(() => import("component_app/Button"));

const App = () => (
    <div className="container">
        <div>Name: main-app</div>
        <div>Framework: react</div>
        <div>Language: TypeScript</div>
        <div>CSS: Empty CSS</div>
        <ErrorBoundary fallback={<div>Error</div>}>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Button
                    onClick={() => {
                        alert("clicked!!");
                    }}
                >
                    Primary
                </Button>
            </React.Suspense>
        </ErrorBoundary>
        <ErrorBoundary fallback={<div>Error</div>}>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Button type="warning">Warning</Button>
            </React.Suspense>
        </ErrorBoundary>
    </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);

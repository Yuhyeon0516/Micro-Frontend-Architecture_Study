import React from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

import "./index.css";

// import Button from "component_app/Button";
import { map, join } from "lodash";
import { NameProvider } from "shared-library";

const Button = React.lazy(() => import("component_app/Button"));

const App = () => (
    <NameProvider name="hello">
        <div className="container">
            <div>Name: main-app</div>
            <div>Framework: react</div>
            <div>Language: JavaScript</div>
            <div>CSS: Empty CSS</div>
            <div>{join(map(["1", "2"]), "-")}</div>
            {/* <Button
                onClick={() => {
                    console.log("Clicked!!");
                }}
            >
                Primary
            </Button>
            <Button type="warning">Warning</Button> */}
            <ErrorBoundary fallback={<div>Error</div>}>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Button
                        onClick={() => {
                            console.log("Clicked!!");
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
    </NameProvider>
);

createRoot(document.getElementById("app")).render(<App />);

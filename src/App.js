import React from "react";
import Header from "./components/header";
import Pages from "./components/pages";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Pages/>
            </main>
        </div>
    );
}

export default App;

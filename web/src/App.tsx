import { Route, Routes } from "react-router-dom"
import CreateNote from "./screens/CreateNote"
import Home from "./screens/Home"

import "./styles/index.css"

function App() {
    return (
        <Routes>
            {/* insert each app route here with its respective page */}
            <Route path="/" element={<Home />} />
            <Route path="/create/" element={<CreateNote />} />
        </Routes>
    )
}

export default App

import { Route, Routes } from "react-router-dom"
import CreateNote from "./screens/CreateNote"
import EditNote from "./screens/EditNote"
import Home from "./screens/Home"
import NotFound from "./screens/NotFound"
import ViewNote from "./screens/ViewNote"

import "./styles/index.css"

function App() {
    return (
        <Routes>
            {/* insert each app route here with its respective page */}
            <Route path="/" element={<Home />} />
            <Route path="/create/" element={<CreateNote />} />
            <Route path="/note/:id/" element={<ViewNote />} />
            <Route path="/note/:id/edit/" element={<EditNote />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App

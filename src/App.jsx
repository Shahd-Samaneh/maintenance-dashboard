import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateRequest from "./pages/createRequest/CreateRequest";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to="/dashboard" replace />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="create-request" element={<CreateRequest />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
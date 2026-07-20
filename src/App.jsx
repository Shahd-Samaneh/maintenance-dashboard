import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateRequest from "./pages/createRequest/CreateRequest";
import RequestDetails from "./pages/requestDetails/RequestDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="create-request" element={<CreateRequest />} />
          <Route path="request/:id" element={<RequestDetails />} />
          <Route path="edit-request/:id" element={<CreateRequest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
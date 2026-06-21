import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RegistrationList from "./pages/RegistrationList";
import AddRegistration from "./pages/AddRegistration";
import EditRegistration from "./pages/EditRegistration";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/registrations"
          element={<RegistrationList />}
        />

        <Route
          path="/add"
          element={<AddRegistration />}
        />

        <Route
          path="/edit/:id"
          element={<EditRegistration />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
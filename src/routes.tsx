import { Route, Routes } from "react-router-dom";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<i>dashboard</i>} />
        <Route path="/settings" element={<i>settings</i>} />
        <Route path="/logout" element={<i>logout</i>} />
      </Route>
    </Routes>
  );
}

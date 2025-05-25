import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpForm from "./features/user/SignUpForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
}

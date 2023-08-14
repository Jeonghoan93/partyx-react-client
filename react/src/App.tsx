import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import BaseStyles from "./BaseStyles";
import AppRoutes from "./routes/route";

function App() {
  return (
    <>
      <BaseStyles />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Toaster toastOptions={{ duration: 6000 }} />
    </>
  );
}

export default App;

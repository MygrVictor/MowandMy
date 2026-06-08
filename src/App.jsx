import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const Landing = lazy(() => import("./pages/Landing"));
const Home = lazy(() => import("./pages/Home"));
const Restaurant = lazy(() => import("./pages/Restaurant"));
const CoffeeShop = lazy(() => import("./pages/CoffeeShop"));
const Coworking = lazy(() => import("./pages/Coworking"));
const Workshops = lazy(() => import("./pages/Workshops"));
const Admin = lazy(() => import("./admin/Admin"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const NotFound = lazy(() => import("./pages/NotFound"));

function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf8f4]">
      <div className="w-8 h-8 border-4 border-[#BD6525] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/coffee" element={<CoffeeShop />} />
          <Route path="/coworking" element={<Coworking />} />
          <Route path="/ateliers" element={<Workshops />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

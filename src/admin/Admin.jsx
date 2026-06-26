import { useState } from "react";
import { Link } from "react-router-dom";
import WorkshopForm from "./WorkshopForm";
import MenuEditor from "./MenuEditor";
import ReviewEditor from "./ReviewEditor";
import { DEFAULT_MENU, DEFAULT_BRUNCH } from "../data/defaults";

function HoursEditor({ hours, setHours }) {
  function updateDay(day, value) {
    const next = { ...hours, [day]: value };
    setHours(next);
    localStorage.setItem("openingHours", JSON.stringify(next));
  }

  const days = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-[#c27a45] text-xl mb-6">Horaires d'ouverture</h3>
      <div className="space-y-3">
        {days.map((d) => (
          <div key={d} className="flex items-center gap-4">
            <label className="w-24 text-[#3d3d3d] font-medium text-sm">
              {d}
            </label>
            <input
              value={hours[d] || ""}
              onChange={(e) => updateDay(d, e.target.value)}
              placeholder="09:00 - 18:00 ou Fermé"
              className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#9caa8e] transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Admin() {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem("admin-auth") === "true",
  );
  const [password, setPassword] = useState("");
  const [workshops, setWorkshops] = useState(() => {
    const raw = localStorage.getItem("workshops");
    return raw ? JSON.parse(raw) : [];
  });
  const [hours, setHours] = useState(() => {
    const h = localStorage.getItem("openingHours");
    return h ? JSON.parse(h) : {};
  });
  const [menu, setMenu] = useState(() => {
    const savedMenu = localStorage.getItem("restaurantMenu");
    return savedMenu ? JSON.parse(savedMenu) : DEFAULT_MENU;
  });
  const [brunch, setBrunch] = useState(() => {
    const savedBrunch = localStorage.getItem("restaurantBrunch");
    return savedBrunch ? JSON.parse(savedBrunch) : DEFAULT_BRUNCH;
  });
  const [avis, setAvis] = useState(() => {
    const savedAvis = localStorage.getItem("avis");
    return savedAvis ? JSON.parse(savedAvis) : [];
  });
  const [activeTab, setActiveTab] = useState("ateliers");

  function login(e) {
    e.preventDefault();
    // mot de passe simple pour démo — changez en production
    if (password === "admin") {
      sessionStorage.setItem("admin-auth", "true");
      setAuthed(true);
    } else {
      alert("Mot de passe incorrect");
    }
  }

  function addWorkshop(w) {
    const next = [w, ...workshops];
    setWorkshops(next);
    localStorage.setItem("workshops", JSON.stringify(next));
  }

  function removeWorkshop(id) {
    const next = workshops.filter((w) => w.id !== id);
    setWorkshops(next);
    localStorage.setItem("workshops", JSON.stringify(next));
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#faf8f4] flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <h2 className="text-[#c27a45] text-3xl font-serif mb-2">
            Back-office
          </h2>
          <p className="text-[#6b6b6b] text-sm mb-8">
            Mow & My — Administration
          </p>
          <form onSubmit={login} className="space-y-4">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Mot de passe"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-center focus:outline-none focus:border-[#9caa8e] transition"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#9caa8e] text-white font-medium rounded-lg hover:bg-[#8a9a7c] transition"
            >
              Se connecter
            </button>
          </form>
          <Link
            to="/home"
            className="text-[#c27a45] text-sm mt-4 inline-block hover:underline"
          >
            ← Retour au site
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f4]">
      {/* Header Admin */}
      <header className="bg-[#c27a45] text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-serif">Mow & My — Back-office</h1>
          <Link
            to="/home"
            className="text-white/80 hover:text-white text-sm transition"
          >
            ← Retour au site
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-[#c27a45] text-2xl font-serif mb-8">
          Gestion du contenu
        </h2>

        {/* Onglets */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("ateliers")}
            className={`pb-3 px-4 text-sm font-medium transition ${
              activeTab === "ateliers"
                ? "text-[#BD6525] border-b-2 border-[#BD6525]"
                : "text-[#9caa8e] hover:text-[#BD6525]"
            }`}
          >
            🎨 Ateliers
          </button>
          <button
            onClick={() => setActiveTab("menu")}
            className={`pb-3 px-4 text-sm font-medium transition ${
              activeTab === "menu"
                ? "text-[#BD6525] border-b-2 border-[#BD6525]"
                : "text-[#9caa8e] hover:text-[#BD6525]"
            }`}
          >
            🍽️ Carte Restaurant
          </button>
          <button
            onClick={() => setActiveTab("horaires")}
            className={`pb-3 px-4 text-sm font-medium transition ${
              activeTab === "horaires"
                ? "text-[#BD6525] border-b-2 border-[#BD6525]"
                : "text-[#9caa8e] hover:text-[#BD6525]"
            }`}
          >
            🕐 Horaires
          </button>
          <button
            onClick={() => setActiveTab("avis")}
            className={`pb-3 px-4 text-sm font-medium transition ${
              activeTab === "avis"
                ? "text-[#BD6525] border-b-2 border-[#BD6525]"
                : "text-[#9caa8e] hover:text-[#BD6525]"
            }`}
          >
            ⭐ Avis clients
          </button>
        </div>

        {/* Contenu des onglets */}
        {activeTab === "ateliers" && (
          <div className="grid lg:grid-cols-2 gap-8">
            <WorkshopForm onAdd={addWorkshop} />
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-[#c27a45] text-xl mb-4">
                Ateliers programmés
              </h3>
              {workshops.length === 0 ? (
                <p className="text-[#6b6b6b] text-sm italic">
                  Aucun atelier pour le moment.
                </p>
              ) : (
                <ul className="space-y-4">
                  {workshops.map((w) => (
                    <li
                      key={w.id}
                      className="border-l-4 border-[#9caa8e] pl-4 py-2 bg-[#faf8f4] rounded-r-lg"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <strong className="text-[#3d3d3d]">{w.title}</strong>
                          <span className="text-xs text-[#9caa8e] ml-2">
                            {w.date}
                          </span>
                          <p className="text-[#6b6b6b] text-sm mt-1">
                            {w.description}
                          </p>
                          {w.reservationPhone && (
                            <p className="text-[#BD6525] text-sm mt-2">
                              Réservation : {w.reservationPhone}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeWorkshop(w.id)}
                          className="text-red-500 text-xs hover:text-red-700 transition ml-4"
                        >
                          Supprimer
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {activeTab === "menu" && (
          <MenuEditor
            menu={menu}
            setMenu={setMenu}
            brunch={brunch}
            setBrunch={setBrunch}
          />
        )}

        {activeTab === "horaires" && (
          <div className="max-w-xl">
            <HoursEditor hours={hours} setHours={setHours} />
          </div>
        )}

        {activeTab === "avis" && <ReviewEditor avis={avis} setAvis={setAvis} />}
      </main>
    </div>
  );
}

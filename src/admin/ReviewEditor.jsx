import { useEffect, useState } from "react";

function normalizeReview(item) {
  return {
    id: item?.id || `avis-${Date.now()}`,
    nom: item?.nom || "",
    texte: item?.texte || "",
    note: item?.note ? String(item.note) : "5",
    date: item?.date || "",
  };
}

function loadSeedAvis() {
  const raw = localStorage.getItem("avis");
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }
  return [];
}

export default function ReviewEditor({ avis, setAvis }) {
  const [newReview, setNewReview] = useState({
    nom: "",
    texte: "",
    note: "5",
    date: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (avis.length) return;

    let cancelled = false;

    fetch("/avis.json", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (cancelled || !Array.isArray(data)) return;
        const next = data.map(normalizeReview);
        setAvis(next);
        localStorage.setItem("avis", JSON.stringify(next));
      })
      .catch(() => {
        const saved = loadSeedAvis();
        if (!cancelled && saved.length) {
          setAvis(saved);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [avis.length, setAvis]);

  function persist(next) {
    setAvis(next);
    localStorage.setItem("avis", JSON.stringify(next));
  }

  function resetForm() {
    setNewReview({ nom: "", texte: "", note: "5", date: "" });
    setEditingId(null);
  }

  function submit(e) {
    e.preventDefault();
    if (!newReview.nom.trim() || !newReview.texte.trim()) return;

    const normalized = {
      id: editingId || `avis-${Date.now()}`,
      nom: newReview.nom.trim(),
      texte: newReview.texte.trim(),
      note: Math.max(1, Math.min(5, Number(newReview.note) || 5)),
      date: newReview.date || new Date().toISOString().slice(0, 10),
    };

    const next = editingId
      ? avis.map((item) => (item.id === editingId ? normalized : item))
      : [normalized, ...avis];

    persist(next);
    resetForm();
  }

  function startEdit(review) {
    setEditingId(review.id);
    setNewReview({
      nom: review.nom || "",
      texte: review.texte || "",
      note: String(review.note || 5),
      date: review.date || "",
    });
  }

  function removeReview(id) {
    const next = avis.filter((review) => review.id !== id);
    persist(next);
    if (editingId === id) resetForm();
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-[#c27a45] text-xl mb-6">
          {editingId ? "Modifier un avis" : "Ajouter un avis"}
        </h3>

        <form onSubmit={submit} className="space-y-4">
          <input
            placeholder="Nom du client"
            value={newReview.nom}
            onChange={(e) =>
              setNewReview({ ...newReview, nom: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#9caa8e] transition"
          />
          <textarea
            placeholder="Texte de l'avis"
            value={newReview.texte}
            onChange={(e) =>
              setNewReview({ ...newReview, texte: e.target.value })
            }
            rows={5}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#9caa8e] transition resize-none"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <select
              value={newReview.note}
              onChange={(e) =>
                setNewReview({ ...newReview, note: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#9caa8e] transition bg-white"
            >
              <option value="5">5 étoiles</option>
              <option value="4">4 étoiles</option>
              <option value="3">3 étoiles</option>
              <option value="2">2 étoiles</option>
              <option value="1">1 étoile</option>
            </select>
            <input
              type="date"
              value={newReview.date}
              onChange={(e) =>
                setNewReview({ ...newReview, date: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#9caa8e] transition"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 py-3 bg-[#c27a45] text-white font-medium rounded-lg hover:bg-[#a86835] transition"
            >
              {editingId ? "Mettre à jour" : "Ajouter l'avis"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-3 border border-gray-200 text-sm rounded-lg hover:bg-gray-50 transition"
              >
                Annuler
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-[#c27a45] text-xl mb-4">Avis enregistrés</h3>
        {avis.length === 0 ? (
          <p className="text-[#6b6b6b] text-sm italic">
            Aucun avis pour le moment.
          </p>
        ) : (
          <ul className="space-y-4 max-h-[560px] overflow-auto pr-1">
            {avis.map((review) => (
              <li
                key={review.id}
                className="border border-gray-100 rounded-xl p-4 bg-[#faf8f4]"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <strong className="text-[#3d3d3d]">{review.nom}</strong>
                    <span className="text-xs text-[#9caa8e] ml-2">
                      {review.date || "Sans date"}
                    </span>
                    <p className="text-[#6b6b6b] text-sm mt-2 whitespace-pre-line">
                      {review.texte}
                    </p>
                    <p className="text-[#BD6525] text-sm mt-2">
                      Note : {review.note}/5
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 shrink-0">
                    <button
                      onClick={() => startEdit(review)}
                      className="text-[#9caa8e] text-sm hover:text-[#7a8c6c] transition"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => removeReview(review.id)}
                      className="text-red-500 text-sm hover:text-red-700 transition"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

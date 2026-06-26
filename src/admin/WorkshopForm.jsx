import { useState } from "react";

export default function WorkshopForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [reservationPhone, setReservationPhone] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!title || !date) return alert("Titre et date requis");
    const w = {
      id: Date.now().toString(),
      title,
      date,
      description,
      reservationPhone: reservationPhone.trim(),
    };
    onAdd(w);
    setTitle("");
    setDate("");
    setDescription("");
    setReservationPhone("");
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-[#c27a45] text-xl mb-6">Ajouter un atelier</h3>
      <form onSubmit={submit} className="space-y-4">
        <input
          placeholder="Titre de l'atelier"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#9caa8e] transition"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#9caa8e] transition"
        />
        <textarea
          placeholder="Description de l'atelier..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#9caa8e] transition resize-none"
        />
        <input
          type="tel"
          placeholder="Numéro de réservation (ex: 09 84 67 40 99)"
          value={reservationPhone}
          onChange={(e) => setReservationPhone(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#9caa8e] transition"
        />
        <button
          type="submit"
          className="w-full py-3 bg-[#c27a45] text-white font-medium rounded-lg hover:bg-[#a86835] transition"
        >
          Ajouter l'atelier
        </button>
      </form>
    </div>
  );
}

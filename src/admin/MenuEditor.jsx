import { useState } from "react";

export default function MenuEditor({ menu, setMenu, brunch, setBrunch }) {
  const [newItem, setNewItem] = useState({ name: "", desc: "", price: "" });
  const [newBrunch, setNewBrunch] = useState({ name: "", desc: "", price: "" });
  const [editingId, setEditingId] = useState(null);
  const [editingBrunchId, setEditingBrunchId] = useState(null);

  // Ajouter un plat
  function addMenuItem(e) {
    e.preventDefault();
    if (!newItem.name || !newItem.price) return;
    const item = { ...newItem, id: Date.now() };
    const next = [...menu, item];
    setMenu(next);
    localStorage.setItem("restaurantMenu", JSON.stringify(next));
    setNewItem({ name: "", desc: "", price: "" });
  }

  // Supprimer un plat
  function removeMenuItem(id) {
    const next = menu.filter((item) => item.id !== id);
    setMenu(next);
    localStorage.setItem("restaurantMenu", JSON.stringify(next));
  }

  // Modifier un plat
  function updateMenuItem(id, field, value) {
    const next = menu.map((item) =>
      item.id === id ? { ...item, [field]: value } : item,
    );
    setMenu(next);
    localStorage.setItem("restaurantMenu", JSON.stringify(next));
  }

  // Ajouter un brunch
  function addBrunchItem(e) {
    e.preventDefault();
    if (!newBrunch.name || !newBrunch.price) return;
    const item = { ...newBrunch, id: Date.now() };
    const next = [...brunch, item];
    setBrunch(next);
    localStorage.setItem("restaurantBrunch", JSON.stringify(next));
    setNewBrunch({ name: "", desc: "", price: "" });
  }

  // Supprimer un brunch
  function removeBrunchItem(id) {
    const next = brunch.filter((item) => item.id !== id);
    setBrunch(next);
    localStorage.setItem("restaurantBrunch", JSON.stringify(next));
  }

  // Modifier un brunch
  function updateBrunchItem(id, field, value) {
    const next = brunch.map((item) =>
      item.id === id ? { ...item, [field]: value } : item,
    );
    setBrunch(next);
    localStorage.setItem("restaurantBrunch", JSON.stringify(next));
  }

  return (
    <div className="space-y-8">
      {/* Section Menu */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-[#c27a45] text-xl mb-6">🍽️ Carte du Restaurant</h3>

        {/* Formulaire ajout */}
        <form
          onSubmit={addMenuItem}
          className="mb-6 p-4 bg-[#f5f2eb] rounded-xl"
        >
          <p className="text-sm font-medium text-[#3d3d3d] mb-3">
            Ajouter un plat
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <input
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              placeholder="Nom du plat"
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#9caa8e]"
            />
            <input
              value={newItem.desc}
              onChange={(e) => setNewItem({ ...newItem, desc: e.target.value })}
              placeholder="Description"
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#9caa8e]"
            />
            <input
              value={newItem.price}
              onChange={(e) =>
                setNewItem({ ...newItem, price: e.target.value })
              }
              placeholder="Prix (ex: 12€)"
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#9caa8e]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#9caa8e] text-white text-sm rounded-lg hover:bg-[#8a9a7c] transition"
            >
              + Ajouter
            </button>
          </div>
        </form>

        {/* Liste des plats */}
        {menu.length === 0 ? (
          <p className="text-[#6b6b6b] text-sm italic">
            Aucun plat dans la carte.
          </p>
        ) : (
          <ul className="space-y-3">
            {menu.map((item) => (
              <li
                key={item.id}
                className="border border-gray-100 rounded-xl p-4 bg-[#faf8f4]"
              >
                {editingId === item.id ? (
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    <input
                      value={item.name}
                      onChange={(e) =>
                        updateMenuItem(item.id, "name", e.target.value)
                      }
                      className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#9caa8e]"
                    />
                    <input
                      value={item.desc}
                      onChange={(e) =>
                        updateMenuItem(item.id, "desc", e.target.value)
                      }
                      className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#9caa8e]"
                    />
                    <input
                      value={item.price}
                      onChange={(e) =>
                        updateMenuItem(item.id, "price", e.target.value)
                      }
                      className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#9caa8e]"
                    />
                    <button
                      onClick={() => setEditingId(null)}
                      className="px-4 py-2 bg-[#BD6525] text-white text-sm rounded-lg hover:bg-[#a85820] transition"
                    >
                      ✓ Valider
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <div>
                      <strong className="text-[#3d3d3d]">{item.name}</strong>
                      <span className="text-[#BD6525] font-semibold ml-3">
                        {item.price}
                      </span>
                      <p className="text-[#6b6b6b] text-sm mt-1">{item.desc}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditingId(item.id)}
                        className="text-[#9caa8e] text-sm hover:text-[#7a8c6c] transition"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => removeMenuItem(item.id)}
                        className="text-red-500 text-sm hover:text-red-700 transition"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Section Brunch */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-[#c27a45] text-xl mb-6">🥐 Carte Brunch</h3>

        {/* Formulaire ajout brunch */}
        <form
          onSubmit={addBrunchItem}
          className="mb-6 p-4 bg-[#f5f2eb] rounded-xl"
        >
          <p className="text-sm font-medium text-[#3d3d3d] mb-3">
            Ajouter une formule brunch
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <input
              value={newBrunch.name}
              onChange={(e) =>
                setNewBrunch({ ...newBrunch, name: e.target.value })
              }
              placeholder="Nom de la formule"
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#9caa8e]"
            />
            <input
              value={newBrunch.desc}
              onChange={(e) =>
                setNewBrunch({ ...newBrunch, desc: e.target.value })
              }
              placeholder="Description"
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#9caa8e]"
            />
            <input
              value={newBrunch.price}
              onChange={(e) =>
                setNewBrunch({ ...newBrunch, price: e.target.value })
              }
              placeholder="Prix (ex: 28€)"
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#9caa8e]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#9caa8e] text-white text-sm rounded-lg hover:bg-[#8a9a7c] transition"
            >
              + Ajouter
            </button>
          </div>
        </form>

        {/* Liste des brunchs */}
        {brunch.length === 0 ? (
          <p className="text-[#6b6b6b] text-sm italic">
            Aucune formule brunch.
          </p>
        ) : (
          <ul className="space-y-3">
            {brunch.map((item) => (
              <li
                key={item.id}
                className="border border-gray-100 rounded-xl p-4 bg-[#faf8f4]"
              >
                {editingBrunchId === item.id ? (
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    <input
                      value={item.name}
                      onChange={(e) =>
                        updateBrunchItem(item.id, "name", e.target.value)
                      }
                      className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#9caa8e]"
                    />
                    <input
                      value={item.desc}
                      onChange={(e) =>
                        updateBrunchItem(item.id, "desc", e.target.value)
                      }
                      className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#9caa8e]"
                    />
                    <input
                      value={item.price}
                      onChange={(e) =>
                        updateBrunchItem(item.id, "price", e.target.value)
                      }
                      className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#9caa8e]"
                    />
                    <button
                      onClick={() => setEditingBrunchId(null)}
                      className="px-4 py-2 bg-[#BD6525] text-white text-sm rounded-lg hover:bg-[#a85820] transition"
                    >
                      ✓ Valider
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <div>
                      <strong className="text-[#3d3d3d]">{item.name}</strong>
                      <span className="text-[#BD6525] font-semibold ml-3">
                        {item.price}
                      </span>
                      <p className="text-[#6b6b6b] text-sm mt-1">{item.desc}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditingBrunchId(item.id)}
                        className="text-[#9caa8e] text-sm hover:text-[#7a8c6c] transition"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => removeBrunchItem(item.id)}
                        className="text-red-500 text-sm hover:text-red-700 transition"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

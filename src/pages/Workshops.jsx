import { useMemo, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { PhoneIcon } from "../components/Icons";

const DEFAULT_RESERVATION_DISPLAY = "09 84 67 40 99";

function formatDateFr(value) {
  if (!value) return "Date à confirmer";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function normalizePhoneForTel(value) {
  if (!value) return "+33984674099";
  const cleaned = value.replace(/[^\d+]/g, "");
  return cleaned || "+33984674099";
}

function getDateKey(value) {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  d.setHours(0, 0, 0, 0);
  return d.toISOString().slice(0, 10);
}

function getMonthStart(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function getCalendarCells(monthDate) {
  const start = getMonthStart(monthDate);
  const offset = (start.getDay() + 6) % 7;
  const firstCell = new Date(start);
  firstCell.setDate(start.getDate() - offset);

  return Array.from({ length: 42 }, (_, i) => {
    const day = new Date(firstCell);
    day.setDate(firstCell.getDate() + i);
    return day;
  });
}

export default function Workshops() {
  const [workshops] = useState(() => {
    const raw = localStorage.getItem("workshops");
    try {
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const sortedWorkshops = useMemo(
    () => [...workshops].sort((a, b) => new Date(a.date) - new Date(b.date)),
    [workshops],
  );

  const todayKey = getDateKey(new Date());

  const upcomingWorkshops = useMemo(
    () =>
      sortedWorkshops.filter((w) => {
        const key = getDateKey(w.date);
        return key && key >= todayKey;
      }),
    [sortedWorkshops, todayKey],
  );

  const [currentMonth, setCurrentMonth] = useState(() => {
    if (upcomingWorkshops[0]?.date) {
      const firstDate = new Date(upcomingWorkshops[0].date);
      if (!Number.isNaN(firstDate.getTime())) return getMonthStart(firstDate);
    }
    return getMonthStart(new Date());
  });

  const [selectedDateKey, setSelectedDateKey] = useState("");
  const [selectedWorkshopId, setSelectedWorkshopId] = useState("");

  const workshopsByDate = useMemo(() => {
    const map = {};
    upcomingWorkshops.forEach((w) => {
      const key = getDateKey(w.date);
      if (!key) return;
      if (!map[key]) map[key] = [];
      map[key].push(w);
    });
    return map;
  }, [upcomingWorkshops]);

  const calendarCells = useMemo(
    () => getCalendarCells(currentMonth),
    [currentMonth],
  );

  const selectedItems = selectedDateKey
    ? workshopsByDate[selectedDateKey]
    : null;

  const displayedSelectedItems = useMemo(() => {
    if (!selectedItems?.length) return [];
    if (!selectedWorkshopId) return selectedItems;

    const selectedWorkshop = selectedItems.find(
      (item) => item.id === selectedWorkshopId,
    );

    return selectedWorkshop ? [selectedWorkshop] : selectedItems;
  }, [selectedItems, selectedWorkshopId]);

  const selectedWorkshop = displayedSelectedItems[0] || null;

  function openWorkshopDetails(workshop) {
    const dateKey = getDateKey(workshop?.date);
    if (!dateKey) return;

    setSelectedDateKey(dateKey);
    setSelectedWorkshopId(workshop.id);
  }

  function openDateDetails(dateKey) {
    if (!dateKey) return;
    setSelectedDateKey(dateKey);
    setSelectedWorkshopId("");
  }

  function closeWorkshopDetails() {
    setSelectedDateKey("");
    setSelectedWorkshopId("");
  }

  function changeMonth(delta) {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + delta, 1),
    );
  }

  function formatMonthLabel(value) {
    return value.toLocaleDateString("fr-FR", {
      month: "long",
      year: "numeric",
    });
  }

  return (
    <div className="min-h-screen bg-[#faf8f4]">
      <Nav />

      {/* Hero avec image */}
      <section className="relative h-[56vh] min-h-[460px] overflow-hidden">
        <img
          src="atelier.png"
          alt="Ateliers créatifs"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-[50%_28%] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent"></div>
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="max-w-4xl mx-auto text-center px-6 w-full">
            <p className="text-white/90 uppercase tracking-[0.24em] text-sm mb-3">
              Expériences créatives
            </p>
            <h1 className="text-white mb-6 drop-shadow-lg">
              Ateliers Mow & My
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              Découvrez nos ateliers créatifs : bien-être et moments de partage
              dans une ambiance chaleureuse.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f6f3ec]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#9caa8e] uppercase tracking-[0.2em] text-xs mb-3">
              Programme
            </p>
            <h2 className="text-[#cd9a18] mb-3">Prochains ateliers</h2>
            <p className="text-[#6b6b6b] max-w-2xl mx-auto">
              Cliquez sur une date du calendrier pour ouvrir la fiche atelier
              avec son descriptif et le numéro de réservation.
            </p>
          </div>

          {upcomingWorkshops.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-[#e7e2d7] shadow-sm">
              <svg
                className="w-16 h-16 text-[#cd9a18] mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-[#6b6b6b] text-lg mb-2">
                Aucun atelier programmé pour le moment.
              </p>
              <p className="text-[#9caa8e] mb-6">
                Revenez bientôt pour découvrir nos prochains ateliers !
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
              <div className="bg-white rounded-3xl border border-[#e7e2d7] shadow-sm p-4 sm:p-6">
                <div className="flex items-center justify-between mb-5">
                  <button
                    type="button"
                    onClick={() => changeMonth(-1)}
                    className="w-9 h-9 rounded-full border border-[#ddd6c8] bg-white text-[#6b6b6b] hover:text-[#8c690f] transition"
                    aria-label="Mois précédent"
                  >
                    ←
                  </button>
                  <p className="text-[#3d3d3d] font-semibold capitalize text-lg">
                    {formatMonthLabel(currentMonth)}
                  </p>
                  <button
                    type="button"
                    onClick={() => changeMonth(1)}
                    className="w-9 h-9 rounded-full border border-[#ddd6c8] bg-white text-[#6b6b6b] hover:text-[#8c690f] transition"
                    aria-label="Mois suivant"
                  >
                    →
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-[11px] sm:text-xs uppercase tracking-[0.12em] text-[#8b8b8b] font-semibold mb-2">
                  {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map(
                    (label) => (
                      <span key={label} className="py-2">
                        {label}
                      </span>
                    ),
                  )}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {calendarCells.map((day) => {
                    const dateKey = getDateKey(day);
                    const isCurrentMonth =
                      day.getMonth() === currentMonth.getMonth();
                    const hasWorkshop = Boolean(
                      workshopsByDate[dateKey]?.length,
                    );
                    const isSelected = selectedDateKey === dateKey;

                    return (
                      <button
                        key={dateKey}
                        type="button"
                        onClick={() => hasWorkshop && openDateDetails(dateKey)}
                        className={`relative h-11 sm:h-12 rounded-xl border text-sm transition ${
                          hasWorkshop
                            ? "bg-white text-[#6b6b6b] border-[#ddd6c8] hover:bg-[#faf8f4]"
                            : "bg-[#f6f3ec] border-transparent text-[#b7b2a3]"
                        } ${
                          !isCurrentMonth ? "opacity-45" : "opacity-100"
                        } ${isSelected ? "ring-2 ring-[#cd9a18]" : ""}`}
                        aria-label={`${day.getDate()} ${formatMonthLabel(day)}`}
                      >
                        <span>{day.getDate()}</span>
                        {hasWorkshop && (
                          <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#cd9a18]" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#e7e2d7] p-6 shadow-sm">
                <p className="text-[#9caa8e] uppercase tracking-[0.18em] text-xs mb-2">
                  Récapitulatif
                </p>
                <h3 className="text-[#3d3d3d] text-2xl mb-4">À venir</h3>
                <ul className="space-y-3">
                  {upcomingWorkshops.slice(0, 5).map((w) => (
                    <li key={w.id}>
                      <button
                        type="button"
                        onClick={() => openWorkshopDetails(w)}
                        className="w-full text-left bg-[#faf8f4] border border-[#ece6da] rounded-xl p-3 transition hover:border-[#cd9a18] hover:bg-white hover:shadow-sm"
                      >
                        <p className="text-[#3d3d3d] font-medium leading-tight">
                          {w.title}
                        </p>
                        <p className="text-xs text-[#8b8b8b] mt-1 capitalize">
                          {formatDateFr(w.date)}
                        </p>
                        <p className="text-xs font-medium text-[#8c690f] mt-2">
                          Voir la description et réserver
                        </p>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {selectedWorkshop && (
        <div className="fixed inset-0 z-50 bg-black/45 backdrop-blur-[1px] px-4 flex items-center justify-center">
          <div className="w-full max-w-lg bg-white border border-[#e7e2d7] rounded-3xl shadow-2xl p-6 sm:p-7 relative">
            <button
              type="button"
              onClick={closeWorkshopDetails}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#e2dccf] text-[#6b6b6b] bg-white hover:text-[#8c690f]"
              aria-label="Fermer"
            >
              ×
            </button>

            <p className="text-[#9caa8e] uppercase tracking-[0.2em] text-xs mb-2">
              {displayedSelectedItems.length > 1
                ? "Ateliers sélectionnés"
                : "Atelier sélectionné"}
            </p>
            <p className="text-[#3d3d3d] font-semibold capitalize mb-5">
              {formatDateFr(selectedWorkshop.date)}
            </p>

            <div className="space-y-5 max-h-[60vh] overflow-y-auto pr-1">
              {displayedSelectedItems.map((item) => {
                const phoneDisplay =
                  item.reservationPhone || DEFAULT_RESERVATION_DISPLAY;

                return (
                  <article
                    key={item.id}
                    className="bg-[#faf8f4] border border-[#ece6da] rounded-2xl p-4"
                  >
                    <h4 className="text-[#3d3d3d] text-xl font-semibold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#6b6b6b] mb-4 leading-relaxed">
                      {item.description ||
                        "Un atelier convivial, accessible à tous les niveaux."}
                    </p>
                    <a
                      href={`tel:${normalizePhoneForTel(item.reservationPhone)}`}
                      className="inline-flex items-center gap-2 text-sm text-[#8c690f] font-semibold bg-[#fff7e5] border border-[#ead9a8] rounded-xl px-4 py-2.5 hover:bg-white transition"
                    >
                      <PhoneIcon className="w-4 h-4" />
                      Réserver : {phoneDisplay}
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

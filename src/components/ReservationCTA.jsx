import { useEffect, useState } from "react";
import { PhoneIcon } from "./Icons";

const RESERVATION_DISPLAY = "09 84 67 40 99";
const RESERVATION_TEL = "+33984674099";

export default function ReservationCTA({ className = "", style }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [showNumber, setShowNumber] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateViewport = () => setIsDesktop(mediaQuery.matches);

    updateViewport();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateViewport);
      return () => mediaQuery.removeEventListener("change", updateViewport);
    }

    mediaQuery.addListener(updateViewport);
    return () => mediaQuery.removeListener(updateViewport);
  }, []);

  if (!isDesktop) {
    return (
      <a href={`tel:${RESERVATION_TEL}`} className={className} style={style}>
        <PhoneIcon className="w-4 h-4" />
        Réserver
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setShowNumber(true)}
      className={className}
      style={style}
      aria-label={
        showNumber
          ? `Numéro de réservation ${RESERVATION_DISPLAY}`
          : "Afficher le numéro de réservation"
      }
    >
      <PhoneIcon className="w-4 h-4" />
      {showNumber ? RESERVATION_DISPLAY : "Réserver"}
    </button>
  );
}

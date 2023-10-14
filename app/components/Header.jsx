import Link from "next/link";
import { homeTabs } from "../lib/config";

// Cada componente debe tener su CSS
const Header = ({ onTabChange, isAccount }) => {
  return (
    <header id="header" className="header">
      {isAccount ? (
        <Link href="/" id="back-events">
          {"< Back to events"}
        </Link>
      ) : (
        <>
          <Link href="/account" id="my-account">
            {"My account >"}
          </Link>

          <div id="tabs" className="header__tabs">
            {/* Ojo esta marrado a home */}
            {homeTabs.map((tab) => (
              <button
                data-category={tab.category}
                key={tab.category}
                onClick={onTabChange}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </>
      )}
    </header>
  );
};

export { Header };

import type { ReactElement } from "react";
import Image from "next/image";

/**
 * Navbar component
 *
 * A vertical sidebar navigation (left-aligned) designed for the Coming Soon page.
 * - Positioned absolutely with centered Y alignment (`top: 50% + translateY(-50%)`).
 * - Contains a beta logo at the top, main navigation buttons (5), and utility buttons at the bottom.
 * - Uses semi-transparent dark background with z-index layering for visual hierarchy.
 * - Dimensions are derived from design (width: 117px is a fixed intrinsic width; height scales to viewport).
 *
 * @returns React element — the nav sidebar
 */
const Navbar = (): ReactElement => {
    return (
        <nav
            className="absolute flex flex-col justify-between items-center"
            style={{
                width: 117, // fixed intrinsic width from design
                height: "89.91vh", // 971/1080 — scales to viewport height
                left: 20, // left margin for spacing from screen edge
                top: "50%", // vertical centering starts here
                transform: "translateY(-50%)", // finish centering: moves nav up by half its height
                borderRadius: 12, // soft corners
                padding: 24, // internal spacing
                gap: 32, // vertical space between sections (logo, buttons, utilities)
                background: "#0000004D", // 30% opaque black for semi-transparent backdrop
                zIndex: 20, // ensures nav sits above content
            }}
        >
            {/* Top section: logo/branding */}
            <div
                style={{
                    width: 39,
                    height: 64,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                }}
            >
                <Image src="/img/beta.svg" alt="Beta" width={39} height={64} />
            </div>

            {/* Main navigation buttons: 5-item vertical menu */}
            <div
                className="flex flex-col"
                style={{ gap: 12 }}
            >
                {[
                    { src: "/img/icons/tableau-de-bord.svg", alt: "Tableau de bord" },
                    { src: "/img/icons/repertoire.svg", alt: "Répertoire" },
                    { src: "/img/icons/pen.svg", alt: "Pen" },
                    { src: "/img/icons/compass.svg", alt: "Compass" },
                    { src: "/img/icons/book.svg", alt: "Book" },
                ].map((icon) => (
                    <button
                        key={icon.alt}
                        className="flex items-center justify-center"
                        style={{
                            width: 69, // button width for icon + padding
                            height: 48, // button height
                            borderRadius: 12, // consistent corner radius
                            padding: 12, // internal icon spacing
                            // NOTE: consider adding background/hover styles here
                            // for better visibility and keyboard focus accessibility
                        }}
                        aria-label={icon.alt} // accessibility: describe button purpose
                    >
                        <Image src={icon.src} alt={icon.alt} width={24} height={24} />
                    </button>
                ))}
            </div>

            {/* Bottom section: utility buttons (notifications, help, language, profile) */}
            <div
                className="flex flex-col items-center"
                style={{ gap: 24 }}
            >
                {/* Notifications button — shows badge indicator for unread items */}
                <button
                    className="relative flex items-center justify-center"
                    style={{ width: 48, height: 48, borderRadius: 12, padding: 12 }}
                    aria-label="Notifications"
                    type="button"
                >
                    <Image src="/img/icons/notif.svg" alt="" width={24} height={24} />
                    {/* Badge indicator — small circle in top-right corner */}
                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-brand-link" aria-hidden="true" />
                </button>

                {/* Help/Support button — shows badge indicator for available help items */}
                <button
                    className="relative flex items-center justify-center"
                    style={{ width: 48, height: 48, borderRadius: 12, padding: 12 }}
                    aria-label="Aide (Help)"
                    type="button"
                >
                    <Image src="/img/icons/question.svg" alt="" width={24} height={24} />
                    {/* Badge indicator — same styling as notifications */}
                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-brand-link" aria-hidden="true" />
                </button>

                {/* Language/Locale switcher button */}
                <button
                    className="flex items-center justify-center"
                    style={{ width: 48, height: 48, borderRadius: 12, padding: 12 }}
                    aria-label="Langue (Language)"
                    type="button"
                >
                    <Image src="/img/icons/langage.svg" alt="" width={24} height={24} />
                </button>

                {/* Profile picture button — displays user avatar with rounded corners and cover fit */}
                <button
                    className="flex items-center justify-center overflow-hidden"
                    style={{ width: 48, height: 48, borderRadius: 12, padding: 0 }}
                    aria-label="Profil (Profile)"
                    type="button"
                >
                    <Image
                        src="/img/2.4.svg"
                        alt="" // alt is empty since this is a decorative user avatar
                        width={48}
                        height={48}
                        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }}
                    />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
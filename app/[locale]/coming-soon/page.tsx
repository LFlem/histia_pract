import Image from "next/image";
import { getIntlayer, type NextPageIntlayer } from "next-intlayer";

const ComingSoonPage: NextPageIntlayer = async ({ params }) => {
    const { locale } = await params;
    const content = getIntlayer("coming-soon", locale);

    return (
        <main className="w-screen h-screen bg-brand-bg relative overflow-hidden">

            {/* Bloc texte gauche */}
            <div
                className="absolute flex flex-col"
                style={{
                    left: "14.64vw",
                    top: "32.13vh",
                    width: "49.74vw",   // 955/1920
                    gap: "24px",
                }}
            >
                {/* Badge */}
                <span
                    style={{
                        width: "9.53vw",
                        height: "3.33vh",
                        borderRadius: "999px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        paddingLeft: "16px",
                        paddingRight: "16px",
                        background: "#BFB9DF1A",
                        fontFamily: "var(--font-display)",
                        fontWeight: 500,
                        fontSize: "clamp(10px, 0.625vw, 12px)",
                        lineHeight: "16px",
                        letterSpacing: "0",
                        color: "#BFB9DF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        whiteSpace: "nowrap",
                    }}
                >
                    {content.badge}
                </span>

                {/* Titre */}
                <h1
                    className="text-brand-title font-semibold"
                    style={{ fontSize: "clamp(28px, 2.5vw, 48px)", lineHeight: "100%" }}
                >
                    {content.title}
                </h1>

                {/* Description */}
                <p
                    className="text-brand-body tracking-[0.02em]"
                    style={{
                        fontSize: "clamp(14px, 1.25vw, 24px)",
                        lineHeight: "32px",
                        width: "33.28vw", // 639/1920
                    }}
                >
                    <span className="font-normal">
                        {locale === "fr" ? "Nous sommes encore en version bêta, " : "We are still in beta, "}
                    </span>
                    <span className="inline-flex items-center gap-1 align-middle">
                        <Image src="/img/Stolos.svg" alt="Stolos" width={24} height={24} className="w-6 h-6" />
                        <strong
                            style={{
                                color: "#E3E0F6",
                                fontFamily: "var(--font-heading)",
                                fontWeight: 600,
                                fontSize: "clamp(14px, 1.25vw, 24px)",
                                lineHeight: "32px",
                            }}
                        >
                            Stolos
                        </strong>
                        <span
                            style={{
                                color: "#877EBC",
                                fontFamily: "var(--font-heading)",
                                fontWeight: 400,
                                fontSize: "clamp(14px, 1.25vw, 24px)",
                                lineHeight: "32px",
                            }}
                        >
                            {locale === "fr" ? " n'est" : " is not"}
                        </span>
                    </span>
                    <span className="font-normal" style={{ color: "#877EBC" }}>
                        {locale === "fr" ? (
                            <>
                                {" pas encore complet, notre équipe travaille d'arrache pied"}
                                <br />
                                {"pour vous apporter cette page au plus vite !"}
                            </>
                        ) : (
                            " yet complete, our team is working hard to bring you this page as soon as possible!"
                        )}
                    </span>
                </p>

                {/* Lien */}
                <span className="flex items-center gap-3 cursor-default">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                        stroke="#E1C3FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <span
                        className="font-semibold text-brand-link"
                        style={{ fontSize: "clamp(14px, 1.25vw, 24px)", lineHeight: "100%" }}
                    >
                        {content.link}
                    </span>
                </span>
            </div>

            {/* Mascotte droite */}
            <div
                className="absolute relative"
                style={{
                    left: "71.875vw",   // 1380/1920
                    top: "10.56vh",     // 114/1080
                    width: "19.95vw",   // 383/1920
                    height: "78.89vh",  // 852/1080
                }}
            >
                <Image
                    src={locale === "fr" ? "/img/mascot-fr.png" : "/img/mascot-en.png"}
                    alt={String(content.mascotAlt)}
                    fill
                    sizes="20vw"
                    loading="eager"
                    className="object-contain object-bottom"
                />
            </div>

        </main>
    );
};

export default ComingSoonPage;
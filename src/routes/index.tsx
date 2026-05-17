import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  translations,
  type Lang,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  ADDRESS,
  MAPS_URL,
  MAPS_EMBED,
} from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";
import heroImg from "@/assets/hero-nails.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import {
  Sparkles,
  Hand,
  Footprints,
  Palette,
  Star,
  MapPin,
  Instagram,
  MessageCircle,
  Globe,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kathia Periotto Nails — Manicure & Pedicure em Londres" },
      {
        name: "description",
        content:
          "Manicure e pedicure premium em Londres, no Bey Glow Salon. A 2 minutos de Willesden Junction.",
      },
      { property: "og:title", content: "Kathia Periotto Nails" },
      {
        property: "og:description",
        content: "Beleza na ponta dos seus dedos. Manicure e pedicure em Londres.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

const galleryImages = [g1, g2, g3, g4, g5, g6];
const serviceIcons = [Hand, Footprints, Sparkles, Palette];

function Index() {
  const [lang, setLang] = useState<Lang>("pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (stored === "pt" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "pt" ? "pt-BR" : "en-GB";
      localStorage.setItem("lang", lang);
    }
  }, [lang]);

  useReveal();
  const t = translations[lang];

  const toggleLang = () => setLang((p) => (p === "pt" ? "en" : "pt"));

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Nav */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 h-19 flex items-center justify-between">
          <a href="#hero" className="font-display text-lg tracking-wide">
            Kathia Periotto <span className="text-[color:var(--rose-deep)]">Nails</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">{t.nav.services}</a>
            <a href="#gallery" className="hover:text-foreground transition-colors">{t.nav.gallery}</a>
            <a href="#reviews" className="hover:text-foreground transition-colors">{t.nav.reviews}</a>
            <a href="#location" className="hover:text-foreground transition-colors">{t.nav.location}</a>
          </nav>

          {/* Desktop language switcher */}
          <div className="hidden md:inline-flex items-center gap-1 rounded-full border border-border bg-card px-2 py-1.5 text-xs font-medium">
            <Globe className="size-3.5 text-muted-foreground mx-1" />
            <button
              onClick={() => setLang("pt")}
              aria-label="Português"
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 transition-colors ${lang === "pt" ? "bg-[color:var(--rose-deep)] text-white" : "hover:bg-[color:var(--rose-soft)] text-muted-foreground"}`}
            >
              <span>{lang === "pt" ? "Português" : "Portuguese"}</span>
            </button>
            <button
              onClick={() => setLang("en")}
              aria-label="English"
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 transition-colors ${lang === "en" ? "bg-[color:var(--rose-deep)] text-white" : "hover:bg-[color:var(--rose-soft)] text-muted-foreground"}`}
            >
              <span>{lang === "pt" ? "Inglês" : "English"}</span>
            </button>
          </div>

          {/* Mobile: language dropdown + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium hover:bg-[color:var(--rose-soft)] transition-colors"
              >
                <Globe className="size-3.5 text-muted-foreground" />
                <span>{lang === "pt" ? "Linguagem" : "Language"}</span>
                <ChevronDown className={`size-3 text-muted-foreground transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute right-0 top-full mt-2 w-36 rounded-xl border border-border bg-card shadow-lg overflow-hidden transition-all duration-200 origin-top ${langOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}>
                <button
                  onClick={() => { setLang("pt"); setLangOpen(false); }}
                  className={`w-full px-4 py-2.5 text-left text-xs flex items-center gap-2 hover:bg-[color:var(--rose-soft)] transition-colors ${lang === "pt" ? "text-[color:var(--rose-deep)] font-semibold" : "text-muted-foreground"}`}
                >
                  🇧🇷 Português
                </button>
                <div className="h-px bg-border mx-3" />
                <button
                  onClick={() => { setLang("en"); setLangOpen(false); }}
                  className={`w-full px-4 py-2.5 text-left text-xs flex items-center gap-2 hover:bg-[color:var(--rose-soft)] transition-colors ${lang === "en" ? "text-[color:var(--rose-deep)] font-semibold" : "text-muted-foreground"}`}
                >
                  🇬🇧 {lang === "pt" ? "Inglês" : "English"}
                </button>
              </div>
            </div>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card p-2 text-foreground hover:bg-[color:var(--rose-soft)] transition-colors"
            >
              <Menu className={`size-4 absolute transition-all duration-300 ${menuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`} />
              <X className={`size-4 transition-all duration-300 ${menuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
          <nav className="border-t border-border/60 bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4 text-sm text-muted-foreground">
            <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-[color:var(--rose-deep)] transition-colors">{t.nav.services}</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)} className="hover:text-[color:var(--rose-deep)] transition-colors">{t.nav.gallery}</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)} className="hover:text-[color:var(--rose-deep)] transition-colors">{t.nav.reviews}</a>
            <a href="#location" onClick={() => setMenuOpen(false)} className="hover:text-[color:var(--rose-deep)] transition-colors">{t.nav.location}</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="wallpaper-bg relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-white/50" />
        <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="hero-fade">
            <p className="uppercase tracking-[0.3em] text-xs text-[color:var(--rose-deep)] mb-6">
              {t.hero.eyebrow}
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-foreground">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">{t.hero.subtitle}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--charcoal)] text-white px-7 py-4 text-sm font-medium hover:bg-foreground transition-colors shadow-lg shadow-[color:var(--rose-deep)]/20"
              >
                <MessageCircle className="size-4" />
                {t.hero.cta}
              </a>
              <span className="text-xs text-muted-foreground">{t.hero.managed}</span>
            </div>
          </div>
          <div className="hero-fade relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[color:var(--rose-soft)] -z-10 rotate-2" />
            <img
              src={heroImg}
              alt="Kathia Periotto Nails"
              width={1600}
              height={1024}
              className="rounded-[1.75rem] shadow-2xl object-cover aspect-[4/5] md:aspect-[5/6] w-full"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal max-w-2xl mb-16">
            <p className="text-xs font-semibold text-[color:var(--rose-deep)] uppercase tracking-widest mb-4">{t.services.eyebrow}</p>
            <h2 className="font-display text-4xl md:text-5xl">{t.services.title}</h2>
            <p className="mt-4 text-muted-foreground">{t.services.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.items.map((item, i) => {
              const Icon = serviceIcons[i];
              return (
                <div
                  key={item.name}
                  className="group relative flex flex-col rounded-3xl border border-[color:var(--rose-soft)] bg-gradient-to-br from-card via-card to-[color:var(--rose-soft)]/30 overflow-hidden hover:shadow-2xl hover:shadow-[color:var(--rose-deep)]/20 hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="h-1 bg-gradient-to-r from-[color:var(--rose-soft)] to-[color:var(--rose-deep)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -top-6 -right-6 size-24 rounded-full bg-[color:var(--rose-soft)]/40 blur-2xl group-hover:bg-[color:var(--rose-deep)]/20 transition-colors duration-500 pointer-events-none" />
                  <div className="flex flex-col flex-1 p-8">
                    <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-[color:var(--rose-soft)] text-[color:var(--rose-deep)] group-hover:bg-[color:var(--rose-deep)] group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl leading-snug">{item.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
                    <div className="mt-6 h-px bg-border" />
                    <div className="mt-5 flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full bg-[color:var(--rose-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--charcoal)]">
                        {item.price}
                      </span>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[color:var(--rose-deep)] hover:text-foreground transition-colors"
                      >
                        <MessageCircle className="size-3.5" />
                        {lang === "pt" ? "Agendar" : "Book now"}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 md:py-32 bg-muted/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal max-w-2xl mb-16">
            <p className="text-xs font-semibold text-[color:var(--rose-deep)] uppercase tracking-widest mb-4">{t.gallery.eyebrow}</p>
            <h2 className="font-display text-4xl md:text-5xl">{t.gallery.title}</h2>
            <p className="mt-4 text-muted-foreground">{t.gallery.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="reveal group relative overflow-hidden rounded-2xl aspect-square"
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--charcoal)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="wallpaper-bg relative py-24 md:py-32">
        <div className="absolute inset-0 bg-white/35" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold text-[color:var(--rose-deep)] uppercase tracking-widest mb-4">{t.reviews.eyebrow}</p>
            <h2 className="font-display text-4xl md:text-5xl">{t.reviews.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.reviews.items.map((r) => (
              <div
                key={r.name}
                className="rounded-2xl bg-card border border-white/60 p-8 shadow-sm"
              >
                <div className="flex gap-1 text-[color:var(--rose-deep)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-foreground/90 leading-relaxed">"{r.text}"</p>
                <p className="mt-6 text-sm font-medium text-[color:var(--charcoal)]">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold text-[color:var(--rose-deep)] uppercase tracking-widest">{t.location.eyebrow}</p>

            <h2 className="font-display text-4xl md:text-5xl mt-6">{t.location.title}</h2>
            <p className="mt-4 text-muted-foreground">{lang === "pt" ? "Estamos localizadas em Londres, prontas para cuidar de você." : "We're located in London, ready to take care of you."}</p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-[color:var(--rose-soft)]/60 to-[color:var(--rose-soft)]/20 border border-[color:var(--rose-soft)] p-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-[color:var(--rose-deep)] text-white shrink-0 shadow-md shadow-[color:var(--rose-deep)]/30">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{ADDRESS}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{t.location.hint}</p>
                </div>
              </div>
              <div className="my-5 h-px bg-[color:var(--rose-deep)]/10" />
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>Willesden Junction · Harrow Road</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--charcoal)] text-white px-6 py-3 text-sm font-medium hover:bg-[color:var(--rose-deep)] transition-colors shadow-sm"
              >
                <MapPin className="size-4" />
                {t.location.directions}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--rose-deep)] text-[color:var(--rose-deep)] px-6 py-3 text-sm font-medium hover:bg-[color:var(--rose-soft)] transition-colors"
              >
                <MessageCircle className="size-4" />
                {lang === "pt" ? "Agendar" : "Book now"}
              </a>
            </div>
          </div>
          <div className="reveal rounded-2xl overflow-hidden border border-border shadow-md aspect-[4/3]">
            <iframe
              title="Map"
              src={MAPS_EMBED}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[color:var(--charcoal)] text-white/90 py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10">
          <div>
            <p className="font-display text-2xl text-white">Kathia Periotto Nails</p>
            <p className="mt-3 text-sm text-white/60">{t.footer.tagline}</p>
            <p className="mt-4 text-xs text-white/50">{t.footer.managed}</p>
          </div>
          <div className="text-sm space-y-2">
            <p>{ADDRESS}</p>
            <p className="text-white/60">{t.location.hint}</p>
          </div>
          <div className="flex md:justify-end items-start gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--charcoal)] px-5 py-3 text-sm font-medium hover:bg-[color:var(--rose-soft)] transition-colors"
            >
              <MessageCircle className="size-4" /> {t.footer.whatsapp}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center size-11 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-12 pt-6 border-t border-white/10 text-xs text-white/40 flex flex-wrap justify-between gap-4">
          <p>© {new Date().getFullYear()} Kathia Periotto Nails. {t.footer.rights}</p>
          <p>London · NW10</p>
        </div>
      </footer>
    </div>
  );
}

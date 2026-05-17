import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { G as Globe, C as ChevronDown, a as Menu, X, b as MessageCircle, H as Hand, F as Footprints, S as Sparkles, P as Palette, I as Instagram, c as Star, M as MapPin } from "../_libs/lucide-react.mjs";
const translations = {
  pt: {
    nav: { services: "Serviços", gallery: "Galeria", reviews: "Avaliações", location: "Localização" },
    hero: {
      eyebrow: "Kathia Periotto Nails",
      title: "Beleza na ponta dos seus dedos",
      subtitle: "Manicure e pedicure premium em Londres, com cuidado, higiene impecável e um toque de elegância.",
      cta: "Agendar pelo WhatsApp",
      managed: "Atendimento no Bey Glow Salon · Londres"
    },
    services: {
      eyebrow: "Nossos Serviços",
      title: "Serviços",
      subtitle: "Tratamentos pensados para realçar a sua naturalidade.",
      items: [
        { name: "Manicure", desc: "Cuidado completo das unhas, cutículas e esmaltação impecável.", price: "a partir de £20" },
        { name: "Pedicure", desc: "Relaxamento, esfoliação e acabamento perfeito para os pés.", price: "a partir de £28" },
        { name: "Unhas em Gel", desc: "Durabilidade, brilho e resistência por semanas.", price: "a partir de £35" },
        { name: "Extensão de Unhas", desc: "Unhas alongadas com acabamento natural ou glamouroso, duradouras e resistentes.", price: "a partir de £45" }
      ]
    },
    gallery: { eyebrow: "Nosso Trabalho", title: "Galeria", subtitle: "Um pouco do nosso trabalho recente." },
    reviews: {
      eyebrow: "Depoimentos",
      title: "O que dizem nossas clientes",
      items: [
        { name: "Mariana S.", text: "Atendimento impecável e o resultado superou minhas expectativas. Voltarei sempre!" },
        { name: "Camila R.", text: "Ambiente acolhedor, profissional super atenciosa. As minhas unhas nunca estiveram tão bonitas." },
        { name: "Beatriz L.", text: "Higiene perfeita, capricho em cada detalhe. Recomendo de olhos fechados." }
      ]
    },
    location: {
      eyebrow: "Venha nos Visitar",
      title: "Onde nos encontrar",
      address: "232 High Street, London NW10 4TD",
      hint: "A 2 minutos de Willesden Junction — saída Harrow Road",
      directions: "Ver no Google Maps"
    },
    footer: {
      tagline: "Cuidado, elegância e carinho em cada detalhe.",
      rights: "Todos os direitos reservados.",
      managed: "Atendimento no Bey Glow Salon",
      instagram: "Instagram",
      whatsapp: "WhatsApp"
    },
    langLabel: "EN"
  },
  en: {
    nav: { services: "Services", gallery: "Gallery", reviews: "Reviews", location: "Location" },
    hero: {
      eyebrow: "Kathia Periotto Nails",
      title: "Beauty at your fingertips",
      subtitle: "Premium manicure and pedicure in London, with impeccable hygiene, care, and a touch of elegance.",
      cta: "Book on WhatsApp",
      managed: "Hosted at Bey Glow Salon · London"
    },
    services: {
      eyebrow: "Our Services",
      title: "Services",
      subtitle: "Treatments designed to enhance your natural beauty.",
      items: [
        { name: "Manicure", desc: "Complete care for nails, cuticles and a flawless polish.", price: "from £20" },
        { name: "Pedicure", desc: "Relaxing soak, exfoliation and a perfect finish for your feet.", price: "from £28" },
        { name: "Gel Nails", desc: "Long-lasting shine and resistance for weeks on end.", price: "from £35" },
        { name: "Nail Extensions", desc: "Lengthened nails with a natural or glamorous finish, long-lasting and durable.", price: "from £45" }
      ]
    },
    gallery: { eyebrow: "Our Work", title: "Gallery", subtitle: "A glimpse of our recent work." },
    reviews: {
      eyebrow: "Testimonials",
      title: "What our clients say",
      items: [
        { name: "Mariana S.", text: "Impeccable service and the result exceeded my expectations. I'll be back!" },
        { name: "Camila R.", text: "Lovely space, such a caring professional. My nails have never looked better." },
        { name: "Beatriz L.", text: "Perfect hygiene and attention to every detail. I recommend with my eyes closed." }
      ]
    },
    location: {
      eyebrow: "Come Visit Us",
      title: "Find us",
      address: "232 High Street, London NW10 4TD",
      hint: "2 minutes from Willesden Junction — Harrow Road exit",
      directions: "Open in Google Maps"
    },
    footer: {
      tagline: "Care, elegance and warmth in every detail.",
      rights: "All rights reserved.",
      managed: "Hosted at Bey Glow Salon",
      instagram: "Instagram",
      whatsapp: "WhatsApp"
    },
    langLabel: "PT"
  }
};
const WHATSAPP_NUMBER = "447857590694";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const INSTAGRAM_URL = "https://instagram.com/kathia_periotto_nails";
const ADDRESS = "232 High Street, London NW10 4TD";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=232+High+Street+London+NW10+4TD";
const MAPS_EMBED = "https://www.google.com/maps?q=232+High+Street,+London+NW10+4TD&output=embed";
function useReveal() {
  reactExports.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
const tiaImg = "/assets/tia-bg-CHpJF8xu.png";
const studioImg = "/assets/studio-bg-Sk9SJpX0.jpg";
const g1 = "/assets/gallery-1-C6p4V7bX.png";
const g2 = "/assets/gallery-2-D6a_ChUR.png";
const g3 = "/assets/gallery-3-CzvqFB-E.png";
const g4 = "/assets/gallery-4-Cl3UnBzs.png";
const g5 = "/assets/gallery-5-DlUJCR79.png";
const g6 = "/assets/gallery-6-CLelGwnQ.png";
const galleryImages = [g1, g2, g3, g4, g5, g6];
const serviceIcons = [Hand, Footprints, Sparkles, Palette];
function Index() {
  const [lang, setLang] = reactExports.useState("pt");
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  const [notifCards, setNotifCards] = reactExports.useState([]);
  const notifIdRef = reactExports.useRef(0);
  const notifIdxRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const items = translations[lang].reviews.items;
    setNotifCards([]);
    notifIdxRef.current = 0;
    const addCard = () => {
      const idx = notifIdxRef.current % items.length;
      notifIdxRef.current++;
      const id = notifIdRef.current++;
      setNotifCards((prev) => {
        const next = prev.map((c, i, arr) => arr.length >= 3 && i === arr.length - 1 ? {
          ...c,
          exiting: true
        } : c);
        return [{
          id,
          idx,
          exiting: false
        }, ...next];
      });
      setTimeout(() => {
        setNotifCards((prev) => prev.filter((c) => !c.exiting));
      }, 550);
    };
    const totalItems = items.length;
    let count = 0;
    const intervalRef = {
      id: 0
    };
    const tick = () => {
      addCard();
      count++;
      if (count >= totalItems) clearInterval(intervalRef.id);
    };
    tick();
    intervalRef.id = setInterval(tick, 2800);
    return () => clearInterval(intervalRef.id);
  }, [lang]);
  const [langOpen, setLangOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("lang");
    if (stored === "pt" || stored === "en") setLang(stored);
  }, []);
  reactExports.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "pt" ? "pt-BR" : "en-GB";
      localStorage.setItem("lang", lang);
    }
  }, [lang]);
  useReveal();
  const t = translations[lang];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 h-19 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#hero", className: "font-display text-lg tracking-wide", children: [
          "Kathia Periotto ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[color:var(--rose-deep)]", children: "Nails" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "hover:text-foreground transition-colors", children: t.nav.services }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#gallery", className: "hover:text-foreground transition-colors", children: t.nav.gallery }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#reviews", className: "hover:text-foreground transition-colors", children: t.nav.reviews }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#location", className: "hover:text-foreground transition-colors", children: t.nav.location })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:inline-flex items-center gap-1 rounded-full border border-border bg-card px-2 py-1.5 text-xs font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "size-3.5 text-muted-foreground mx-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setLang("pt"), "aria-label": "Português", className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 transition-colors ${lang === "pt" ? "bg-[color:var(--rose-deep)] text-white" : "hover:bg-[color:var(--rose-soft)] text-muted-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lang === "pt" ? "Português" : "Portuguese" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setLang("en"), "aria-label": "English", className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 transition-colors ${lang === "en" ? "bg-[color:var(--rose-deep)] text-white" : "hover:bg-[color:var(--rose-soft)] text-muted-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lang === "pt" ? "Inglês" : "English" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex md:hidden items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLangOpen((o) => !o), className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium hover:bg-[color:var(--rose-soft)] transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "size-3.5 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lang === "pt" ? "Linguagem" : "Language" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `size-3 text-muted-foreground transition-transform duration-200 ${langOpen ? "rotate-180" : ""}` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `absolute right-0 top-full mt-2 w-36 rounded-xl border border-border bg-card shadow-lg overflow-hidden transition-all duration-200 origin-top ${langOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                setLang("pt");
                setLangOpen(false);
              }, className: `w-full px-4 py-2.5 text-left text-xs flex items-center gap-2 hover:bg-[color:var(--rose-soft)] transition-colors ${lang === "pt" ? "text-[color:var(--rose-deep)] font-semibold" : "text-muted-foreground"}`, children: "🇧🇷 Português" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border mx-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
                setLang("en");
                setLangOpen(false);
              }, className: `w-full px-4 py-2.5 text-left text-xs flex items-center gap-2 hover:bg-[color:var(--rose-soft)] transition-colors ${lang === "en" ? "text-[color:var(--rose-deep)] font-semibold" : "text-muted-foreground"}`, children: [
                "🇬🇧 ",
                lang === "pt" ? "Inglês" : "English"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setMenuOpen((o) => !o), "aria-label": "Menu", className: "inline-flex items-center justify-center rounded-full border border-border bg-card p-2 text-foreground hover:bg-[color:var(--rose-soft)] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: `size-4 absolute transition-all duration-300 ${menuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: `size-4 transition-all duration-300 ${menuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}` })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "border-t border-border/60 bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", onClick: () => setMenuOpen(false), className: "hover:text-[color:var(--rose-deep)] transition-colors", children: t.nav.services }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#gallery", onClick: () => setMenuOpen(false), className: "hover:text-[color:var(--rose-deep)] transition-colors", children: t.nav.gallery }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#reviews", onClick: () => setMenuOpen(false), className: "hover:text-[color:var(--rose-deep)] transition-colors", children: t.nav.reviews }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#location", onClick: () => setMenuOpen(false), className: "hover:text-[color:var(--rose-deep)] transition-colors", children: t.nav.location })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "hero", className: "wallpaper-bg relative pt-36 pb-0 md:pt-40 md:pb-32 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-fade", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "uppercase tracking-[0.3em] text-xs mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "md:hidden text-[color:var(--charcoal)] font-semibold text-[10px] tracking-[0.15em]", children: t.hero.managed }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline text-[color:var(--rose-deep)]", children: t.hero.eyebrow })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl leading-[1.05] text-foreground", children: t.hero.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-md", children: t.hero.subtitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-[color:var(--charcoal)] text-white px-7 py-4 text-sm font-medium hover:bg-foreground transition-colors shadow-lg shadow-[color:var(--rose-deep)]/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
              t.hero.cta
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "inline-flex items-center gap-2 rounded-full border border-[color:var(--charcoal)] text-[color:var(--charcoal)] px-7 py-4 text-sm font-medium hover:bg-[color:var(--rose-soft)] transition-colors", children: lang === "pt" ? "Ver serviços" : "See services" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-fade relative -mt-32 md:mt-0 translate-x-2 md:translate-x-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute -inset-4 rounded-[2rem] bg-white -z-10 rotate-2 shadow-xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: tiaImg, alt: "Kathia Periotto Nails", width: 1600, height: 1024, className: "rounded-none md:rounded-[1.75rem] shadow-none md:shadow-2xl object-cover object-top aspect-[3/4] md:aspect-[4/5] w-full" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal max-w-2xl mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-[color:var(--rose-deep)] uppercase tracking-widest mb-4", children: t.services.eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl", children: t.services.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: t.services.subtitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8", children: t.services.items.map((item, i) => {
        const Icon = serviceIcons[i];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative flex flex-col rounded-3xl border border-[color:var(--rose-soft)] bg-gradient-to-br from-card via-card to-[color:var(--rose-soft)]/30 overflow-hidden hover:shadow-2xl hover:shadow-[color:var(--rose-deep)]/20 hover:-translate-y-1 transition-all duration-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-gradient-to-r from-[color:var(--rose-soft)] to-[color:var(--rose-deep)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-6 -right-6 size-24 rounded-full bg-[color:var(--rose-soft)]/40 blur-2xl group-hover:bg-[color:var(--rose-deep)]/20 transition-colors duration-500 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 p-4 md:p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex size-10 md:size-14 items-center justify-center rounded-xl md:rounded-2xl bg-[color:var(--rose-soft)] text-[color:var(--rose-deep)] group-hover:bg-[color:var(--rose-deep)] group-hover:text-white transition-all duration-300 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4 md:size-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 md:mt-6 font-display text-base md:text-2xl leading-snug", children: item.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 md:mt-3 text-xs md:text-sm text-muted-foreground leading-relaxed flex-1", children: item.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 md:mt-6 h-px bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 md:mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-[color:var(--rose-soft)] px-2.5 py-1 text-xs font-semibold text-[color:var(--charcoal)]", children: item.price }) })
          ] })
        ] }, item.name);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-[color:var(--charcoal)] text-white px-8 py-4 text-sm font-medium hover:bg-foreground transition-colors shadow-lg shadow-[color:var(--rose-deep)]/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
        lang === "pt" ? "Agendar pelo WhatsApp" : "Book on WhatsApp"
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "gallery", className: "py-24 md:py-32 bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal max-w-2xl mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-[color:var(--rose-deep)] uppercase tracking-widest mb-4", children: t.gallery.eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl", children: t.gallery.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: t.gallery.subtitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6", children: galleryImages.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal group relative overflow-hidden rounded-2xl aspect-square", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: `Gallery ${i + 1}`, loading: "lazy", width: 800, height: 800, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--charcoal)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: INSTAGRAM_URL, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-[color:var(--charcoal)] text-white px-7 py-4 text-sm font-medium hover:bg-foreground transition-colors shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "size-4" }),
        lang === "pt" ? "Veja mais no nosso Instagram!" : "See more on our Instagram!"
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "reviews", className: "wallpaper-bg relative py-24 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/35" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-[color:var(--rose-deep)] uppercase tracking-widest mb-4", children: t.reviews.eyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl", children: t.reviews.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-lg mx-auto flex flex-col gap-3 overflow-hidden", style: {
          minHeight: "280px"
        }, children: notifCards.map((card) => {
          const r = t.reviews.items[card.idx];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            animation: `${card.exiting ? "notif-out" : "notif-in"} 0.5s cubic-bezier(0.22,1,0.36,1) forwards`
          }, className: "bg-card/95 backdrop-blur-sm rounded-2xl border border-white/70 px-5 py-4 shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: r.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 text-[color:var(--rose-deep)]", children: Array.from({
                length: 5
              }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-3 fill-current" }, i)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed", children: [
              '"',
              r.text,
              '"'
            ] })
          ] }, card.id);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "location", className: "py-24 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-[color:var(--rose-deep)] uppercase tracking-widest", children: t.location.eyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl mt-6", children: t.location.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: lang === "pt" ? "Estamos localizadas em Londres, prontas para cuidar de você." : "We're located in London, ready to take care of you." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 border-l-4 border-[color:var(--rose-deep)] pl-6 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4 text-[color:var(--rose-deep)] shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: ADDRESS })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: t.location.hint }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground/70 uppercase tracking-widest", children: "Willesden Junction · Harrow Road" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: studioImg, alt: "Bey Glow Salon", className: "w-full rounded-2xl object-cover aspect-[4/3] shadow-md" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden border border-border shadow-md aspect-[4/3]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Map", src: MAPS_EMBED, className: "w-full h-full", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: MAPS_URL, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full border border-[color:var(--charcoal)] text-[color:var(--charcoal)] px-7 py-3.5 text-sm font-medium hover:bg-[color:var(--rose-soft)] transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4" }),
          t.location.directions
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-[color:var(--charcoal)] text-white px-7 py-3.5 text-sm font-medium hover:bg-foreground transition-colors shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
          lang === "pt" ? "Agendar pelo WhatsApp" : "Book on WhatsApp"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-[color:var(--charcoal)] text-white/90 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl text-white", children: "Kathia Periotto Nails" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-white/60", children: t.footer.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-white/50", children: t.footer.managed })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: ADDRESS }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60", children: t.location.hint })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex md:justify-end items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--charcoal)] px-5 py-3 text-sm font-medium hover:bg-[color:var(--rose-soft)] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
            " ",
            t.footer.whatsapp
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: INSTAGRAM_URL, target: "_blank", rel: "noreferrer", "aria-label": "Instagram", className: "inline-flex items-center justify-center size-11 rounded-full border border-white/20 hover:bg-white/10 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "size-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 mt-12 pt-6 border-t border-white/10 text-xs text-white/40 flex flex-wrap justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Kathia Periotto Nails. ",
          t.footer.rights
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "London · NW10" })
      ] })
    ] })
  ] });
}
export {
  Index as component
};

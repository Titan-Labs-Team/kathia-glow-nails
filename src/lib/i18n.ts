export type Lang = "pt" | "en";

export const translations = {
  pt: {
    nav: { services: "Serviços", gallery: "Galeria", reviews: "Avaliações", location: "Localização" },
    hero: {
      eyebrow: "Kathia Periotto Nails",
      title: "Beleza na ponta dos seus dedos",
      subtitle:
        "Manicure e pedicure premium em Londres, com cuidado, higiene impecável e um toque de elegância.",
      cta: "Agendar pelo WhatsApp",
      managed: "Atendimento no Bey Glow Salon · Londres",
    },
    services: {
      eyebrow: "Nossos Serviços",
      title: "Serviços",
      subtitle: "Tratamentos pensados para realçar a sua naturalidade.",
      items: [
        { name: "Manicure", desc: "Cuidado completo das unhas, cutículas e esmaltação impecável.", price: "a partir de £20" },
        { name: "Pedicure", desc: "Relaxamento, esfoliação e acabamento perfeito para os pés.", price: "a partir de £28" },
        { name: "Unhas em Gel", desc: "Durabilidade, brilho e resistência por semanas.", price: "a partir de £35" },
        { name: "Extensão de Unhas", desc: "Unhas alongadas com acabamento natural ou glamouroso, duradouras e resistentes.", price: "a partir de £45" },
      ],
    },
    gallery: { eyebrow: "Nosso Trabalho", title: "Galeria", subtitle: "Um pouco do nosso trabalho recente." },
    reviews: {
      eyebrow: "Depoimentos",
      title: "O que dizem nossas clientes",
      items: [
        { name: "Mariana S.", text: "Atendimento impecável e o resultado superou minhas expectativas. Voltarei sempre!" },
        { name: "Camila R.", text: "Ambiente acolhedor, profissional super atenciosa. As minhas unhas nunca estiveram tão bonitas." },
        { name: "Beatriz L.", text: "Higiene perfeita, capricho em cada detalhe. Recomendo de olhos fechados." },
      ],
    },
    location: {
      eyebrow: "Venha nos Visitar",
      title: "Onde nos encontrar",
      address: "232 High Street, London NW10 4TD",
      hint: "A 2 minutos de Willesden Junction — saída Harrow Road",
      directions: "Ver no Google Maps",
    },
    footer: {
      tagline: "Cuidado, elegância e carinho em cada detalhe.",
      rights: "Todos os direitos reservados.",
      managed: "Atendimento no Bey Glow Salon",
      instagram: "Instagram",
      whatsapp: "WhatsApp",
    },
    langLabel: "EN",
  },
  en: {
    nav: { services: "Services", gallery: "Gallery", reviews: "Reviews", location: "Location" },
    hero: {
      eyebrow: "Kathia Periotto Nails",
      title: "Beauty at your fingertips",
      subtitle:
        "Premium manicure and pedicure in London, with impeccable hygiene, care, and a touch of elegance.",
      cta: "Book on WhatsApp",
      managed: "Hosted at Bey Glow Salon · London",
    },
    services: {
      eyebrow: "Our Services",
      title: "Services",
      subtitle: "Treatments designed to enhance your natural beauty.",
      items: [
        { name: "Manicure", desc: "Complete care for nails, cuticles and a flawless polish.", price: "from £20" },
        { name: "Pedicure", desc: "Relaxing soak, exfoliation and a perfect finish for your feet.", price: "from £28" },
        { name: "Gel Nails", desc: "Long-lasting shine and resistance for weeks on end.", price: "from £35" },
        { name: "Nail Extensions", desc: "Lengthened nails with a natural or glamorous finish, long-lasting and durable.", price: "from £45" },
      ],
    },
    gallery: { eyebrow: "Our Work", title: "Gallery", subtitle: "A glimpse of our recent work." },
    reviews: {
      eyebrow: "Testimonials",
      title: "What our clients say",
      items: [
        { name: "Mariana S.", text: "Impeccable service and the result exceeded my expectations. I'll be back!" },
        { name: "Camila R.", text: "Lovely space, such a caring professional. My nails have never looked better." },
        { name: "Beatriz L.", text: "Perfect hygiene and attention to every detail. I recommend with my eyes closed." },
      ],
    },
    location: {
      eyebrow: "Come Visit Us",
      title: "Find us",
      address: "232 High Street, London NW10 4TD",
      hint: "2 minutes from Willesden Junction — Harrow Road exit",
      directions: "Open in Google Maps",
    },
    footer: {
      tagline: "Care, elegance and warmth in every detail.",
      rights: "All rights reserved.",
      managed: "Hosted at Bey Glow Salon",
      instagram: "Instagram",
      whatsapp: "WhatsApp",
    },
    langLabel: "PT",
  },
} as const;

export const WHATSAPP_NUMBER = "447857590694";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const INSTAGRAM_URL = "https://instagram.com/kathia_periotto_nails";
export const ADDRESS = "232 High Street, London NW10 4TD";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=232+High+Street+London+NW10+4TD";
export const MAPS_EMBED =
  "https://www.google.com/maps?q=232+High+Street,+London+NW10+4TD&output=embed";

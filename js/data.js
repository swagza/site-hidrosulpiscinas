/* =========================================================
   Hidrosul Piscinas — DADOS DO SITE (edite aqui)
   Tudo que aparece nos cards das unidades, no formulário,
   no botão flutuante e no rodapé vem desta lista.

   Fontes:
   - Linktree da bio (linktr.ee/hidrosulpiscinas): nomes das unidades,
     endereços, WhatsApps e links do Google Maps
   - Site oficial (hidrosulpiscinas.com): nº 435, telefone e horário da Unidade Principal
   - Instagram (reel de apresentação): nº 634 da Unidade Centro
   Campos vazios ("") não aparecem no site até serem preenchidos.
   ========================================================= */

const UNITS = [
  {
    id: "principal",
    numero: "01",
    nome: "Unidade Principal",
    bairro: "Recreio",
    endereco: "Av. Bartolomeu de Gusmão, nº 435 – Recreio",
    cidade: "Vitória da Conquista",
    estado: "BA",
    cep: "45000-755",
    telefone: "(77) 3202-5332",
    telLink: "+557732025332",
    whatsapp: "557732025332",          // (77) 3202-5332 — WhatsApp oficial da unidade
    whatsappExibicao: "(77) 3202-5332",
    email: "",                          // não informado nas fontes oficiais
    horario: ["Segunda a sexta: 8h às 18h", "Sábado: 8h às 12h30"],
    regiao: "Vitória da Conquista e região",
    extras: "Com estacionamento e fácil localização",
    mapsLink: "https://maps.app.goo.gl/wpG6nc7qJAMR9rY3A",
    lat: -14.8721997, lng: -40.8505576,
    foto: "assets/img/loja-fachada.jpg",
  },
  {
    id: "candeias",
    numero: "02",
    nome: "Unidade Candeias",
    bairro: "Candeias",
    endereco: "Av. Rosa Cruz, 575 – Candeias (ao lado do Atakarejo)",
    cidade: "Vitória da Conquista",
    estado: "BA",
    cep: "45028-045",
    telefone: "(77) 98801-4334",
    telLink: "+5577988014334",
    whatsapp: "5577988014334",
    whatsappExibicao: "(77) 98801-4334",
    email: "",                          // não informado
    horario: [],                        // não informado — ex.: ["Segunda a sexta: 8h às 18h", "Sábado: 8h às 12h"]
    regiao: "Vitória da Conquista e região",
    extras: "",
    mapsLink: "https://maps.app.goo.gl/MTambyCz4Rrxyg3v6",
    lat: -14.8566926, lng: -40.8285647,
    foto: "",
  },
  {
    id: "centro",
    numero: "03",
    nome: "Unidade Centro",
    bairro: "Centro",
    endereco: "Av. Régis Pacheco, nº 634 – Centro",
    cidade: "Vitória da Conquista",
    estado: "BA",
    cep: "",
    telefone: "(77) 98808-1694",
    telLink: "+5577988081694",
    whatsapp: "5577988081694",
    whatsappExibicao: "(77) 98808-1694",
    email: "",                          // não informado
    horario: [],                        // não informado
    regiao: "Vitória da Conquista e região",
    extras: "",
    mapsLink: "https://maps.app.goo.gl/EzNE47M4KHWkPTNNA",
    lat: -14.8513322, lng: -40.8477992,
    foto: "",
  },
];

/* Depoimentos reais — avaliações públicas no Google Maps das unidades
   (perfis acessados pelos links de localização do Linktree da bio).
   Adicione apenas avaliações reais. */
const TESTIMONIALS = [
  {
    nome: "Ramon Santos",
    unidade: "Unidade Principal",
    texto: "Construção da minha piscina feita no prazo combinado, muito profissionais e prestativos. Recomendo demais!!!",
  },
  {
    nome: "Edson Evangelista",
    unidade: "Unidade Principal",
    texto: "Fiquei surpresa com o atendimento, destaco esse ponto como um diferencial em toda região! Eles são bastante flexível na negociação, além de que demonstram uma capacitação de excelência! Super recomendo!",
  },
  {
    nome: "Alexandre Marques",
    unidade: "Unidade Centro",
    texto: "Excelente ambiente comercial, atendimento e visão de serviço acima da média. RECOMENDO!!!",
  },
  {
    nome: "Yolanda Santos",
    unidade: "Unidade Centro",
    texto: "O melhor preço da cidade, e o atendimento é maravilhoso.",
  },
];

const SOCIAL = {
  instagram: "https://www.instagram.com/hidrosulpiscinas/",
  facebook: "https://www.facebook.com/hidrosulvca/",
  site: "https://www.hidrosulpiscinas.com/",
};

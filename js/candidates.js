// ==========================================
// CANDIDATOS PRESIDENCIALES COLOMBIA 2026
// Lista oficial Registraduría Nacional
// ==========================================

const CANDIDATES = [
  {
    id: 1, ballot: 1,
    name: "Clara Eugenia López Obregón",
    vp: "María Consuelo del Río Mantilla",
    party: "Partido Esperanza Democrática",
    ideology: "izquierda",
    slogan: "\"Democracia social y justicia real\"",
    avatar: "C", avatarColor: ["#FF6B6B", "#CC2222"],
    econScore: -1.4, libScore: 1.2,
    description: "Ex alcaldesa de Bogotá. Propone Estado activo en reducción de desigualdad, reforma al sistema de salud con énfasis público, educación gratuita de calidad, paz con justicia y reconocimiento pleno de derechos civiles. Su tradición liberal-progresista la ubica en la centroizquierda con fuerte énfasis en derechos humanos.",
    planUrl: "#",
    positions: { "ECONOMÍA":-1,"SEGURIDAD":-1,"SALUD":-2,"EDUCACIÓN":-2,"PAZ Y CONFLICTO":-1,"IMPUESTOS":-1,"MEDIO AMBIENTE":-1,"TIERRAS":-1,"DERECHOS":2,"EMPLEO":-1,"CORRUPCIÓN":-1,"DROGAS":1,"REL. INTERNACIONALES":-1,"VIVIENDA":-1,"MODELO DE PAÍS":-1 }
  },
  {
    id: 2, ballot: 2,
    name: "Óscar Mauricio Lizcano Arango",
    vp: "Adriana María Ramírez Martínez",
    party: "Coalición F.A.M.I.L.I.A",
    ideology: "derecha",
    slogan: "\"Familia, orden y prosperidad\"",
    avatar: "O", avatarColor: ["#003893", "#001F5B"],
    econScore: 1.5, libScore: -1.2,
    description: "Ex congresista y líder conservador. Coalición de valores familiares y tradición. Propone economía de mercado, seguridad pública reforzada, defensa de la familia tradicional, rechazo a la ideología de género en las escuelas y mano dura con grupos armados.",
    planUrl: "#",
    positions: { "ECONOMÍA":2,"SEGURIDAD":2,"SALUD":1,"EDUCACIÓN":1,"PAZ Y CONFLICTO":2,"IMPUESTOS":1,"MEDIO AMBIENTE":0,"TIERRAS":1,"DERECHOS":-2,"EMPLEO":1,"CORRUPCIÓN":1,"DROGAS":-1,"REL. INTERNACIONALES":1,"VIVIENDA":1,"MODELO DE PAÍS":1 }
  },
  {
    id: 3, ballot: 3,
    name: "Raúl Santiago Botero Jaramillo",
    vp: "Carlos Fernando Cuevas Romero",
    party: "Romper el Sistema",
    ideology: "centro",
    slogan: "\"Acabar con la política tradicional\"",
    avatar: "R", avatarColor: ["#FCD116", "#B8960C"],
    econScore: 0.6, libScore: 0.8,
    description: "Candidato antisistema. Mezcla crítica a la corrupción sistémica con apertura económica moderada, transparencia radical, participación ciudadana directa y pragmatismo en temas de paz y seguridad. Busca romper con los partidos tradicionales.",
    planUrl: "#",
    positions: { "ECONOMÍA":1,"SEGURIDAD":1,"SALUD":0,"EDUCACIÓN":0,"PAZ Y CONFLICTO":0,"IMPUESTOS":0,"MEDIO AMBIENTE":0,"TIERRAS":0,"DERECHOS":1,"EMPLEO":0,"CORRUPCIÓN":2,"DROGAS":1,"REL. INTERNACIONALES":0,"VIVIENDA":0,"MODELO DE PAÍS":0 }
  },
  {
    id: 4, ballot: 4,
    name: "Miguel Uribe Londoño",
    vp: "Luisa Fernanda Villegas Araque",
    party: "Partido Demócrata Colombiano",
    ideology: "derecha",
    slogan: "\"Colombia en orden y libertad\"",
    avatar: "M", avatarColor: ["#1A4A9B", "#0D2860"],
    econScore: 1.7, libScore: -0.8,
    description: "Senador del Centro Democrático, hijo del ex presidente Álvaro Uribe Vélez. Hereda la línea del uribismo: seguridad democrática, economía de mercado, rechazo total a la guerrilla y narcotráfico, defensa de la propiedad privada y valores conservadores.",
    planUrl: "#",
    positions: { "ECONOMÍA":2,"SEGURIDAD":2,"SALUD":1,"EDUCACIÓN":1,"PAZ Y CONFLICTO":2,"IMPUESTOS":2,"MEDIO AMBIENTE":1,"TIERRAS":1,"DERECHOS":-1,"EMPLEO":1,"CORRUPCIÓN":1,"DROGAS":-2,"REL. INTERNACIONALES":2,"VIVIENDA":1,"MODELO DE PAÍS":2 }
  },
  {
    id: 5, ballot: 5,
    name: "Sondra Macollins Garvin Pinto",
    vp: "Leonardo Karam Helo",
    party: "Sondra Macollins, la abogada de hierro",
    ideology: "derecha",
    slogan: "\"Justicia sin contemplaciones\"",
    avatar: "S", avatarColor: ["#CE1126", "#8B0000"],
    econScore: 1.3, libScore: -1.5,
    description: "Abogada penalista conocida por su imagen de autoridad. Propone una revolución en el sistema judicial: penas más severas, eliminación de beneficios penitenciarios para corruptos y criminales violentos, economía pro-inversión y mano dura con el crimen organizado.",
    planUrl: "#",
    positions: { "ECONOMÍA":1,"SEGURIDAD":2,"SALUD":1,"EDUCACIÓN":1,"PAZ Y CONFLICTO":2,"IMPUESTOS":1,"MEDIO AMBIENTE":0,"TIERRAS":0,"DERECHOS":-2,"EMPLEO":1,"CORRUPCIÓN":2,"DROGAS":-2,"REL. INTERNACIONALES":1,"VIVIENDA":0,"MODELO DE PAÍS":1 }
  },
  {
    id: 6, ballot: 6,
    name: "Iván Cepeda Castro",
    vp: "Aida Marina Quilcué Vivas",
    party: "Movimiento Político Pacto Histórico",
    ideology: "izquierda",
    slogan: "\"La verdad y los derechos como política de Estado\"",
    avatar: "I", avatarColor: ["#FF5555", "#AA0000"],
    econScore: -1.7, libScore: 1.6,
    description: "Senador y defensor de derechos humanos, reconocido por investigar crímenes de Estado. Propone justicia transicional completa, desmonte del paramilitarismo, reforma agraria profunda, economía regulada con justicia social y ampliación de derechos civiles y étnicos.",
    planUrl: "#",
    positions: { "ECONOMÍA":-2,"SEGURIDAD":-1,"SALUD":-2,"EDUCACIÓN":-2,"PAZ Y CONFLICTO":-2,"IMPUESTOS":-2,"MEDIO AMBIENTE":-2,"TIERRAS":-2,"DERECHOS":2,"EMPLEO":-2,"CORRUPCIÓN":-1,"DROGAS":1,"REL. INTERNACIONALES":-2,"VIVIENDA":-2,"MODELO DE PAÍS":-2 }
  },
  {
    id: 7, ballot: 7,
    name: "Abelardo Gabriel De la Espriella",
    vp: "José Manuel Restrepo Abondano",
    party: "Defensores de la Patria",
    ideology: "derecha",
    slogan: "\"Mano de hierro, corazón de pueblo\"",
    avatar: "A", avatarColor: ["#4A90D9", "#1A3A6B"],
    econScore: 1.9, libScore: -1.6,
    description: "Abogado penalista y figura mediática. Propone estilo Milei para Colombia: reducción drástica del Estado, libertad económica total, legalización del porte de armas, combate militar sin cuartel a todos los grupos armados y rechazo a negociaciones con la guerrilla.",
    planUrl: "https://defensoresdelapatria.co",
    positions: { "ECONOMÍA":2,"SEGURIDAD":2,"SALUD":2,"EDUCACIÓN":2,"PAZ Y CONFLICTO":2,"IMPUESTOS":2,"MEDIO AMBIENTE":1,"TIERRAS":1,"DERECHOS":-2,"EMPLEO":2,"CORRUPCIÓN":2,"DROGAS":-2,"REL. INTERNACIONALES":2,"VIVIENDA":2,"MODELO DE PAÍS":2 }
  },
  {
    id: 8, ballot: 8,
    name: "Claudia Nayibe López Hernández",
    vp: "Leonardo Humberto Huerta Gutiérrez",
    party: "Con Claudia Imparables",
    ideology: "centro",
    slogan: "\"Imparables por Colombia\"",
    avatar: "C", avatarColor: ["#FF6B35", "#CC3500"],
    econScore: -0.4, libScore: 1.5,
    description: "Ex alcaldesa de Bogotá y ex senadora. Propone combate radical a la corrupción, economía con inclusión social, feminismo institucional, derechos de minorías, gestión territorial eficiente y un modelo de seguridad ciudadana no militarista.",
    planUrl: "#",
    positions: { "ECONOMÍA":-1,"SEGURIDAD":0,"SALUD":-1,"EDUCACIÓN":-1,"PAZ Y CONFLICTO":0,"IMPUESTOS":-1,"MEDIO AMBIENTE":-1,"TIERRAS":0,"DERECHOS":2,"EMPLEO":-1,"CORRUPCIÓN":2,"DROGAS":1,"REL. INTERNACIONALES":0,"VIVIENDA":-1,"MODELO DE PAÍS":-1 }
  },
  {
    id: 9, ballot: 9,
    name: "Paloma Susana Valencia Laserna",
    vp: "Juan Daniel Oviedo Arango",
    party: "Partido Centro Democrático",
    ideology: "derecha",
    slogan: "\"Seguridad, libertad y prosperidad\"",
    avatar: "P", avatarColor: ["#003893", "#001A4D"],
    econScore: 1.6, libScore: -0.9,
    description: "Senadora del Centro Democrático, reconocida por su rigor técnico. Junto al ex alcalde Juan Daniel Oviedo, propone retomar la seguridad democrática, libre empresa, reforma institucional anticorrupción y política exterior alineada con occidente.",
    planUrl: "https://centrodemocratico.com",
    positions: { "ECONOMÍA":2,"SEGURIDAD":2,"SALUD":1,"EDUCACIÓN":1,"PAZ Y CONFLICTO":2,"IMPUESTOS":2,"MEDIO AMBIENTE":0,"TIERRAS":1,"DERECHOS":-1,"EMPLEO":1,"CORRUPCIÓN":1,"DROGAS":-1,"REL. INTERNACIONALES":2,"VIVIENDA":1,"MODELO DE PAÍS":2 }
  },
  {
    id: 10, ballot: 10,
    name: "Sergio Fajardo Valderrama",
    vp: "Edna Cristina del Socorro Bonilla Seba",
    party: "Partido Político Dignidad & Compromiso",
    ideology: "centro",
    slogan: "\"La educación transforma\"",
    avatar: "S", avatarColor: ["#27AE60", "#1A7A40"],
    econScore: 0.3, libScore: 1.0,
    description: "Ex alcalde de Medellín y ex gobernador de Antioquia. Reconocido por transformar Medellín. Propone desarrollo basado en educación e innovación, instituciones fuertes y transparentes, economía mixta con enfoque social y paz con legalidad.",
    planUrl: "#",
    positions: { "ECONOMÍA":0,"SEGURIDAD":0,"SALUD":0,"EDUCACIÓN":-2,"PAZ Y CONFLICTO":0,"IMPUESTOS":0,"MEDIO AMBIENTE":-1,"TIERRAS":0,"DERECHOS":1,"EMPLEO":0,"CORRUPCIÓN":2,"DROGAS":0,"REL. INTERNACIONALES":0,"VIVIENDA":0,"MODELO DE PAÍS":0 }
  },
  {
    id: 11, ballot: 11,
    name: "Roy Leonardo Barreras Montealegre",
    vp: "Martha Lucía Zamora Ávila",
    party: "Partido Político La Fuerza",
    ideology: "izquierda",
    slogan: "\"La fuerza del pueblo\"",
    avatar: "R", avatarColor: ["#E74C3C", "#9B1C1C"],
    econScore: -1.3, libScore: 0.7,
    description: "Ex senador y ex canciller del gobierno Petro. Propone consolidar los avances sociales del gobierno actual, reforma a la salud pública, protección de derechos laborales, negociación de paz y reducción de la desigualdad mediante políticas redistributivas.",
    planUrl: "#",
    positions: { "ECONOMÍA":-1,"SEGURIDAD":-1,"SALUD":-2,"EDUCACIÓN":-1,"PAZ Y CONFLICTO":-2,"IMPUESTOS":-1,"MEDIO AMBIENTE":-1,"TIERRAS":-2,"DERECHOS":1,"EMPLEO":-2,"CORRUPCIÓN":-1,"DROGAS":0,"REL. INTERNACIONALES":-1,"VIVIENDA":-1,"MODELO DE PAÍS":-1 }
  },
  {
    id: 12, ballot: 12,
    name: "Gustavo Matamoros Camacho",
    vp: "Robinson Alonso Giraldo Mira",
    party: "Partido Ecologista Colombiano",
    ideology: "izquierda",
    slogan: "\"Por la vida y el planeta\"",
    avatar: "G", avatarColor: ["#2ECC71", "#1A7A40"],
    econScore: -1.6, libScore: 1.3,
    description: "Candidato del ecologismo político. Centra la crisis climática como eje de todas las políticas: transición energética urgente, protección de ecosistemas, economía circular y comunitaria, y justicia ambiental para territorios indígenas y afrocolombianos.",
    planUrl: "#",
    positions: { "ECONOMÍA":-2,"SEGURIDAD":-1,"SALUD":-1,"EDUCACIÓN":-1,"PAZ Y CONFLICTO":-1,"IMPUESTOS":-1,"MEDIO AMBIENTE":-2,"TIERRAS":-2,"DERECHOS":2,"EMPLEO":-1,"CORRUPCIÓN":0,"DROGAS":1,"REL. INTERNACIONALES":-1,"VIVIENDA":-1,"MODELO DE PAÍS":-2 }
  },
  {
    id: 13, ballot: 13,
    name: "Luis Gilberto Murillo Urrutia",
    vp: "Luz María Zapata Zapata",
    party: "Luis Gilberto Soy Yo",
    ideology: "centro",
    slogan: "\"Un país para todos\"",
    avatar: "L", avatarColor: ["#FCD116", "#8B7000"],
    econScore: -0.2, libScore: 0.9,
    description: "Ex ministro de Medio Ambiente y ex embajador ante EE.UU. Centroizquierda pragmática. Propone sostenibilidad ambiental compatible con el desarrollo, inversión social, combate a la pobreza rural, diálogo de paz y política exterior independiente y activa.",
    planUrl: "#",
    positions: { "ECONOMÍA":-1,"SEGURIDAD":0,"SALUD":-1,"EDUCACIÓN":-1,"PAZ Y CONFLICTO":-1,"IMPUESTOS":-1,"MEDIO AMBIENTE":-2,"TIERRAS":-1,"DERECHOS":1,"EMPLEO":-1,"CORRUPCIÓN":1,"DROGAS":0,"REL. INTERNACIONALES":0,"VIVIENDA":-1,"MODELO DE PAÍS":-1 }
  },
  {
    id: 14, ballot: 14,
    name: "Carlos Eduardo Caicedo Omar",
    vp: "Nelson Javier Alarcón Suárez",
    party: "Caicedo",
    ideology: "izquierda",
    slogan: "\"El cambio real desde los territorios\"",
    avatar: "C", avatarColor: ["#FF4444", "#990000"],
    econScore: -1.5, libScore: 0.6,
    description: "Ex gobernador del Magdalena y ex alcalde de Santa Marta. Propone reforma agraria real, economía popular, inversión en regiones históricamente abandonadas, paz con los grupos armados y un Estado presente con las comunidades más vulnerables.",
    planUrl: "#",
    positions: { "ECONOMÍA":-2,"SEGURIDAD":-1,"SALUD":-1,"EDUCACIÓN":-2,"PAZ Y CONFLICTO":-2,"IMPUESTOS":-1,"MEDIO AMBIENTE":-1,"TIERRAS":-2,"DERECHOS":1,"EMPLEO":-2,"CORRUPCIÓN":-1,"DROGAS":0,"REL. INTERNACIONALES":-1,"VIVIENDA":-2,"MODELO DE PAÍS":-2 }
  }
];

function getCandidateById(id) {
  return CANDIDATES.find(c => c.id === id);
}

function scoreToMapCoords(econScore, libScore) {
  const x = 250 + (econScore / 2) * 175;
  const y = 300 - (libScore / 2) * 195;
  return { x: Math.round(x), y: Math.round(y) };
}

// ALGORITMO DE MATCH PRECISO - compara cada tema individualmente
function calculateMatch(userAnswers, candidate) {
  const TOPIC_KEYS = [
    "ECONOMÍA","SEGURIDAD","SALUD","EDUCACIÓN","PAZ Y CONFLICTO",
    "IMPUESTOS","MEDIO AMBIENTE","TIERRAS","DERECHOS",
    "EMPLEO","CORRUPCIÓN","DROGAS","REL. INTERNACIONALES","VIVIENDA","MODELO DE PAÍS"
  ];

  let totalDiff = 0;
  let count = 0;

  TOPIC_KEYS.forEach((topic, i) => {
    const userPos = userAnswers[i] ? (userAnswers[i].econScore || 0) : 0;
    const candidatePos = candidate.positions[topic] ?? 0;
    totalDiff += Math.abs(userPos - candidatePos);
    count++;
  });

  const maxPossibleDiff = count * 4;
  const similarity = 1 - (totalDiff / maxPossibleDiff);
  // Amplificar rango para que sea más expresivo
  const amplified = Math.max(0, (similarity - 0.25) / 0.75);
  return Math.round(amplified * 100);
}

function calculateTopicMatch(userAnswers, candidate, topicIndex) {
  const TOPIC_KEYS = [
    "ECONOMÍA","SEGURIDAD","SALUD","EDUCACIÓN","PAZ Y CONFLICTO",
    "IMPUESTOS","MEDIO AMBIENTE","TIERRAS","DERECHOS",
    "EMPLEO","CORRUPCIÓN","DROGAS","REL. INTERNACIONALES","VIVIENDA","MODELO DE PAÍS"
  ];
  const topic = TOPIC_KEYS[topicIndex];
  if (!topic || !userAnswers[topicIndex]) return 50;
  const userPos = userAnswers[topicIndex].econScore || 0;
  const candidatePos = candidate.positions[topic] ?? 0;
  const diff = Math.abs(userPos - candidatePos);
  return Math.round((1 - diff / 4) * 100);
}

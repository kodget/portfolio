export const DOMAINS = [
  { code: 'BIO', name: 'Biographies', color: '#B65C38' },
  { code: 'HIS', name: 'History', color: '#C6A15B' },
  { code: 'MYT', name: 'Mythology', color: '#7A5C8E' },
  { code: 'PSY', name: 'Psychology', color: '#4C7C7C' },
  { code: 'SCI', name: 'Science', color: '#3E6B8A' },
  { code: 'PHI', name: 'Philosophy', color: '#8C7A5B' },
  { code: 'ADV', name: 'Adventure', color: '#A8763E' },
  { code: 'ISH', name: 'Islamic History', color: '#2E7D6B' },
  { code: 'AST', name: 'Astronomy', color: '#3B4D7A' },
  { code: 'GEO', name: 'Geography', color: '#5C7A3E' },
  { code: 'ANC', name: 'Ancient Civilizations', color: '#9C5B3C' },
  { code: 'ECO', name: 'Economics', color: '#6B6B4C' },
  { code: 'ARC', name: 'Architecture', color: '#7A5C3E' },
  { code: 'LAN', name: 'Languages', color: '#8A4E6B' },
  { code: 'MIL', name: 'Military History', color: '#5C4A3E' },
  { code: 'ANT', name: 'Anthropology', color: '#4E7A6B' },
  { code: 'EVO', name: 'Human Evolution', color: '#6B4E8A' },
  { code: 'GTH', name: 'Game Theory', color: '#9B4F4F' },
];

export const WORLDS: Record<string, { label: string; codes: string[]; note: string }> = {
  human: {
    label: 'Human Beings',
    codes: ['BIO', 'PSY', 'ANT', 'EVO'],
    note: "Biography, psychology, anthropology, and human evolution study the same object from different distances: a single mind, the mind's mechanics, the species' variation, and the species' deep past."
  },
  civ: {
    label: 'Civilizations',
    codes: ['HIS', 'ANC', 'ISH', 'MIL'],
    note: "History, ancient civilizations, Islamic history, and military history are different cuts through the same material: how large groups of people organize, expand, and eventually fail."
  },
  universe: {
    label: 'The Universe',
    codes: ['SCI', 'AST', 'GEO'],
    note: "Science, astronomy, and geography are the same physical world at three different scales — the laws, the sky, and the ground you're standing on."
  },
  ideas: {
    label: 'Ideas',
    codes: ['PHI', 'ECO', 'LAN', 'GTH'],
    note: "Philosophy, economics, languages, and game theory are about what people believe is true, what people value, how they interact strategically, and how they encode it all."
  },
  creation: {
    label: 'Human Creation',
    codes: ['ARC', 'MYT'],
    note: "Architecture and mythology are both things people build to make sense of the world — one you can walk through, one you can only walk through in your head."
  },
  adventure: {
    label: 'Adventure & Discovery',
    codes: ['ADV'],
    note: "Firsthand accounts of people who went and looked, often at real physical cost. Read these for judgment under pressure as much as for the destination."
  },
};

export const NOTES: Record<string, string> = {
  BIO: "Biography is the fastest way to internalize how another mind actually worked — the real sequence of decisions, not the polished lesson. Start with the Wright Brothers for disciplined iteration, then pick subjects whose obsessions look most like your own.",
  HIS: "History rewards reading for pattern, not just chronology — the same failures of overreach, the same narrow windows where small groups reshape everything. Start broad with Sapiens, then pick one century or empire and go deep instead of covering all of it evenly.",
  MYT: "Myths are a culture's compressed answers to death, order, and power — worth reading as engineering documents for how societies held themselves together, and worth reading past the Greek default. Start with Edith Hamilton for the raw material, then Campbell for the structure underneath it, and put the Yoruba, Persian, and Hindu material on the same shelf rather than treating it as a separate unit.",
  PSY: "Psychology is most useful when it changes one decision this week, not as trivia. Start with Kahneman on how judgment fails, then branch into whichever subfield maps onto something you're currently living.",
  SCI: "Science literacy here isn't about equations, it's about knowing which questions are settled and which are still live. Start with Bryson for the full sweep, then let one thread — genetics, cosmology, evolution — pull you into a whole book on just that.",
  PHI: "Philosophy is best read as arguments you're allowed to disagree with, not scripture. Start with Sophie's World for the map, then Meditations for something you can apply daily, before primary texts like The Republic.",
  ADV: "These are decisions made under real physical stakes — useful less for adrenaline than for what they show about judgment under exhaustion and uncertainty. Start with Endurance, arguably the cleanest case study in leadership on record.",
  ISH: "Islamic history deserves sources written from inside the tradition, not only secondary Orientalist accounts — and deserves its African chapter told as more than a footnote to the Middle East. Start with The Sealed Nectar for the foundational Sīrah, then Destiny Disrupted for the wider civilizational arc, and don't skip the Sokoto Caliphate and Timbuktu material — that's regional history, not a detour.",
  AST: "Astronomy is one of the few fields you can verify the same night — pair any book here with actually finding the object in the sky. Start with Astrophysics for People in a Hurry, and open Stellarium before you get to black holes.",
  GEO: "Geography explains why certain conflicts and trade routes keep recurring regardless of ideology — read it as the terrain underneath history you already know. Start with Prisoners of Geography and keep a map open while you read.",
  ANC: "Ancient civilizations reward depth on one collapse or one city over a flat survey of all of them — and the standard survey tends to skip Kush, Axum, Great Zimbabwe, and the Sahel empires almost entirely, which is worth correcting deliberately. Start with 1177 B.C. for how an interconnected Bronze Age world could fall apart at once, then go looking for the civilizations the standard version left out.",
  ECO: "Economics is a way of thinking about trade-offs and incentives, not predictions to memorize. Start with Freakonomics or Basic Economics for the reasoning, then Poor Economics if development and health access — close to your own work — interest you.",
  ARC: "Architecture is the physical residue of a civilization's values and constraints, worth pairing with whatever historical period you're already studying. Start with The Architecture of Happiness for why form affects mood, then How Buildings Learn for how it survives real use.",
  LAN: "Language study here runs two tracks: the linguistics of how language works, and the discipline of actually acquiring one — and for you specifically, Arabic and Yorùbá aren't just any two languages to pick, they're routes back into text and tradition already close to home. Start with The Unfolding of Language for the theory, and run Anki daily if fluency is the actual goal.",
  MIL: "Military history is applied decision-making under the worst conditions available — the thread worth tracking is how logistics and morale outweigh tactics almost every time. Start with The Art of War for the compressed principles. A trick worth stealing: before reading what a commander actually did, decide what you would have done first, then compare.",
  ANT: "Anthropology asks what's actually universal about being human versus local custom mistaken for nature. Start with The Third Chimpanzee to place humans back inside the animal kingdom before reading about any single culture.",
  EVO: "Human evolution is the deep-time backstory to your own anatomy and physiology — genuinely useful for a physician, since most of what medicine treats is an ancient body meeting a modern environment. Start with The Story of the Human Body for exactly that argument.",
  GTH: "Game theory provides a mathematical framework for strategic interactions, where the outcome depends on the choices of multiple actors. Start with Thinking Strategically to understand the intuition before diving into formal proofs.",
};

export interface Book {
  id: string;
  d: string[];
  t: string;
  a: string;
  ty: string;
  tier: string;
  start?: boolean;
  core?: boolean;
  desc: string;
}

const rawBooks = [
  // BIOGRAPHIES
  {d:['BIO'],t:'The Wright Brothers',a:'David McCullough',ty:'Book',tier:'Foundational',start:true,desc:"A grounded account of two bicycle mechanics who solved powered flight through patient, unglamorous iteration."},
  {d:['BIO'],t:'Steve Jobs',a:'Walter Isaacson',ty:'Book',tier:'Intermediate',desc:"An unflinching portrait of obsession, taste, and the cost of building at the edge of what's possible."},
  {d:['BIO'],t:'Leonardo da Vinci',a:'Walter Isaacson',ty:'Book',tier:'Intermediate',desc:"Traces how relentless, undisciplined curiosity across art, anatomy, and engineering produced a singular mind."},
  {d:['BIO'],t:'Long Walk to Freedom',a:'Nelson Mandela',ty:'Book',tier:'Intermediate',desc:"A first-person account of patience and conviction across three decades of imprisonment and a nation's rebirth."},
  {d:['BIO'],t:'Alexander Hamilton',a:'Ron Chernow',ty:'Book',tier:'Advanced',desc:"A dense, definitive biography of the immigrant who built the financial architecture of a new nation."},
  {d:['BIO'],t:'Founders',a:'David Senra',ty:'Podcast',tier:'Foundational',desc:"Weekly breakdowns of founder biographies, mined for repeatable patterns in obsession and execution."},

  // HISTORY
  {d:['HIS','ANT','EVO'],t:'Sapiens',a:'Yuval Noah Harari',ty:'Book',tier:'Foundational',start:true,core:true,desc:"A sweeping single-volume argument for how shared fictions let strangers cooperate at civilizational scale."},
  {d:['HIS','GEO'],t:'Guns, Germs, and Steel',a:'Jared Diamond',ty:'Book',tier:'Intermediate',core:true,desc:"Argues that geography and biology, not virtue, explain why some societies came to conquer others."},
  {d:['HIS'],t:"A People's History of the United States",a:'Howard Zinn',ty:'Book',tier:'Intermediate',desc:"Retells American history from the vantage of laborers, the enslaved, and the dispossessed."},
  {d:['HIS'],t:'The History of the Ancient World',a:'Susan Wise Bauer',ty:'Book',tier:'Advanced',desc:"A narrative history connecting Sumer, Egypt, and early China into one continuous story."},
  {d:['HIS'],t:'A Little History of the World',a:'E. H. Gombrich',ty:'Book',tier:'Foundational',desc:"A single-narrator sweep through world history, originally written for young readers and still the clearest on-ramp before you specialize."},
  {d:['HIS'],t:'The Silk Roads',a:'Peter Frankopan',ty:'Book',tier:'Intermediate',desc:"Reframes world history around trade and exchange along Central Asian routes, rather than a Europe-centered narrative."},
  {d:['HIS','MIL'],t:'Hardcore History',a:'Dan Carlin',ty:'Podcast',tier:'Foundational',desc:"Long-form, novelistic deep dives into single historical episodes, from the Mongols to the Pacific War."},
  {d:['HIS','MIL'],t:'The World at War',a:'Thames Television',ty:'Documentary',tier:'Intermediate',desc:"The classic 26-part documentary built from firsthand testimony of the Second World War."},

  // MYTHOLOGY
  {d:['MYT'],t:'Mythology',a:'Edith Hamilton',ty:'Book',tier:'Foundational',start:true,desc:"The standard entry point to Greek, Roman, and Norse myth, told plainly and completely."},
  {d:['MYT'],t:'The Hero with a Thousand Faces',a:'Joseph Campbell',ty:'Book',tier:'Intermediate',desc:"Proposes a single narrative skeleton, the monomyth, underneath myths from unrelated cultures."},
  {d:['MYT'],t:'Norse Mythology',a:'Neil Gaiman',ty:'Book',tier:'Foundational',desc:"A novelist's retelling of the Eddas, readable in an afternoon."},
  {d:['MYT'],t:'The Golden Bough',a:'James George Frazer',ty:'Book',tier:'Advanced',desc:"An exhaustive comparative study of magic, ritual, and myth across ancient religions."},
  {d:['MYT'],t:'Mythology (The Great Courses)',a:'Grant L. Voth',ty:'Course',tier:'Intermediate',desc:"A university-level survey connecting myth to the psychology and politics of the cultures that told them."},
  {d:['MYT'],t:'Yoruba Myths',a:'Ulli Beier',ty:'Book',tier:'Intermediate',desc:"A primary-source collection of Yoruba creation and deity stories — Ọbatala, Ṣàngó, Ọ̀ṣun — recorded directly from Nigerian oral tradition."},
  {d:['MYT'],t:'Shahnameh: The Persian Book of Kings',a:'Ferdowsi (tr. Dick Davis)',ty:'Book',tier:'Advanced',desc:"The 11th-century Persian epic that shaped Iranian national mythology and identity."},
  {d:['MYT'],t:'The Ramayana',a:'R. K. Narayan (retelling)',ty:'Book',tier:'Foundational',desc:"A compact, readable prose retelling of the Hindu epic — a good entry point before the full text."},

  // PSYCHOLOGY
  {d:['PSY'],t:'Thinking, Fast and Slow',a:'Daniel Kahneman',ty:'Book',tier:'Foundational',start:true,core:true,desc:"The Nobel laureate's account of the two systems that drive judgment, and where each one fails."},
  {d:['PSY'],t:"Man's Search for Meaning",a:'Viktor Frankl',ty:'Book',tier:'Foundational',desc:"A psychiatrist's account of surviving Auschwitz, and the theory of meaning he built from it."},
  {d:['PSY'],t:'Influence',a:'Robert Cialdini',ty:'Book',tier:'Intermediate',desc:"Catalogs the six levers that reliably move human behavior, from a researcher who studied con artists to find them."},
  {d:['PSY'],t:'The Body Keeps the Score',a:'Bessel van der Kolk',ty:'Book',tier:'Intermediate',desc:"Explains how trauma reshapes the body and brain, and what the evidence says actually helps it heal."},
  {d:['PSY'],t:'Quiet',a:'Susan Cain',ty:'Book',tier:'Foundational',desc:"Reframes introversion as a durable trait with real advantages, not a deficit to correct."},
  {d:['PSY'],t:'Introduction to Psychology',a:'Paul Bloom (Yale)',ty:'Course',tier:'Intermediate',desc:"A full free undergraduate course covering the major schools of psychological thought."},
  {d:['PSY'],t:'Behave',a:'Robert Sapolsky',ty:'Book',tier:'Advanced',desc:"Explains human behavior at every timescale, from the millisecond before an action to the millions of years of evolution behind it."},
  {d:['PSY'],t:'The Righteous Mind',a:'Jonathan Haidt',ty:'Book',tier:'Intermediate',desc:"Argues that moral judgment comes first and reasoning follows, built to justify a conclusion already reached."},
  {d:['PSY'],t:"The Man Who Mistook His Wife for a Hat",a:'Oliver Sacks',ty:'Book',tier:'Foundational',desc:"Case studies of neurological patients that reveal how specific and fragile normal perception actually is."},

  // SCIENCE
  {d:['SCI'],t:'A Short History of Nearly Everything',a:'Bill Bryson',ty:'Book',tier:'Foundational',start:true,desc:"A layperson's tour of physics, chemistry, and biology, told through the scientists who nearly got it wrong."},
  {d:['SCI','AST'],t:'Cosmos',a:'Carl Sagan',ty:'Book',tier:'Foundational',core:true,desc:"A meditative case for scientific wonder over dogma, and the companion book to the landmark series."},
  {d:['SCI','EVO'],t:'The Selfish Gene',a:'Richard Dawkins',ty:'Book',tier:'Intermediate',desc:"Reframes evolution from the gene's-eye view, with the gene, not the organism, as the true unit of selection."},
  {d:['SCI'],t:'The Gene: An Intimate History',a:'Siddhartha Mukherjee',ty:'Book',tier:'Advanced',desc:"A physician-scientist traces the gene from Mendel's peas to CRISPR, with the ethics attached at every step."},
  {d:['SCI','AST'],t:'Brief Answers to the Big Questions',a:'Stephen Hawking',ty:'Book',tier:'Foundational',desc:"Hawking's last book, answering the questions he was asked most often, in plain language."},

  // PHILOSOPHY
  {d:['PHI'],t:"Sophie's World",a:'Jostein Gaarder',ty:'Book',tier:'Foundational',start:true,core:true,desc:"A novel that smuggles the entire history of Western philosophy inside a mystery plot."},
  {d:['PHI'],t:'Meditations',a:'Marcus Aurelius',ty:'Book',tier:'Foundational',desc:"A Roman emperor's private notebook on duty, mortality, and self-discipline, written for no audience but himself."},
  {d:['PHI'],t:'The Republic',a:'Plato',ty:'Book',tier:'Advanced',desc:"The foundational text of political philosophy, built around the question of what justice actually is."},
  {d:['PHI'],t:'A History of Western Philosophy',a:'Bertrand Russell',ty:'Book',tier:'Advanced',desc:"Russell's opinionated, highly readable march from the pre-Socratics to logical positivism."},
  {d:['PHI'],t:'Justice',a:'Michael Sandel (Harvard)',ty:'Course',tier:'Foundational',desc:"The famous free lecture course that uses live moral dilemmas to teach ethical reasoning."},

  // ADVENTURE
  {d:['ADV'],t:'Endurance',a:'Alfred Lansing',ty:'Book',tier:'Foundational',start:true,core:true,desc:"Shackleton's Antarctic crew, stranded for two years and brought home without losing a single man."},
  {d:['ADV'],t:'Into Thin Air',a:'Jon Krakauer',ty:'Book',tier:'Foundational',desc:"A survivor's account of the 1996 Everest disaster, and how ambition overrode judgment on the mountain."},
  {d:['ADV'],t:'Into the Wild',a:'Jon Krakauer',ty:'Book',tier:'Intermediate',desc:"Reconstructs the life and death of a young man who walked into the Alaskan bush alone."},
  {d:['ADV'],t:'Kon-Tiki',a:'Thor Heyerdahl',ty:'Book',tier:'Intermediate',desc:"A Norwegian explorer's account of crossing the Pacific on a balsa raft to test a migration theory."},
  {d:['ADV'],t:'Free Solo',a:'Jimmy Chin & Elizabeth Chai Vasarhelyi',ty:'Documentary',tier:'Foundational',desc:"Follows Alex Honnold's ropeless climb of El Capitan, and the psychology that made it possible."},
  {d:['ADV'],t:'The Travels of Ibn Battuta',a:'Ibn Battuta',ty:'Book',tier:'Advanced',desc:"The 14th-century Moroccan scholar's firsthand account of nearly thirty years crossing Africa, Arabia, and Asia."},
  {d:['ADV'],t:'The Lost City of Z',a:'David Grann',ty:'Book',tier:'Foundational',desc:"Reconstructs a British explorer's obsessive, fatal search for a lost Amazonian civilization."},
  {d:['ADV'],t:'The Voyage of the Beagle',a:'Charles Darwin',ty:'Book',tier:'Advanced',desc:"Darwin's own travel journal from the expedition that seeded his theory of evolution."},

  // ISLAMIC HISTORY
  {d:['ISH'],t:'The Sealed Nectar (Ar-Raheeq Al-Makhtum)',a:'Safi-ur-Rahman al-Mubarakpuri',ty:'Book',tier:'Foundational',start:true,core:true,desc:"An award-winning, source-based biography of the Prophet Muhammad ﷺ drawn from classical Sīrah literature."},
  {d:['ISH'],t:'Destiny Disrupted',a:'Tamim Ansary',ty:'Book',tier:'Foundational',desc:"A history of the Islamic world told from inside its own narrative, for readers raised on a Western timeline."},
  {d:['ISH'],t:'Lost Islamic History',a:'Firas Alkhateeb',ty:'Book',tier:'Intermediate',desc:"A compact survey connecting the Rashidun era through the Ottomans to the present."},
  {d:['ISH'],t:'When Baghdad Ruled the Muslim World',a:'Hugh Kennedy',ty:'Book',tier:'Advanced',desc:"A detailed history of the Abbasid capital at the height of its scientific and political power."},
  {d:['ISH'],t:'The Venture of Islam (3 vols.)',a:'Marshall G. S. Hodgson',ty:'Book',tier:'Advanced',desc:"The classic, exhaustive academic history of Islamic civilization as a global force, not a regional one."},
  {d:['ISH'],t:'Muslim Heritage',a:'muslimheritage.com',ty:'Tool',tier:'Intermediate',desc:"An online archive documenting Muslim contributions to science, medicine, and technology across a thousand years."},
  {d:['ISH'],t:'Pathfinders: The Golden Age of Arabic Science',a:'Jim Al-Khalili',ty:'Book',tier:'Intermediate',desc:"Covers Ibn Sina, al-Khwarizmi, Ibn al-Haytham, and al-Razi, and the scientific culture that produced them."},
  {d:['ISH'],t:"Timbuktu: The Sahara's Fabled City of Gold",a:'Marq de Villiers & Sheila Hirtle',ty:'Book',tier:'Intermediate',desc:"Traces Timbuktu's rise as a center of Islamic scholarship and trade under the Mali and Songhai empires."},
  {d:['ISH'],t:'The Sokoto Caliphate',a:'Murray Last',ty:'Book',tier:'Advanced',desc:"The standard scholarly history of Usman dan Fodio's jihad and the caliphate that shaped much of northern Nigeria's Islamic identity."},
  {d:['ISH','PHI'],t:'Ibn Khaldun: An Intellectual Biography',a:'Robert Irwin',ty:'Book',tier:'Advanced',desc:"On the North African historian whose Muqaddimah anticipated sociology and economics centuries early."},

  // ASTRONOMY
  {d:['AST'],t:'Astrophysics for People in a Hurry',a:'Neil deGrasse Tyson',ty:'Book',tier:'Foundational',start:true,desc:"A fast, plain-language tour of the universe for readers with no physics background."},
  {d:['AST'],t:'A Brief History of Time',a:'Stephen Hawking',ty:'Book',tier:'Intermediate',desc:"Hawking's attempt to explain black holes, the Big Bang, and time itself without equations."},
  {d:['AST'],t:'The Order of Time',a:'Carlo Rovelli',ty:'Book',tier:'Advanced',desc:"A physicist argues that time, as we intuitively experience it, may not be a fundamental feature of reality."},
  {d:['AST'],t:'Crash Course Astronomy',a:'Phil Plait',ty:'Course',tier:'Foundational',desc:"A free 46-episode video series covering the whole field, from the solar system to cosmology."},
  {d:['AST'],t:'Stellarium',a:'Stellarium.org',ty:'Tool',tier:'Foundational',desc:"A free planetarium app that renders the actual night sky over your location on any date."},
  {d:['AST'],t:'The End of Everything',a:'Katie Mack',ty:'Book',tier:'Advanced',desc:"A cosmologist walks through the five ways the universe itself could end."},

  // GEOGRAPHY
  {d:['GEO'],t:'Prisoners of Geography',a:'Tim Marshall',ty:'Book',tier:'Foundational',start:true,core:true,desc:"Explains major geopolitical conflicts as a near-inevitable consequence of mountains, rivers, and coastlines."},
  {d:['GEO'],t:'The Power of Geography',a:'Tim Marshall',ty:'Book',tier:'Intermediate',desc:"A follow-up applying the same lens to ten regions left out of the first book."},
  {d:['GEO'],t:'The Revenge of Geography',a:'Robert D. Kaplan',ty:'Book',tier:'Advanced',desc:"Argues that terrain, not ideology, is the quiet variable shaping foreign policy over centuries."},
  {d:['GEO'],t:'Google Earth',a:'Google',ty:'Tool',tier:'Foundational',desc:"Free satellite exploration of any terrain, city, or border on the planet."},

  // ANCIENT CIVILIZATIONS
  {d:['ANC'],t:'1177 B.C.: The Year Civilization Collapsed',a:'Eric H. Cline',ty:'Book',tier:'Foundational',start:true,desc:"Reconstructs the sudden collapse of the interconnected Bronze Age world — Egypt, Greece, and the Near East together."},
  {d:['ANC'],t:'The Rise and Fall of Ancient Egypt',a:'Toby Wilkinson',ty:'Book',tier:'Intermediate',desc:"A political history of Egypt told across three thousand years of dynasties."},
  {d:['ANC'],t:'The Horse, the Wheel, and Language',a:'David W. Anthony',ty:'Book',tier:'Advanced',desc:"Uses archaeology and linguistics to trace the Indo-European homeland on the Eurasian steppe."},
  {d:['ANC'],t:'History Begins at Sumer',a:'Samuel Noah Kramer',ty:'Book',tier:'Advanced',desc:"A foundational account of the world's first cities, laws, and writing system."},
  {d:['ANC'],t:'Lost Cities of Africa',a:'Basil Davidson',ty:'Book',tier:'Advanced',desc:"A classic survey of pre-colonial African civilizations — Kush, Axum, Ghana, Mali, Songhai, Great Zimbabwe — still widely cited."},
  {d:['ANC'],t:'The Golden Rhinoceros: Histories of the African Middle Ages',a:'François-Xavier Fauvelle',ty:'Book',tier:'Intermediate',desc:"Reconstructs medieval African kingdoms — Ghana, Mali, Great Zimbabwe, Kilwa, Nubia — through fragmentary but real evidence."},
  {d:['ANC'],t:'1491',a:'Charles C. Mann',ty:'Book',tier:'Intermediate',desc:"Reconstructs the scale and sophistication of Maya, Aztec, Inca, and Olmec civilizations before European contact."},

  // ECONOMICS
  {d:['ECO'],t:'Freakonomics',a:'Steven Levitt & Stephen Dubner',ty:'Book',tier:'Foundational',start:true,desc:"Applies economic reasoning to unlikely subjects, from sumo wrestling to crime rates."},
  {d:['ECO'],t:'Basic Economics',a:'Thomas Sowell',ty:'Book',tier:'Foundational',desc:"A non-technical explanation of markets, prices, and trade-offs with no equations required."},
  {d:['ECO'],t:'Poor Economics',a:'Abhijit Banerjee & Esther Duflo',ty:'Book',tier:'Intermediate',desc:"Uses randomized field experiments to test what actually helps the global poor, often overturning intuition."},
  {d:['ECO'],t:'The Wealth of Nations',a:'Adam Smith',ty:'Book',tier:'Advanced',desc:"The founding text of modern economics, on the division of labor and the invisible hand."},
  {d:['ECO'],t:'Capital in the Twenty-First Century',a:'Thomas Piketty',ty:'Book',tier:'Advanced',desc:"A data-heavy argument that returns on capital tend to outpace economic growth, widening inequality."},
  {d:['ECO'],t:'The Undercover Economist',a:'Tim Harford',ty:'Book',tier:'Foundational',desc:"Explains everyday prices and markets, from coffee shops to supermarkets, using basic economic reasoning."},
  {d:['ECO'],t:'Why Nations Fail',a:'Daron Acemoglu & James A. Robinson',ty:'Book',tier:'Intermediate',desc:"Argues that extractive versus inclusive institutions, not geography or culture, best explain why some nations stay poor."},
  {d:['ECO'],t:"Economics: The User's Guide",a:'Ha-Joon Chang',ty:'Book',tier:'Foundational',desc:"An unusually honest introduction that shows how much of economics is contested judgment rather than settled science."},

  // ARCHITECTURE
  {d:['ARC'],t:'The Architecture of Happiness',a:'Alain de Botton',ty:'Book',tier:'Foundational',start:true,desc:"Argues that buildings shape mood and character, and asks what a building is actually saying."},
  {d:['ARC'],t:'How Buildings Learn',a:'Stewart Brand',ty:'Book',tier:'Intermediate',desc:"Studies how buildings change after they're occupied, and why flexible design ages better than pure form."},
  {d:['ARC'],t:'The Story of Architecture',a:'Patrick Nuttgens',ty:'Book',tier:'Foundational',desc:"A concise, illustrated history running from ancient temples to modern skyscrapers."},
  {d:['ARC'],t:'Abstract: The Art of Design',a:'Netflix',ty:'Documentary',tier:'Foundational',desc:"A design-focused documentary series, with an architecture episode on Bjarke Ingels' pragmatic, playful style."},

  // LANGUAGES
  {d:['LAN'],t:'The Unfolding of Language',a:'Guy Deutscher',ty:'Book',tier:'Foundational',start:true,desc:"Explains how complex grammar emerges from simple, repeated human habit and error over generations."},
  {d:['LAN'],t:'Babel: Around the World in Twenty Languages',a:'Gaston Dorren',ty:'Book',tier:'Intermediate',desc:"A tour of the twenty most-spoken languages, each explored through one distinctive feature."},
  {d:['LAN'],t:'Words on the Move',a:'John McWhorter',ty:'Book',tier:'Foundational',desc:"Argues that language change is not decay but the normal, constant state of any living tongue."},
  {d:['LAN'],t:'Anki',a:'Ankiweb.net',ty:'Tool',tier:'Foundational',desc:"A spaced-repetition flashcard app well suited to vocabulary and script memorization."},
  {d:['LAN'],t:'Colloquial Yoruba',a:'Antonia Folárin Schleicher',ty:'Book',tier:'Foundational',desc:"A structured course-style textbook for learning Yorùbá, useful for reconnecting with a home language through original texts."},

  // MILITARY HISTORY
  {d:['MIL'],t:'The Art of War',a:'Sun Tzu',ty:'Book',tier:'Foundational',start:true,core:true,desc:"A short, aphoristic treatise on strategy, deception, and terrain that still shapes military thinking."},
  {d:['MIL'],t:'A History of Warfare',a:'John Keegan',ty:'Book',tier:'Intermediate',desc:"A single-volume survey arguing that culture, not just technology, determines how societies fight."},
  {d:['MIL'],t:'The Face of Battle',a:'John Keegan',ty:'Book',tier:'Advanced',desc:"Reconstructs Agincourt, Waterloo, and the Somme from the perspective of the ordinary soldier."},
  {d:['MIL'],t:'The Rise and Fall of the Third Reich',a:'William L. Shirer',ty:'Book',tier:'Advanced',desc:"A journalist's firsthand, exhaustive account of Nazi Germany's rise, war, and collapse."},
  {d:['MIL'],t:'On War',a:'Carl von Clausewitz',ty:'Book',tier:'Advanced',desc:"The dense, unfinished theoretical counterpart to Sun Tzu — war as the continuation of politics by other means."},
  {d:['MIL'],t:'The Guns of August',a:'Barbara Tuchman',ty:'Book',tier:'Intermediate',desc:"Reconstructs the miscalculations of the first month of World War I, when small decisions locked in mass slaughter."},
  {d:['MIL'],t:'With the Old Breed',a:'Eugene Sledge',ty:'Book',tier:'Advanced',desc:"A Marine's unsparing memoir of the Pacific War's worst ground fighting, at Peleliu and Okinawa."},

  // ANTHROPOLOGY
  {d:['ANT'],t:'The Third Chimpanzee',a:'Jared Diamond',ty:'Book',tier:'Foundational',start:true,desc:"Places humans back inside the animal kingdom, asking what actually separates us from our closest relatives."},
  {d:['ANT'],t:'Debt: The First 5,000 Years',a:'David Graeber',ty:'Book',tier:'Advanced',desc:"An anthropologist argues that debt, not barter, is the true root of money and economic obligation."},
  {d:['ANT'],t:'Coming of Age in Samoa',a:'Margaret Mead',ty:'Book',tier:'Intermediate',desc:"A landmark, if later contested, early field study on adolescence across cultures."},

  // HUMAN EVOLUTION
  {d:['EVO'],t:'The Story of the Human Body',a:'Daniel Lieberman',ty:'Book',tier:'Foundational',start:true,core:true,desc:"A Harvard evolutionary biologist explains why modern bodies, built for an ancient world, struggle with modern life."},
  {d:['EVO'],t:'Almost Human',a:'Lee Berger',ty:'Book',tier:'Intermediate',desc:"The paleoanthropologist's own account of discovering Homo naledi in a South African cave system."},
  {d:['EVO'],t:'On the Origin of Species',a:'Charles Darwin',ty:'Book',tier:'Advanced',desc:"The original 1859 case for evolution by natural selection — still readable, still startlingly careful."},
  {d:['EVO'],t:'Becoming Human',a:'NOVA / PBS',ty:'Documentary',tier:'Foundational',desc:"A three-part documentary tracing the fossil evidence for human origins."},
  
  // GAME THEORY
  {d:['GTH'],t:'Thinking Strategically',a:'Avinash K. Dixit & Barry J. Nalebuff',ty:'Book',tier:'Foundational',start:true,desc:"The classic entry point into game theory for non-mathematicians, filled with real-world applications in business and life."},
  {d:['GTH'],t:'The Strategy of Conflict',a:'Thomas Schelling',ty:'Book',tier:'Intermediate',desc:"A foundational text that uses game theory to analyze the Cold War, deterrence, and brinkmanship."},
  {d:['GTH'],t:'Theory of Games and Economic Behavior',a:'John von Neumann & Oskar Morgenstern',ty:'Book',tier:'Advanced',desc:"The groundbreaking work that established game theory as an interdisciplinary research field."},
  {d:['GTH'],t:'Game Theory 101',a:'William Spaniel',ty:'Course',tier:'Foundational',desc:"A comprehensive, easy-to-follow YouTube course that covers everything from the Prisoner's Dilemma to Nash equilibria."},
  {d:['GTH'],t:'The Evolution of Cooperation',a:'Robert Axelrod',ty:'Book',tier:'Intermediate',core:true,desc:"Explores how cooperation can emerge in a world of egoists without central authority, based on famous computer tournaments."}
];

export const R: Book[] = rawBooks.map((r, i) => ({ ...r, id: 'r' + i }));

export const TYPES = ['Book', 'Course', 'Podcast', 'Documentary', 'Tool'];

export const REFDESK = [
  { name: 'Project Gutenberg', url: 'https://www.gutenberg.org', desc: "70,000+ free public-domain ebooks — the fastest way to actually read primary sources like Darwin, Plato, or Ibn Battuta in full." },
  { name: 'Internet Archive', url: 'https://archive.org', desc: "Scanned books, historical documents, audio, and video, including many out-of-print titles no publisher sells anymore." },
  { name: 'OpenStax', url: 'https://openstax.org', desc: "Free, peer-reviewed university textbooks — full courses in psychology, economics, biology, and more, not just summaries." },
  { name: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu', desc: "Scholarly-grade philosophy reference, written as real overviews rather than casual internet explainers." },
  { name: 'Smithsonian Human Origins Program', url: 'https://humanorigins.si.edu', desc: "Interactive timelines and research on human evolution, maintained by the actual paleoanthropologists doing the digging." },
  { name: 'NASA Science', url: 'https://science.nasa.gov', desc: "Astronomy, planetary science, and Earth science resources straight from mission data, not secondhand summaries." },
  { name: 'Library of Congress: Maps', url: 'https://www.loc.gov', desc: "Millions of historical maps, atlases, and interactive story maps combining history, narrative, and cartography." },
  { name: 'The Met: Heilbrunn Timeline of Art History', url: 'https://www.metmuseum.org/toah/', desc: "World civilizations seen through the actual objects, art, and architecture they left behind — strong on Islamic art and the ancient Americas." },
  { name: 'Smarthistory', url: 'https://smarthistory.org', desc: "A free visual guide to art and architecture history, organized by period and civilization." },
  { name: 'Class Central', url: 'https://www.classcentral.com', desc: "A directory of hundreds of free university courses, including Harvard's and Yale's open history and philosophy offerings." },
];

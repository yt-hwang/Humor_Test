// MBTI-Humor Matrix Data (English)
// 8 Humor axes (O, I, N, B, V, P, Br, Da) x 8 MBTI letters (E, I, N, S, T, F, J, P)

import { MatrixCell } from './mbtiMatrix';

// 64 Matrix cells (8x8) - English version
export const mbtiMatrixEn: MatrixCell[] = [
  // O (Organized) with MBTI letters
  { humorLetter: 'O', mbtiLetter: 'E', relationship: 'An extrovert with prepared humor becomes a natural event MC. Pre-planned material combined with social energy creates polished, engaging performances.', compatibility: 'high' },
  { humorLetter: 'O', mbtiLetter: 'I', relationship: 'An introvert who prefers prepared humor shines in written or video content. They quietly present well-refined comedy crafted in solitude.', compatibility: 'high' },
  { humorLetter: 'O', mbtiLetter: 'N', relationship: 'When intuitive thinking meets structured comedy, even complex concepts become entertaining. Excellent at systematically organizing and delivering abstract ideas.', compatibility: 'high' },
  { humorLetter: 'O', mbtiLetter: 'S', relationship: 'When sensory detail meets prepared humor, realistic situation comedy is born. Draws audience empathy through concrete descriptions.', compatibility: 'medium' },
  { humorLetter: 'O', mbtiLetter: 'T', relationship: 'The combination of logical thinking and structured humor. Analytically designs comedy, precisely calculating timing and composition.', compatibility: 'high' },
  { humorLetter: 'O', mbtiLetter: 'F', relationship: 'Where emotional empathy meets prepared humor. Considers audience reactions in advance to craft warm, inclusive comedy.', compatibility: 'medium' },
  { humorLetter: 'O', mbtiLetter: 'J', relationship: 'Perfect harmony between planning disposition and prepared humor. Systematically designs comedy, providing stability within predictable flow.', compatibility: 'high' },
  { humorLetter: 'O', mbtiLetter: 'P', relationship: 'A flexible personality that prefers prepared humor keeps the basic framework but adjusts to situations. Balances planning and improvisation.', compatibility: 'neutral' },

  // I (Improvised) with MBTI letters
  { humorLetter: 'I', mbtiLetter: 'E', relationship: 'Extroverted and spontaneous humor becomes the life of the party. Energetic real-time reactions instantly lift the atmosphere.', compatibility: 'high' },
  { humorLetter: 'I', mbtiLetter: 'I', relationship: 'An introvert who prefers spontaneous humor suddenly drops a line among close friends that explodes the mood. Quietly deadly.', compatibility: 'medium' },
  { humorLetter: 'I', mbtiLetter: 'N', relationship: 'Where intuition meets improvisation. Instantly discovers connections and draws laughter with unexpected analogies.', compatibility: 'high' },
  { humorLetter: 'I', mbtiLetter: 'S', relationship: 'Combination of sensory observation and improvised humor. Has the quick wit to immediately convert real-time details into comedy.', compatibility: 'medium' },
  { humorLetter: 'I', mbtiLetter: 'T', relationship: 'Logical but spontaneous humor. Quickly catches contradictions on the spot and creates laughter through logical paradoxes.', compatibility: 'medium' },
  { humorLetter: 'I', mbtiLetter: 'F', relationship: 'Combination of emotional empathy and improvised humor. Reads the other person\'s feelings and throws warm jokes suited to the moment.', compatibility: 'high' },
  { humorLetter: 'I', mbtiLetter: 'J', relationship: 'A planner who enjoys spontaneous humor feels secretly anxious but enjoys the thrill of the moment. Discovers an unexpected side of themselves.', compatibility: 'low' },
  { humorLetter: 'I', mbtiLetter: 'P', relationship: 'Natural combination of flexibility and spontaneity. Rides the flow and freely unleashes humor in any situation.', compatibility: 'high' },

  // N (Intuitive humor) with MBTI letters
  { humorLetter: 'N', mbtiLetter: 'E', relationship: 'Extroverted reality-empathy humor. Boldly expresses situations everyone experiences, drawing out "Yes, exactly!"', compatibility: 'high' },
  { humorLetter: 'N', mbtiLetter: 'I', relationship: 'Introverted but prefers reality-empathy humor. Quietly observes daily life\'s key moments and precisely builds rapport.', compatibility: 'medium' },
  { humorLetter: 'N', mbtiLetter: 'N', relationship: 'When MBTI intuition meets intuitive humor. Finds empathy points in abstract patterns to create deep humor.', compatibility: 'high' },
  { humorLetter: 'N', mbtiLetter: 'S', relationship: 'Combination of MBTI sensing and intuitive humor. A balanced style drawing universal empathy from concrete experiences.', compatibility: 'medium' },
  { humorLetter: 'N', mbtiLetter: 'T', relationship: 'Combination of logical analysis and reality empathy. Points out daily absurdities logically, explaining "why that happens."', compatibility: 'medium' },
  { humorLetter: 'N', mbtiLetter: 'F', relationship: 'Perfect harmony of emotional empathy and reality-based humor. Master of warm everyday humor that touches everyone\'s heart.', compatibility: 'high' },
  { humorLetter: 'N', mbtiLetter: 'J', relationship: 'Systematic approach to reality-empathy humor. Structures daily patterns, summarizing "We all do that, right?"', compatibility: 'medium' },
  { humorLetter: 'N', mbtiLetter: 'P', relationship: 'Combination of flexible observation and reality empathy. Freely discovers and shares empathy points in various situations.', compatibility: 'high' },

  // B (Abstract/Absurd humor) with MBTI letters
  { humorLetter: 'B', mbtiLetter: 'E', relationship: 'An extrovert who loves absurd humor radiates chaotic energy freely. Delights in throwing everyone into confusion.', compatibility: 'high' },
  { humorLetter: 'B', mbtiLetter: 'I', relationship: 'An introvert who prefers absurd humor quietly harbors wild ideas before explosively releasing them.', compatibility: 'medium' },
  { humorLetter: 'B', mbtiLetter: 'N', relationship: 'Where MBTI intuition meets abstract humor. Twists existing contexts in completely new ways for fresh shock value.', compatibility: 'high' },
  { humorLetter: 'B', mbtiLetter: 'S', relationship: 'A sensing type who enjoys absurd humor pursues the fun of bizarrely distorting realistic details.', compatibility: 'low' },
  { humorLetter: 'B', mbtiLetter: 'T', relationship: 'Unexpected combination of logical thinking and illogical humor. Logically designs illogic to create "makes sense but something\'s off" comedy.', compatibility: 'medium' },
  { humorLetter: 'B', mbtiLetter: 'F', relationship: 'Where emotional empathy meets abstract humor. Pursues pure, warm absurdity that\'s wacky yet somehow heartfelt.', compatibility: 'medium' },
  { humorLetter: 'B', mbtiLetter: 'J', relationship: 'When planning meets absurd humor, chaos is systematically designed. The aesthetics of precisely crafted randomness.', compatibility: 'neutral' },
  { humorLetter: 'B', mbtiLetter: 'P', relationship: 'Natural combination of flexibility and abstract humor. Plays freely in the world of unpredictable absurdity.', compatibility: 'high' },

  // V (Verbal) with MBTI letters
  { humorLetter: 'V', mbtiLetter: 'E', relationship: 'An extrovert who loves verbal humor becomes the center of conversation. Constantly leads the mood with witty remarks.', compatibility: 'high' },
  { humorLetter: 'V', mbtiLetter: 'I', relationship: 'An introvert who prefers verbal humor puts great power in few words. A single line carries weight that erupts in laughter.', compatibility: 'medium' },
  { humorLetter: 'V', mbtiLetter: 'N', relationship: 'Combination of intuition and verbal humor. Unpacks complex concepts with witty analogies and wordplay.', compatibility: 'high' },
  { humorLetter: 'V', mbtiLetter: 'S', relationship: 'Where sensory detail meets verbal humor. Vividly conveys concrete situations through words.', compatibility: 'medium' },
  { humorLetter: 'V', mbtiLetter: 'T', relationship: 'Perfect combination of logic and verbal humor. Designs verbal comedy with precise logical structure and hits punchlines exactly.', compatibility: 'high' },
  { humorLetter: 'V', mbtiLetter: 'F', relationship: 'Where emotion meets language. Touches hearts with warm words, delivering both laughter and emotion.', compatibility: 'medium' },
  { humorLetter: 'V', mbtiLetter: 'J', relationship: 'Systematic verbal humor. Leads the audience through structured storytelling and delivers at planned climaxes.', compatibility: 'high' },
  { humorLetter: 'V', mbtiLetter: 'P', relationship: 'Flexible verbal humor. A conversation master who freely adapts words to situations and rides the flow.', compatibility: 'medium' },

  // P (Physical) with MBTI letters
  { humorLetter: 'P', mbtiLetter: 'E', relationship: 'An extrovert who loves physical humor expresses everything on stage with their whole body. Captivates attention with energetic performances.', compatibility: 'high' },
  { humorLetter: 'P', mbtiLetter: 'I', relationship: 'An introvert who prefers physical humor puts everything into expressions and small gestures. Creates big laughs from subtle movements.', compatibility: 'medium' },
  { humorLetter: 'P', mbtiLetter: 'N', relationship: 'Combination of intuition and physical expression. Visualizes abstract concepts through the body in unique ways.', compatibility: 'medium' },
  { humorLetter: 'P', mbtiLetter: 'S', relationship: 'Natural combination of sensing and physical humor. Vividly recreates situations with realistic body reactions.', compatibility: 'high' },
  { humorLetter: 'P', mbtiLetter: 'T', relationship: 'Logical yet enjoys physical humor. Executes comedy with precisely calculated movements. The science of timing.', compatibility: 'medium' },
  { humorLetter: 'P', mbtiLetter: 'F', relationship: 'Where emotion meets physical expression. Conveys emotion with sincere reactions and draws empathy.', compatibility: 'high' },
  { humorLetter: 'P', mbtiLetter: 'J', relationship: 'Planned physical humor. Presents high-quality performances with choreographed, precisely designed movements.', compatibility: 'medium' },
  { humorLetter: 'P', mbtiLetter: 'P', relationship: 'Perfect harmony of flexibility and physical humor. Commands the scene with free, spontaneous physical expression.', compatibility: 'high' },

  // Br (Bright) with MBTI letters
  { humorLetter: 'Br', mbtiLetter: 'E', relationship: 'Combination of extroversion and bright humor is the life of the party. Radiates positive energy freely to make everyone happy.', compatibility: 'high' },
  { humorLetter: 'Br', mbtiLetter: 'I', relationship: 'An introvert who prefers bright humor brightens surroundings with quiet but warm smiles.', compatibility: 'medium' },
  { humorLetter: 'Br', mbtiLetter: 'N', relationship: 'Where intuition meets bright humor. Finds fun from hopeful perspectives and delivers positive messages.', compatibility: 'high' },
  { humorLetter: 'Br', mbtiLetter: 'S', relationship: 'Combination of sensory reality and bright humor. A style that discovers and shares small daily joys.', compatibility: 'high' },
  { humorLetter: 'Br', mbtiLetter: 'T', relationship: 'Logical yet pursues bright humor. Analytical but conclusions are always positive and cheerful.', compatibility: 'medium' },
  { humorLetter: 'Br', mbtiLetter: 'F', relationship: 'Perfect harmony of emotion and bright humor. Master of healing humor who makes everyone laugh with a warm heart.', compatibility: 'high' },
  { humorLetter: 'Br', mbtiLetter: 'J', relationship: 'Systematic bright humor. Plans and maintains a positive atmosphere deliberately.', compatibility: 'medium' },
  { humorLetter: 'Br', mbtiLetter: 'P', relationship: 'Flexible and bright humor combined. Finds positive points in any situation to lift the mood.', compatibility: 'high' },

  // Da (Dark) with MBTI letters
  { humorLetter: 'Da', mbtiLetter: 'E', relationship: 'An extrovert who loves dark humor throws sharp satire publicly. Boldly speaks truth.', compatibility: 'medium' },
  { humorLetter: 'Da', mbtiLetter: 'I', relationship: 'An introvert who prefers dark humor quietly observes then strikes the core with one line. Few words, big impact.', compatibility: 'high' },
  { humorLetter: 'Da', mbtiLetter: 'N', relationship: 'Where intuition meets dark humor. Sees through hidden contradictions and irony, exposing them sharply.', compatibility: 'high' },
  { humorLetter: 'Da', mbtiLetter: 'S', relationship: 'Combination of sensing and dark humor. Concretely captures reality\'s dark side and shows it coldly.', compatibility: 'medium' },
  { humorLetter: 'Da', mbtiLetter: 'T', relationship: 'Powerful combination of logic and dark humor. A critic style that satirizes society\'s contradictions with cold analysis.', compatibility: 'high' },
  { humorLetter: 'Da', mbtiLetter: 'F', relationship: 'Emotional yet enjoys dark humor. Transforms tragedy into humor. A style that heals pain through laughter.', compatibility: 'medium' },
  { humorLetter: 'Da', mbtiLetter: 'J', relationship: 'Systematic dark humor. Delivers messages clearly through precisely constructed satire.', compatibility: 'high' },
  { humorLetter: 'Da', mbtiLetter: 'P', relationship: 'Flexible dark humor. Adjusts sharpness intensity according to situations while freely satirizing.', compatibility: 'medium' }
];

import { GagResult } from "./results";

// 16 humor type results (English)
export const gagResultsEn: Record<string, GagResult> = {
  ONVB: {
    code: "ONVB",
    nickname: "Talk Show Host",
    summary: "You prefer bright, structured, verbal humor built on rhythm and flow. You like designing conversations so everyone has a good time, guiding scenes with well-timed callbacks and smooth transitions.",
    examples: [
      "Steering a group conversation so everyone gets to shine",
      "Three-act structure: setup, callback, perfect closing line",
      "Saving a panel discussion with perfectly timed interjections"
    ],
    bestMatch: "INPB",
    worstMatch: "IBPD",
    bestMatchReason: "When the Talk Show Host lays down the narrative rhythm and the Reaction Star adds genuine emotional responses, the laughter resonates through both structure and amplification. The perfect combo of speaker and reactor.",
    worstMatchReason: "The Deadpan Dynamo thrives on sudden, formless performances that break the flow. Their sense of timing fundamentally clashes with the Talk Show Host's structured, context-driven approach.",
    strengths: [
      "Keeps conversations flowing smoothly",
      "Great at drawing people out and organizing dialogue",
      "Excellent at callbacks and connecting moments",
      "Brightens the mood with a warm, upbeat tone",
      "Skilled at balancing group dynamics",
    ],
    weaknesses: [
      "Can lose steam when there are too many interruptions",
      "Over-explaining can drain the humor",
      "Emotional intensity may come across as mild",
      "Playing it too safe can feel bland",
      "May lean toward comfort over novelty",
    ]
  },
  ONPB: {
    code: "ONPB",
    nickname: "Meme Machine",
    summary: "You love humor built on well-prepared visual gags — expressions, gestures, and props. You prefer intuitive, image-driven comedy where reactions come alive in the moment.",
    examples: [
      "Creating viral moments with a signature expression or gesture",
      "Explaining an entire concept with one perfectly chosen prop",
      "Optimizing short-form clips with punchy visual reactions"
    ],
    bestMatch: "IBPB",
    worstMatch: "INVD",
    bestMatchReason: "When planned visual concepts (Meme Machine) meet improvised physical energy (Eccentric Performer), you get polish plus spontaneity — a recipe for going viral. Structure meets chaos in the best way.",
    worstMatchReason: "The Roast Artist's dry, cutting verbal satire tends to break the visual comedy rhythm. Their emotional tone and delivery style are fundamentally at odds.",
    strengths: [
      "Can make anything funny in a single frame",
      "Expressions and gestures are always on point",
      "Perfectly suited for short-form content",
      "Maintains a consistent comedic concept",
      "Sets the mood quickly with props and staging",
    ],
    weaknesses: [
      "May clash with purely verbal humor styles",
      "Novelty fades quickly without fresh ideas",
      "Repetition can lead to format fatigue",
      "Can seem lightweight if the message is thin",
      "Struggles with long-form storytelling",
    ]
  },
  INVB: {
    code: "INVB",
    nickname: "Crowd Captain",
    summary: "You thrive on spontaneous, bright, verbal humor. You read the room instinctively and drop perfectly timed one-liners that keep the energy up and everyone engaged.",
    examples: [
      "Smoothly recovering from an awkward moment with the perfect quip",
      "Catching someone's quirk and coining an instant nickname or callback",
      "Balancing group conversation with quick passes and witty comebacks"
    ],
    bestMatch: "INPD",
    worstMatch: "OBPD",
    bestMatchReason: "When the Uneasy Jester brings emotional, physical performances, the Crowd Captain channels that energy into a safe, balanced rhythm. Together they create the perfect mix of depth and levity.",
    worstMatchReason: "The Absurd Clown's emotional plot twists and surreal reversals tend to derail the Crowd Captain's flow-based hosting style. Their comedic grammars are fundamentally different.",
    strengths: [
      "Sharp improvisational wit and timing",
      "Great at managing flow, pacing, and transitions",
      "Helps everyone in the group get their moment",
      "Eases tension with a bright, approachable tone",
      "Handles unexpected situations with grace",
    ],
    weaknesses: [
      "May lack emotional depth or world-breaking impact",
      "Playing it too safe can feel underwhelming",
      "Can struggle to establish a distinct personal brand",
      "Harder to pair with heavy, message-driven humor",
      "May hesitate at high-stakes tonal shifts",
    ]
  },
  INPB: {
    code: "INPB",
    nickname: "Reaction Star",
    summary: "You love spontaneous, physical, bright humor — reacting to others with your whole body. Rather than crafting jokes yourself, you shine brightest when genuinely reacting to someone else's comedy, translating humor through vivid expressions, gestures, and energy.",
    examples: [
      "Legendary reaction clips — the gasp, the laugh, the stunned silence",
      "Turning someone else's joke into gold with a perfectly timed facial expression",
      "Creating emotional contagion — when you laugh, everyone laughs"
    ],
    bestMatch: "ONVB",
    worstMatch: "ONVD",
    bestMatchReason: "The Talk Show Host's polished verbal comedy is completed by the Reaction Star's genuine responses. It's the synergy of 'setup' and 'payoff through empathy.'",
    worstMatchReason: "The Comedy Critic focuses on logic and critical messaging rather than emotional resonance. Their analytical approach clashes with the Reaction Star's feeling-first responses.",
    strengths: [
      "Amplifies humor through genuine emotional reactions",
      "Reads emotional cues quickly and accurately",
      "Makes other people's jokes land even harder",
      "Communicates volumes with expressions and body language alone",
      "Undeniable presence in any group dynamic",
    ],
    weaknesses: [
      "May struggle to generate original jokes independently",
      "Can clash with analytical or logic-driven humor",
      "Overwhelming reactions can steal the scene",
      "Less effective when long explanations are needed",
      "Difficult to pair with calm, understated tones",
    ]
  },

  ONVD: {
    code: "ONVD",
    nickname: "Comedy Critic",
    summary: "You prefer structured, verbal, dark humor with a message. You're drawn to sharp satire, logical takedowns, and one-liners that cut through the noise with precision and intent.",
    examples: [
      "A perfectly structured satirical sketch about modern life",
      "Dry commentary that makes you laugh and think simultaneously",
    ],
    bestMatch: "OBVD",
    worstMatch: "INPB",
    bestMatchReason: "Both excel at critical humor but through different formats. Whether on stage or in a comments section, together they create intellectual, razor-sharp synergy.",
    worstMatchReason: "The Comedy Critic pursues logic and message, while the Reaction Star lives on emotional resonance. Trying to deliver a sharp point while someone next to you gasps 'OMG really?!' doesn't quite work.",
    strengths: [
      "Clear message and sharp logical structure",
      "Excels at one-liner takedowns and satire",
      "Addresses social issues head-on",
      "Well-organized delivery that's easy to follow",
      "Balances seriousness with entertainment",
    ],
    weaknesses: [
      "Can come across as cynical or cold",
      "Clashes with emotion-driven reactive humor",
      "Over-explaining kills the punchline",
      "Heavy tone can be exhausting over time",
      "Difficult to pair with visual-first comedy",
    ]
  },
  ONPD: {
    code: "ONPD",
    nickname: "Parody Pro",
    summary: "You love humor that satirizes reality through character performance — accents, mannerisms, and exaggerated reenactments. You appreciate detail-rich parody where the reference game is strong and the physical comedy is sharp.",
    examples: [
      "A scene that's supposed to be touching but is somehow hilarious",
      "Exaggerated reenactments of real people's speech patterns and quirks",
      "Character comedy that explains an entire situation through accent and expression alone"
    ],
    bestMatch: "INVB",
    worstMatch: "IBPB",
    bestMatchReason: "When the Parody Pro creates a rich setup and the Crowd Captain narrates and guides the audience through it, everyone gets drawn in deeper. It's the interpreter plus the creator.",
    worstMatchReason: "One relies on structured satire and references, the other on spontaneous physical energy. Their comedic timing systems are completely different and often collide.",
    strengths: [
      "Exceptional at mimicry and accent recreation",
      "Creates immersion through character and exaggeration",
      "Uses reference callbacks effectively",
      "Clear structure makes it easy to follow along",
      "Finds humor in the finest details",
    ],
    weaknesses: [
      "Heavy reference dependence limits universal appeal",
      "Over-the-top staging can cause fatigue",
      "Spontaneity is relatively weak",
      "Long setups can slow the pace",
      "Needs constant refreshing of material",
    ]
  },
  INVD: {
    code: "INVD",
    nickname: "Roast Artist",
    summary: "You prefer spontaneous, verbal, dark humor — sharp observations delivered with surgical precision. You value insight over volume, finding the most satisfaction in a single devastating line that cuts right to the truth. Minimal words, maximum impact.",
    examples: [
      "Deadpan social commentary that goes viral",
      "Biting one-liners about current events that make you wince and laugh"
    ],
    bestMatch: "IBPD",
    worstMatch: "ONPB",
    bestMatchReason: "The Roast Artist's verbal daggers paired with the Deadpan Dynamo's physical commitment create doubled impact. Two masters of emotional restraint joining forces means both power and style.",
    worstMatchReason: "The Meme Machine's cheerful visual comedy and the Roast Artist's cutting verbal satire operate on completely different wavelengths. The tonal mismatch is hard to bridge.",
    strengths: [
      "Hits the bullseye with minimal words",
      "Razor-sharp observation and insight",
      "A single line can change the entire scene",
      "High density of satirical content",
      "Leaves a lasting impression and food for thought",
    ],
    weaknesses: [
      "Can come across as cold or harsh",
      "Clashes with bright, visual-first humor",
      "Repeated roasting leads to fatigue",
      "Difficult to create emotional empathy",
      "Can weigh down the atmosphere",
    ]
  },
  INPD: {
    code: "INPD",
    nickname: "Uneasy Jester",
    summary: "You prefer spontaneous, physical, dark humor driven by emotional expression. You're drawn to comedy that rides the line between laughter and sadness, using silence, expressions, and gestures to create dramatic tension and cathartic release.",
    examples: [
      "Starting a serious dramatic scene that somehow becomes hilarious",
      "A heartbreaking story that's oddly funny in the telling",
      "Maintaining a completely straight face through an absurd situation"
    ],
    bestMatch: "INVB",
    worstMatch: "IBVB",
    bestMatchReason: "The emotional depth of the Uneasy Jester balanced by the Crowd Captain's flow control creates perfectly paced storytelling. Together, they channel emotional waves effectively.",
    worstMatchReason: "The Chaos Cherub's bright, innocent energy feels too light for the Uneasy Jester's heavy emotional humor, while the Jester's intensity can feel overwhelming to the Cherub.",
    strengths: [
      "Maximizes emotion through expressions, silence, and gestures",
      "Creates depth by oscillating between laughter and sadness",
      "Blends satire and genuine feeling simultaneously",
      "Excels at pacing and dramatic reversals",
      "Commands the room without saying a word",
    ],
    weaknesses: [
      "Emotional weight can become exhausting",
      "Can feel awkward paired with bright, innocent humor",
      "Over-committing can bring down the mood",
      "Lack of explanation can cause misunderstandings",
      "Predictable twists lose their power",
    ]
  },

  OBVB: {
    code: "OBVB",
    nickname: "Skit Architect",
    summary: "You love meticulously crafted absurdist comedy with strong structure, characters, and world-building. You appreciate verbal humor woven into elaborate fictional setups where the comedy comes from contrasts within a carefully designed universe.",
    examples: [
      "Absurdist YouTube sketches with tight, clever dialogue",
      "Multi-layered comedy skits with their own internal logic",
      "Character-driven scenes where the humor builds through conversation"
    ],
    bestMatch: "IBVD",
    worstMatch: "INVD",
    bestMatchReason: "When the Skit Architect builds the world and the Wild Card drops unpredictable chaos into it, the sketch comes alive. It's the harmony of order and disorder.",
    worstMatchReason: "Skits live in 'constructed worlds' while roasts target 'the real world.' Their comedic goals are fundamentally opposite, making collaboration difficult.",
    strengths: [
      "Masterful world-building, structure, and character design",
      "Creates narrative-driven humor through setup contrasts",
      "Completes fictional settings with sharp dialogue and flow",
      "Excellent use of foreshadowing and callbacks",
      "High production value makes immersion easy",
    ],
    weaknesses: [
      "Can struggle with improvisation and surprises",
      "Long setup explanations can feel heavy",
      "Breaks immersion if realism slips",
      "Requires significant preparation time and effort",
      "Patterns can become predictable over time",
    ]
  },
  OBVD: {
    code: "OBVD",
    nickname: "Dark Satirist",
    summary: "You prefer structured, verbal, dark absurdist humor — comedy where biting social criticism is hidden inside surreal, carefully designed scenarios. You enjoy double meanings, ironic layers, and humor that makes you think long after the laughing stops.",
    examples: [
      "Satirical sketch shows that punch up at society",
      "Dark utopia-style content with hidden social commentary"
    ],
    bestMatch: "ONVD",
    worstMatch: "IBVB",
    bestMatchReason: "Two different formats pursuing the same sharp message. Whether on stage or online, this pairing creates intellectual, cutting synergy that hits twice as hard.",
    worstMatchReason: "The Chaos Cherub's innocent, bubbly reactions can feel baffling to someone who takes dark humor seriously. The tonal gap is enormous.",
    strengths: [
      "Hides sharp social critique inside absurdist setups",
      "Designs double meanings and irony with precision",
      "Strong structure ensures the message lands clearly",
      "Maintains high quality even in dark territory",
      "Leaves audiences thinking long after the show",
    ],
    weaknesses: [
      "Sustained dark tone can be draining",
      "Clashes with pure reaction-based humor",
      "Over-explaining reduces playfulness",
      "Rhythm doesn't match bright visual comedy",
      "Atmosphere can become overly serious",
    ]
  },
  OBPB: {
    code: "OBPB",
    nickname: "Concept Clown",
    summary: "You love prepared, physical, absurdist humor — visual performances powered by costumes, props, and sound effects. You respond best to comedy where the staging is impeccable and the concept is committed to fully, creating laughs through images alone.",
    examples: [
      "Parody content creators with elaborate visual setups",
      "B-movie style comedy sketches with over-the-top production"
    ],
    bestMatch: "IBPB",
    worstMatch: "ONVD",
    bestMatchReason: "Planned absurdist staging plus improvised physical energy — one builds the set, the other blows it up. The perfect partnership for performance-based humor.",
    worstMatchReason: "The moment you try to analyze absurdist humor, it stops being absurd. Seriousness and committed visual comedy simply don't mix.",
    strengths: [
      "Powerful visual staging with props, costumes, and effects",
      "High concept consistency and production value",
      "Easily scales to stage-level performances",
      "Creates laughs through images alone",
      "Thrives in well-prepared absurdist setups",
    ],
    weaknesses: [
      "Can clash with verbal or analytical humor",
      "Over-production can make the preparation obvious",
      "Format fatigue sets in without fresh ideas",
      "Can drag during longer performances",
      "Weak at delivering concise messages",
    ]
  },
  OBPD: {
    code: "OBPD",
    nickname: "Absurd Clown",
    summary: "You prefer physical, prepared, dark absurdist humor — comedy where emotional reversals are baked into surreal worlds. You find joy in the collision of laughter and genuine feeling, where emotional range itself becomes a comedic tool.",
    examples: [
      "Reading a tragic story aloud that somehow becomes hilarious"
    ],
    bestMatch: "INPD",
    worstMatch: "INVB",
    bestMatchReason: "They share an emotional wavelength. Both love humor with genuine feeling, and both deconstruct that feeling into comedy. Audience immersion is maximized.",
    worstMatchReason: "The Crowd Captain's rhythm-and-flow approach can find the Absurd Clown's emotional chaos disorienting and hard to manage.",
    strengths: [
      "Creates uncanny pleasure from emotional and absurd collisions",
      "Staged reversals deliver both laughter and lingering feeling",
      "Finely tuned emotional range and pacing",
      "Blends audiovisual staging with genuine emotion",
      "Shines brightest on a prepared stage",
    ],
    weaknesses: [
      "Forced emotional staging can feel manipulative",
      "Long performances can lose momentum",
      "Clashes with rhythm-focused, balanced partners",
      "Can feel heavy for audiences expecting light fun",
      "Predictable twists lose their edge",
    ]
  },

  IBVB: {
    code: "IBVB",
    nickname: "Chaos Cherub",
    summary: "You love spontaneous, verbal, bright absurdist humor — the kind where someone drops an utterly nonsensical line at exactly the right moment and the whole room loses it. Timing over structure, shock over logic.",
    examples: [
      "Blurting out something that makes zero sense but is perfectly timed",
      "'That literally makes no sense... but somehow it works' moments"
    ],
    bestMatch: "ONPB",
    worstMatch: "INPD",
    bestMatchReason: "The Meme Machine's polished visual gags plus the Chaos Cherub's delighted, innocent reactions create a duo that's impossible not to smile at. Pure viral energy.",
    worstMatchReason: "The Uneasy Jester's emotionally heavy humor can feel like a burden to the Chaos Cherub, who thrives on lightness. Their emotional wavelengths just don't sync.",
    strengths: [
      "Exceptional sense of comedic timing",
      "Breaks tension with bright, unexpected remarks",
      "Creates freshness through pure improvisation",
      "Changes the mood with even the shortest reaction",
      "Lifts the energy of any room instantly",
    ],
    weaknesses: [
      "May lack depth in message or structure",
      "Repeated lightness can accumulate into shallowness",
      "Doesn't pair well with heavy emotional content",
      "Loses steam in long-form formats",
      "Can feel frustrating when explanation is needed",
    ]
  },
  IBVD: {
    code: "IBVD",
    nickname: "Wild Card",
    summary: "You prefer spontaneous, verbal, dark absurdist humor — the kind where chaos, satire, and nonsense all explode at once. You enjoy the tension between total illogic and sudden piercing insight, finding thrill in humor that nobody sees coming.",
    examples: [
      "Deadpan dark humor that catches everyone off guard",
      "A moment of sudden, shocking lucidity in the middle of chaos"
    ],
    bestMatch: "OBVB",
    worstMatch: "INPB",
    bestMatchReason: "When the Skit Architect builds a structured world and the Wild Card injects unpredictable disruptions, the humor becomes beautifully uncontrollable. Flow meets flow-breaking equals comedic explosion.",
    worstMatchReason: "The Wild Card strips away emotion while the Reaction Star runs on pure feeling. Their sources of humor are so different that collisions are inevitable.",
    strengths: [
      "Chaos, satire, and absurdity fire simultaneously",
      "Tension between nonsense and genuine insight",
      "Lightning-fast unpredictable pivots",
      "Creates shock with short, blunt delivery",
      "Commanding presence even in short clips",
    ],
    weaknesses: [
      "Overdoing it leads to rapid fatigue",
      "Can seem directionless or unfocused",
      "Clashes with emotion-based reactive humor",
      "Message can be misread or misunderstood",
      "Difficult to sustain over long formats",
    ]
  },
  IBPB: {
    code: "IBPB",
    nickname: "Eccentric Performer",
    summary: "You love spontaneous, physical, bright absurdist humor — the kind where someone's body does all the talking. You respond to exaggerated physical comedy, wordless gags, and fresh physical surprises that keep the energy high.",
    examples: [
      "Physical comedy creators who tell stories without words",
      "Reaction-based meme generators with full-body commitment"
    ],
    bestMatch: "OBPB",
    worstMatch: "INVD",
    bestMatchReason: "Absurdist stage setup plus improvised physical chaos — one builds the playground, the other runs wild in it. Anything goes and everything lands.",
    worstMatchReason: "Refined, sharp verbal satire and chaotic physical nonsense operate on completely different rhythms. The timing mismatch is fundamental.",
    strengths: [
      "Hilarious without saying a single word",
      "Commands the scene through physical exaggeration",
      "Brings reactive energy and fresh surprises",
      "Uses space and environment as comedic tools",
      "Maximum impact in short performances",
    ],
    weaknesses: [
      "Repetition leads to quick burnout",
      "Burns through material rapidly",
      "Can clash with verbal humor rhythms",
      "Lack of polish can seem scattered",
      "Weak at delivering specific messages",
    ]
  },
  IBPD: {
    code: "IBPD",
    nickname: "Deadpan Dynamo",
    summary: "You love the most chaotic form of humor — where emotion, absurdity, satire, and physical performance all explode at once. You find joy in 'total sensory overload that's somehow hilarious,' preferring raw, unfiltered comedic destruction over polished delivery.",
    examples: [
      "Starting completely stone-faced then erupting into improvised physical chaos",
      "Deadpan performances that suddenly and violently break character",
      "Acting totally unfazed by increasingly absurd situations until the dam breaks"
    ],
    bestMatch: "INVD",
    worstMatch: "ONVB",
    bestMatchReason: "The Roast Artist's sharp words and the Deadpan Dynamo's explosive physicality share a common trait: restrained power. When word and body move as one, the impact is devastating.",
    worstMatchReason: "The Talk Show Host builds humor through narrative and flow. The Deadpan Dynamo's unpredictable eruptions and lack of direction feel extremely counterproductive to that approach.",
    strengths: [
      "Emotion, absurdity, satire, and physicality all fire at once",
      "Powerful contrast between deadpan calm and explosive chaos",
      "Scene transitions hit with massive impact",
      "Leaves a strong impression in a very short time",
      "Excels at rule-breaking, convention-defying humor",
    ],
    weaknesses: [
      "Can seem chaotic and unfocused without direction",
      "Clashes with narrative-driven, structured partners",
      "Overstimulation leads to quick audience fatigue",
      "Diminishing returns when overused",
      "Struggles to maintain long-form coherence",
    ]
  },
};

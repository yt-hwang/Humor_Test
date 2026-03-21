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
    ],
    deepSummary: "The Talk Show Host is a master of orchestrated conversation. You don't just tell jokes — you design entire conversations where everyone shines. Like a skilled conductor, you manage timing, transitions, and callbacks to create a seamless flow of entertainment.\n\nYou thrive on bright, structured verbal humor. Your strength lies in reading the room and knowing exactly when to add the perfect line, when to let someone else shine, and when to bring everything back together with a callback that ties the whole conversation in a bow.",
    humorPhilosophy: "The best humor isn't a solo performance — it's a conversation where everyone leaves feeling funnier than they arrived.",
    signatureTechniques: [
      "The Perfect Callback: Referencing earlier moments at just the right time",
      "Flow Management: Keeping conversation energy high without overwhelming anyone",
      "The Graceful Save: Recovering awkward moments with perfectly timed quips",
      "Inclusive Hosting: Drawing quieter people into the spotlight"
    ],
    socialDynamics: {
      inGroups: "You naturally become the conversation facilitator. You manage energy, ensure everyone gets their moment, and keep the flow moving with strategic interjections and callbacks.",
      oneOnOne: "You create space for genuine connection while keeping things light. Your wit helps the other person feel at ease and brings out their humorous side.",
      asAudience: "You're an excellent audience member — laughing at the right moments, asking follow-up questions, and making performers feel appreciated."
    },
    growthTips: [
      "Sometimes let the conversation flow without directing it. Spontaneous moments can be just as magical.",
      "Don't be afraid to go darker or edgier occasionally. Your safe zone is comfortable but expanding it can be rewarding.",
      "Practice being the one who gets reactions rather than always giving them."
    ],
    mbtiCorrelations: [
      {
        dimension: 'EI',
        letterA: { letter: 'E', expression: 'Naturally hosts and directs conversations in any group setting.', reception: 'Energized by audience reactions and group dynamics.', whenJokesFail: 'Quickly pivots to a new topic or brings someone else in.' },
        letterB: { letter: 'I', expression: 'Prefers smaller gatherings where hosting feels more intimate.', reception: 'Values deeper connections over broad reactions.', whenJokesFail: 'Reflects internally and adjusts approach for next time.' }
      },
      {
        dimension: 'NS',
        letterA: { letter: 'N', expression: 'Weaves abstract themes and big-picture narratives into conversation.', reception: 'Appreciates layered, conceptual humor.', whenJokesFail: 'Connects to a larger theme or reframes the context.' },
        letterB: { letter: 'S', expression: 'Grounds humor in concrete details and immediate observations.', reception: 'Prefers clear, observable humor.', whenJokesFail: 'Finds a more specific angle to approach.' }
      },
      {
        dimension: 'TF',
        letterA: { letter: 'T', expression: 'Structures conversation with logical progressions and clever wordplay.', reception: 'Enjoys wit that demonstrates intelligence.', whenJokesFail: 'Analyzes what went wrong structurally.' },
        letterB: { letter: 'F', expression: 'Creates warm, emotionally resonant conversational moments.', reception: 'Values humor that brings people closer.', whenJokesFail: 'Focuses on maintaining the emotional atmosphere.' }
      },
      {
        dimension: 'JP',
        letterA: { letter: 'J', expression: 'Plans conversation arcs with prepared callbacks and transitions.', reception: 'Appreciates well-structured comedic timing.', whenJokesFail: 'Moves to the next prepared element.' },
        letterB: { letter: 'P', expression: 'Adapts fluidly to wherever the conversation goes.', reception: 'Enjoys unexpected turns and improvisations.', whenJokesFail: 'Flows naturally into a new direction.' }
      }
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
    ],
    deepSummary: "The Meme Machine is a visual comedy specialist who thinks in frames and thumbnails. You understand that sometimes a single image, expression, or gesture can communicate more than a thousand words. Your humor lives at the intersection of visual creativity and intuitive timing.\n\nYou excel at creating moments that are instantly shareable and visually memorable. Props, costumes, and staging are your tools, and you wield them with conceptual precision to create content that lands in a single frame.",
    humorPhilosophy: "If you can't capture it in a screenshot, it's not ready. The best comedy is visual and instant.",
    signatureTechniques: [
      "The Perfect Frame: Creating comedy that works as a single image",
      "Prop Comedy 2.0: Using objects as visual punchlines",
      "Expression Mastery: Communicating entire jokes through facial expressions",
      "Visual Callbacks: Recurring visual gags that build over time"
    ],
    socialDynamics: {
      inGroups: "You're the one who creates visual moments — mugging for cameras, setting up photo ops, and turning everyday situations into meme-worthy content.",
      oneOnOne: "Your expressive face and physical presence make conversations entertaining even when you're not trying. You communicate a lot through gestures and looks.",
      asAudience: "You react visually and expressively. Your reactions often become their own content, amplifying others' humor through your responses."
    },
    growthTips: [
      "Develop your verbal skills to complement your visual strengths. The combination is powerful.",
      "Keep your concept fresh — visual comedy can become repetitive quickly.",
      "Learn to extend your impact beyond the short-form. Your skills can translate to longer formats."
    ],
    mbtiCorrelations: [
      {
        dimension: 'EI',
        letterA: { letter: 'E', expression: 'Creates visual content for the widest possible audience.', reception: 'Thrives on seeing content go viral and spread.', whenJokesFail: 'Immediately tries a new visual approach.' },
        letterB: { letter: 'I', expression: 'Crafts visual content for a specific, appreciative audience.', reception: 'Values deep appreciation over broad reach.', whenJokesFail: 'Refines the concept quietly before trying again.' }
      },
      {
        dimension: 'NS',
        letterA: { letter: 'N', expression: 'Creates surreal or conceptual visual compositions.', reception: 'Enjoys visuals that require interpretation.', whenJokesFail: 'Adds layers of meaning or abstraction.' },
        letterB: { letter: 'S', expression: 'Captures concrete, immediately relatable visual moments.', reception: 'Prefers clear, obvious visual humor.', whenJokesFail: 'Simplifies to the most direct visual punchline.' }
      },
      {
        dimension: 'TF',
        letterA: { letter: 'T', expression: 'Designs visuals with precise comedic logic and structure.', reception: 'Appreciates technically well-executed visual jokes.', whenJokesFail: 'Analyzes the visual composition analytically.' },
        letterB: { letter: 'F', expression: 'Creates visuals that evoke emotional responses.', reception: 'Values visual content that makes people feel good.', whenJokesFail: 'Checks if the emotional tone was right.' }
      },
      {
        dimension: 'JP',
        letterA: { letter: 'J', expression: 'Plans and prepares elaborate visual setups in advance.', reception: 'Appreciates high production value visuals.', whenJokesFail: 'Revises the plan and tries a better-prepared version.' },
        letterB: { letter: 'P', expression: 'Captures spontaneous visual moments as they happen.', reception: 'Enjoys unexpected, candid visual comedy.', whenJokesFail: 'Moves on to catch the next moment.' }
      }
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
    ],
    deepSummary: "The Crowd Captain is the master of in-the-moment verbal comedy. You read the room instinctively and know exactly when to drop that one line that makes everyone lose it. Your wit is quick, your timing impeccable, and your ability to manage group energy is unmatched.\n\nUnlike those who prepare their material, you thrive in the spontaneous moment. You're the one who saves awkward silences, coins instant nicknames, and keeps the conversational ball in the air with effortless wit.",
    humorPhilosophy: "The best line is the one nobody saw coming — including you. Trust your instincts and the room will follow.",
    signatureTechniques: [
      "Lightning Wit: Responding faster than anyone expects",
      "The Perfect Quip: One-liners that perfectly match the moment",
      "Energy Reading: Sensing what the room needs and delivering it",
      "Instant Nicknames: Capturing someone's essence in a single word"
    ],
    socialDynamics: {
      inGroups: "You become the connective tissue — throwing quips, passing energy between people, and ensuring the conversation never dies. You're not the loudest, but you're often the funniest.",
      oneOnOne: "Your quick wit keeps the conversation lively and engaging. You make people feel interesting and seen through your responsive humor.",
      asAudience: "You're actively engaged, adding commentary that enhances rather than steals the show. Your reactions are perfectly calibrated to support the performer."
    },
    growthTips: [
      "Don't be afraid to go deeper occasionally. Your lightness is a gift, but depth can amplify it.",
      "Develop some signature material you can fall back on when spontaneity fails.",
      "Learn to step back and let others lead sometimes — your supporting role is valuable too."
    ],
    mbtiCorrelations: [
      {
        dimension: 'EI',
        letterA: { letter: 'E', expression: 'Thrives as the energy manager of any group conversation.', reception: 'Feeds off group laughter and engagement.', whenJokesFail: 'Quickly redirects with another quip or comment.' },
        letterB: { letter: 'I', expression: 'Shines in smaller groups where timing can be more precise.', reception: 'Values quality reactions over quantity.', whenJokesFail: 'Pauses to read the room before the next attempt.' }
      },
      {
        dimension: 'NS',
        letterA: { letter: 'N', expression: 'Makes unexpected connections and abstract references on the fly.', reception: 'Enjoys humor that requires a mental leap.', whenJokesFail: 'Reframes with a different conceptual angle.' },
        letterB: { letter: 'S', expression: 'Observes and comments on immediate, concrete situations.', reception: 'Prefers grounded, observational humor.', whenJokesFail: 'Finds another detail to riff on.' }
      },
      {
        dimension: 'TF',
        letterA: { letter: 'T', expression: 'Delivers precise, logically satisfying quips.', reception: 'Appreciates clever wordplay and wit.', whenJokesFail: 'Analyzes the logical gap in the joke.' },
        letterB: { letter: 'F', expression: 'Uses humor to create warmth and connection.', reception: 'Values humor that makes people feel included.', whenJokesFail: 'Ensures everyone still feels comfortable.' }
      },
      {
        dimension: 'JP',
        letterA: { letter: 'J', expression: 'Has a mental library of responses for common situations.', reception: 'Appreciates well-timed, structured humor.', whenJokesFail: 'Pulls from a prepared backup quip.' },
        letterB: { letter: 'P', expression: 'Completely improvises based on whatever emerges.', reception: 'Loves unpredictable, surprising humor.', whenJokesFail: 'Naturally flows to whatever comes next.' }
      }
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
    ],
    deepSummary: "The Reaction Star is the ultimate amplifier. You don't create humor from nothing — you transform it through genuine emotional resonance. Your gasps, laughs, and expressions don't just respond to comedy, they become part of it.\n\nYour power lies in authenticity. When you react, people know it's real, and that realness is contagious. You make other people's jokes land harder, their stories more engaging, and their moments more memorable.",
    humorPhilosophy: "Laughter is contagious. The most powerful thing you can do is genuinely feel it and let that feeling spread.",
    signatureTechniques: [
      "The Genuine Gasp: Reactions that make everyone turn to look",
      "Expression Amplification: Turning small moments into memorable ones",
      "Emotional Contagion: When you laugh, everyone laughs",
      "The Perfect Mirror: Reflecting and enhancing the energy of others"
    ],
    socialDynamics: {
      inGroups: "You're the barometer of the room. Your reactions tell everyone else when something is funny, touching, or amazing. People instinctively check your response.",
      oneOnOne: "Your expressive engagement makes the other person feel like the most interesting person in the world. You listen and react with your whole being.",
      asAudience: "You're the dream audience member. Your genuine, visible reactions encourage performers and make the whole experience better for everyone."
    },
    growthTips: [
      "Develop your own comedic voice alongside your reactive gifts. You can be both the amplifier and the source.",
      "Learn when to dial back your reactions so you're not overwhelming the original joke.",
      "Practice being equally expressive in writing and text-based formats."
    ],
    mbtiCorrelations: [
      {
        dimension: 'EI',
        letterA: { letter: 'E', expression: 'Reacts openly and expressively for everyone to see.', reception: 'Energized by shared group reactions.', whenJokesFail: 'Fills the silence with supportive energy.' },
        letterB: { letter: 'I', expression: 'Reserves biggest reactions for intimate settings.', reception: 'Values deep resonance over visible reaction.', whenJokesFail: 'Processes internally before responding.' }
      },
      {
        dimension: 'NS',
        letterA: { letter: 'N', expression: 'Reacts to subtle, layered humor others might miss.', reception: 'Appreciates humor that requires interpretation.', whenJokesFail: 'Finds meaning in the attempt anyway.' },
        letterB: { letter: 'S', expression: 'Responds viscerally to concrete, immediate humor.', reception: 'Prefers clear, obvious comedic moments.', whenJokesFail: 'Waits for the next clear moment.' }
      },
      {
        dimension: 'TF',
        letterA: { letter: 'T', expression: 'Appreciates clever construction with analytical reactions.', reception: 'Enjoys recognizing technical comedy skill.', whenJokesFail: 'Notes the structural issue.' },
        letterB: { letter: 'F', expression: 'Responds with pure emotional resonance.', reception: 'Values the feeling over the technique.', whenJokesFail: 'Maintains warmth despite the miss.' }
      },
      {
        dimension: 'JP',
        letterA: { letter: 'J', expression: 'Anticipates punchlines and prepares reactions.', reception: 'Enjoys structured setups with clear payoffs.', whenJokesFail: 'Knows what should have happened.' },
        letterB: { letter: 'P', expression: 'Reacts purely in the moment without anticipation.', reception: 'Loves being genuinely surprised.', whenJokesFail: 'Moves naturally to whatever comes next.' }
      }
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
    ],
    deepSummary: "The Comedy Critic approaches humor like a surgical instrument. Every word is chosen, every structure is deliberate, and every punchline carries weight. You believe comedy can be both entertaining and meaningful — a vehicle for truth wrapped in laughter.\n\nYour strength is the devastating one-liner that cuts through noise and leaves people both laughing and thinking. You prefer substance over style, message over moment, and precision over volume.",
    humorPhilosophy: "Comedy isn't just entertainment — it's truth-telling with a punchline. The best jokes make you laugh, then make you think.",
    signatureTechniques: [
      "The Surgical Strike: One line that says everything",
      "Satirical Structure: Building towards a point with precision",
      "The Dry Delivery: Deadpan that amplifies the message",
      "Social Commentary Wrapped in Wit: Making critique palatable"
    ],
    socialDynamics: {
      inGroups: "You're the one who drops the occasional devastating observation that changes the entire conversation. You speak less but land harder.",
      oneOnOne: "Your conversations tend toward depth and substance. Your humor emerges from genuine insight rather than performance.",
      asAudience: "You're discerning — you laugh when something genuinely earns it, which makes your approval meaningful."
    },
    growthTips: [
      "Balance your critical eye with warmth. Being right isn't enough if people feel attacked.",
      "Practice lighter humor to expand your range and make your sharp moments more effective.",
      "Learn to enjoy humor that doesn't have a message — pure silliness has value too."
    ],
    mbtiCorrelations: [
      {
        dimension: 'EI',
        letterA: { letter: 'E', expression: 'Delivers critique to audiences large and small with confidence.', reception: 'Energized by spreading important messages through humor.', whenJokesFail: 'Restates more clearly and tries again.' },
        letterB: { letter: 'I', expression: 'Shares sharper observations with trusted individuals.', reception: 'Prefers deep agreement over broad reach.', whenJokesFail: 'Reflects on whether the audience was right.' }
      },
      {
        dimension: 'NS',
        letterA: { letter: 'N', expression: 'Connects criticism to big-picture patterns and themes.', reception: 'Enjoys satire that requires connecting dots.', whenJokesFail: 'Abstracts to a higher-level point.' },
        letterB: { letter: 'S', expression: 'Grounds critique in specific, observable examples.', reception: 'Prefers direct, evidence-based humor.', whenJokesFail: 'Provides more concrete examples.' }
      },
      {
        dimension: 'TF',
        letterA: { letter: 'T', expression: 'Builds logically airtight satirical arguments.', reception: 'Appreciates humor that demonstrates intelligence.', whenJokesFail: 'Examines the logical structure.' },
        letterB: { letter: 'F', expression: 'Critiques injustice with moral conviction.', reception: 'Values humor that serves justice.', whenJokesFail: 'Considers the emotional impact on audience.' }
      },
      {
        dimension: 'JP',
        letterA: { letter: 'J', expression: 'Crafts polished satirical pieces with clear structure.', reception: 'Appreciates well-organized comedic arguments.', whenJokesFail: 'Revises and refines the piece.' },
        letterB: { letter: 'P', expression: 'Responds to events with immediate sharp commentary.', reception: 'Values timely, relevant critique.', whenJokesFail: 'Moves to the next observation.' }
      }
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
    ],
    deepSummary: "The Parody Pro is a master of transformation. You don't just imitate — you inhabit. Through accent, mannerism, and exaggerated character work, you create satirical mirrors that reveal truth through exaggeration.\n\nYour comedy requires deep observation and committed performance. You study your subjects, capture their essence, and then turn the dial up to eleven. The result is humor that's both instantly recognizable and hilariously heightened.",
    humorPhilosophy: "Imitation isn't flattery — it's revelation. The best parody shows people what they couldn't see before.",
    signatureTechniques: [
      "Character Capture: Nailing someone's essence in exaggerated form",
      "Accent Mastery: Using voice as a comedic tool",
      "Reference Stacking: Building layers of satirical callbacks",
      "Physical Transformation: Becoming the character completely"
    ],
    socialDynamics: {
      inGroups: "You're the entertainer who can summon characters on demand. Your impressions and parodies become the centerpiece of gatherings.",
      oneOnOne: "You share observations about people and situations, often slipping into character to illustrate a point. Your conversation is peppered with performative moments.",
      asAudience: "You analyze performances for technique while enjoying them. You're studying what makes impressions and parodies work."
    },
    growthTips: [
      "Develop original characters alongside your parodies. Your skills can create something entirely new.",
      "Keep your reference pool updated — stale parodies quickly lose their punch.",
      "Practice more spontaneous imitation to complement your prepared material."
    ],
    mbtiCorrelations: [
      {
        dimension: 'EI',
        letterA: { letter: 'E', expression: 'Performs characters for any audience, anywhere.', reception: 'Thrives on audience recognition of references.', whenJokesFail: 'Switches to a different character or angle.' },
        letterB: { letter: 'I', expression: 'Saves best performances for appreciative audiences.', reception: 'Values deep appreciation of the craft.', whenJokesFail: 'Reflects on the performance privately.' }
      },
      {
        dimension: 'NS',
        letterA: { letter: 'N', expression: 'Creates conceptual parodies that comment on themes.', reception: 'Enjoys parody with multiple layers.', whenJokesFail: 'Connects to a broader satirical point.' },
        letterB: { letter: 'S', expression: 'Focuses on capturing specific, recognizable details.', reception: 'Appreciates technically accurate impressions.', whenJokesFail: 'Nails a more obvious detail.' }
      },
      {
        dimension: 'TF',
        letterA: { letter: 'T', expression: 'Analyzes subjects systematically to capture their essence.', reception: 'Appreciates technically precise impressions.', whenJokesFail: 'Studies what element was off.' },
        letterB: { letter: 'F', expression: 'Captures the emotional feel of subjects.', reception: 'Values parody that feels true to the spirit.', whenJokesFail: 'Adjusts the emotional tone.' }
      },
      {
        dimension: 'JP',
        letterA: { letter: 'J', expression: 'Prepares and polishes character performances in advance.', reception: 'Appreciates refined, practiced impressions.', whenJokesFail: 'Practices more for next time.' },
        letterB: { letter: 'P', expression: 'Slips into character spontaneously as situations arise.', reception: 'Enjoys improvised character moments.', whenJokesFail: 'Adapts the character in real-time.' }
      }
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
    ],
    deepSummary: "The Roast Artist is the sniper of comedy. While others spray and pray, you take one shot and make it count. Your humor is surgical — minimal words, maximum impact, delivered with a coolness that makes the punchline land even harder.\n\nYou observe everything and say almost nothing, until the moment arrives for the perfect devastating line. Your restraint makes your strikes more powerful, and your targets more memorable.",
    humorPhilosophy: "Silence is preparation. When you finally speak, every word should earn its place.",
    signatureTechniques: [
      "The Surgical Strike: One line that ends the conversation",
      "The Long Wait: Building tension through silence",
      "Deadpan Delivery: Coolness that amplifies the hit",
      "Economy of Words: Never using three words when one will do"
    ],
    socialDynamics: {
      inGroups: "You're the quiet one who suddenly drops a bomb that resets the entire room. People learn to watch for your contributions because they're rare but devastating.",
      oneOnOne: "Your observations are sharper and more personal. Close friends get the unfiltered version of your wit.",
      asAudience: "You're analytically engaged, appreciating craft and precision. Your rare laughs are hard-earned endorsements."
    },
    growthTips: [
      "Balance your cutting humor with warmth. People can only take so many hits before shutting down.",
      "Practice softer humor to expand your range and make your sharp moments more effective.",
      "Learn to read when targets can handle being roasted and when they need a break."
    ],
    mbtiCorrelations: [
      {
        dimension: 'EI',
        letterA: { letter: 'E', expression: 'Delivers roasts publicly with confidence and precision.', reception: 'Energized by the crowd reaction to a perfect hit.', whenJokesFail: 'Quickly recalibrates and tries another angle.' },
        letterB: { letter: 'I', expression: 'Reserves best material for trusted circles.', reception: 'Values the reaction of those who matter.', whenJokesFail: 'Processes internally before the next attempt.' }
      },
      {
        dimension: 'NS',
        letterA: { letter: 'N', expression: 'Finds unexpected angles and abstract connections.', reception: 'Appreciates roasts that require interpretation.', whenJokesFail: 'Reframes with a different conceptual angle.' },
        letterB: { letter: 'S', expression: 'Strikes with observable, undeniable facts.', reception: 'Prefers direct, evidence-based roasts.', whenJokesFail: 'Finds another concrete observation.' }
      },
      {
        dimension: 'TF',
        letterA: { letter: 'T', expression: 'Constructs logically devastating arguments.', reception: 'Appreciates technically perfect roasts.', whenJokesFail: 'Analyzes the logical structure.' },
        letterB: { letter: 'F', expression: 'Targets emotional inconsistencies and hypocrisy.', reception: 'Values roasts that expose genuine truths.', whenJokesFail: 'Considers the emotional impact.' }
      },
      {
        dimension: 'JP',
        letterA: { letter: 'J', expression: 'Prepares devastating lines in advance.', reception: 'Appreciates polished, perfected roasts.', whenJokesFail: 'Refines the material for next time.' },
        letterB: { letter: 'P', expression: 'Strikes purely in the moment with whatever presents itself.', reception: 'Values spontaneous, unexpected hits.', whenJokesFail: 'Moves on to the next opportunity.' }
      }
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
    ],
    deepSummary: "The Uneasy Jester lives in the space between laughter and tears. You understand that the most powerful comedy often comes from genuine emotion, and you're not afraid to explore that boundary.\n\nYour performances oscillate between sincerity and absurdity, creating moments where the audience isn't sure whether to laugh or feel. That uncertainty is your canvas — and when you resolve it, the release is cathartic.",
    humorPhilosophy: "The funniest moments are often the saddest ones tilted slightly sideways. Embrace the uncomfortable.",
    signatureTechniques: [
      "Emotional Whiplash: Switching between sincerity and comedy",
      "The Tragic Setup: Playing it straight until the absurdity becomes hilarious",
      "Physical Emotion: Expressing feelings through body language alone",
      "The Long Beat: Using silence to let emotion and comedy coexist"
    ],
    socialDynamics: {
      inGroups: "You're the wildcard who brings unexpected depth. Your contributions can shift the whole emotional register of a gathering.",
      oneOnOne: "You connect through shared emotional experiences. Your humor emerges from genuine understanding and empathy.",
      asAudience: "You engage deeply with emotionally complex performances. You appreciate humor that takes risks."
    },
    growthTips: [
      "Learn to read when groups need lightness versus depth. Not every moment calls for emotional weight.",
      "Practice ending on lighter notes to leave people energized rather than drained.",
      "Develop your lighter side to make your deeper moments more impactful by contrast."
    ],
    mbtiCorrelations: [
      {
        dimension: 'EI',
        letterA: { letter: 'E', expression: 'Shares emotional performances openly with groups.', reception: 'Feeds off collective emotional responses.', whenJokesFail: 'Adjusts the energy to meet the room.' },
        letterB: { letter: 'I', expression: 'Reserves emotional vulnerability for trusted settings.', reception: 'Values deep emotional resonance over broad response.', whenJokesFail: 'Processes and adjusts internally.' }
      },
      {
        dimension: 'NS',
        letterA: { letter: 'N', expression: 'Explores abstract emotional territories through performance.', reception: 'Appreciates symbolic and metaphorical emotional humor.', whenJokesFail: 'Connects to bigger emotional themes.' },
        letterB: { letter: 'S', expression: 'Draws from concrete emotional experiences.', reception: 'Prefers relatable, specific emotional moments.', whenJokesFail: 'Grounds in more recognizable feelings.' }
      },
      {
        dimension: 'TF',
        letterA: { letter: 'T', expression: 'Analyzes emotional dynamics like a scientist.', reception: 'Appreciates technically well-crafted emotional beats.', whenJokesFail: 'Examines what didn\'t land structurally.' },
        letterB: { letter: 'F', expression: 'Accesses genuine emotion for authentic performance.', reception: 'Values sincerity above technique.', whenJokesFail: 'Checks if the emotion felt real.' }
      },
      {
        dimension: 'JP',
        letterA: { letter: 'J', expression: 'Choreographs emotional beats with precision.', reception: 'Appreciates well-structured emotional arcs.', whenJokesFail: 'Revises the emotional structure.' },
        letterB: { letter: 'P', expression: 'Follows genuine emotional impulses in the moment.', reception: 'Values spontaneous emotional authenticity.', whenJokesFail: 'Lets the next genuine feeling emerge.' }
      }
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
    ],
    deepSummary: "The Skit Architect builds worlds. While others tell jokes, you construct entire universes with their own rules, characters, and internal logic — and then find the comedy within those boundaries.\n\nYour strength is systematic creativity. You understand that the funniest absurdity often comes from taking a ridiculous premise completely seriously, and you have the patience and vision to build something truly immersive.",
    humorPhilosophy: "Comedy works best when everyone believes in the world you've built. Commit to the absurd and the laughs will follow.",
    signatureTechniques: [
      "World-Building: Creating complete fictional universes for comedy",
      "Internal Logic: Rules that make absurdity feel consistent",
      "Character Ensemble: Multiple distinct voices working together",
      "The Callback Payoff: Setups that pay off across entire performances"
    ],
    socialDynamics: {
      inGroups: "You're the one who creates elaborate scenarios and gets everyone to play along. Your setups become group experiences.",
      oneOnOne: "You share ideas, reference fictional worlds you both know, and enjoy collaborative world-building in conversation.",
      asAudience: "You appreciate craftsmanship and detail. You notice the setup work that others might miss."
    },
    growthTips: [
      "Practice improvising within your constructed worlds — the best moments often emerge unexpectedly.",
      "Learn to create lighter setups that don't require extensive explanation.",
      "Collaborate with more spontaneous comedians to add unpredictability to your structures."
    ],
    mbtiCorrelations: [
      {
        dimension: 'EI',
        letterA: { letter: 'E', expression: 'Recruits others into constructed worlds enthusiastically.', reception: 'Energized by group immersion in the scenario.', whenJokesFail: 'Adjusts the world to better fit the audience.' },
        letterB: { letter: 'I', expression: 'Builds detailed internal worlds that emerge gradually.', reception: 'Values deep appreciation of the construction.', whenJokesFail: 'Refines the world privately.' }
      },
      {
        dimension: 'NS',
        letterA: { letter: 'N', expression: 'Creates abstract, conceptual universes with thematic depth.', reception: 'Enjoys complex, multi-layered world-building.', whenJokesFail: 'Connects to the world\'s deeper themes.' },
        letterB: { letter: 'S', expression: 'Builds worlds grounded in recognizable details.', reception: 'Appreciates consistency and realistic touches.', whenJokesFail: 'Adds more concrete grounding details.' }
      },
      {
        dimension: 'TF',
        letterA: { letter: 'T', expression: 'Designs logically consistent fictional systems.', reception: 'Appreciates well-structured fictional rules.', whenJokesFail: 'Analyzes the logical gaps.' },
        letterB: { letter: 'F', expression: 'Creates emotionally resonant fictional spaces.', reception: 'Values characters and relationships in the world.', whenJokesFail: 'Strengthens emotional connections.' }
      },
      {
        dimension: 'JP',
        letterA: { letter: 'J', expression: 'Plans every detail of the world in advance.', reception: 'Appreciates comprehensive world design.', whenJokesFail: 'Revises the world blueprint.' },
        letterB: { letter: 'P', expression: 'Discovers the world\'s rules through exploration.', reception: 'Enjoys worlds that evolve organically.', whenJokesFail: 'Lets the world develop in new directions.' }
      }
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
    ],
    deepSummary: "The Dark Satirist hides daggers in candy. You build surreal, absurd worlds that seem playful on the surface but carry sharp social commentary underneath. Your comedy is layered — entertaining on the first pass, thought-provoking on reflection.\n\nYou understand that the most effective critique often comes disguised as entertainment. Your fictional scenarios aren't escapes from reality — they're funhouse mirrors that reveal uncomfortable truths.",
    humorPhilosophy: "Satire dressed as absurdity cuts deeper than direct criticism. Make them laugh, then make them think.",
    signatureTechniques: [
      "Hidden Commentary: Social critique disguised as absurdity",
      "Ironic World-Building: Creating universes that mirror reality's flaws",
      "The Double Meaning: Jokes that work on multiple levels",
      "The Slow Burn Reveal: Truths that emerge gradually"
    ],
    socialDynamics: {
      inGroups: "You're the intellectual provocateur. Your contributions add depth and meaning to conversations that others might keep light.",
      oneOnOne: "You explore ideas deeply, using humor to make difficult topics approachable. Your conversations are substantive.",
      asAudience: "You analyze content for its deeper meaning. You appreciate layered work that rewards attention."
    },
    growthTips: [
      "Balance critique with hope — sustained darkness can alienate audiences.",
      "Practice pure silliness occasionally to keep your touch light.",
      "Learn to let some jokes just be funny without hidden meaning."
    ],
    mbtiCorrelations: [
      {
        dimension: 'EI',
        letterA: { letter: 'E', expression: 'Shares satirical constructions with wide audiences.', reception: 'Energized by spreading critical ideas.', whenJokesFail: 'Adjusts the presentation for broader access.' },
        letterB: { letter: 'I', expression: 'Crafts detailed satirical works for appreciative audiences.', reception: 'Values deep understanding over reach.', whenJokesFail: 'Refines the work for future attempts.' }
      },
      {
        dimension: 'NS',
        letterA: { letter: 'N', expression: 'Creates abstract satirical universes rich with symbolism.', reception: 'Enjoys multi-layered interpretive works.', whenJokesFail: 'Adds more conceptual depth.' },
        letterB: { letter: 'S', expression: 'Grounds satire in recognizable real-world parallels.', reception: 'Prefers clear, direct satirical targets.', whenJokesFail: 'Makes connections more explicit.' }
      },
      {
        dimension: 'TF',
        letterA: { letter: 'T', expression: 'Constructs logically rigorous satirical arguments.', reception: 'Appreciates intellectually coherent critique.', whenJokesFail: 'Strengthens the logical structure.' },
        letterB: { letter: 'F', expression: 'Targets injustice with moral conviction.', reception: 'Values satire that serves justice.', whenJokesFail: 'Reconnects with the emotional core.' }
      },
      {
        dimension: 'JP',
        letterA: { letter: 'J', expression: 'Designs complete satirical systems in advance.', reception: 'Appreciates comprehensive satirical world-building.', whenJokesFail: 'Revises the overall design.' },
        letterB: { letter: 'P', expression: 'Discovers satirical angles through exploration.', reception: 'Enjoys satire that evolves organically.', whenJokesFail: 'Explores new satirical directions.' }
      }
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
    ],
    deepSummary: "The Concept Clown is a visual spectacle. You understand that comedy can be a complete sensory experience — costumes, props, staging, sound effects all working together to create laughs through pure imagery.\n\nYour prepared setups are elaborate and committed. When you execute a concept, you execute it fully. The humor comes from the total commitment to the bit, regardless of how absurd the premise.",
    humorPhilosophy: "If you're going to be absurd, be completely absurd. Half-measures kill comedy — go all in.",
    signatureTechniques: [
      "Total Commitment: Never breaking character, no matter what",
      "Visual Spectacle: Props, costumes, staging working together",
      "Concept Purity: One clear absurd idea, executed perfectly",
      "Production Value Comedy: Making the effort itself part of the joke"
    ],
    socialDynamics: {
      inGroups: "You're the one who transforms spaces. Your elaborate setups turn ordinary gatherings into memorable events.",
      oneOnOne: "You share ideas for bits and concepts. Even casual conversation includes creative visualization.",
      asAudience: "You appreciate production value and commitment. You notice when someone has really put effort into their bit."
    },
    growthTips: [
      "Develop quicker, lower-prep bits to complement your elaborate setups.",
      "Practice verbal and improvisational skills for when props aren't available.",
      "Learn to scale concepts up or down based on the situation."
    ],
    mbtiCorrelations: [
      {
        dimension: 'EI',
        letterA: { letter: 'E', expression: 'Performs elaborate visual concepts for any audience.', reception: 'Thrives on spectacle and attention.', whenJokesFail: 'Amplifies the commitment to win them over.' },
        letterB: { letter: 'I', expression: 'Crafts perfect visual moments for appreciative viewers.', reception: 'Values quality appreciation over mass reaction.', whenJokesFail: 'Refines the concept for next time.' }
      },
      {
        dimension: 'NS',
        letterA: { letter: 'N', expression: 'Creates surreal, conceptually ambitious visual pieces.', reception: 'Enjoys visually interpretive humor.', whenJokesFail: 'Adds more conceptual layers.' },
        letterB: { letter: 'S', expression: 'Executes technically precise visual comedy.', reception: 'Appreciates craft and execution.', whenJokesFail: 'Improves technical execution.' }
      },
      {
        dimension: 'TF',
        letterA: { letter: 'T', expression: 'Designs visual systems with logical precision.', reception: 'Appreciates technically impressive setups.', whenJokesFail: 'Analyzes production elements.' },
        letterB: { letter: 'F', expression: 'Creates visually delightful, joyful experiences.', reception: 'Values visual comedy that makes people happy.', whenJokesFail: 'Checks if the joy came through.' }
      },
      {
        dimension: 'JP',
        letterA: { letter: 'J', expression: 'Plans and prepares every detail of visual concepts.', reception: 'Appreciates polished, perfected productions.', whenJokesFail: 'Revises the production plan.' },
        letterB: { letter: 'P', expression: 'Adapts visual concepts based on available resources.', reception: 'Enjoys resourceful, improvised staging.', whenJokesFail: 'Adapts with whatever is available.' }
      }
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
    ],
    deepSummary: "The Absurd Clown creates comedy from emotional collision. You understand that the most unexpected laughs often come from genuine feeling meeting surreal circumstances. Your performances aren't just funny — they're emotionally complex.\n\nYou prepare elaborate emotional setups, complete with staging and physicality, then subvert expectations in ways that create both laughter and genuine feeling. The audience doesn't know whether to laugh or cry — and that's exactly where you want them.",
    humorPhilosophy: "Real emotion and absurd circumstance create something neither can achieve alone. Make them feel, then make them laugh at feeling.",
    signatureTechniques: [
      "Emotional Collision: Sincere feeling meets absurd situation",
      "The Staged Reversal: Prepared emotional twists that land hard",
      "Physical Pathos: Using body language to create emotional comedy",
      "Audiovisual Emotion: Sound, image, and feeling working together"
    ],
    socialDynamics: {
      inGroups: "You bring unexpected emotional depth to group dynamics. Your contributions can shift the whole tone of a gathering.",
      oneOnOne: "You connect through shared emotional experiences and find comedy in vulnerability together.",
      asAudience: "You engage deeply with emotionally complex performances. You appreciate risks and emotional bravery."
    },
    growthTips: [
      "Practice lighter fare to balance your emotional intensity.",
      "Learn to read when audiences are ready for depth versus when they need levity.",
      "Develop spontaneous emotional comedy alongside your prepared pieces."
    ],
    mbtiCorrelations: [
      {
        dimension: 'EI',
        letterA: { letter: 'E', expression: 'Shares emotional performances openly with groups.', reception: 'Feeds off collective emotional responses.', whenJokesFail: 'Adjusts emotional energy to meet the room.' },
        letterB: { letter: 'I', expression: 'Reserves emotional depth for trusted audiences.', reception: 'Values deep emotional resonance over broad reaction.', whenJokesFail: 'Processes and adjusts internally.' }
      },
      {
        dimension: 'NS',
        letterA: { letter: 'N', expression: 'Creates abstract emotional landscapes.', reception: 'Appreciates symbolic and metaphorical feeling.', whenJokesFail: 'Connects to bigger emotional themes.' },
        letterB: { letter: 'S', expression: 'Draws from specific, concrete emotional experiences.', reception: 'Prefers relatable, recognizable emotions.', whenJokesFail: 'Grounds in more familiar feelings.' }
      },
      {
        dimension: 'TF',
        letterA: { letter: 'T', expression: 'Designs emotional beats with technical precision.', reception: 'Appreciates well-crafted emotional structure.', whenJokesFail: 'Analyzes the emotional mechanics.' },
        letterB: { letter: 'F', expression: 'Accesses genuine emotion for authentic impact.', reception: 'Values sincerity above technique.', whenJokesFail: 'Checks if the emotion felt real.' }
      },
      {
        dimension: 'JP',
        letterA: { letter: 'J', expression: 'Prepares emotional arcs with careful staging.', reception: 'Appreciates well-structured emotional journeys.', whenJokesFail: 'Revises the emotional structure.' },
        letterB: { letter: 'P', expression: 'Follows emotional impulses as they emerge.', reception: 'Values spontaneous emotional authenticity.', whenJokesFail: 'Lets the next genuine feeling arise.' }
      }
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
    ],
    deepSummary: "The Chaos Cherub brings pure, unfiltered joy through nonsense. You drop perfectly timed absurdities that make no logical sense but somehow hit exactly right. Your comedy isn't about meaning — it's about feeling.\n\nYou trust your instincts completely. When you feel the moment is right, you say the ridiculous thing, and more often than not, it lands. Your innocence and brightness make even dark situations lighter.",
    humorPhilosophy: "Logic is overrated. Sometimes 'because it's funny' is the only reason you need.",
    signatureTechniques: [
      "The Perfect Non-Sequitur: Saying exactly the wrong thing at exactly the right time",
      "Innocent Energy: Pure brightness that disarms criticism",
      "Timing Over Content: When you say it matters more than what",
      "The Lucky Break: Moments where nonsense accidentally makes sense"
    ],
    socialDynamics: {
      inGroups: "You're the mood lifter. Your random comments and reactions keep energy high and prevent things from getting too heavy.",
      oneOnOne: "Your playful, unpredictable nature makes conversations fun. You find joy in small moments.",
      asAudience: "You react with genuine delight to anything that makes you happy. Your laughter is infectious and generous."
    },
    growthTips: [
      "Develop some structure to complement your spontaneity — it can make your chaos land even harder.",
      "Practice being present in heavier moments without immediately lightening them.",
      "Learn to recognize when your brightness is exactly what's needed versus when restraint helps."
    ],
    mbtiCorrelations: [
      {
        dimension: 'EI',
        letterA: { letter: 'E', expression: 'Shares chaos freely and openly with anyone.', reception: 'Energized by spreading joy and laughter.', whenJokesFail: 'Tries something else immediately.' },
        letterB: { letter: 'I', expression: 'Reserves silliest moments for trusted friends.', reception: 'Values intimate joy over broad reactions.', whenJokesFail: 'Processes before the next attempt.' }
      },
      {
        dimension: 'NS',
        letterA: { letter: 'N', expression: 'Creates surreal, logic-defying connections.', reception: 'Enjoys abstract absurdity.', whenJokesFail: 'Makes an even stranger connection.' },
        letterB: { letter: 'S', expression: 'Finds the ridiculous in immediate situations.', reception: 'Prefers grounded silliness.', whenJokesFail: 'Points at something else funny.' }
      },
      {
        dimension: 'TF',
        letterA: { letter: 'T', expression: 'Disrupts logic intentionally for effect.', reception: 'Appreciates clever subversions.', whenJokesFail: 'Analyzes the timing.' },
        letterB: { letter: 'F', expression: 'Shares joy purely for the feeling.', reception: 'Values the emotional boost.', whenJokesFail: 'Ensures everyone feels okay.' }
      },
      {
        dimension: 'JP',
        letterA: { letter: 'J', expression: 'Has signature chaos moves ready to deploy.', reception: 'Appreciates reliable chaos.', whenJokesFail: 'Pulls out a backup bit.' },
        letterB: { letter: 'P', expression: 'Pure improvisation with no plan whatsoever.', reception: 'Loves complete surprise.', whenJokesFail: 'Just does something else.' }
      }
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

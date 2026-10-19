export const personalInfo = {
  name: "Arnav Kapadnis",
  monogram: "AK",
  domain: "arnv.is-a.dev",
  title: "Building things, breaking things, figuring things out.",
  headlineSubtitle: "Computer engineering student from Nashik, India. Exploring software development, game systems, and creative technology.",
  location: "Nashik, Maharashtra, India",
  college: "SPPU (Savitribai Phule Pune University)",
  year: "Second-year B.E. Computer Engineering",
  email: "arnavkapadnis207@gmail.com",
  socials: {
    github: "https://github.com/arnv-dev",
    linkedin: "https://www.linkedin.com/in/arnav-kapadnis-913585293/",
    instagram: "https://www.instagram.com/just.arnv/",
    email: "mailto:arnavkapadnis207@gmail.com",
    youtube: "https://github.com/arnv-dev" // ZenArc placeholder link
  }
};

export const heroArtifacts = [
  {
    id: "flow-player",
    label: "Flow Mini Player",
    tag: "Forked Open-Source",
    desc: "Hi-Res FLAC player with multi-API lyrics fallback & SQLite metadata cache.",
    icon: "music",
    color: "#D05938"
  },
  {
    id: "zombies",
    label: "Dead Route",
    tag: "Roblox Studio",
    desc: "Wave combat & low-poly environmental progression.",
    icon: "gamepad",
    color: "#365B43"
  },
  {
    id: "colab-server",
    label: "Colab Cloud VM",
    tag: "Ngrok & Java Plugin",
    desc: "PaperMC headless host, Google Drive FUSE storage & dynamic TCP tunnel sync.",
    icon: "cpu",
    color: "#C28E34"
  },
  {
    id: "lamp",
    label: "Desk Lamp",
    tag: "Ambient Light",
    desc: "Click to toggle warm ambient glow.",
    icon: "lightbulb",
    color: "#E5A93B"
  }
];

export const projects = [
  {
    id: "flow",
    index: "01",
    title: "Flow",
    subtitle: "Forked open-source player, re-engineered for high-res audio.",
    tagline: "An open-source music player fork re-engineered for bit-perfect FLAC audio, multi-source lyrics synchronization with fluid animations, and SQLite library caching.",
    status: "Active Exploration & Prototype",
    category: "Native Application",
    featured: true,
    accent: "#D05938",
    tags: ["Swift", "macOS", "Open-Source Fork", "FLAC / Hi-Res Audio", "SQLite Metadata Cache", "Custom LRC Parser", "Multi-API Fallback"],
    github: "https://github.com/arnv-dev/Flow",
    overview: "Forked and heavily modified an open-source audio player to construct a high-fidelity local listening experience. Added native decoding support for high-resolution FLAC audio files, engineered a resilient lyrics ingestion pipeline querying multiple API services with automated fallback sources, designed a custom .lrc parser featuring fluid typographic animations, and integrated a persistent SQLite metadata cache for lightning-fast loading of song lists, album covers, and synchronized lyrics.",
    highlights: [
      "Forked open-source codebase and engineered bit-perfect high-resolution FLAC audio pipeline",
      "Multi-service lyrics fetcher with automated fallback queries across diverse APIs",
      "Custom-built timestamped .lrc parser with fluid typographic line-by-line animations",
      "SQLite metadata caching layer for instant sub-millisecond retrieval of songs, artwork & lyrics"
    ],
    // Interactive single-song player with verified millisecond LRC synchronization
    playlist: [
      {
        id: "another-day-of-sun",
        songTitle: "Another Day Of Sun",
        artist: "La La Land Cast",
        album: "Summer Jazz Beats",
        duration: "03:48",
        format: "320 kbps High-Res MP3",
        cacheStatus: "Local Storage Hit (0.2ms)",
        lyricsSource: "Verified Synced LRC [id: b6jo1g1n]",
        audioSrc: "./music/Another Day Of Sun.mp3",
        lyrics: [
          { time: 0, text: "♪ (Upbeat rhythmic piano chords & brass intro)" },
          { time: 15.67, text: "I think about that day" },
          { time: 17.42, text: "I left him at a Greyhound station" },
          { time: 19.61, text: "West of Santa Fé" },
          { time: 21.26, text: "We were seventeen" },
          { time: 22.68, text: "But he was sweet and it was true" },
          { time: 24.98, text: "Still I did what I had to do" },
          { time: 28.64, text: "'Cause I just knew" },
          { time: 30.94, text: "Summer, Sunday nights" },
          { time: 32.07, text: "We'd sink into our seats" },
          { time: 34.16, text: "Right as they dimmed out all the lights" },
          { time: 36.48, text: "A Technicolor world made out of music and machine" },
          { time: 40.27, text: "It called me to be on that screen" },
          { time: 44.04, text: "And live inside each scene" },
          { time: 46.14, text: "Without a nickel to my name" },
          { time: 48.17, text: "Hopped a bus, here I came" },
          { time: 50.07, text: "It could be brave or just insane" },
          { time: 52.19, text: "We'll have to see" },
          { time: 53.67, text: "'Cause maybe in that sleepy town" },
          { time: 55.68, text: "He'll sit one day, the lights are down" },
          { time: 57.53, text: "He'll see my face and think of how he used to know me" },
          { time: 61.50, text: "Climb these hills" },
          { time: 62.97, text: "I'm reaching for the heights" },
          { time: 65.00, text: "And chasing all the lights that shine" },
          { time: 69.00, text: "And when they let you down" },
          { time: 72.67, text: "You'll get up off the ground" },
          { time: 76.50, text: "'Cause morning rolls around" },
          { time: 78.93, text: "And it's another day of sun" },
          { time: 84.12, text: "I hear 'em every day" },
          { time: 85.96, text: "The rhythms in the canyons" },
          { time: 87.81, text: "That'll never fade away" },
          { time: 89.82, text: "The ballads in the barrooms" },
          { time: 91.63, text: "Left by those who came before" },
          { time: 93.66, text: "They say, \"You gotta want it more\"" },
          { time: 97.13, text: "So I bang on every door" },
          { time: 99.34, text: "And even when the answer's, \"No\"" },
          { time: 101.40, text: "Or when my money's running low" },
          { time: 103.36, text: "The dusty mic and neon glow" },
          { time: 105.47, text: "Are all I need" },
          { time: 107.06, text: "And someday as I sing this song" },
          { time: 109.01, text: "A small town kid'll come along" },
          { time: 110.94, text: "That'll be the thing to push him on and go, go" },
          { time: 114.83, text: "Climb these hills" },
          { time: 116.32, text: "I'm reaching for the heights" },
          { time: 118.33, text: "And chasing all the lights that shine" },
          { time: 122.37, text: "And when they let you down" },
          { time: 126.07, text: "You'll get up off the ground" },
          { time: 129.71, text: "'Cause morning rolls around" },
          { time: 132.29, text: "And it's another day of sun" },
          { time: 168.05, text: "And when they let you down" },
          { time: 171.95, text: "The morning rolls around" },
          { time: 174.80, text: "It's another day of sun" },
          { time: 178.61, text: "It's another day of sun" },
          { time: 182.41, text: "It's another day of sun" },
          { time: 185.75, text: "It's another day of sun" },
          { time: 189.55, text: "Just another day of sun" },
          { time: 193.61, text: "It's another day of sun" },
          { time: 197.28, text: "Another day has just begun" },
          { time: 202.72, text: "It's another day of sun" },
          { time: 221.82, text: "It's another day of sun" }
        ]
      }
    ],
    // Backward-compatible mockAudio reference
    mockAudio: {
      songTitle: "Another Day Of Sun",
      artist: "La La Land Cast",
      album: "Summer Jazz Beats",
      duration: "03:48",
      format: "320 kbps High-Res MP3",
      cacheStatus: "Local Storage Hit (0.2ms)",
      lyricsSource: "Verified Synced LRC [id: b6jo1g1n]",
      audioSrc: "./music/Another Day Of Sun.mp3",
      lyrics: [
        { time: 0, text: "♪ (Upbeat rhythmic piano chords & brass intro)" },
        { time: 15.67, text: "I think about that day" },
        { time: 17.42, text: "I left him at a Greyhound station" },
        { time: 19.61, text: "West of Santa Fé" },
        { time: 21.26, text: "We were seventeen" },
        { time: 22.68, text: "But he was sweet and it was true" },
        { time: 24.98, text: "Still I did what I had to do" },
        { time: 28.64, text: "'Cause I just knew" },
        { time: 30.94, text: "Summer, Sunday nights" },
        { time: 32.07, text: "We'd sink into our seats" },
        { time: 34.16, text: "Right as they dimmed out all the lights" },
        { time: 36.48, text: "A Technicolor world made out of music and machine" },
        { time: 40.27, text: "It called me to be on that screen" },
        { time: 44.04, text: "And live inside each scene" },
        { time: 46.14, text: "Without a nickel to my name" },
        { time: 48.17, text: "Hopped a bus, here I came" },
        { time: 50.07, text: "It could be brave or just insane" },
        { time: 52.19, text: "We'll have to see" },
        { time: 53.67, text: "'Cause maybe in that sleepy town" },
        { time: 55.68, text: "He'll sit one day, the lights are down" },
        { time: 57.53, text: "He'll see my face and think of how he used to know me" },
        { time: 61.50, text: "Climb these hills" },
        { time: 62.97, text: "I'm reaching for the heights" },
        { time: 65.00, text: "And chasing all the lights that shine" },
        { time: 69.00, text: "And when they let you down" },
        { time: 72.67, text: "You'll get up off the ground" },
        { time: 76.50, text: "'Cause morning rolls around" },
        { time: 78.93, text: "And it's another day of sun" },
        { time: 84.12, text: "I hear 'em every day" },
        { time: 85.96, text: "The rhythms in the canyons" },
        { time: 87.81, text: "That'll never fade away" },
        { time: 89.82, text: "The ballads in the barrooms" },
        { time: 91.63, text: "Left by those who came before" },
        { time: 93.66, text: "They say, \"You gotta want it more\"" },
        { time: 97.13, text: "So I bang on every door" },
        { time: 99.34, text: "And even when the answer's, \"No\"" },
        { time: 101.40, text: "Or when my money's running low" },
        { time: 103.36, text: "The dusty mic and neon glow" },
        { time: 105.47, text: "Are all I need" },
        { time: 107.06, text: "And someday as I sing this song" },
        { time: 109.01, text: "A small town kid'll come along" },
        { time: 110.94, text: "That'll be the thing to push him on and go, go" },
        { time: 114.83, text: "Climb these hills" },
        { time: 116.32, text: "I'm reaching for the heights" },
        { time: 118.33, text: "And chasing all the lights that shine" },
        { time: 122.37, text: "And when they let you down" },
        { time: 126.07, text: "You'll get up off the ground" },
        { time: 129.71, text: "'Cause morning rolls around" },
        { time: 132.29, text: "And it's another day of sun" },
        { time: 168.05, text: "And when they let you down" },
        { time: 171.95, text: "The morning rolls around" },
        { time: 174.80, text: "It's another day of sun" },
        { time: 178.61, text: "It's another day of sun" },
        { time: 182.41, text: "It's another day of sun" },
        { time: 185.75, text: "It's another day of sun" },
        { time: 189.55, text: "Just another day of sun" },
        { time: 193.61, text: "It's another day of sun" },
        { time: 197.28, text: "Another day has just begun" },
        { time: 202.72, text: "It's another day of sun" },
        { time: 221.82, text: "It's another day of sun" }
      ]
    }
  },
  {
    id: "dead-route",
    index: "02",
    title: "Dead Route (50 Shades of Zombies)",
    subtitle: "Survive the road, clear the waves.",
    tagline: "A Roblox survival shooter prototype featuring connected low-poly environments and escalating enemy wave mechanics.",
    status: "Playable Prototype",
    category: "Game Development",
    featured: true,
    accent: "#365B43",
    tags: ["Roblox Studio", "Lua", "Game Mechanics", "Map Progression", "Low Poly 3D"],
    github: "https://github.com/arnv-dev/50-shades-of-zombies",
    overview: "Experimenting with game loop retention, spatial sound, and character movement in Roblox Studio. Rather than a flat arena, players fight their way through an environmental progression where resources get scarcer and zombies adapt.",
    mapStages: [
      { step: "01", name: "The Abandoned Camp", desc: "Tutorial zone & pistol scavenger drop" },
      { step: "02", name: "Highway Gas Station", desc: "Barricade defense & fuel search" },
      { step: "03", name: "The Broken Bridge", desc: "Chokepoint sniper combat against sprinters" },
      { step: "04", name: "Cargo Ship Dock", desc: "Final extraction boss wave event" }
    ],
    highlights: [
      "Custom weapon recoil & hit registration scripting in Lua",
      "Dynamic wave spawning algorithm scaling difficulty by player count",
      "Atmospheric fog and lighting design for tension building"
    ]
  },
  {
    id: "minecraft-lab",
    index: "03",
    title: "Colab Minecraft Host & Ngrok Java IP Sync",
    subtitle: "Headless game server infrastructure on ephemeral cloud VMs.",
    tagline: "Deploying a persistent PaperMC server on Google Colab using Google Drive FUSE storage, Ngrok TCP reverse tunneling, and a custom compiled Java plugin for dynamic IP resolution.",
    status: "Systems Architecture",
    category: "Systems & Infrastructure",
    featured: true,
    accent: "#C28E34",
    tags: ["Java / Spigot API", "Google Colab", "Ngrok TCP Tunnel", "Google Drive FUSE", "Linux Headless"],
    github: "https://github.com/arnv-dev",
    overview: "Google Colab grants high-performance Linux virtual machines with up to 12GB RAM, but instances are strictly ephemeral—local disk state is wiped upon disconnect, and incoming ports cannot be opened directly due to Google's internal CGNAT. To establish a production-grade, zero-cost multiplayer host, I engineered an integrated cloud pipeline: mounting Google Drive as a persistent FUSE filesystem (/content/drive) to preserve world chunk binaries, player NBT records, and server.properties across VM resets; running a background Ngrok TCP reverse tunnel bound to port 25565; and authoring a custom compiled Java plugin (NgrokIPSync.jar). On server boot (onEnable), the plugin queries the local Ngrok daemon REST API (http://127.0.0.1:4040/api/tunnels) inside the VM, parses the newly assigned dynamic endpoint (e.g., 0.tcp.in.ngrok.io:19421), and broadcasts the live IP:port directly to players, completely eliminating manual lookup on container restarts.",
    highlights: [
      "Mounted Google Drive via FUSE (/content/drive) to maintain persistent world binaries and player NBT state across ephemeral Colab VM resets",
      "Spawned background Ngrok TCP reverse tunnel daemon bypassing Google Colab firewall & CGNAT restrictions on port 25565",
      "Authored & compiled a custom Java plugin (Spigot/Paper API) querying http://127.0.0.1:4040/api/tunnels on boot to resolve dynamic IP:port",
      "Engineered automated startup orchestration script with Aikar's G1GC flags for stable 20.0 TPS with low garbage collection pause times"
    ]
  },
  {
    id: "briteside-ai",
    index: "04",
    title: "BriteSide AI",
    subtitle: "Understand what you're agreeing to.",
    tagline: "A Terms of Service and Privacy Arbitrator concept designed for the AMD Developer Hackathon: ACT II.",
    status: "Hackathon Concept",
    category: "AI & Product Design",
    featured: true,
    accent: "#3E668B",
    tags: ["Product Concept", "AI / NLP", "Legal Tech", "Privacy UI"],
    github: "https://github.com/arnv-dev",
    overview: "Almost every human clicks 'I Agree' without reading thousands of lines of legal terminology. BriteSide was conceived to parse dense terms of service, flag suspicious clauses (like perpetual data selling or forced arbitration), and cite direct line evidence in plain English.",
    highlights: [
      "Red-flag categorization: Data privacy, billing traps, account revocation",
      "Plain-English translations paired with exact sentence verification links",
      "Designed as a browser extension HUD concept"
    ]
  }
];

export const skillsData = {
  currentlyUsing: [
    { name: "C++", detail: "Problem solving, DSA foundations, OOP", level: "Active Foundation" },
    { name: "Python", detail: "Academic scripting, automation, CLI experiments", level: "Comfortable" },
    { name: "JavaScript / React", detail: "Modern component architecture, DOM manipulation", level: "Building Projects" },
    { name: "Git & GitHub", detail: "Branching, PR workflows, repository management", level: "Daily Routine" },
    { name: "macOS & Swift Tooling", detail: "Xcode environment, SPM, native dependencies", level: "Exploring" }
  ],
  activelyLearning: [
    { name: "Data Structures & Algorithms", detail: "Arrays, trees, graphs, dynamic programming on LeetCode", focus: "Daily Practice" },
    { name: "Backend Systems", detail: "REST APIs, Node.js runtime, HTTP lifecycle", focus: "In Progress" },
    { name: "Modern AI Workflows", focus: "Exploring prompt engineering, local LLMs, and API integrations" },
    { name: "Computer Science Fundamentals", detail: "Computer Architecture, OS concepts, Networking layers", focus: "College Curriculum" }
  ],
  systemsDevOps: [
    { name: "Minecraft Server Systems", detail: "Colab headless VM, Ngrok TCP tunnels, PaperMC, custom Java plugins, G1GC tuning" },
    { name: "Docker Basics", detail: "Containerized environments, docker-compose experiments" },
    { name: "Roblox Studio & Lua", detail: "Part scripting, player events, physics constraints & game mechanics" }
  ],
  creativeToolkit: [
    { name: "Adobe Premiere Pro", detail: "Video editing, narrative cuts, audio syncing & pacing" },
    { name: "Adobe After Effects", detail: "Motion graphics, visual effects, keyframing & typography animation" },
    { name: "DaVinci Resolve", detail: "Color grading, cinematic grading, audio synchronization" }
  ],
  featuredReel: {
    title: "Creative Filming & VFX Reel",
    url: "https://www.instagram.com/reel/DbYdKXOIwIf/?utm_source=ig_web_copy_link&vrfl=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    tools: "After Effects • DaVinci Resolve • Premiere Pro",
    desc: "Used creative filming, scripting, and post-production in After Effects and DaVinci Resolve just for the sake of trying."
  },
  // Backward compatibility
  systemsAndCreative: [
    { name: "Minecraft Server Systems", detail: "Colab headless VM, Ngrok TCP tunnels, PaperMC, custom Java plugins, G1GC tuning" },
    { name: "Docker Basics", detail: "Containerized environments, docker-compose experiments" },
    { name: "Roblox Studio & Lua", detail: "Part scripting, player events, physics constraints & game mechanics" },
    { name: "Adobe Premiere Pro", detail: "Video editing, narrative cuts, audio syncing & pacing" },
    { name: "Adobe After Effects", detail: "Motion graphics, visual effects, keyframing & typography animation" },
    { name: "DaVinci Resolve", detail: "Color grading, cinematic grading, audio synchronization" }
  ]
};

export const unmentionedSkills = [
  { skill: "Turning random ideas into side projects", rating: "Expert in starting" },
  { skill: "Spelling foccacia wrong", rating: "Expert" },
  { skill: "Debugging a bug I introduced myself", rating: "Advanced" },
  { skill: "Opening 37 tabs instead of finishing tutorials", rating: "Legendary" },
  { skill: "Saying 'one last improvement'", rating: "Unlimited" },
  { skill: "Dad dancing", rating: "Improving every day..." },
  { skill: "Making things look cooler than necessary", rating: "Self-taught" }
];

export const journalEntries = [
  {
    tag: "Engineering Mindset",
    date: "Current Focus",
    title: "Why I build things instead of just watching tutorials",
    body: "Nothing really sticks until you get a cryptic compiler error at 1:30 AM and have to dig through stack traces. Whether it's wrestling with Swift dependencies for Flow or diagnosing tick-rate drops on a server, getting your hands dirty teaches you things a 20-minute video never could."
  },
  {
    tag: "Creative Tech",
    date: "The Visual Side",
    title: "Video editing, motion & code: The creative half of my brain",
    body: "Before diving deep into software engineering, I used to do video editing in Adobe Premiere Pro, After Effects, and DaVinci Resolve. From creative scripting and filming to keyframing VFX and dialing in color grades (like in my creative Instagram reel experiment), that visual storytelling background shapes how I build software today: caring deeply about tactile micro-interactions, pacing, and how things feel to touch."
  },
  {
    tag: "12-18 Month Horizon",
    date: "The Roadmap",
    title: "Becoming a reliable software engineer",
    body: "Right now, it's all about compounding fundamentals: sharpening DSA in C++, building real-world projects, and exploring modern AI applications. I'm building this portfolio not to claim I've finished the race, but as a live logbook of the journey."
  }
];

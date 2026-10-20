# 🚀 Arnav Kapadnis — Portfolio Upgrade Roadmap & Execution Log

**Project Identity:** Arnav Kapadnis (`zenarc.dev` / `ZenArc`)  
**Positioning:** Computer Engineering Student (SPPU Nashik) • Software Builder • Creative Technologist  
**Visual Target:** Exact 1:1 fidelity with Smriti Rawat's interactive architecture (Scroll-Driven Parting Hero, Interactive Hardcover Journal Spread, Playground Grid) + Screenshot Monospace Unmentioned Skills.  
**Tech Stack:** React 19 + Vite + Vanilla CSS + High-Res Downloaded Assets  
**Dev Server:** `http://localhost:5173/` (Active & Instant Load)  

---

## 📋 Comprehensive Upgrade Plan (Matching User's Reference Screenshots)

| # | Feature / Screen | Screenshot / Reference Match | Status |
|---|---|---|---|
| **1** | **Asset Acquisition** | Extracted and downloaded all authentic assets (`lamp.png`, `disk.png`, `painting.png`, `computer.png`, `coffee.png`, `plant.png`, `book.png`, `camera.png`, `stamps.png`, `journal.png`, `folder.png`, `bluenote.png`, `cover.png`, `open-spread.png`, `torn-border.png`). | ✅ **COMPLETED** |
| **2** | **Scroll-Driven Hero Reveal** | Pinned sticky scroll track (`210vh`). As the user scrolls down, items continuously slide toward the borders, scattered text fades out, and the central name (*"Arnav Kapadnis"*) and tagline scale and fade into view. Toggle button removed! | ✅ **COMPLETED** |
| **3** | **Interactive About Journal (Book)** | **Screenshots 3 & 4**: Torn paper top header. Closed green hardcover journal with wax seal and stamps. Clicking opens the 2-page dot grid spread with Arnav's timeline, pinned contact note, stickers, and handwritten notes. | ✅ **COMPLETED** |
| **4** | **Playground / Experiments Cards** | **Screenshot 5**: "Late-night experiments / explorations with code & AI" with 3 distinct case study cards on blueprint grid paper. | ✅ **COMPLETED** |
| **5** | **Selected Work / Deep Case Studies** | Flow macOS player, Dead Route Roblox shooter, Minecraft server lab, and BriteSide AI with live interactive widgets. | ✅ **COMPLETED** |
| **6** | **Monospace Unmentioned Skills & Hit Me Up** | Dark terminal panel with retro pixel cursor and exact witty ratings. | ✅ **COMPLETED** |
| **7** | **Desk Items Full Click Interactivity (In Scrolled / Parted State)** | All 13 artifacts (lamp, vinyl record, camera, vintage CRT, coffee, plant, headphones, book, journal, folder, stamps, painting, sticky note) have dedicated click handlers, local micro-animations, tactile Web Audio API sound synthesis, and floating bottom feedback toasts. | ✅ **COMPLETED** |
| **8** | **Scroll Dwell Plateau & Tactile Resistance Cushion** | Extended track to 300vh. Parting completes cleanly at 48% scroll, establishing an anchored resting dwell zone (48%–84%) where users can interact with desk items, followed by an elastic resistance tension curve (84%–100%) before smoothly transitioning to next section. | ✅ **COMPLETED** |
| **9** | **Featured Work / Case Studies Placement & White Sheet Transition** | **User Request 9 & Screenshot 1**: Positioned Case Studies immediately after Hero. Crafted the elevated white card transition with curved top corners (`44px`), soft elevation shadow, and smooth blending from the cream desk into the pure white canvas. | ✅ **COMPLETED** |
| **10** | **2-Column Case Studies with Authentic Editorial Typography & Interactive Demos** | **Screenshot 2**: 1:1 match of Smriti Rawat's layout: serif `CASE STUDIES` eyebrow, stacked bold headline (`Think. Design. Develop. Launch. Repeat`), pastel preview frames (`#F4F0E5`, `#EAE8F2`, `#E6EFE8`, `#E8EEF5`), floating circular `ArrowUpRight` action pills, and live widgets. | ✅ **COMPLETED** |
| **11** | **Hero Mini-Dock (Chaos Mode 🧩 & Clean Mode 🧹)** | **Screenshot 1**: Interactive hero tools dock anchored on the desk. Clicking Chaos scatters and tilts items; clicking Clean snaps them back into pristine alignment with tactile audio. | ✅ **COMPLETED** |
| **12** | **GitHub Pages Deployment Readiness & CI/CD Workflow** | Configured `base: './'` in `vite.config.js`, updated all asset paths to relative, created `.github/workflows/deploy.yml` for automated deployment on push. | ✅ **COMPLETED** |
| **13** | **Clean Architectural Gradient Transition (Replaced Torn Paper)** | Removed `torn-border.png` and implemented a seamless, elegant gradient transition (`#FFFFFF` → `var(--bg-cream)`) with a minimalist hairline accent. | ✅ **COMPLETED** |
| **20** | **Mobile Hero Scroll Reveal & Initial Clutter Calibration** | Restructured mobile starting grid and touch scroll dynamics. Fixed initial clutter, removed sticky bounce jumps, and anchored smooth real-time parting and name reveal on touch. | ✅ **COMPLETED** |
| **21** | **Mobile Journal Hardcover Footprint & Proportional Scaling** | Locked notebook on mobile to exact hardcover dimensions and aspect ratio (`988 / 1258`), eliminating vertical ballooning and scaling down inner page items proportionally. | ✅ **COMPLETED** |
| **22** | **Panoramic 2-Page Spread Mobile Journal with 3D Unfolding** | Authentic 3D unfolding from center spine fold, side-by-side 200% width spread with tactile 12px peek of opposite page, horizontal swipe navigation, Web Audio synthesis, with 100% desktop fidelity preserved. | ✅ **COMPLETED** |

---

## 📝 Detailed Verification Log

1. **Sticky Scroll-Driven Hero ([`Hero.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Hero.jsx)):**
   - Implemented `hero-scroll-track` with `hero-sticky-stage`.
   - As you scroll down from the top:
     - The scattered phrases fade away.
     - The 13 desk items smoothly part toward the edges in real-time according to your scroll speed.
     - In the center, your name in handwritten script (*"Arnav Kapadnis"*), role, and quote scale up and become clearly visible.
     - Once you scroll past the reveal track, the page smoothly transitions into the Featured Work / Case Studies section!
   - The manual bottom toggle button has been completely removed.

2. **Full Desk Item Click Interactivity in Scrolled / Parted State:**
   - **Pointer Events & Z-Index:** Elevated `.desk-item` to `z-index: 20` (and `35` on hover) with explicit `pointer-events: auto`, ensuring that when items are parted aside at any scroll level (`p = 0.5` through `p = 1.0`), clicks are cleanly registered without being intercepted by the identity text box or stage bounds.
   - **Local Animation Isolation:** Wrapped item graphics in `.desk-item-inner` so local rotations/wobbles/spins never overwrite the parent scroll translation coordinates.
   - **Tactile Web Audio Synthesizer:** Zero-dependency sound effects for mechanical switch, vinyl needle & chords, camera shutter, CRT degauss, leaf rustle, and paper flips.
   - **All 13 Individual Item Actions:**
     1. **Green Desk Lamp:** Mechanical click toggle with moving ambient desk spotlight and bulb filament glow.
     2. **Vinyl Record:** Spins infinitely with animated music notes (`♪`, `♫`, `♬`) and lo-fi chords.
     3. **Vintage CRT Monitor:** Powers on with retro green phosphor scanlines and live `zenarc.dev > ONLINE_` terminal display.
     4. **Instax Camera:** Bright flash overlay + shutter click + vintage polaroid photo sliding out of the camera base.
     5. **Coffee & Croissant:** Animated steam curls rising from the cup + warm sip badge.
     6. **Potted Plant:** Organic elastic wobble spring animation + "Hello from Nashik!" greeting.
     7. **Headphones:** Bounces with concentric sound wave ripples.
     8. **Sprint Book:** 3D book cover flutter + Jake Knapp design sprint info.
     9. **Leather Journal:** Smoothly scrolls page down to the interactive hardcover Journal & Timeline.
     10. **Design Folder:** Smoothly scrolls to the Selected Projects case studies.
     11. **Postage Stamps:** Rubber ink stamp "COPIED ✉" + copies email `arnavkapadnis123@gmail.com` to clipboard.
     12. **Starry Night Painting:** Gallery tilt & museum curator label.
     13. **Sticky Note:** Interactive task progress checker (`✓ 1/3`, `✓ 2/3`, `✓ 3/3`).
   - **Floating Bottom Toast:** Glassmorphism feedback pill confirming every interaction in real-time.

3. **Scroll Dwell Plateau & Tactile Resistance Before Next Section:**
   - **3-Phase Scroll Interpolation:**
     - **Phase 1 (`0.00` to `0.48`):** Smooth parting and name reveal. By `0.48` (roughly ~1 viewport scroll), the parting is 100% complete and the central identity is fully sharp and readable.
     - **Phase 2 (`0.48` to `0.84`):** Stable dwell / resting plateau (~72vh of scroll distance). Items stay anchored at the perimeter, clicks and micro-interactions work seamlessly, and a subtle *"Scroll to explore work ↓"* indicator assists orientation.
     - **Phase 3 (`0.84` to `1.00`):** Tactile resistance tension. An elastic upward drag (`tensionY`) up to 48px builds up, providing tactile physical weight/resistance before releasing and unpinning cleanly into the Case Studies white sheet.

4. **White Elevated Sheet Transition & Case Studies Presentation ([`Projects.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Projects.jsx)):**
   - **Visual Blending:** Positioned `#featured-work` directly below Hero. Starts overlapping with curved top corners (`44px`) and an elevated shadow over the cream desk, giving the visual perception of an elevated white sheet that rises and smoothly covers the desk before turning into a full-width pure white canvas.
   - **1:1 Screenshot Typography & Filter Pills:**
     - Eyebrow: `CASE STUDIES` in serif.
     - Headline: `Think. Design. <br /> Develop. Launch. <br /> <span className="repeat-muted">Repeat</span>`.
     - Filter row: `All Builds`, `Native Application`, `Game Development`, `Systems & Infrastructure`, `AI & Product Design`.
   - **Card Design:** 2-column responsive layout with custom pastel palettes (`#F4F0E5`, `#EAE8F2`, `#E6EFE8`, `#E8EEF5`), rounded preview cards (`24px`), floating circular `ArrowUpRight` buttons, and live interactive feature widgets (Flow audio player with waveform & synced lyrics, Dead Route map sector intel, Minecraft infrastructure diagram, BriteSide AI clause comparison).
   - **Physical Sheet Notch:** Added `.sheet-pill-notch` accent at the top of the white sheet providing the physical elevated sheet appearance.

5. **Hero Tools Mini-Dock — Chaos Mode & Clean Mode ([`Hero.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Hero.jsx)):**
   - **Screenshot 1 Fidelity:** Positioned below the nav dock on the cream desk stage with tooltips `"Chaos mode on"` and `"Clean mode on"`.
   - **White Puzzle Button (🧩):** Triggers Chaos mode. Scatters, rotates, and tilts all 13 desk items with an ascending arpeggio chime and visual feedback toast.
   - **Caramel Brush Button (🧹):** Triggers Clean mode. Instantly organizes all desk items back into neat architectural alignment with a crisp sweep sound and confirmation toast.

6. **Clean Architectural Section Transitions & Pure White Background ([`Journal.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Journal.jsx) & [`Projects.css`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Projects.css)):**
   - **Work Section Pure White:** Set `.featured-work-wrapper` and `.work-white-sheet` to explicit `background-color: rgb(255, 255, 255)`.
   - **Torn Border Removal:** Removed `torn-border.png` to prepare for clean, dynamic transitions without pixelation or ragged edges.

7. **Animated Fluid Wave Transition ([`WaveTransition.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/WaveTransition.jsx) & [`WaveTransition.css`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/WaveTransition.css)):**
   - **Multi-Layered Parallax Waves:** Replaced static borders with a 4-layer animated SVG wave system that connects the pure white Work section (`rgb(255, 255, 255)`) to the warm cream Journal section (`var(--bg-cream)` / `#F7F3EB`).
   - **Staggered Keyframe Flow:**
     - Layer 1 (`rgba(236, 229, 216, 0.48)`): Gentle 9s undertone drift.
     - Layer 2 (`rgba(242, 237, 228, 0.72)`): Mid-tone warm cream 13s drift.
     - Layer 3 (`rgba(247, 243, 235, 0.88)`): Soft light cream 18s swell.
     - Layer 4 (`#F7F3EB`): Solid base wave 24s flow matching `--bg-cream`.
   - **Seamless Geometry:** Responsive SVG with `preserveAspectRatio="none"` and an anchored sub-pixel overlap strip (`.wave-seamless-anchor`) ensuring a zero-line, pixel-perfect bridge into `section#journal`.

8. **Handcrafted Physical Open Journal Architecture ([`Journal.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Journal.jsx) & [`Journal.css`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Journal.css)):**
   - **Cover Preservation:** Retained the authentic closed hardcover journal cover PNG (`cover.png`) and hover CTA as requested.
   - **Rebuilt from Scratch (No `open-spread.png`):** Completely replaced the static raster background image with a responsive, high-fidelity physical notebook model:
     - **Outer Leather Binding:** Rich espresso/charcoal leather backing with rounded corners (`22px`), perimeter stitch borders, and realistic ambient drop shadows.
     - **Silk Ribbon Bookmarks:** Top looped ribbon (`bookmark-top.svg`) and draped bottom notched ribbon (`bookmark-bottom.svg`) hanging naturally from the spine.
     - **3D Fore-Edge Paper Stack:** Multi-tiered stepped paper edges (`#EADBCA`, `#E2D2BD`, `#D9C7AF`, `#D0BCA3`) giving authentic 150-page physical thickness.
     - **Tactile Dot-Grid Paper:** Cream parchment pages (`#FDFCF8`) textured with an engineer's 20px dot grid (`radial-gradient`), curved inner page shadows, and a central spine gutter with 14 thread stitch markings.
     - **Left Page Features:** Handwritten author script (`font-hand`), role chips, connected dotted career timeline, interactive taped contact card with masking tape and click-to-copy email feedback (`✓ Copied to clipboard!`), and "Today" philosophy card.
     - **Right Page Features:** Polaroid photo with washi tape, photo gloss glint, and 5 interactive tactile vinyl stickers (`Flow.app`, `Experiments.md`, `CoffeeLover.png`, `EldenRing & Souls`, and `⚡ React 19`).
     - **Responsive Stacking:** Dynamically adapts across mobile and desktop screens without distortion or clipping.

9. **Fluid 3D Book Opening Animations & Web Audio Synthesizer ([`Journal.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Journal.jsx) & [`Journal.css`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Journal.css)):**
   - **3D Perspective Stage:** Configured `perspective: 2400px` with `transform-style: preserve-3d` for genuine optical depth.
   - **Kinematic Cover & Page Swing:**
     - Left leaf executes a continuous 3D rotational swing from `rotateY(165deg)` to `rotateY(0deg)` on open (and `0deg` to `165deg` on close) with custom physics easing `cubic-bezier(0.2, 0.8, 0.25, 1)`.
     - Right page unrolls from `rotateY(-18deg)` to flat `0deg` while dynamic ambient occlusion sweep overlays simulate room light washing across the parchment.
     - Book chassis smoothly expands its physical width from 440px to 1060px symmetrically.
   - **Fabric Physics Ribbon Sway:** Bottom silk bookmark executes a damped pendulum harmonic swing (`ribbonDropSwing`) upon opening.
   - **Staggered Spring Sticker Pop-In:** Stickers and polaroid pop into place with cascading spring settle animations (`0.35s` through `0.66s`).
   - **Tactile Web Audio Synthesizers:**
     - **Opening:** Multi-pole bandpass noise sweep (750Hz → 1800Hz → 450Hz) + low-frequency sine leather creak thud (105Hz → 40Hz).
     - **Closing:** Lowpass paper slide closure + muted triangle closure tap (75Hz → 32Hz).
10. **Resolved 4-Page / Double-Height Bug & Optimized Pure 2-Page 3D Unrolling Spread ([`Journal.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Journal.jsx) & [`Journal.css`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Journal.css)):**
    - **Root Cause Eliminated:** Previously, placing the closed cover image (`cover.png`) and the left parchment page within the same leaf element caused them to stack vertically in normal document flow, resulting in an unnatural "2 pages tall, 2 pages wide" layout.
    - **Pure 2-Column Grid Architecture:** Decoupled the closed view from the open spread. The open spread `.notebook-paper-stack` is now strictly a 2-column grid (`grid-template-columns: 1fr 1fr`) containing ONLY Column 1 (Left Page) and Column 2 (Right Page), locked to an exact 1-page height (~590px) and 2-page width (~1060px).
    - **Fluid 3D Unrolling Kinematics:**
      - The notebook unfolds smoothly from the center (`scale(0.82) translateY(32px) rotateX(8deg)` → `scale(1) translateY(0) rotateX(0deg)`).
      - Left page unfolds outward from the central spine fold (`transform-origin: right center; rotateY(50deg)` → `rotateY(0deg)`).
      - Right page unfolds outward from the central spine fold (`transform-origin: left center; rotateY(-40deg)` → `rotateY(0deg)`).
      - Closing reverses the motion gracefully, folding inward toward the spine before returning to the pristine closed book view.

11. **Personal Photo Integration in Journal Polaroid ([`Journal.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Journal.jsx) & [`Journal.css`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Journal.css)):**
    - **Replaced Logo with Portrait:** Replaced the default `favicon.svg` avatar placeholder with the user's authentic portrait photo [`arnvvv.jpg`](file:///Users/goat.arnv/Documents/new%20arnv/public/assets/journal/arnvvv.jpg) inside the right-page Polaroid frame.
    - **Photographic Framing:** Configured `.polaroid-avatar-img` inside the white polaroid border, with subtle washi tape pinning and gloss reflection glint intact.

12. **Polaroid Frame Aspect Ratio Calibration ([`Journal.css`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Journal.css)):**
    - **True Bitmap Dimension Matching:** Verified the exact bitmap dimensions of [`arnvvv.jpg`](file:///Users/goat.arnv/Documents/new%20arnv/public/assets/journal/arnvvv.jpg) via `sips` (`941x1335px`, ratio `1.4187`).
    - **Zero Cropping / Full Frame:** Updated `.polaroid-photo-box` and `.polaroid-avatar-img` to `aspect-ratio: 941 / 1335; height: auto; object-fit: contain;`, completely eliminating side-cropping and displaying the full portrait in its authentic framing.
13. **Minecraft Infrastructure Pivot: Colab Cloud VM, Ngrok Reverse Tunnel & Java Dynamic IP Sync:**
    - **Total Decommissioning of Redstone Item Sorter:** Purged all historical references to hopper sorters, redstone item classifiers, and impulse filters across all components, styles, data models, and copy.
    - **Architecture & Systems Engineering Implementation:**
      - **Ephemeral VM Compute ([Google Colab]):** Headless PaperMC server running inside temporary Ubuntu 22.04 LTS containers (`/dev/shm`, high RAM allocation), addressing ephemeral container resets on disconnect.
      - **Persistent Storage ([Google Drive FUSE]):** Mounted `/content/drive/MyDrive/mc_colab_server/` to persist world chunks, level.dat, player inventory NBT binaries, and server configurations across Colab session teardowns.
      - **Ingress & CGNAT Traversal ([Ngrok TCP Tunnel]):** Background daemon (`ngrok tcp 25565`) establishing an outbound reverse TCP tunnel to bypass Colab egress restrictions and firewalls, exposing a public host (`tcp://0.tcp.in.ngrok.io:XXXXX`).
      - **Dynamic IP Synchronization Plugin ([`NgrokIPSync.java`] -> [`NgrokIPSync.jar`]):** Authored a custom Spigot/PaperMC Java plugin that queries the local daemon REST endpoint (`http://127.0.0.1:4040/api/tunnels`) on `onEnable()`, parses the dynamic public address assigned upon each Colab session boot, and updates the server MOTD/broadcasts live connectivity information directly to players.
    - **Interactive 3-Tab Console ([`Projects.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Projects.jsx) & [`Projects.css`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Projects.css)):**
      - **Topology Tab:** Visual pipeline flow (`Client ⇄ Ngrok Daemon ⇄ Colab VM ⇄ G-Drive FUSE`) with system telemetry badges.
      - **NgrokIPSync.java Tab:** Syntax-highlighted Java source code executing HTTP GET against daemon REST API and parsing JSON payloads.
      - **Colab Boot Shell Tab:** Bash orchestration script mounting Google Drive, configuring Ngrok daemon, and invoking the G1GC JVM.
    - **Global Data Model Alignment:** Synchronized [`portfolioData.js`](file:///Users/goat.arnv/Documents/new%20arnv/src/data/portfolioData.js), [`Playground.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Playground.jsx), [`Journal.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Journal.jsx), and [`UnmentionedSkills.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/UnmentionedSkills.jsx) with rigorous systems engineering terminology.
14. **Flow High-Res Audio & SQLite Engine Re-Architecture:**
    - **Open-Source Fork Foundation:** Explicitly documented that Flow is an open-source audio player fork, heavily modified and re-engineered to strip legacy bottlenecks and introduce bit-perfect playback pipelines.
    - **High-Resolution FLAC Audio Pipeline:** Added native support for lossless, high-resolution FLAC files (24-bit / 96 kHz+ bit-perfect decoding bypassing default OS resampling).
    - **Multi-Service Lyrics Ingestion & Automatic Fallbacks:** Built an API aggregator querying diverse public lyrics services (e.g., LRCLIB, backup scrapers) with automated fallback cascades if primary lookups fail.
    - **Custom Timestamped `.lrc` Parser with Fluid Animations:** Engineered an in-house synchronized `.lrc` parser with millisecond precision, smooth verse/word transitions, active verse glow animations, and interactive timeline seeking.
    - **SQLite Metadata & Cover Cache:** Integrated an optimized local SQLite caching layer storing track lists, embedded/remote album artwork blobs, and parsed lyrics strings—delivering sub-millisecond cold starts and offline playback availability.
    - **Interactive Multi-Tab Widget ([`Projects.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Projects.jsx) & [`Projects.css`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Projects.css)):**
      - **Tab 1 (Player & Synced Lyrics):** Interactive vinyl player, 24-bit/96kHz badge, live waveform, animated `.lrc` lyrics with fluid active verse highlighting, and real-time telemetry chips (`ENGINE: Hi-Res FLAC`, `CACHE: SQLite`, `LYRICS: Multi-API Fallback`).
      - **Tab 2 (FLAC & SQLite Architecture):** Interactive pipeline diagram (`Forked Core ⇄ Audio Pipeline ⇄ Local SQLite DB ⇄ Lyrics Engine`) with comprehensive technical specs.
    - **Ecosystem Data Synchronization:** Updated [`portfolioData.js`](file:///Users/goat.arnv/Documents/new%20arnv/src/data/portfolioData.js), [`Playground.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Playground.jsx), [`Journal.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Journal.jsx), and [`Skills.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Skills.jsx).
15. **Real Audio Playback Engine & Custom Music Folder Support:**
    - **Local Music Directory ([`public/music/`]):** Created dedicated folder (`public/music/`) with `README.md` guide where users can drop any `.mp3`, `.flac`, `.wav`, or `.m4a` files.
    - **HTML5 Audio Engine Integration ([`Projects.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Projects.jsx)):** Integrated real HTML5 audio playback with `useRef(null)`, live time synchronization, dynamic waveform animations, and click-to-seek progress scrubber.
    - **Interactive Multi-Track Playlist Controls:**
      - Next track (`SkipForward`), Previous track (`SkipBack`), Play/Pause, Mute toggle (`Volume2` / `VolumeX`).
      - Interactive Playlist Drawer displaying all tracks, durations, and helpful tips.
    - **Real-Time Synchronized Lyrics:** Connected `audio.ontimeupdate` to automatically scroll and highlight active `.lrc` lines as the song plays, with click-to-seek functionality on any lyric line.
    - **Fail-Safe Preview Audio:** Bundled `public/music/preview.wav` (upbeat piano/rhodes progression) so clicking play always produces music immediately even before custom files are placed.
16. **Exclusive 'Another Day of Sun' Focus & Verified LRC Synchronized Lyrics:**
    - **Removed Extraneous Tracks:** Completely removed "Ambient Master" (`preview.wav`) and "Mia & Sebastian's Theme" (`Mia & Sebastian’s Theme.mp3`) from the filesystem and `portfolioData.js`.
    - **Single Featured Track Architecture:** Preserved strictly `public/music/Another Day Of Sun.mp3` (320 kbps high-res audio, 03:48 duration).
    - **Exact LRC Lyrics Integration:** Parsed and embedded all 58 lines from the user's provided verified LRC metadata (`[id: b6jo1g1n]`), spanning from the upbeat jazz intro through the final chorus with exact millisecond precision timestamps.
    - **Real-Time Synchronized Lyrics Auto-Scroll to Top:** Implemented container-scoped smooth scrolling via `lyricsContainerRef` and `getBoundingClientRect()` calculations, automatically pinning the currently playing highlighted line directly to the top of the lyrics view with subsequent verses visible beneath.
    - **Accurate Millisecond [mm:ss] Timestamp Formatting:** Replaced hardcoded minute prefixes with dynamic `formatTime(l.time)` for professional time labels across the entire 03:48 track.
    - **Single-Track UI Refinements:** Gracefully handled single-track controls with subtle disabled states on skip buttons and updated playlist drawer telemetry.
17. **Technical Toolkit Reorganization & Creative Video Editing Showcase:**
    - **Reorganized Skills Grid Categories:**
      - **Systems, DevOps & Game Tech:** Contains *Minecraft Server Systems*, *Docker Basics*, and *Roblox Studio & Lua* (moved from Creative Toolkit).
      - **Creative Toolkit & Media:** Contains *Adobe Premiere Pro*, *Adobe After Effects*, and *DaVinci Resolve* (moved from Systems). Completely removed *FFmpeg*.
    - **Featured Creative Instagram Reel:**
      - Added interactive spotlight callout in [`Skills.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Skills.jsx) linking directly to the user's Instagram Reel (`https://www.instagram.com/reel/DbYdKXOIwIf/`).
      - Highlighted the creative scripting, filming, and post-production in After Effects and DaVinci Resolve.
    - **Playground Experiment Addition:** Added a 4th card in [`Playground.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Playground.jsx) with custom terminal render command and responsive auto-fit grid.
    - **Narrative Alignment:** Updated [`portfolioData.js`](file:///Users/goat.arnv/Documents/new%20arnv/src/data/portfolioData.js) journal entry ("Creative Tech") and [`Journal.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Journal.jsx) career timeline to document video editing and VFX background.
18. **CRT Monitor Domain & Physically Accurate Desk Lamp Illumination:**
    - **Vintage CRT Screen Domain:** Updated the phosphor terminal screen in [`Hero.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Hero.jsx) to display `> arnv.dev` (replacing `zenarc.dev`), as well as the toast notification `Vintage CRT powered ON: arnv.dev online`.
    - **Fixed Lamp Bulb Coordinates:** Corrected the filament glow position to the exact opening underneath the green shade (`top: 34.3%; left: 48.3%`), eliminating the misplaced glow that sat on the top metal curve.
    - **Realistic Downward Light Cone:** Added `.lamp-downward-beam` fanning downwards from the rim down the brass pole.
    - **Authentic Desk Pool Light:** Repositioned `.desk-lamp-ambient` to form a soft, feathered warm tungsten pool centered on the desk surface directly underneath the lamp (`z-index: 2`), ensuring it illuminates the desk without bleeding into the background text or upper items.
19. **Permanent Clean Mode & Dock Removal:**
    - **Removed Chaos / Clean Dock:** Removed the bottom floating pill dock (`Puzzle` and broom clean buttons) and all associated tooltips and audio triggers.
    - **Permanent Clean Layout:** The 13 desk artifacts and the architectural grid are now permanently locked in the clean, balanced layout across all scroll positions.
    - **Codebase Clean-Up:** Removed `chaosMode` state, toggle handlers, unused `Puzzle` imports, and associated CSS overrides from [`Hero.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Hero.jsx) and [`Hero.css`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Hero.css).
20. **Mobile Hero Scroll Reveal & Initial Clutter Calibration ([`Hero.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Hero.jsx) & [`Hero.css`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Hero.css)):**
    - **Initial State Clutter Elimination:** On screens `< 768px`, restructured the 13 desk item coordinates into a balanced, clean 2-column perimeter rhythm with reduced scaling, preventing overlapping items and cluttered text at `scrollProgress = 0`.
    - **Eliminated Mobile Scroll Jump / Stickiness Bugs:** Fixed the mobile touch-scroll issue where scrolling down caused the page to bounce or jump down into Case Studies prematurely instead of clearing the desk items and revealing the central name. Anchored the sticky stage (`overflow: clip; top: 0; height: 100vh; position: sticky;`) so touch scrolls smoothly interpolate the parting animation before releasing.
    - **Centered Name & Tagline Reveal:** As the user scrolls on mobile, the 13 items part cleanly toward the screen borders while *"Arnav Kapadnis"* in handwriting script, role, and quote scale up seamlessly in the central viewport.
21. **Mobile Journal Hardcover Footprint & Proportional Content Scaling ([`Journal.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Journal.jsx) & [`Journal.css`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Journal.css)):**
    - **Eliminated Vertical Card Ballooning:** Replaced the tall, vertical mobile card approach that previously stretched the journal down to 860px+.
    - **Locked Hardcover Aspect Ratio:** Configured `.handcrafted-notebook` on mobile (`< 900px`) with `aspect-ratio: 988 / 1258` and `max-width: min(320px, calc(100vw - 36px))`, matching the closed hardcover book's exact physical footprint (`~304px × 387px` closed, `~320px × 407px` open).
    - **Calibrated Internal Content Proportions:** Scaled down all typography, padding, pill tags, and entry spacing in the timeline so that all 5 timeline entries, the interactive contact card, the "Today" philosophy card, and footer notes fit naturally without overflowing.
22. **Panoramic 2-Page Spread Mobile Journal with 3D Unfolding ([`Journal.jsx`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Journal.jsx) & [`Journal.css`](file:///Users/goat.arnv/Documents/new%20arnv/src/components/Journal.css)):**
    - **Authentic 3D Unfolding Kinematics:** When tapped on mobile, the journal executes the full 3D unrolling animation from the center spine fold (`leftPageUnfold` and `rightPageUnfold`), accompanied by zero-dependency paper flutter and leather spine creak Web Audio synthesis.
    - **Panoramic 2-Page Side-by-Side Spread:** Kept both Page 14 and Page 15 mounted side-by-side in a 200% width grid inside a leather-bound viewport (`overflow: hidden; perspective: 1400px;`).
    - **Tactile 12px Gutter Peek & Central Spine Stitches:** Enabled the authentic spine crease with thread stitches on mobile. When on Page 14, a 12px strip of Page 15 peeks in from the right edge; when on Page 15, a 12px strip of Page 14 peeks in from the left edge.
    - **Dual Navigation (Horizontal Swipe & Archival Tabs):** Users can seamlessly swipe left/right across pages with tactile touch gesture detection (`touchStartX`, `touchEndX`) or tap the archival `p. 14 Timeline` / `p. 15 Scrapbook` pill buttons.
    - **100% Desktop Preservation:** Isolated all mobile sliding and scaling rules within `@media (max-width: 900px)`, preserving the wide 2-page horizontal spread on desktop screens (`> 900px`) in 100% pristine condition.


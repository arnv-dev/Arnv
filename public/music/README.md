# Flow Music Library 🎵

Place your favorite audio files in this folder (`public/music/`) to play them directly on the website when you click the Flow app play button!

### Supported Audio Formats:
- `.mp3`
- `.flac`
- `.wav`
- `.m4a` / `.aac`
- `.ogg`

### Quick Setup:
1. **Add Your Song:**
   Drop your audio file into this folder. For example:
   - `Another Day Of Sun.mp3`
   - or any custom song like `song.mp3`, `fav.flac`

2. **Configure in Portfolio Data (Optional):**
   Open `src/data/portfolioData.js` and edit the `playlist` list to customize:
   - `songTitle`: Song title
   - `artist`: Artist name
   - `audioSrc`: Path to your file (e.g., `./music/Another Day Of Sun.mp3`)
   - `lyrics`: Timestamped verses (in seconds) for real-time synchronized karaoke scrolling!

*If a file is not yet placed, the player automatically plays a pleasant harmonic synth preview so the website never goes silent.*

# media/

Drop files in here with these exact names and they appear on the page
automatically — the dashed placeholder box disappears on its own. Nothing in
`index.html` needs changing.

## Slots

| Filename | Page section | What it should show |
|---|---|---|
| `00-hero.mp4` / `.webm` | Hero | The best 5 seconds you have |
| `01-wobble.mp4` | Hook | **The money shot** — hard landing, wobble propagating, camera holding while it *keeps* moving |
| `02-return.mp4` | Hook | Returning to ground you already disturbed |
| `03-route.mp4` | How it plays | A full short route, start to finish |
| `04-ghost.mp4` | How it plays | Ghost race, you and your ghost side by side |
| `05-interior.mp4` | How it plays | Orbital → interior transition, one continuous take |
| `06-thought.mp4` | Story | A thought bubble resolving |
| `07-terminal.mp4` | Story | Terminal boot / constellation screen |
| `08-vista.mp4` | The look | Slow pan across a wide belt vista (21:9 slot) |
| `09-still-a.png` | The look | Character detail (still) |
| `10-still-b.png` | The look | Hatching / lighting (still) |
| `11-still-c.png` | The look | Environment (still) |
| `12-brighton.jpg` | Traction | The Develop:Brighton stand, people playing it |

Optional but worth doing: a matching `.jpg` poster frame per video (e.g.
`01-wobble.jpg`). It shows instantly while the video loads, so the page never
looks empty on a slow connection.

## Use video, not GIF

GIFs are 5–10× larger than equivalent MP4 and capped at 256 colours, which will
visibly band Crunda's hatching and dithering. The page already plays videos
muted, looping and inline, so they behave exactly like GIFs but look better and
weigh far less.

**If you already have GIFs, convert them:**

```sh
ffmpeg -i in.gif -movflags faststart -pix_fmt yuv420p \
  -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" out.mp4
```

**From a raw capture — trim, resize and compress in one go:**

```sh
# -ss = start time, -t = duration, 1280px wide, no audio
ffmpeg -ss 00:00:04 -t 6 -i capture.mp4 -an \
  -vf "scale=1280:-2" -c:v libx264 -crf 24 -preset slow \
  -movflags faststart -pix_fmt yuv420p 01-wobble.mp4
```

**Optional smaller WebM as well** (the page prefers it where supported):

```sh
ffmpeg -i 01-wobble.mp4 -an -c:v libvpx-vp9 -crf 34 -b:v 0 01-wobble.webm
```

**Poster frame:**

```sh
ffmpeg -i 01-wobble.mp4 -vframes 1 -q:v 3 01-wobble.jpg
```

## Budget

Aim for **under ~2 MB per clip** and **under ~15 MB for the whole page**. It has
to load fast on conference wifi and on a phone. If a clip is over budget, cut
its length before you cut its quality — a 4-second loop that reads clearly beats
an 8-second one that's mushy.

## Making the loops seamless

Pick start and end frames where the camera is in a similar position. A loop that
visibly jumps pulls the eye away from the thing you're trying to show. For the
wobble shots specifically, **hold longer than feels comfortable** — the whole
point is that it doesn't settle, and cutting early destroys the argument.

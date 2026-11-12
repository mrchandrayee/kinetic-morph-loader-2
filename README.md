# Kinetic Morph Loader

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/kinetic-morph-loader-2/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the uploaded 6.67-second screen recording.

## Video observations

The recording is titled **Kinetic Morph Loader** and shows a dark, grid-textured tutorial page. A browser-style preview contains:
- Four small rounded-square tiles rotating and morphing between square and circular shapes.
- One orange accent tile and three white tiles.
- A numeric progress counter increasing from 5% through 99%.
- A thin orange progress bar.
- A final white reveal screen displaying **“Hey”**.

The source panel is labelled `index.html`, `style.css`, and `script.js`. A readable JavaScript line appears to set an animation duration around `4.1s`; the recreation uses a 4.1-second progress cycle.

## Features

- Kinetic four-tile loader with CSS morph and rotation.
- White/orange tile palette.
- Animated percentage counter and progress bar.
- End-state white screen with “Hey”.
- Replay button.
- Switchable HTML/CSS/JS source preview tabs.
- Responsive dark tutorial layout.
- Reduced-motion support.
- No external dependencies.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Project structure

```text
kinetic-morph-loader/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Source accuracy

The title, visible animation, percentage progression, accent colors, code-panel labels, and final “Hey” reveal are based on the recording. The source text in the tiny code panel is only partly readable; the complete project is a functional reconstruction, not a verbatim copy of the original creator's code.

# Spider-Man Love Journey

This is a Next.js interactive story game called "Spider-Man Love Journey". The game lets users choose between two Spider-Man characters and follow a romantic story path with multiple choices and endings.

## Features

- Interactive story with branching choices
- Conditional steps based on user selections
- Confession and alternative endings
- Responsive UI built with React and Tailwind CSS
- Easy to extend with new story steps

## Getting Started

### Prerequisites

- Node.js and npm installed
- Recommended: VSCode or any code editor

### Installation

1. Clone the repository or unzip the provided project archive.
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8000` to play the game.

### Building for Production

```bash
npm run build
npm run start
```

### Project Structure

- `src/components/` - React components including GameModel (logic) and GameView (UI)
- `src/app/` - Next.js app entry points and layout
- `public/` - Static assets like images
- `ANDROID_BUILD_INSTRUCTIONS.md` - Guide to build Android APK using Capacitor

## Building Android APK

To package this web app as an Android APK, follow the instructions in `ANDROID_BUILD_INSTRUCTIONS.md`. It uses Capacitor to wrap the web app in a native container.

## Contributing

Feel free to fork and submit pull requests to add new story paths or improve the UI.

## License

MIT License

---

Enjoy your Spider-Man Love Journey!

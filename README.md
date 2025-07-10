# Crypto Portfolio React App

A modern React-based cryptocurrency portfolio application with real-time data visualization and interactive charts.

## Features

- **Real-time Crypto Data**: Live cryptocurrency prices and market data
- **Interactive Charts**: Beautiful charts using React Google Charts
- **Portfolio Management**: Track your cryptocurrency investments
- **Responsive Design**: Modern UI with Tailwind CSS
- **Multi-page Navigation**: Home, About, Portfolio, Blog, and Login pages
- **Context API**: State management for crypto data

## Tech Stack

- **React 19** - Latest React with modern features
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **React Google Charts** - Interactive data visualization
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and formatting

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ManasSaxena14/Portfolio_Crypto.git
cd Portfolio_Crypto
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Footer/         # Footer component
│   ├── LineChart/      # Chart components
│   └── Navbar/         # Navigation component
├── context/            # React Context for state management
├── pages/              # Page components
│   ├── About/          # About page
│   ├── Blog/           # Blog page
│   ├── Coin/           # Individual coin page
│   ├── Home/           # Home page
│   ├── Login/          # Login page
│   └── Portfolio/      # Portfolio page
├── assets/             # Static assets
├── App.jsx             # Main app component
└── main.jsx            # App entry point
```

## Features in Detail

### Home Page
- Welcome section with crypto overview
- Featured cryptocurrencies
- Market trends

### Portfolio Page
- Track your crypto investments
- Performance metrics
- Portfolio allocation charts

### Coin Details
- Individual cryptocurrency information
- Price charts and historical data
- Market statistics

### Blog Section
- Crypto news and insights
- Educational content
- Market analysis

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

- GitHub: [@ManasSaxena14](https://github.com/ManasSaxena14)
- Project Link: [https://github.com/ManasSaxena14/Portfolio_Crypto](https://github.com/ManasSaxena14/Portfolio_Crypto)

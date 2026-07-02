# Real-Time Stock Screener

## Project Overview

Real-Time Stock Screener is a Next.js-based web application that allows users to explore, filter, sort, and analyze a large collection of simulated stock market data. The application provides an interactive dashboard with stock charts, advanced filtering, watchlist management, market statistics, and realistic stock generation logic.

The project was developed as an internship assignment to demonstrate frontend development skills, state management, data visualization, and user interface design.

---

## Features

### Stock Data Management

- Generate up to 10,000 simulated stocks
- Realistic financial relationships between stock metrics
- Dynamic stock information display

### Search & Filtering

- Search stocks by symbol
- Filter by sector
- Filter by RSI values
- Advanced filtering options

### Sorting

- Sort by Price
- Sort by RSI
- Dynamic sorting controls

### Stock Analysis

- Interactive stock selection
- Detailed stock information panel
- Price history visualization using charts

### Watchlist

- Add stocks to watchlist
- Remove stocks from watchlist
- Persistent watchlist using Local Storage

### Market Insights

- Market statistics dashboard
- Market movers section
- Top gainers and losers

### User Interface

- Responsive design
- Fixed table header
- Pinned Symbol column
- Hover effects and polished styling
- Card-based layout with shadows
- Empty state handling

---

## Tech Stack

### Frontend

- Next.js 16
- React
- JavaScript
- Tailwind CSS

### State Management

- Zustand

### Data Visualization

- Lightweight Charts

### Storage

- Browser Local Storage

---

## Project Structure

```text
stock-screener/
├── app/
├── components/
├── data/
├── store/
├── public/
├── README.md
├── Progress_Report.md
└── package.json
```

---

## Installation

### Clone the Repository

```bash
git clone <https://github.com/esin-dev/stock-screener>
```

### Navigate to the Project

```bash
cd stock-screener
```

### Install Dependencies

```bash
npm install
```

---

## Running Locally

### Development Mode

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Production Build

Build the application:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

Open:

```text
http://localhost:3000
```

---

## Data Modeling

The application includes realistic stock generation logic:

- Larger companies tend to have lower beta values.
- Smaller companies tend to have higher growth rates.
- Utilities companies generally have higher debt-to-equity ratios.
- Technology companies generally have lower debt-to-equity ratios.
- RSI values correlate with price movement.
- Trading volume scales with market capitalization and volatility.

These relationships create more realistic datasets compared to purely random stock generation.

---

## Performance

- Tested with datasets up to 10,000 stocks.
- Optimized table rendering.
- Persistent client-side state management.
- Production build successfully generated using Next.js.

## Project Status

Completed

All planned requirements have been implemented and tested successfully.

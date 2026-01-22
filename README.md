# 🌦️ WeatherCast: SOLID Next.js Forecast App

A high-performance, 5-day weather forecast application built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Designed with a focus on **SOLID** principles, server-side rendering, and clean architecture.

## 🚀 Features

* **Server-Side Rendering (SSR):** Fast initial page loads and secure API handling.
* **Dynamic Routing:** Real-time weather data based on US Zip Codes via `/weather/[zip]`.
* **Domain-Driven Design:** Clear separation between API services, data transformation utilities, and UI components.
* **Responsive & Scannable UI:** Forecasts grouped by day in 3-hour increments for easy scanning.

## 🛠️ Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **Data Source:** OpenWeather API

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd weather-forecast-app

```

### 2. Install dependencies

```bash
npm install
# or
yarn install

```

### 3. Environment Variables

Create a `.env` file in the root directory and add your OpenWeather API key:

```env
OPENWEATHER_API_KEY=your_api_key_here

```

### 4. Run the development server

```bash
npm run dev

```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to view the app.

---

## 🏗️ Architectural Decisions (SOLID)

* **Single Responsibility (S):** Data fetching is isolated in `WeatherService`, grouping logic in `weather-helpers`, and UI in small, functional components.
* **Open/Closed (O):** The UI components are built to receive formatted domain interfaces, allowing for future weather provider swaps without UI changes.
* **Interface Segregation (I):** Custom TypeScript interfaces define only the data the application uses, preventing "prop drilling" of massive API objects.
* **Dependency Inversion (D):** The UI depends on abstractions (Interfaces) rather than the concrete implementation of the API fetch.

---

## 📦 Deployment

This project is optimized for **Vercel**. To deploy:

1. Push your code to GitHub.
2. Import the project into Vercel.
3. Add the `OPENWEATHER_API_KEY` in the Environment Variables section.

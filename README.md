# Weather Dashboard React

This repository contains the **Weather Dashboard**, a web application that provides real-time weather updates and forecast information for various cities across the globe. 

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [UI/UX Design](#uiux-design)
- [Code Quality](#code-quality)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- **Live Weather Updates**: Displays real-time weather information such as temperature, humidity, wind speed, and more.
- **Forecast and History**: Provides current, 7-day forecast, and weather history.
- **Responsive UI**: Built with **Tailwind CSS**, the application is fully responsive and adapts to different screen sizes.
- **Dark Mode Support**: Seamless theme switcher to toggle between light and dark modes.
- **Search Feature**: Allows users to search for any city globally and get immediate weather updates.
- **Error Handling**: Implements **SweetAlert** for enhanced user notifications and error messages.
- **Charts and Visualizations**: Utilizes **Chart.js** to create beautiful and interactive weather charts.
- **Map Integration**: Displays cities on a map using **OpenStreetMap** for geographic context.
- **State Management**: Efficient state handling through **Zustand**.
- **Time Handling**: Manages time-related data with **Moment.js** for UNIX timestamps and date formats.

## Project Structure

The project follows a clean and well-organized folder structure to ensure scalability and maintainability:

```plaintext
.
├── .vscode/                       # VS Code settings
├── node_modules/                  # Node.js packages
├── public/                        # Public assets
├── src/                           # Source code
│   ├── assets/                    # Static assets (images, icons)
│   ├── components/                # Reusable React components
│   ├── constants/                 # Constant values used in the project
│   ├── hooks/                     # Custom hooks for data fetching and business logic
│   ├── layouts/                   # Layout components for structuring the UI
│   ├── stores/                    # Zustand store for state management
│   ├── utils/                     # Utility functions (debounce, API handling, etc.)
│   ├── App.tsx                    # Main application component
│   ├── index.css                  # Global styles
│   ├── main.tsx                   # Entry point for the React app
│   ├── vite-env.d.ts              # Vite environment types
├── .env                           # Environment variables
├── .eslintrc.js                   # ESLint configuration for code quality
├── .prettierrc                    # Prettier configuration for code formatting
├── tailwind.config.js             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
├── vite.config.ts                 # Vite configuration for build setup
```

## API Integration

The weather data is fetched from the **OpenWeatherMap API**, which provides detailed weather information including:

- Current weather conditions
- 5-day forecast
- Historical weather data

Data is updated dynamically based on the user’s search queries. Axios is used to make HTTP requests to the API, ensuring efficient and clean code.

For map functionality, we use **OpenStreetMap** to display city locations and improve user experience.

## UI/UX Design

The UI/UX design of the Weather Dashboard is modern and clean, thanks to **Shadcn** components. All designs are carefully created with a focus on usability and accessibility. 

You can view the complete design on Figma:
[Weather Dashboard Figma Design](# Weather Dashboard React

This repository contains the **Weather Dashboard**, a feature-rich web application that provides real-time weather updates and forecast information for various cities across the globe. It is built with **React** and utilizes several modern tools and libraries to create a professional, responsive, and user-friendly experience.

## Table of Contents

- [Features](#features)
- [API Integration](#api-integration)
- [UI/UX Design](#uiux-design)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)

## Features

- **Live Weather Updates**.
- **Responsive UI**.
- **Search Feature**.
- **Map Integration**.
- **State Management**.

## API Integration

The data is fetched from the **OpenWeatherMap API**, which provides detailed weather information.

## UI/UX Design
 
You can view the complete design on Figma:
[Weather Dashboard Figma Design](https://www.figma.com/design/jTdiFjmJBwvX6RS2OV1bzA/Weather-Dashboard?node-id=0-1&t=nwXmPbwXqRibEspK-1)



## Setup & Installation

### Prerequisites

- Node.js (v16 or higher)
- Yarn or npm

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/MobDev91/weather-dashboard-react.git
   ```

2. Install dependencies:

   ```bash
   cd weather-dashboard-react
   npm install
   ```

3. Create a `.env` file at the root of the project and add your OpenWeatherMap API key:

   ```plaintext
   REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser:

   ```
   http://localhost:3000
   ```

## Usage

Once the app is running, you can:

- Search for any city in the world to get the current weather, forecast, and location on a map.
- Switch between light and dark themes using the theme toggle button.
- View weather trends and history via the interactive charts.

## Demo

You can view the complete demo from here:
[Weather Dashboard Demo Link](https://weather-dashboard-rouge-ten.vercel.app/)

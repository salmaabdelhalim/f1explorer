# F1 Explorer

## Overview

F1 Explorer is a React application that enables users to browse Formula 1 seasons, view races for each season, and explore detailed race results, including driver performance visualizations. The app fetches F1 data from the Ergast API (https://api.jolpi.ca/ergast/f1/).

## Setup & Running the Project

### Prerequisites

- **Node.js** (v16 or higher)
- **npm**

### Installation

1. **Clone the repository:**
   git clone 'repo url'

2. **Install dependencies:**
   npm install

### Running the App

npm start

## Technical Approach & Architecture

- **React & React Router:** The app is built with React and uses React Router for client-side navigation between seasons, races, and race details.
- **Material UI:** UI components, charts, and layout are built using Material UI.
- **Data Fetching:** Axios is used to fetch data from the Ergast API.
- **Views:**
  - Users can toggle between a card view and a list view for both seasons and races.
  - Pagination is implemented for both views.
- **Race Details:**
  - Race page displays a table of driver results and visualizes performance using bar and line charts.

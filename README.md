# 🖥️ Frontend Assignment – React Dashboard UI


This is a frontend assignment project for a Frontend Developer Intern role. It is a responsive dashboard UI built using **React** and **TypeScript**, with integration of **mock APIs** for data fetching and submission.


## 🔧 Setup Instructions


### 1. Prerequisites


#### Node.js and npm
Node.js is the JavaScript runtime, and npm is the package manager that comes with it.


- **Windows:** Download and install from: [https://nodejs.org/](https://nodejs.org/) (This will install both Node.js and npm.)
- **macOS:** If you have Homebrew installed, run:
 ```bash
 brew install node
 ```
- **Ubuntu/Linux:**
 ```bash
 sudo apt update
 sudo apt install nodejs npm
 ```


#### Git
Git is required to clone the repository.


- **Windows:** Download and install from: [https://gitforwindows.org](https://gitforwindows.org)
- **macOS:**
 ```bash
 brew install git
 ```
- **Ubuntu/Linux:**
 ```bash
 sudo apt install git
 ```


#### Check installation
Verify that Node.js, npm, and Git are installed correctly by running the following commands in your terminal:


```bash
node -v         # Should return Node.js version (e.g., v18.17.0)
npm -v          # Should return npm version (e.g., 9.8.1)
git --version   # Should return Git version (e.g., git version 2.42.0)
```


---


### 2. Github Repository Setup


**Clone the GitHub repository:**
```bash
git clone https://github.com/Mirudhubasini-RC/frontend-assignment.git
```


**Navigate into the frontend directory:**
```bash
cd frontend-assignment/frontend
```


### 3. Install Project Dependencies
```bash
npm install
npm install axios recharts
```


### 4. Run the Development Server
```bash
npm start
```


---


## 🚀 Features


- Sidebar navigation with:
 - Dashboard
 - Users
 - Settings
- Dashboard page includes:
 - Yearly API Usage Bar Chart (Recharts): Displays API call data over months.
 - API Access Request Form: A form with three fields (Select API, Select Access Level, Justification) for submitting API access requests.
 - Recent User Activity Table: Shows a list of recent user activities, including Name, Email, Role, API Accessed, and Timestamp.
- Routing using React Router
- API integration using Axios
- State management with local state
- Proper loading and error state handling


---


## 🧪 APIs Used


| Purpose                    |  Service     |
| :------------------------- |  :---------- |
| **Bar Chart Usage Data**   |  mockapi.io  |
| **Form Submit (POST)**     |  mockapi.io  |
| **User Activity List (GET)** | mockapi.io  |


---


## 📌 Assumptions Made
- Backend functionality is simulated using public mock API services.
- Submitted form data is not persisted on the mock API (mock POST).
- The bar chart's "Yearly API Usage" data is fetched from a mock API endpoint.
- Styling is kept minimal and relative to company's website but ensures responsiveness across different screen sizes.


---


## 🛠️ Libraries / Tools Used


- React: For building the user interface.
- TypeScript: For type-safe development.
- React Router DOM: For client-side routing.
- Axios: For making HTTP requests to APIs.
- Recharts: For rendering the bar chart.
- mockapi.io: For providing mock GET and POST API endpoints.
- CSS: For styling.
- Create React App: For project bootstrapping.

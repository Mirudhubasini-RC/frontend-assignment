# 🖥️ Frontend Assignment – React Dashboard UI

This is a frontend assignment project for a Frontend Developer Intern role. It is a responsive dashboard UI built using **React** and **TypeScript**, with integration of **mock APIs** for data fetching and submission.

## 🔧 Setup Instructions

### 1. Prerequisites
    ## Node.js and npm
    - Node.js is the JavaScript runtime, and npm is the package manager that comes with it.
    ## Windows:
    - Download and install from: https://nodejs.org/
    - This will install both node and npm.
    ## macOS:
    - If you have Homebrew installed, run:
    - brew install node
    ## Ubuntu/Linux:
    - sudo apt update
    - sudo apt install nodejs npm
    ## Git
    - Git is required to clone the repository.
    ## Windows:
    - Download and install from: https://gitforwindows.org
    ## macOS:
    - brew install git
    ## Ubuntu/Linux:
    - sudo apt install git
    ## Check installation
        node -v         # Should return Node.js version (e.g., v18.17.0)
        npm -v          # Should return npm version (e.g., 9.8.1)
        git --version   # Should return Git version (e.g., git version 2.42.0)   

### 2. Github Repository Setup
    ## Clone the GitHub repository
        - git clone https://github.com/Mirudhubasini-RC/frontend-assignment.git

    ## Navigate into the frontend directory
        - cd frontend_assignment/frontend 
### 3. Install Project Dependencies
    - npm install 

### 4. Run the Development Server
    - npm start

---

## 🚀 Features

- Sidebar navigation with:
  - Dashboard
  - Users
  - Settings
- Dashboard page includes:
  - 📊 Static bar chart (Recharts)
  - 👤 User activity table (GET request to mock API)
  - 📝 Form with 3 fields (POST request to mock API)
- Routing using React Router
- API integration using Axios
- State management with React Context API / local state
- Proper loading and error state handling

---

## 🧪 APIs Used

| Purpose           | API Endpoint                                | Service         |
|------------------|----------------------------------------------|-----------------|
| User List (GET)  | https://jsonplaceholder.typicode.com/users   | JSONPlaceholder |
| Form Submit (POST)| https://reqres.in/api/users                  | Reqres.in       |

---

## 📌 Assumptions Made
- Backend functionality is simulated using public mock API services.
- Submitted form data is not persisted (mock POST).
- Bar chart uses static or randomly generated mock data.
- Styling is kept minimal but responsive.

## 🛠️ Libraries / Tools Used

- React	UI Development
- TypeScript	Type-safe development
- React Router DOM	Client-side routing
- Axios	HTTP requests
- Recharts	Bar chart rendering
- JSONPlaceholder	Mock GET API
- Reqres.in	Mock POST API
- CSS / SCSS	Component styling
- Create React App	Project bootstrapping
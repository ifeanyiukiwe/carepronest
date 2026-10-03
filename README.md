# CareProNest

A care-matching platform connecting families who need care with professional caregivers across the UK. Families can search for care by location, and caregivers can create a profile and apply for care jobs.

## Features

- **Location-based care search** using UK counties and their local authority areas
- **Two clear user journeys:** "I need a caregiver" and "I want a care job"
- **Three-step process:** Register, Connect, Hire
- **Caregiver job application form**, including years of experience and CV upload
- **Account pages** for sign-up and login
- **Multi-page navigation** with React Router
- **Accessible, easy-to-use interface**, designed with older users in mind

## Tech Stack

- **Front end:** React 19, JavaScript (ES6+)
- **Routing:** React Router
- **Styling:** Tailwind CSS v4
- **Tooling:** Vite, ESLint

## Pages

| Route | Purpose |
|---|---|
| `/` | Home page with location search and the three-step process |
| `/career` | Choose a path: find care or find a care job |
| `/apply` | Caregiver job application form |
| `/signup` | Create an account |
| `/login` | Sign in |

## Getting Started

### Prerequisites
- Node.js (LTS version) and npm

### Installation
1. Clone the repository:
   `git clone https://github.com/ifeanyiukiwe/carepronest.git`
2. Move into the project folder:
   `cd carepronest`
3. Install dependencies:
   `npm install`
4. Start the development server:
   `npm run dev`
5. Open `http://localhost:5173` in your browser.

## What I Learned

- Structuring a multi-page React application with React Router
- Designing clear user journeys for two different audiences
- Building accessible forms and layouts for users who may be less confident with technology

## Future Improvements

- Connect forms to a back end and database
- Add authentication and caregiver profiles
- Add messaging between families and caregivers

## Author

**Ojo Ifeanyi Ukiwe**
[GitHub](https://github.com/ifeanyiukiwe) · [LinkedIn](https://linkedin.com/in/ifeanyiukiwe)

# Fact Or Fiction: Interactive Fact Verification Application

## Overview

Fact Or Fiction is an engaging web application designed to challenge users' knowledge and critical thinking skills. This project serves as a comprehensive introduction to modern web development, demonstrating the implementation of a full-stack application using React and Supabase.

## Technology Stack

- Frontend: React
- Backend: Supabase (Backend-as-a-Service)

## Key Features

- Browse and explore a diverse collection of statements
- Engage with content through voting (fact or fiction)
- React to statements (e.g., "mind-blown", "skeptical")
- Submit new statements for community verification
- Real-time updates leveraging Supabase capabilities

## Project Objectives

This project aims to provide a practical, hands-on experience in web development, covering:

1. Frontend development with React
2. Backend integration using Supabase
3. Real-time web application features
4. User interaction and engagement techniques

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Git

### Installation and Setup

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/fact-or-fiction.git
   ```

2. Navigate to the project directory:

   ```
   cd fact-or-fiction
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Configure environment variables:
   Create a `.env` file in the root directory with the following content:

   ```
   REACT_APP_SUPABASE_URL=your_supabase_project_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. Start the development server:

   ```
   npm start
   ```

6. Access the application at `http://localhost:3000`

## Development Guidelines

### Code Structure

- `/src`: Source code directory
  - `/components`: React components
  - `/hooks`: Custom React hooks
  - `/services`: API and service functions
  - `/styles`: Style-related files

### Best Practices

- Follow React best practices and hooks guidelines
- Maintain consistent code formatting (consider using Prettier)
- Write unit tests for critical functions and components

## Contributing

We welcome contributions to Fact Or Fiction. Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Supabase Documentation](https://supabase.io/docs)

For further information or support, please contact the project maintainers.

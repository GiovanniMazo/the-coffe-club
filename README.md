# The Coffee Club React

Welcome to The Coffee Club React project! This application is designed to showcase a variety of Colombian coffee products, allowing users to explore, learn, and purchase their favorite coffees.

## Project Structure

The project is organized as follows:

```
the-coffe-club-react
├── public
│   └── index.html          # Main HTML file for the React application
├── src
│   ├── main.jsx            # Entry point of the React application
│   ├── App.jsx             # Main App component with routing
│   ├── index.css           # Global styles for the application
│   ├── components           # Reusable components
│   │   ├── Header.jsx      # Navigation menu and logo
│   │   ├── Footer.jsx      # Subscription form and social media links
│   │   ├── Hero.jsx        # Main promotional content
│   │   ├── AboutCard.jsx   # Information about different types of coffee
│   │   ├── PriceCard.jsx   # Pricing information for coffee products
│   │   └── Testimony.jsx    # Customer testimonials
│   ├── pages               # Page components
│   │   ├── Home.jsx        # Landing page
│   │   ├── AboutPage.jsx   # Information about the coffee club
│   │   ├── Contact.jsx     # Contact form
│   │   ├── Blog.jsx        # Blog posts related to coffee
│   │   └── Checkout.jsx    # Checkout process for purchasing coffee
│   ├── hooks               # Custom hooks
│   │   └── useNewsletter.js # Hook for handling newsletter subscriptions
│   ├── services            # API service functions
│   │   └── api.js          # Functions for making API calls
│   └── utils               # Utility functions
│       └── formatCurrency.js # Function for formatting currency values
├── package.json            # npm configuration file
├── .gitignore              # Files and directories to ignore by Git
└── README.md               # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd the-coffe-club-react
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Features

- Explore a variety of Colombian coffee products.
- Learn about different types of coffee.
- Purchase coffee directly through the application.
- Subscribe to the newsletter for updates and offers.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
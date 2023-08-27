
# Movie Listing Website (Hey Movies)




1. Github link : https://github.com/sneh258/movie-treasure
2. Weblink : https://hello-movies-sneha-lall.netlify.app/



# Project Setup

1. Clone the repository from Github by pasting the following command in your terminal : 
git clone git@github.com:sneh258/movie-treasure.git

2. Navigate to the project directory : cd movie 

3. Install dependencies using npm or yarn : npm install 

4. Create a .env.local file in the root directory and add the API key for the movie API:

NEXT_PUBLIC_API_KEY= your_api_key

NEXT_PUBLIC_BASE_URL=https://api.themoviedb.org/3

5. Start the development server : npm run dev

6. Open your browser and go to http://localhost:3000 to access the application.


# Code Architecture

1. **Component-Based Architecture**:

The application follows a component-based architecture, where each distinct UI element or feature is encapsulated in its own reusable component. 

**MovieCard**: Represents a single movie item in the listing or search results.

**SearchBar**: Provides a user interface for entering search queries.

**FavoritesList**: Displays the user's favourite movies.

2. **Pages**:

In Next.js, each page represents a route in the application. The pages folder contains different views of the application, such as:

-- The main landing page with the movie listing.

-- The search results page displays movies based on search queries.

-- The favourite page displays the user's favourite movies.

-- The page showing movie details in brief

3. **API Calls**:

The application interacts with external APIs https://developer.themoviedb.org/docs to fetch movie data. The API calls are encapsulated in separate modules within the apiRequest folder. 

4. **Routing**:

Next.js provides client-side routing, making it easy to navigate between different views of the application. The Link component from Next.js is used to create links between pages.

5. **Styling**:

The application uses Tailwind and CSS for styling

6. **Deployment**:

The application has been deployed on  **Netlify**.













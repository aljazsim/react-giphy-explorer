# React Giphy Explorer

React Giphy Explorer is a [React](https://react.dev/) and [Daisy UI](https://daisyui.com/) web application showcasing basic elements of both frameworks. It allows users to explore gips offered by [Giphy Web API](https://developers.giphy.com/) on the web.

![Giphy Explorer](./giphy-explorer.gif)

## Running the application

1. ensure you have [Node.js](https://nodejs.org/en/) installed
2. clone the repo: `git clone https://github.com/aljazsim/react-giphy-explorer.git`
3. go to the source directory: `src`
4. set the Giphy api key
    1. register for a developer account at [https://developers.giphy.com/](https://developers.giphy.com/)
    2. create an app
    3. copy Giphy API key
    4. set the key in `src\dependency-injection.ts` (replace string `<INSERT-GIPHY-API-KEY>` with the actual API KEY)
5. install dependencies: `npm install`
6. run development server: `npm run serve`
7. open a web browser and go to [http://localhost:3000/](http://localhost:3000/)

## Libraries used

Some of the libraries being used in Giphy Explorer

-   [React](https://react.dev/) (library for web and native user interfaces),
-   [React Router](https://reactrouter.com/) (React routing library)
-   [Mobx](https://mobx.js.org/) (React state management library)
-   [axios](https://axios-http.com/) (promise based HTTP JavaScript client),
-   [qs](github.com/ljharb/qs) (query string parsing library),
-   [DaisyUI](https://daisyui.com/) (TailwindCSS based component library),
-   [Humps](https://github.com/domchristie/humps) (framework for converting JavaScript objects with underscore-case property naming notation to camel-case and back),
-   [TailwindCSS](https://tailwindcss.com/) (utility-first CSS framework)

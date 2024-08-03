import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./routes/layout/layout";
import { Children } from "react";
import Main from "./components/main/main";
import "./App.css"
import SliderComponent from "./components/slider/slider";
import Repository from "./components/repository/repository";
import { RepositoryPageLoader } from "./lib/loader";

function App() {



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Main />
        },
        {
          path: "/repository",
          element: <Repository />,
          loader: RepositoryPageLoader
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  )


}

export default App;

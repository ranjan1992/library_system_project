import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "books/:category", element: <BrowseBooks /> },
      { path: "book/:id", element: <BookDetails /> },
      { path: "add", element: <AddBook /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

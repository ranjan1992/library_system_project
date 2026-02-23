# 📚 Library System

A single-page application for browsing, adding, and managing books — built with React, Redux Toolkit, React Router, and Vite.

---

## ✨ Features

- **Browse by Category** — Filter books by Fiction, Non-Fiction, or Sci-Fi from the home page
- **Live Search** — Instantly search books by title or author within any category
- **Book Details** — View a dedicated page for each book with cover image, description, and rating
- **Add a Book** — Submit new books to the library via a simple form
- **Delete a Book** — Remove any book directly from the browse page
- **404 Page** — Custom Not Found page for unmatched routes

---

## 🗺️ Application Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | Landing page with category links |
| `/books/:category` | `BrowseBooks` | Filtered book list with live search (`all`, `fiction`, `non-fiction`, `sci-fi`) |
| `/book/:id` | `BookDetails` | Full detail view for a single book |
| `/add` | `AddBook` | Form to add a new book to the store |
| `*` | `NotFound` | Catch-all 404 page |

---

## 🗂️ Project Structure

```
library_system_project/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              # App entry point — Redux Provider + RouterProvider
    ├── router.jsx            # All routes defined with createBrowserRouter
    ├── index.css
    ├── components/
    │   ├── Layout.jsx        # Navbar + <Outlet /> shell
    │   ├── Navbar.jsx        # Home | Browse Books | Add Book links
    │   └── Navbar.css
    ├── data/
    │   └── books.js          # Seed data (Dune, 1984, Sapiens)
    ├── redux/
    │   ├── store.js          # configureStore with booksReducer
    │   └── bookSlice.js      # addBook + deleteBook actions & reducer
    └── pages/
        ├── Home.jsx
        ├── BrowseBooks.jsx
        ├── BookDetails.jsx
        ├── AddBook.jsx
        ├── NotFound.jsx
        └── css/              # Per-page stylesheets
            ├── Home.css
            ├── BrowseBooks.css
            ├── BookDetails.css
            ├── AddBook.css
            └── NotFound.css
```

---

## 🔄 Redux Data Flow

```
UI Event  →  dispatch(action)  →  bookSlice reducer  →  store (state.books[])  →  useSelector re-renders UI
```

- **`addBook`** — Prepends a new book object to the state array
- **`deleteBook`** — Filters out the book matching the given `id`
- State is **in-memory only** — refreshing the page resets back to the three seed books

---

## ⚙️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | ^19.2.0 | UI library |
| Redux Toolkit | ^2.11.2 | Global state management |
| React Redux | ^9.2.0 | React bindings for Redux |
| React Router DOM | ^7.13.0 | Client-side routing |
| Vite | ^7.2.4 | Build tool & dev server |
| Plain CSS | — | Per-page component styles |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/library_system_project.git
   cd library_system_project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start local dev server with HMR |
| `npm run build` | Bundle the app for production into `dist/` |


---

## 🌱 Seed Books

The app loads three books by default from `src/data/books.js`:

| Title | Author | Category | Rating |
|-------|--------|----------|--------|
| Dune | Frank Herbert | sci-fi | ⭐⭐⭐⭐⭐ |
| 1984 | George Orwell | fiction | ⭐⭐⭐⭐⭐ |
| Sapiens | Yuval Noah Harari | non-fiction | ⭐⭐⭐⭐ |

> To add permanent seed books, append entries to the `booksData` array in `src/data/books.js`.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

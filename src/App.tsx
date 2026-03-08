import "./App.css";

import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import type { MediaItem } from "./types/movie";
import { SaveMoviesContext } from "./context/SaveMoviesContext";
import { BrowserRouter, Route, Routes } from "react-router";
import { MediaPage } from "./pages/MediaPage/MediaPage";
import { ModalProvider } from "./provider/ModalProvider";
import { Modal } from "./components/Modal/Modal";
import { Home } from "./pages/Home/Home";

function App() {
  const [savedMovies, setSaveMovies] = useState<MediaItem[]>(() => {
    const saved = localStorage.getItem("hbo-min-fav");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("hbo-min-fav", JSON.stringify(savedMovies));
  }, [savedMovies]);

  const toggleSaveMovie = (movie: MediaItem) => {
    // Se o filme já estiver lá, removemos
    setSaveMovies((prev) => {
      const isSaved = prev.some((item) => item.id === movie.id);
      if (isSaved) {
        return prev.filter((item) => item.id !== movie.id);
      }
      return [...prev, movie];
    });
  };

  return (
    <BrowserRouter>
      <ModalProvider>
        <SaveMoviesContext.Provider value={{ savedMovies, toggleSaveMovie }}>
          <Header />
          <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Rotas de filmes */}
              <Route
                path="/filmes"
                element={<MediaPage type="movie" category="popular" />}
              />
              <Route
                path="/filmes/aclamados"
                element={<MediaPage type="movie" category="top_rated" />}
              />
              <Route
                path="/filmes/emBreve"
                element={<MediaPage type="movie" category="upcoming" />}
              />

              {/* Rotas de séries */}
              <Route
                path="/series"
                element={<MediaPage type="tv" category="popular" />}
              />
              <Route
                path="/series/aclamadas"
                element={<MediaPage type="tv" category="top_rated" />}
              />
            </Routes>
          </main>
          <Modal />
        </SaveMoviesContext.Provider>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;

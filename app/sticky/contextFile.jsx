"use client";

import React, { createContext, useContext, useState } from "react";

const LoadingContext = createContext(null);
const NotesLoadingContext = createContext(null);

//for addNotes Loading
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
export const useLoading = () => useContext(LoadingContext);

//for color NoteLoading
export const NotesLoadingProvider = ({ children }) => {
  const [loadingState, setLoadingState] = useState({});

  const setIsLoading = (id, isLoading) => {
    setLoadingState((prev) => ({
      ...prev,
      [id]: isLoading,
    }));
  };

  const isLoading = (id) => {
    return loadingState[id] || false;
  };

  const value = { isLoading, setIsLoading }

  return (
    <NotesLoadingContext.Provider value={value}>
      {children}
    </NotesLoadingContext.Provider>
  );
};
export const useNotesLoading = () => useContext(NotesLoadingContext);

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
  const [isColorLoading, setIsLoading] = useState(false);

  return (
    <NotesLoadingContext.Provider value={{ isColorLoading, setIsLoading }}>
      {children}
    </NotesLoadingContext.Provider>
  );
};
export const useColorLoading = () => useContext(NotesLoadingContext);

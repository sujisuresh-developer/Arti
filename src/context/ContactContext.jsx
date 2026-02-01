"use client";

import { createContext, useContext, useEffect, useState } from "react";
import ContactModal from "../components/ContactModal";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <ContactContext.Provider
      value={{
        openContact: () => setOpen(true),
        closeContact: () => setOpen(false),
      }}
    >
      {children}
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);

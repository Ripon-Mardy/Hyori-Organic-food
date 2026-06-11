"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

interface AuthModalProps {
  closeModal: () => void;
}

export default function AuthModal({ closeModal }: AuthModalProps) {
  const [view, setView] = useState("login");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-3">
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
      />

      {/* Modal */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.95,
        }}
        className="relative z-10 bg-white rounded-lg p-6 w-full max-w-md overflow-hidden"
      >
        <button
          onClick={closeModal}
          className="absolute right-3 top-3 text-gray-600 cursor-pointer"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <AnimatePresence mode="wait">
          {view === "login" && (
            <motion.div
              key="login"
              // initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              // exit={{ x: -50, opacity: 0 }}
            >
              <LoginForm
                switchToRegister={() => setView("register")}
                switchToForgotPassword={() => setView("forgot-password")}
              />
            </motion.div>
          )}

          {view === "register" && (
            <motion.div
              key="register"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <RegisterForm switchToLogin={() => setView("login")} />
            </motion.div>
          )}

          {view === "forgot-password" && (
            <motion.div
              key="forgot-password"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <ForgotPasswordForm switchToLogin={() => setView("login")} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

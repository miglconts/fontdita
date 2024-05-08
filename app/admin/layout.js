"use client";
import { useAuthContext } from "../context/AuthContext";
import LoginForm from "@/components/auth/LoginForm";

export default function AdminLayout({ children }) {
  const { user } = useAuthContext();

  return <>{user.logged ? children : <LoginForm />}</>;
}

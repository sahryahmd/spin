"use client"
import Navbar from "./Navbar"
import { usePathname } from "next/navigation"

export default function NavbarClient() {
  const pathname = usePathname()
  if (pathname === "/") return null
  return <Navbar />
}

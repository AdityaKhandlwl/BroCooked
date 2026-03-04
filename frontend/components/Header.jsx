import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { CookieIcon, Refrigerator } from "lucide-react";
import UserDropdown from "./ui/UserDropdown";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  const user = await checkUser();
  return (
    <header className="fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md z-50 supports-backdrop-filter:bg-stone-50/60">
      <nav className="container max-auto px-4 h-16 flex items-center justify-between">
        <Link href={user ? "/dashboard" : "/"}>
          <Image
            src="/orange-logo.png"
            width={60}
            height={60}
            className="w-16"
            alt="BroCooked Logo"
          />
        </Link>
        <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-stone-600">
          <Link
            href="/recipes"
            className="hover:text-orange-600 transition-colors flex gap-1.5 items-center"
          >
            <CookieIcon className="w-4 h-4" />
            My Recipes
          </Link>

          <Link
            href="/pantry"
            className="hover:text-orange-600 transition-colors flex gap-1.5 items-center"
          >
            <Refrigerator className="w-4 h-4" />
            My Pantry
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {/* Show the user button when the user is signed in */}
          <SignedIn>
            {/* How to Cook? */}
          </SignedIn>
          <UserDropdown />
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                className="text-stone-600 hover:text-orange-600 hover:bg-orange-50 font-medium"
              >
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button variant="primary" className="rounded-full px-6">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Header;

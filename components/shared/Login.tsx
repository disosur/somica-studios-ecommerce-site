"use client";

import React from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signIn, signOut } from "next-auth/react";
import { LoginProps } from "@/@types/LogInProps";

export default function Login({ session }: LoginProps) {
  const user = session?.user;

  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={user.image || undefined} />
              <AvatarFallback className=" bg-primary" />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col items-center w-40 break-words border-2 bg-background">
            <DropdownMenuLabel>welcome</DropdownMenuLabel>
            <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
            <Button
              variant="destructive"
              onClick={() => signOut({ callbackUrl: "/" })}>
              Log out
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button onClick={() => signIn()}>Login</Button>
      )}
    </>
  );
}

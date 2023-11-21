"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Session } from "next-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type LoginProps = {
  session: Session | null;
};

export default function Login({ session }: LoginProps) {
  const user = session?.user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {user ? (
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ) : (
          <Button>Login</Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

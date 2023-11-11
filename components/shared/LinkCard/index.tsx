import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function LinkCard() {
  return (
    <Card className="flex flex-row items-center justify-center rounded-3xl">
      <CardContent className="p-12 w-96">
        <CardHeader>
          <CardTitle>Technology</CardTitle>
          <CardDescription>
            Explore the Latest Innovations and Unleash the Power of Technology
          </CardDescription>
        </CardHeader>
        <CardFooter>Explore category</CardFooter>
      </CardContent>
      <CardContent className="w-96">
        <div className="flex justify-center w-full h-full items- bg-slate-700">
          hello
        </div>
      </CardContent>
    </Card>
  );
}

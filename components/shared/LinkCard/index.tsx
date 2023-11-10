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
    <Card className="flex flex-row items-center justify-center p-12 rounded-3xl">
      <CardContent>
        <CardHeader>
          <CardTitle>Technology</CardTitle>
          <CardDescription>
            Explore the Latest Innovations and Unleash the Power of Technology
          </CardDescription>
        </CardHeader>
        <CardFooter>Explore category</CardFooter>
      </CardContent>
      <CardContent>
        <div className="flex items-center justify-center w-32 h-32">hello</div>
      </CardContent>
    </Card>
  );
}

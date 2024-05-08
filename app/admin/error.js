"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto my-auto flex flex-col">
      <h2 className="text-xl text-center text-orange-600">¡Algo no salió bien!</h2>
      <hr className="my-6" />
      <Button className="w-full" onClick={reset}>Intentar nuevamente</Button>
    </div>
  );
}

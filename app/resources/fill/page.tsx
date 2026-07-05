"use client";

import { Suspense } from "react";
import ResourceFillClient from "./ResourceFillClient";

export default function ResourceFillPage() {
  return (
    <Suspense fallback={<main className="p-6">Loading...</main>}>
      <ResourceFillClient />
    </Suspense>
  );
}

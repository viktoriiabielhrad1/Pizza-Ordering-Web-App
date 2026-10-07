import { Suspense } from "react";
import ThankYouContent from "./ThankYouContent";

export const dynamic = "force-dynamic";

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  );
}

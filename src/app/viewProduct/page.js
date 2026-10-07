import { Suspense } from "react";
import ViewProductContent from "./ViewProductContent";

export const dynamic = "force-dynamic";

export default function ViewProductPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ViewProductContent />
    </Suspense>
  );
}

"use client";
import { useFormStatus } from "react-dom";

import { ReactNode } from "react";

export default function FormButton({ className, children }: { className?: string; children: ReactNode }) {
  // Hook to track form submission status (pending/not pending)
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={className}
      aria-label={pending ? "Submitting form" : "Submit form"} // Dynamic ARIA label
      aria-disabled={pending}
    >
      {pending ? "Sending..." : children}
    </button>
  );
}
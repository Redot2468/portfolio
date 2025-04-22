"use client";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function ErrorComp({ error, reset }: ErrorProps) {
  return (
    <div>
      <p>{error?.message}</p>

      <button onClick={reset}>Back to homepage</button>
    </div>
  );
}

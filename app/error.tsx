"use client";

import Link from "next/link";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main id="content" className="section not-found">
      <div className="wrap narrow">
        <p className="kicker">Page interrupted</p>
        <h1>This page could not be shown.</h1>
        <p className="lede">
          Something on the page failed to render. You can try it again, or go back to the house.
        </p>
        <div className="actions">
          <button type="button" className="btn btn-fill" onClick={() => reset()}>
            Try again
          </button>
          <Link className="btn" href="/">
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}

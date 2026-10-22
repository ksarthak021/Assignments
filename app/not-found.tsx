import Link from "next/link";

export default function NotFound() {
  return (
    <main id="content" className="section not-found">
      <div className="wrap narrow">
        <p className="kicker">Missing page</p>
        <h1>This room is not on the plan.</h1>
        <p className="lede">The address does not match a page of the house. The rest of the site is open.</p>
        <div className="actions">
          <Link className="btn btn-fill" href="/">
            Return home
          </Link>
          <Link className="btn" href="/contact">
            Inquire
          </Link>
        </div>
      </div>
    </main>
  );
}

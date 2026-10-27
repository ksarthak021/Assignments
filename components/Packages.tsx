"use client";

import Link from "next/link";
import { useState } from "react";
import { comparisonRows, packages, type PackageId } from "@/lib/site";

export function Packages() {
  const [selected, setSelected] = useState<PackageId | null>(null);
  const current = packages.find((item) => item.id === selected) ?? null;

  return (
    <div className="package-studio">
      <div className="package-switch" role="group" aria-label="Choose a package to highlight">
        {packages.map((plan) => (
          <button
            key={plan.id}
            type="button"
            aria-pressed={selected === plan.id}
            onClick={() => setSelected(plan.id)}
          >
            <strong>{plan.name}</strong>
            <span>{plan.meaning}</span>
          </button>
        ))}
      </div>

      <div className="package-detail" aria-live="polite">
        {current ? (
          <>
            <p className="kicker">Selected</p>
            <h3>{current.name}</h3>
            <p>{current.summary}</p>
            <p>{current.forWhom}</p>
            <Link className="btn btn-fill" href={`/contact?package=${current.id}#inquiry`}>
              Inquire about {current.name}
            </Link>
          </>
        ) : (
          <>
            <p className="kicker">Comparison</p>
            <h3>Choose a plan to read it against the others.</h3>
            <p>Nivaas, Darbar, and Rajmahal are different kinds of days, not three sizes of the same decoration.</p>
          </>
        )}
      </div>

      <p className="scroll-hint">Swipe sideways to compare the three plans.</p>
      <div className="compare" tabIndex={0} aria-label="Package comparison">
        <table>
          <caption className="sr-only">Comparison of Nivaas, Darbar, and Rajmahal</caption>
          <thead>
            <tr>
              <th scope="col"> </th>
              {packages.map((plan) => (
                <th key={plan.id} scope="col" className={selected === plan.id ? "is-selected" : undefined}>
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.key}>
                <th scope="row">{row.label}</th>
                {packages.map((plan) => (
                  <td key={plan.id} className={selected === plan.id ? "is-selected" : undefined}>
                    {plan.rows[row.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

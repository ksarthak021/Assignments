"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { EVENT_TYPES, GUEST_RANGES, SEASONS, recommendPackage } from "@/lib/site";

const STEPS = ["Gathering", "Guests", "Season"] as const;

export function PlanFlow() {
  const [step, setStep] = useState(0);
  const [eventType, setEventType] = useState("");
  const [guests, setGuests] = useState("");
  const [season, setSeason] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const recommendation = useMemo(() => {
    if (!eventType || !guests || !season) return null;
    return recommendPackage(eventType, guests, season);
  }, [eventType, guests, season]);

  function currentValue() {
    if (step === 0) return eventType;
    if (step === 1) return guests;
    return season;
  }

  function continueStep() {
    if (!currentValue()) {
      setError("Choose one option to continue.");
      return;
    }
    setError("");
    if (step < 2) {
      setStep((value) => value + 1);
      return;
    }
    if (!recommendation) {
      setError("We could not match a package. Continue to the inquiry and describe the day.");
      setDone(true);
      return;
    }
    setDone(true);
  }

  function back() {
    setError("");
    if (done) {
      setDone(false);
      return;
    }
    setStep((value) => Math.max(0, value - 1));
  }

  const query = new URLSearchParams();
  if (eventType) query.set("event", eventType);
  if (guests) query.set("guests", guests);
  if (season) query.set("season", season);
  if (recommendation) query.set("package", recommendation.plan.id);
  const href = `/contact?${query.toString()}#inquiry`;

  return (
    <div className="plan-card" id="plan-card">
      <p className="kicker">{done ? "A recommendation" : `0${step + 1} / 03 · ${STEPS[step]}`}</p>
      {done ? (
        recommendation ? (
          <div className="recommend" role="status">
            <h3>{recommendation.plan.name}</h3>
            <p className="meaning">{recommendation.plan.meaning}</p>
            <p>{recommendation.reason}</p>
            <p className="recommend-meta">
              {eventType} · {guests} guests · {season}
            </p>
            <div className="actions">
              <Link className="btn btn-fill" href={href}>
                Carry this into the inquiry
              </Link>
              <button type="button" className="btn" onClick={back}>
                Adjust answers
              </button>
            </div>
          </div>
        ) : (
          <div className="recommend" role="status">
            <h3>No package matched.</h3>
            <p>Describe the gathering in the inquiry and the house can answer from the ground, not from a rule.</p>
            <div className="actions">
              <Link className="btn btn-fill" href={href}>
                Continue to the inquiry
              </Link>
              <button type="button" className="btn" onClick={back}>
                Adjust answers
              </button>
            </div>
          </div>
        )
      ) : (
        <>
          <h3>
            {step === 0 && "What are you gathering for?"}
            {step === 1 && "About how many guests?"}
            {step === 2 && "Which season in Jaipur?"}
          </h3>
          {step === 0 && (
            <fieldset>
              <legend className="sr-only">Event type</legend>
              {EVENT_TYPES.map((item) => (
                <label key={item.id} className="choice">
                  <input
                    type="radio"
                    name="event-type"
                    value={item.id}
                    checked={eventType === item.id}
                    onChange={() => {
                      setEventType(item.id);
                      setError("");
                    }}
                  />
                  <span>
                    <strong>{item.id}</strong>
                    <small>{item.detail}</small>
                  </span>
                </label>
              ))}
            </fieldset>
          )}
          {step === 1 && (
            <fieldset>
              <legend className="sr-only">Guest count</legend>
              {GUEST_RANGES.map((item) => (
                <label key={item} className="choice">
                  <input
                    type="radio"
                    name="guest-count"
                    value={item}
                    checked={guests === item}
                    onChange={() => {
                      setGuests(item);
                      setError("");
                    }}
                  />
                  <span>
                    <strong>{item}</strong>
                  </span>
                </label>
              ))}
            </fieldset>
          )}
          {step === 2 && (
            <fieldset>
              <legend className="sr-only">Season</legend>
              {SEASONS.map((item) => (
                <label key={item.id} className="choice">
                  <input
                    type="radio"
                    name="season"
                    value={item.id}
                    checked={season === item.id}
                    onChange={() => {
                      setSeason(item.id);
                      setError("");
                    }}
                  />
                  <span>
                    <strong>{item.id}</strong>
                    <small>{item.detail}</small>
                  </span>
                </label>
              ))}
            </fieldset>
          )}
          {error ? (
            <p className="form-banner" role="alert">
              {error}
            </p>
          ) : (
            <p className="plan-hint">Nothing is sent from this step. It only recommends a package.</p>
          )}
          <div className="actions">
            {step > 0 ? (
              <button type="button" className="btn" onClick={back}>
                Back
              </button>
            ) : null}
            <button type="button" className="btn btn-fill" onClick={continueStep}>
              {step === 2 ? "See the package" : "Continue"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

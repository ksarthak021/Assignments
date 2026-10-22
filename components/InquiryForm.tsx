"use client";

import { useEffect, useState, type FormEvent, type MouseEvent } from "react";
import { useSearchParams } from "next/navigation";
import {
  BRAND,
  EVENT_TYPES,
  GUEST_RANGES,
  INQUIRY_ENDPOINT,
  INQUIRY_SUBJECT,
  SEASONS,
  packageById,
  packages,
  pickAllowed,
} from "@/lib/site";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^\+?[\d][\d\s()-]{7,}$/;

type Values = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  guests: string;
  season: string;
  packageId: string;
  message: string;
};

type Errors = Partial<Record<"name" | "email" | "phone" | "eventType" | "message", string>>;

const EMPTY: Values = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  guests: "",
  season: "",
  packageId: "",
  message: "",
};

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please share your name.";
  if (!EMAIL.test(values.email.trim())) {
    errors.email = "Enter an email address with a name and a domain, such as name@domain.com.";
  }
  if (values.phone.trim() && !PHONE.test(values.phone.trim())) {
    errors.phone = "That phone number looks incomplete. Use digits, with a city or country code if you like.";
  }
  if (!values.eventType) errors.eventType = "Choose the kind of gathering.";
  if (values.message.trim().length > 1200) errors.message = "Please keep the note under 1,200 characters.";
  return errors;
}

function packageName(packageId: string) {
  return packageById(packageId)?.name ?? "";
}

function inquiryBody(values: Values) {
  return {
    name: values.name.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    gathering: values.eventType,
    guests: values.guests,
    season: values.season,
    package: packageName(values.packageId),
    note: values.message.trim(),
    subject: INQUIRY_SUBJECT,
    _subject: INQUIRY_SUBJECT,
  };
}

function whatsappHref(values: Values) {
  const plan = packageName(values.packageId);
  const text = [
    INQUIRY_SUBJECT,
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim() || "Not given"}`,
    `Gathering: ${values.eventType}`,
    `Guests: ${values.guests || "Not given"}`,
    `Season: ${values.season || "Not given"}`,
    `Package: ${plan || "Not chosen"}`,
    `Note: ${values.message.trim() || "No note added"}`,
  ].join("\n");
  return `${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function InquiryForm() {
  const params = useSearchParams();
  const eventParam = params.get("event");
  const guestsParam = params.get("guests");
  const seasonParam = params.get("season");
  const packageParam = params.get("package");
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [submitted, setSubmitted] = useState<Values | null>(null);

  useEffect(() => {
    const eventType = pickAllowed(
      eventParam,
      EVENT_TYPES.map((item) => item.id),
    );
    const guests = pickAllowed(guestsParam, GUEST_RANGES);
    const season = pickAllowed(
      seasonParam,
      SEASONS.map((item) => item.id),
    );
    const packageId = pickAllowed(
      packageParam,
      packages.map((item) => item.id),
    );
    setValues((current) => ({ ...current, eventType, guests, season, packageId }));
    if (window.location.hash === "#inquiry") {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.getElementById("inquiry")?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
    }
  }, [eventParam, guestsParam, seasonParam, packageParam]);

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setSendError(false);
  }

  function focusFirst(nextErrors: Errors) {
    const first = Object.keys(nextErrors)[0];
    if (first) document.getElementById(first)?.focus();
    return Boolean(first);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (focusFirst(nextErrors)) return;

    setSending(true);
    setSendError(false);
    try {
      const response = await fetch(INQUIRY_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(inquiryBody(values)),
      });
      const body = (await response.json().catch(() => null)) as { success?: boolean | string } | null;
      const accepted = body?.success === true || body?.success === "true";
      if (!response.ok || !accepted) throw new Error("Inquiry was not accepted.");
      setSubmitted(values);
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  }

  function onWhatsApp(event: MouseEvent<HTMLAnchorElement>) {
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (focusFirst(nextErrors)) event.preventDefault();
  }

  if (submitted) {
    const plan = packageById(submitted.packageId);
    return (
      <div className="form-success" role="status">
        <p className="kicker">Thank you</p>
        <h2>The house has your inquiry.</h2>
        <p>
          Your note was sent to {BRAND.established}. We will write back at {submitted.email.trim()}.
        </p>
        <dl className="summary">
          <div>
            <dt>Name</dt>
            <dd>{submitted.name}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>{submitted.email}</dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>{submitted.phone.trim() || "Not given"}</dd>
          </div>
          <div>
            <dt>Gathering</dt>
            <dd>{submitted.eventType}</dd>
          </div>
          <div>
            <dt>Guests</dt>
            <dd>{submitted.guests || "Not given"}</dd>
          </div>
          <div>
            <dt>Season</dt>
            <dd>{submitted.season || "Not given"}</dd>
          </div>
          <div>
            <dt>Package</dt>
            <dd>{plan ? plan.name : "Not chosen"}</dd>
          </div>
          <div>
            <dt>Note</dt>
            <dd>{submitted.message.trim() || "No note added"}</dd>
          </div>
        </dl>
        <div className="actions">
          <a className="btn btn-fill" href={whatsappHref(submitted)} target="_blank" rel="noreferrer">
            Send on WhatsApp
          </a>
          <button
            type="button"
            className="btn"
            onClick={() => {
              setSubmitted(null);
            }}
          >
            Write another note
          </button>
        </div>
      </div>
    );
  }

  const errorList = Object.values(errors);
  const prefilled = Boolean(values.eventType || values.guests || values.season || values.packageId);

  return (
    <form className="inquiry" onSubmit={onSubmit} noValidate>
      {errorList.length > 0 ? (
        <div className="form-banner" role="alert">
          <p>The inquiry needs a few corrections before it can be sent.</p>
          <ul>
            {errorList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="plan-hint">
          {prefilled
            ? "Some answers arrived from the planner. Change anything that is off."
            : "The form is empty. The planner on the home page can fill the gathering, guest count, season, and package."}
        </p>
      )}

      {sendError ? (
        <div className="form-banner" role="alert">
          <p>The inquiry was not sent. Please try again, or send the same details on WhatsApp.</p>
        </div>
      ) : null}

      <div className="form-grid">
        <label className={`field${errors.name ? " has-error" : ""}`} htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            aria-required="true"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            onChange={(event) => update("name", event.target.value)}
          />
          {errors.name ? <span id="name-error">{errors.name}</span> : null}
        </label>

        <label className={`field${errors.email ? " has-error" : ""}`} htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            aria-required="true"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            onChange={(event) => update("email", event.target.value)}
          />
          {errors.email ? <span id="email-error">{errors.email}</span> : null}
        </label>

        <label className={`field${errors.phone ? " has-error" : ""}`} htmlFor="phone">
          Phone, if you wish
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            onChange={(event) => update("phone", event.target.value)}
          />
          {errors.phone ? <span id="phone-error">{errors.phone}</span> : null}
        </label>

        <label className={`field${errors.eventType ? " has-error" : ""}`} htmlFor="eventType">
          Gathering
          <select
            id="eventType"
            name="eventType"
            value={values.eventType}
            aria-required="true"
            aria-invalid={errors.eventType ? true : undefined}
            aria-describedby={errors.eventType ? "event-error" : undefined}
            onChange={(event) => update("eventType", event.target.value)}
          >
            <option value="">Choose one</option>
            {EVENT_TYPES.map((item) => (
              <option key={item.id} value={item.id}>
                {item.id}
              </option>
            ))}
          </select>
          {errors.eventType ? <span id="event-error">{errors.eventType}</span> : null}
        </label>

        <label className="field" htmlFor="guests">
          Approximate guests
          <select id="guests" name="guests" value={values.guests} onChange={(event) => update("guests", event.target.value)}>
            <option value="">Not sure yet</option>
            {GUEST_RANGES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="field" htmlFor="season">
          Season
          <select id="season" name="season" value={values.season} onChange={(event) => update("season", event.target.value)}>
            <option value="">Not sure yet</option>
            {SEASONS.map((item) => (
              <option key={item.id} value={item.id}>
                {item.id} — {item.detail}
              </option>
            ))}
          </select>
        </label>

        <label className="field wide" htmlFor="packageId">
          Package
          <select
            id="packageId"
            name="packageId"
            value={values.packageId}
            onChange={(event) => update("packageId", event.target.value)}
          >
            <option value="">No package yet</option>
            {packages.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} — {item.meaning}
              </option>
            ))}
          </select>
        </label>

        <label className={`field wide${errors.message ? " has-error" : ""}`} htmlFor="message">
          Note
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
            onChange={(event) => update("message", event.target.value)}
          />
          {errors.message ? <span id="message-error">{errors.message}</span> : null}
        </label>
      </div>

      <div className="actions">
        <button type="submit" className="btn btn-fill" disabled={sending}>
          {sending ? "Sending…" : "Send the inquiry"}
        </button>
        <a className="btn" href={whatsappHref(values)} target="_blank" rel="noreferrer" onClick={onWhatsApp}>
          Send on WhatsApp
        </a>
      </div>
    </form>
  );
}

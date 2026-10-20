import { useState } from 'react'
import type { FormEvent } from 'react'

type FormState = {
  name: string
  email: string
  phone: string
  neighborhood: string
  window: string
  notes: string
}

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  neighborhood: '',
  window: 'weekday-am',
  notes: '',
}

function validate(values: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (values.phone.replace(/\D/g, '').length < 10) {
    errors.phone = 'Enter a 10-digit phone number.'
  }
  if (!values.neighborhood.trim()) {
    errors.neighborhood = 'Tell us your neighborhood.'
  }
  return errors
}

export function Contact() {
  const [values, setValues] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [success, setSuccess] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setSuccess(false)
      return
    }
    setSuccess(true)
  }

  if (success) {
    return (
      <section className="section" id="contact">
        <div className="shell panel contact-panel contact-panel--success">
          <div className="success-state" role="status">
            <span className="success-state__icon" aria-hidden="true">
              ✓
            </span>
            <h2>Pickup request received</h2>
            <p>
              Thanks, {values.name.split(' ')[0] || 'there'}. We’ll confirm your{' '}
              {values.neighborhood} window by email within one business day.
            </p>
            <button
              type="button"
              className="btn btn--navy"
              onClick={() => {
                setSuccess(false)
                setValues(initial)
                setErrors({})
              }}
            >
              Book another pickup
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section" id="contact">
      <div className="shell panel contact-panel">
        <div>
          <p className="eyebrow">Book a pickup</p>
          <h2>Ready when you are.</h2>
          <p className="lead">
            Share your details and preferred window. No account required — we’ll
            confirm by email.
          </p>
          <ul className="contact-meta">
            <li>
              <strong>Studio</strong>
              <span>418 Mercer Street, Seattle, WA</span>
            </li>
            <li>
              <strong>Hours</strong>
              <span>Mon–Fri 8a–6p · Sat 9a–2p</span>
            </li>
            <li>
              <strong>Phone</strong>
              <a href="tel:+12065550140">(206) 555-0140</a>
            </li>
          </ul>
        </div>

        <form className="book-form" onSubmit={onSubmit} noValidate>
          <label>
            Full name
            <input
              name="name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name ? <span className="field-error">{errors.name}</span> : null}
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email ? <span className="field-error">{errors.email}</span> : null}
          </label>
          <label>
            Phone
            <input
              name="phone"
              type="tel"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
            />
            {errors.phone ? <span className="field-error">{errors.phone}</span> : null}
          </label>
          <label>
            Neighborhood
            <input
              name="neighborhood"
              value={values.neighborhood}
              onChange={(e) => setValues({ ...values, neighborhood: e.target.value })}
              placeholder="Capitol Hill"
              aria-invalid={Boolean(errors.neighborhood)}
            />
            {errors.neighborhood ? (
              <span className="field-error">{errors.neighborhood}</span>
            ) : null}
          </label>
          <label>
            Preferred window
            <select
              name="window"
              value={values.window}
              onChange={(e) => setValues({ ...values, window: e.target.value })}
            >
              <option value="weekday-am">Weekday morning</option>
              <option value="weekday-pm">Weekday afternoon</option>
              <option value="saturday">Saturday</option>
            </select>
          </label>
          <label>
            Notes (optional)
            <textarea
              name="notes"
              rows={3}
              value={values.notes}
              onChange={(e) => setValues({ ...values, notes: e.target.value })}
              placeholder="Gate code, preferred hang vs fold…"
            />
          </label>
          <button type="submit" className="btn btn--yellow btn--block">
            Submit pickup request
          </button>
        </form>
      </div>
    </section>
  )
}

import { useState } from 'react'
import type { FormEvent } from 'react'

type FormState = {
  name: string
  phone: string
  address: string
  service: string
  date: string
  window: string
  notes: string
}

const initial: FormState = {
  name: '',
  phone: '',
  address: '',
  service: 'wash-fold',
  date: '',
  window: 'morning',
  notes: '',
}

function validate(values: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  const digits = values.phone.replace(/\D/g, '')
  if (digits.length < 10) errors.phone = 'Enter a 10-digit Indian mobile number.'
  if (!values.address.trim() || values.address.trim().length < 8) {
    errors.address = 'Enter your Pushkar address or landmark.'
  }
  if (!values.date) errors.date = 'Choose a pickup date.'
  return errors
}

function makeReference() {
  const n = Math.floor(1000 + Math.random() * 9000)
  return `NL-${n}`
}

export function Booking() {
  const [values, setValues] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [reference, setReference] = useState<string | null>(null)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next = validate(values)
    setErrors(next)
    if (Object.keys(next).length) return
    setReference(makeReference())
  }

  if (reference) {
    return (
      <section className="section" id="book">
        <div className="shell panel contact-panel contact-panel--success">
          <div className="success-state" role="status">
            <span className="success-state__icon" aria-hidden="true">
              ✓
            </span>
            <h2>Pickup booked</h2>
            <p>
              Thanks, {values.name.split(' ')[0]}. Your reference is{' '}
              <strong>{reference}</strong>. We’ll confirm your Pushkar window
              shortly — you can track it anytime below.
            </p>
            <div className="success-actions">
              <a className="btn btn--purple" href="#track">
                Track this order <span aria-hidden="true">→</span>
              </a>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => {
                  setReference(null)
                  setValues(initial)
                  setErrors({})
                }}
              >
                Book another
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section" id="book">
      <div className="shell panel contact-panel">
        <div>
          <p className="eyebrow">Book a pickup</p>
          <h2>Schedule collection in Pushkar.</h2>
          <p className="lead">
            Share your details and preferred window, and we confirm every
            request before the rider leaves.
          </p>
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
            Mobile
            <input
              name="phone"
              type="tel"
              inputMode="tel"
              placeholder="98765 43210"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
            />
            {errors.phone ? <span className="field-error">{errors.phone}</span> : null}
          </label>
          <label>
            Address in Pushkar
            <input
              name="address"
              placeholder="Near Brahma Temple / Ajmer Road landmark"
              value={values.address}
              onChange={(e) => setValues({ ...values, address: e.target.value })}
              aria-invalid={Boolean(errors.address)}
            />
            {errors.address ? <span className="field-error">{errors.address}</span> : null}
          </label>
          <label>
            Service
            <select
              name="service"
              value={values.service}
              onChange={(e) => setValues({ ...values, service: e.target.value })}
            >
              <option value="wash-fold">Wash & fold</option>
              <option value="express">Express wash</option>
              <option value="dry-clean">Dry cleaning</option>
              <option value="press">Press only</option>
              <option value="linen">Household linen</option>
              <option value="guest-house">Guest-house load</option>
            </select>
          </label>
          <div className="form-row">
            <label>
              Pickup date
              <input
                name="date"
                type="date"
                value={values.date}
                onChange={(e) => setValues({ ...values, date: e.target.value })}
                aria-invalid={Boolean(errors.date)}
              />
              {errors.date ? <span className="field-error">{errors.date}</span> : null}
            </label>
            <label>
              Time window
              <select
                name="window"
                value={values.window}
                onChange={(e) => setValues({ ...values, window: e.target.value })}
              >
                <option value="morning">Morning (8a–11a)</option>
                <option value="afternoon">Afternoon (12p–4p)</option>
                <option value="evening">Evening (4p–7p)</option>
              </select>
            </label>
          </div>
          <label>
            Notes (optional)
            <textarea
              name="notes"
              rows={3}
              value={values.notes}
              onChange={(e) => setValues({ ...values, notes: e.target.value })}
              placeholder="Gate instructions, hang vs fold…"
            />
          </label>
          <button type="submit" className="btn btn--purple btn--block">
            Confirm pickup <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </section>
  )
}

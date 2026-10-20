import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  HOURS,
  LOCATION,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_DISPLAY,
  WHATSAPP_E164,
} from '../lib/constants'

type FormState = { name: string; phone: string; message: string }

function validate(values: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (values.phone.replace(/\D/g, '').length < 10) {
    errors.phone = 'Enter a 10-digit mobile number.'
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'Tell us how we can help.'
  }
  return errors
}

export function Contact() {
  const [values, setValues] = useState<FormState>({ name: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [success, setSuccess] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next = validate(values)
    setErrors(next)
    if (Object.keys(next).length) {
      setSuccess(false)
      return
    }
    setSuccess(true)
  }

  return (
    <section className="section" id="contact">
      <div className="shell panel contact-panel contact-panel--map">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Visit or message us in Pushkar.</h2>
          <ul className="contact-meta">
            <li>
              <strong>Service area</strong>
              <span>{LOCATION.label}</span>
              <span className="muted">{LOCATION.detail}</span>
            </li>
            <li>
              <strong>Hours</strong>
              <span>{HOURS}</span>
            </li>
            <li>
              <strong>Phone</strong>
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            </li>
            <li>
              <strong>WhatsApp</strong>
              <a
                href={`https://wa.me/${WHATSAPP_E164}`}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp ({WHATSAPP_DISPLAY})
              </a>
            </li>
          </ul>

          <div className="map-frame">
            <iframe
              title="Northline service area map — Pushkar, Rajasthan"
              src={LOCATION.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a className="map-frame__link" href={LOCATION.mapLink} target="_blank" rel="noreferrer">
              Open larger map
            </a>
          </div>
        </div>

        {success ? (
          <div className="success-state" role="status">
            <span className="success-state__icon" aria-hidden="true">
              ✓
            </span>
            <h2>Message sent</h2>
            <p>Thanks, {values.name.split(' ')[0]}. We’ll reply within one business day.</p>
            <button
              type="button"
              className="btn btn--navy"
              onClick={() => {
                setSuccess(false)
                setValues({ name: '', phone: '', message: '' })
              }}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="book-form" onSubmit={onSubmit} noValidate>
            <label>
              Name
              <input
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name ? <span className="field-error">{errors.name}</span> : null}
            </label>
            <label>
              Mobile
              <input
                type="tel"
                value={values.phone}
                onChange={(e) => setValues({ ...values, phone: e.target.value })}
                aria-invalid={Boolean(errors.phone)}
              />
              {errors.phone ? <span className="field-error">{errors.phone}</span> : null}
            </label>
            <label>
              Message
              <textarea
                rows={4}
                value={values.message}
                onChange={(e) => setValues({ ...values, message: e.target.value })}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message ? <span className="field-error">{errors.message}</span> : null}
            </label>
            <button type="submit" className="btn btn--yellow btn--block">
              Send message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

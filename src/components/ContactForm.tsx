// src/components/ContactForm.tsx
import React, { useState } from 'react'
import { supabase } from '../lib/supabaseclient'

export default function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState<string | null>(null)

    async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const { error } = await supabase
        .from('contact_form')
        .insert([{ name, email, message }])

    setLoading(false)
    if (error) {
        console.error(error)
        setStatus('Error sending message.')
    } else {
        setStatus('Message sent — thank you!')
        setName(''); setEmail(''); setMessage('')
    }
}

return (
    <form onSubmit={handleSubmit} className="max-w-md">
        <div>
            <label>Name</label>
            <input required value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
            <label>Email</label>
            <input required type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
            <label>Message</label>
            <textarea required value={message} onChange={e => setMessage(e.target.value)} />
        </div>

        <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
        </button>

        {status && <p>{status}</p>}
        </form>
    )
}
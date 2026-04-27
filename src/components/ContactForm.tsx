'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || '送信に失敗しました')
      }

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : '送信に失敗しました。時間を置いて再度お試しください。')
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success">
        <p className="form-success__title">送信完了</p>
        <p>お問い合わせありがとうございます。<br />内容を確認の上、担当者よりご連絡いたします。</p>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {status === 'error' && <div className="form-error">{errorMsg}</div>}

      <div className="form-group">
        <label>お名前<span className="required">*</span></label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="山田 太郎" />
      </div>

      <div className="form-group">
        <label>メールアドレス<span className="required">*</span></label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="example@company.co.jp" />
      </div>

      <div className="form-group">
        <label>電話番号</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="03-0000-0000" />
      </div>

      <div className="form-group">
        <label>会社名</label>
        <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="株式会社〇〇" />
      </div>

      <div className="form-group">
        <label>お問い合わせ種別<span className="required">*</span></label>
        <select name="subject" value={formData.subject} onChange={handleChange} required>
          <option value="">選択してください</option>
          <option value="AIコンサルティングについて">AIコンサルティングについて</option>
          <option value="AI受託開発について">AI受託開発について</option>
          <option value="AI業務改善について">AI業務改善について</option>
          <option value="システム開発について">システム開発について</option>
          <option value="WEBマーケティングについて">WEBマーケティングについて</option>
          <option value="その他">その他</option>
        </select>
      </div>

      <div className="form-group">
        <label>お問い合わせ内容<span className="required">*</span></label>
        <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="お問い合わせ内容をご記入ください" />
      </div>

      <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
        {status === 'sending' ? '送信中...' : '送信する'}
      </button>
    </form>
  )
}

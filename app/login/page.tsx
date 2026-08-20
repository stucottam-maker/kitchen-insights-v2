'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabase';

type Mode = 'signin' | 'activate';

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    if (mode === 'activate') {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
      });

      if (signUpError) {
        setError(signUpError.message);
        setLoading(false);
        return;
      }

      if (data.session) {
        router.push('/');
        router.refresh();
        return;
      }

      setMessage('Account created. Check your email to confirm it, then sign in.');
      setMode('signin');
      setLoading(false);
      return;
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }

    router.push('/');
    router.refresh();
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-brand">
          <div className="login-brand-mark">K</div>
          <div>
            <strong>Kitchen Insights</strong>
            <span>Cost & purchasing control</span>
          </div>
        </div>

        <div className="login-heading">
          <p className="eyebrow">{mode === 'signin' ? 'Welcome back' : 'First-time access'}</p>
          <h1>{mode === 'signin' ? 'Sign in' : 'Activate account'}</h1>
          <p>
            {mode === 'signin'
              ? 'Access the business and site assigned to your account.'
              : 'Use the email address your administrator invited and your temporary password.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <label>
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
          </label>

          <label>
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder={mode === 'activate' ? 'Temporary password' : 'Your password'}
              required
              autoComplete={mode === 'activate' ? 'new-password' : 'current-password'}
            />
          </label>

          {error && <div className="login-error">{error}</div>}
          {message && <div className="login-site"><div><strong>{message}</strong></div></div>}

          <button type="submit" className="primary-button login-button" disabled={loading}>
            {loading
              ? mode === 'activate'
                ? 'Activating...'
                : 'Signing in...'
              : mode === 'activate'
              ? 'Activate account'
              : 'Sign in'}
          </button>
        </form>

        <button
          type="button"
          className="panel-link"
          onClick={() => {
            setMode(mode === 'signin' ? 'activate' : 'signin');
            setError('');
            setMessage('');
          }}
          style={{ border: 0, background: 'transparent', cursor: 'pointer', padding: 0 }}
        >
          {mode === 'signin' ? 'First time here? Activate account' : 'Already activated? Sign in'}
        </button>

        <div className="login-site">
          <div className="login-site-mark">KI</div>
          <div>
            <strong>Secure business workspace</strong>
            <span>Your account only sees its assigned organisation and site.</span>
          </div>
        </div>
      </section>
    </main>
  );
}

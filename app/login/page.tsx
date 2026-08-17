'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabase';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
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
          <p className="eyebrow">Welcome back</p>
          <h1>Sign in</h1>
          <p>
            Access purchasing, invoices, ingredients, recipes and stock
            controls.
          </p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
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
              placeholder="Your password"
              required
              autoComplete="current-password"
            />
          </label>

          {error && <div className="login-error">{error}</div>}

          <button
            type="submit"
            className="primary-button login-button"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="login-site">
          <div className="login-site-mark">AZ</div>

          <div>
            <strong>Azteca</strong>
            <span>Battersea, London</span>
          </div>
        </div>
      </section>
    </main>
  );
}

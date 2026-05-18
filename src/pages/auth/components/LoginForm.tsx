import { useState } from 'react';

interface LoginFormProps {
  onToggleView: () => void;
}

export function LoginForm({ onToggleView }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo implementation
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="animate-fade-up">
      <h2 className="text-2xl md:text-3xl font-heading font-semibold text-deep-brown mb-2 text-center">
        Welcome Back
      </h2>
      <p className="text-sm font-body text-muted-brown text-center mb-8">
        Sign in to access your orders and wishlist.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-xs font-body font-medium uppercase tracking-wider text-brown mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 bg-cream border border-border/60 rounded-md text-sm font-body text-brown focus:border-temple-red focus:ring-1 focus:ring-temple-red outline-none transition-all"
            required
            placeholder="you@example.com"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="password" className="block text-xs font-body font-medium uppercase tracking-wider text-brown">
              Password
            </label>
            <button type="button" onClick={(e) => e.preventDefault()} className="text-xs font-body text-temple-red hover:underline">
              Forgot password?
            </button>
          </div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 px-4 bg-cream border border-border/60 rounded-md text-sm font-body text-brown focus:border-temple-red focus:ring-1 focus:ring-temple-red outline-none transition-all"
            required
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full h-12 mt-4 bg-temple-red text-cream font-body font-semibold uppercase tracking-[0.12em] text-xs rounded-md hover:bg-deep-red transition-all duration-300 active:scale-[0.98]"
        >
          Sign In
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm font-body text-muted-brown">
          Don't have an account?{' '}
          <button
            onClick={onToggleView}
            className="text-temple-red font-semibold hover:underline"
          >
            Create one
          </button>
        </p>
      </div>
    </div>
  );
}

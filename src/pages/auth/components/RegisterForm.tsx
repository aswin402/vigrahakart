import { useState } from 'react';

interface RegisterFormProps {
  onToggleView: () => void;
}

export function RegisterForm({ onToggleView }: RegisterFormProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo implementation
    console.log('Registration attempt:', { firstName, lastName, email, password });
  };

  return (
    <div className="animate-fade-up">
      <h2 className="text-2xl md:text-3xl font-heading font-semibold text-deep-brown mb-2 text-center">
        Create Account
      </h2>
      <p className="text-sm font-body text-muted-brown text-center mb-8">
        Join VigrahKart for faster checkout and exclusive previews.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-xs font-body font-medium uppercase tracking-wider text-brown mb-2">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full h-12 px-4 bg-cream border border-border/60 rounded-md text-sm font-body text-brown focus:border-temple-red focus:ring-1 focus:ring-temple-red outline-none transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-xs font-body font-medium uppercase tracking-wider text-brown mb-2">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full h-12 px-4 bg-cream border border-border/60 rounded-md text-sm font-body text-brown focus:border-temple-red focus:ring-1 focus:ring-temple-red outline-none transition-all"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="register-email" className="block text-xs font-body font-medium uppercase tracking-wider text-brown mb-2">
            Email Address
          </label>
          <input
            id="register-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 bg-cream border border-border/60 rounded-md text-sm font-body text-brown focus:border-temple-red focus:ring-1 focus:ring-temple-red outline-none transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="register-password" className="block text-xs font-body font-medium uppercase tracking-wider text-brown mb-2">
            Password
          </label>
          <input
            id="register-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 px-4 bg-cream border border-border/60 rounded-md text-sm font-body text-brown focus:border-temple-red focus:ring-1 focus:ring-temple-red outline-none transition-all"
            required
            placeholder="Min. 8 characters"
          />
        </div>

        <button
          type="submit"
          className="w-full h-12 mt-4 bg-temple-red text-cream font-body font-semibold uppercase tracking-[0.12em] text-xs rounded-md hover:bg-deep-red transition-all duration-300 active:scale-[0.98]"
        >
          Create Account
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm font-body text-muted-brown">
          Already have an account?{' '}
          <button
            onClick={onToggleView}
            className="text-temple-red font-semibold hover:underline"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}

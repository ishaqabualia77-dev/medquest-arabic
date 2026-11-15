import { createRoot } from 'react-dom/client';
import { ClerkProvider } from '@clerk/react';
import App from './App';
import { ErrorBoundary } from '@/components/error-boundary';
import './index.css';

function showFatalError(title: string, detail: unknown) {
  const message = detail instanceof Error
    ? `${detail.message}\n${detail.stack || ''}`
    : String(detail);

  document.body.innerHTML = '';
  const panel = document.createElement('pre');
  panel.style.cssText = 'white-space:pre-wrap;overflow-wrap:anywhere;padding:20px;color:#b91c1c;background:#fff;font-size:14px;direction:ltr;text-align:left;';
  panel.textContent = `${title}\n\n${message}`;
  document.body.appendChild(panel);
}

window.addEventListener('error', (event) => {
  showFatalError('JAVASCRIPT ERROR', event.error || event.message);
});

window.addEventListener('unhandledrejection', (event) => {
  showFatalError('PROMISE ERROR', event.reason);
});

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  showFatalError('CLERK CONFIGURATION ERROR', 'Missing Clerk Publishable Key');
  throw new Error('Missing Clerk Publishable Key');
}

try {
  createRoot(document.getElementById('root')!).render(
    <ErrorBoundary>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
      </ClerkProvider>
    </ErrorBoundary>,
  );
} catch (error) {
  showFatalError('APP STARTUP ERROR', error);
}

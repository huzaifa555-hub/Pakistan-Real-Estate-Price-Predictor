/** Quiet Civic Modernism: keep the conventional config available for editor/tooling compatibility; Tailwind 4 tokens live in client/src/index.css. */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./client/index.html', './client/src/**/*.{ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
};

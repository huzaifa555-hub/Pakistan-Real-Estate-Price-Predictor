# Property Signal — Pakistan Real Estate Price Prediction

A polished, responsive frontend for a machine-learning rent prediction service. The interface collects a city and home profile, sends the specified JSON payload to the Flask endpoint, and presents a clearly framed monthly PKR estimate with loading, success, and offline states.

## Project structure

This managed frontend uses the provided React 19 + Vite + Tailwind 4 static scaffold. The app lives in `client/src/` and is intentionally modular:

| File | Responsibility |
|---|---|
| `client/src/pages/Home.tsx` | Page composition, form state, API request lifecycle, result/error states |
| `client/src/components/PredictionForm.tsx` | Reusable, validated property profile controls |
| `client/src/components/AppHeader.tsx` | Brand header and endpoint status indicator |
| `client/src/components/BrandMark.tsx` | Shared geometric product mark |
| `client/src/index.css` | Quiet Civic Modernism tokens, typography, atmosphere, and motion rules |

## Run locally

```bash
pnpm install
pnpm dev
```

The managed preview runs on port 3000. The app expects the Flask service at `http://127.0.0.1:5000/api/predict`.

## API contract

The submit action sends:

```json
{
  "city": "Lahore",
  "bedrooms": 3,
  "washrooms": 3,
  "marla_size": 5,
  "is_furnished": 1,
  "is_apartment": 0
}
```

The UI accepts the success response fields `formatted_rent` and `predicted_rent_pkr`. If the endpoint is unreachable, the app shows a direct recovery message rather than a silent failure.

## Validation

```bash
pnpm check
pnpm build
```

The production build completes successfully. Vite may report a bundle-size advisory because the scaffold includes the full shadcn component library; this does not block the build.

## Design direction

The selected visual system is **Quiet Civic Modernism**: a paper-white canvas, deep ink typography, DM Serif Display for the editorial headline, Manrope for controls, IBM Plex Mono for technical metadata, mineral blue for interaction cues, and emerald for healthy model/API states.

## Note on framework

The provided managed project scaffold is React + Vite rather than a native Next.js App Router project. The frontend has been implemented against that scaffold so it can run and preview inside the managed workspace without changing the project runtime or server boundaries.

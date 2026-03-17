# Preloader

Self-contained React preloader extracted from this project.

## Files to copy

- `Preloader.tsx`
- `Preloader.module.css`
- `runPreloaderAnimation.ts`

## Dependencies

- `react`
- `gsap`
- `@gsap/react`

## Usage

```tsx
import { Preloader } from "@/components/preloader";

export default function Page() {
  return <Preloader />;
}
```

## Matching the original look

The motion timing and panel choreography are unchanged.

To match the original title styling from this repo, pass the same font:

```tsx
<Preloader fontFamily="'megaCube', sans-serif" />
```

You can also customize the copy and colors:

```tsx
<Preloader
  firstLine="META"
  secondLine="MASK"
  backgroundColor="#3D065E"
  textColor="#FFFFFF"
/>
```

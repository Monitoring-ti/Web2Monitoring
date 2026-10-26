---
version: alpha
name: Monitoring
description: Identidad visual de Monitoring para la web. Fuente: Brandkit Monitoring (Brandkit Monitoring.pdf). Prioridad: carruseles, movimiento y sección tecnología.
colors:
  primary:
    DEFAULT: "#332A83"
    50: "#E9E4F7"
    100: "#DCE0F2"
    200: "#C1CBE6"
    300: "#A5B2D9"
    400: "#8899CD"
    500: "#6B82C0"
    600: "#4E5F9D"
    700: "#3A4A7B"
    800: "#2B375C"
    900: "#1A1B2E"
  accent:
    DEFAULT: "#F09321"
    50: "#FEF1DD"
    100: "#FBD9A6"
    200: "#F5C279"
    300: "#F09A4B"
    400: "#E8872C"
    500: "#F09321"
    600: "#C94B18"
    700: "#A83C12"
    800: "#872F0D"
    900: "#662208"
  navy:
    DEFAULT: "#1A1B2E"
  surface:
    DEFAULT: "#F8FAFC"
  muted:
    DEFAULT: "#5B6070"
  border:
    DEFAULT: "#E2E8F0"
  white:
    DEFAULT: "#FFFFFF"
  celeste:
    DEFAULT: "#36A9DF"
  lavanda:
    DEFAULT: "#97AFD1"
  "fondo-claro":
    DEFAULT: "#EEF0F8"
  tinta:
    DEFAULT: "#1A1B2E"
  "gris-pizarra":
    DEFAULT: "#5B6070"
typography:
  display:
    fontFamily: "Montserrat, 'Nunito Sans', sans-serif"
    fontWeight: "800"
  body:
    fontFamily: "Inter, 'Open Sans', system-ui, sans-serif"
    fontWeight: "400"
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
motion:
  posture: restraint
  reduce:
    reduce_preference: prefers-reduced-motion
components:
  button-primary:
    backgroundColor: "{colors.accent.DEFAULT}"
    textColor: "{colors.white.DEFAULT}"
    hoverBackgroundColor: "{colors.accent.600}"
    borderRadius: "{rounded.md}"
    shadow: "card-glow"
  button-secondary:
    backgroundColor: "{colors.white.DEFAULT}"
    textColor: "{colors.primary.DEFAULT}"
    borderColor: "{colors.primary.DEFAULT}"
  section-label:
    font: "display"
    color: "{colors.accent.DEFAULT}"
    size: "sm"
  section-title:
    font: "display"
    color: "{colors.primary.DEFAULT}"
    size: "3xl"
  text-gradient:
    gradient: "135deg, {colors.accent.DEFAULT}, {colors.celeste.DEFAULT}"
do:
  - Apply color tokens to the existing design system before changing any layout.
  - Move content unchanged; only replace visual treatment.
  - Respect prefers-reduced-motion on all animation.
  - Keep a11y: contrast >= 4.5:1 on text, 3:1 on large text and UI edges.
  - Verify with a local build before pushing.

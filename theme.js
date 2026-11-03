/* Applies the color theme from config.js before the page paints, and handles the light/dark toggle. */
(() => {
  "use strict";

  const root = document.documentElement;
  root.classList.add("js");
  // Failsafe: never leave the page hidden if app.js fails to load.
  setTimeout(() => root.classList.add("rendered"), 2500);

  const config = window.PORTFOLIO_CONFIG || {};
  const keys = ["canvas", "surface", "line", "muted", "accent", "foreground", "selection"];
  const validHex = (value) => typeof value === "string" && /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(value);
  const isValid = (theme) => !!theme && keys.every((key) => validHex(theme[key]));

  const rgb = (value) => {
    const hex = value.replace("#", "");
    const full = hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex;
    return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16));
  };
  const luminance = (value) => rgb(value).map((v) => {
    const c = v / 255;
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }).reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
  const contrast = (a, b) => {
    const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
    return (hi + 0.05) / (lo + 0.05);
  };

  const primary = isValid(config.theme) ? config.theme : null;
  const alternate = primary && isValid(config.alternateTheme) ? config.alternateTheme : null;
  // "light" and "dark" always refer to the lighter/darker of the two configured palettes.
  const palettes = {};
  if (primary) {
    const primaryIsLight = luminance(primary.canvas) > 0.45;
    palettes[primaryIsLight ? "light" : "dark"] = primary;
    if (alternate) palettes[primaryIsLight ? "dark" : "light"] = alternate;
  }
  const canToggle = !!(palettes.light && palettes.dark);

  const STORAGE_KEY = "portfolio-theme";
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const readStored = () => {
    try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
  };
  const systemMode = () => (media.matches ? "dark" : "light");
  const currentMode = () => {
    if (!canToggle) return palettes.light ? "light" : "dark";
    const stored = readStored();
    return stored === "light" || stored === "dark" ? stored : systemMode();
  };

  const apply = (mode) => {
    const theme = palettes[mode] || primary;
    if (!theme) return;
    keys.forEach((key) => root.style.setProperty(`--color-${key}`, theme[key]));
    // Text on accent-colored buttons: whichever theme color reads best.
    const onAccent = contrast(theme.accent, theme.canvas) >= contrast(theme.accent, theme.foreground) ? theme.canvas : theme.foreground;
    root.style.setProperty("--color-on-accent", onAccent);
    root.style.colorScheme = luminance(theme.canvas) > 0.45 ? "light" : "dark";
    root.dataset.theme = mode;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme.canvas;
  };

  const set = (mode) => {
    // Picking the same mode as the device clears the override, so the site keeps following the system.
    try {
      if (mode === systemMode()) localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, mode);
    } catch { /* storage unavailable: still switch for this visit */ }
    root.classList.add("theme-transition");
    apply(mode);
    setTimeout(() => root.classList.remove("theme-transition"), 400);
  };

  media.addEventListener?.("change", () => {
    if (canToggle && !readStored()) apply(systemMode());
  });

  apply(currentMode());

  window.PortfolioTheme = {
    valid: !!primary,
    canToggle,
    mode: currentMode,
    set,
    toggle: () => set(currentMode() === "dark" ? "light" : "dark")
  };
})();

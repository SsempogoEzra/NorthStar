import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Log In — Northstar Retail Co. Support" },
      {
        name: "description",
        content:
          "Log in to Northstar Retail Co. to track orders, manage returns, and get customer support.",
      },
      { property: "og:title", content: "Log In — Northstar Retail Co. Support" },
      {
        property: "og:description",
        content: "Track orders, manage returns, and get support with Northstar Retail Co.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// The login experience is plain HTML/CSS/JS (no frameworks) served from
// /northstar/index.html. It is embedded full-screen here so "/" shows it.
function Index() {
  return (
    <iframe
      src="/northstar/index.html"
      title="Northstar Retail Co. login"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: 0 }}
    />
  );
}

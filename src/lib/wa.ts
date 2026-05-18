// Centralized WhatsApp link builder + analytics event tracking.
// Adds UTM params so we can measure bookings from SEO, ads, social, etc.

export const WA_NUMBER = "918754542121";

type Source = "hero" | "navbar" | "floating" | "package" | "contact" | "footer";

export function buildWaUrl(opts: {
  message: string;
  source: Source;
  campaign?: string;
  medium?: string;
}) {
  const { message, source, campaign = "booking_inquiry", medium = "cta" } = opts;
  const params = new URLSearchParams({
    text: message,
    utm_source: "neopics_website",
    utm_medium: medium,
    utm_campaign: campaign,
    utm_content: source,
  });
  return `https://wa.me/${WA_NUMBER}?${params.toString()}`;
}

// Fire-and-forget event tracking. Works with GA4 / GTM / Meta Pixel if loaded.
// Falls back silently if no analytics provider is present.
export function trackWaClick(source: Source, extra?: Record<string, string>) {
  try {
    const w = window as unknown as {
      gtag?: (cmd: string, name: string, params: Record<string, unknown>) => void;
      dataLayer?: Array<Record<string, unknown>>;
      fbq?: (cmd: string, name: string, params?: Record<string, unknown>) => void;
    };
    const payload = {
      event_category: "engagement",
      event_label: source,
      cta_location: source,
      ...extra,
    };
    w.gtag?.("event", "whatsapp_click", payload);
    w.dataLayer?.push({ event: "whatsapp_click", ...payload });
    w.fbq?.("trackCustom", "WhatsAppClick", payload);
  } catch {
    /* noop */
  }
}

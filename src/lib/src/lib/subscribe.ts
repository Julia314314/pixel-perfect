const FORMSPREE_ENDPOINT =
  (import.meta.env.VITE_FORMSPREE_ENDPOINT as string) ||
  "https://formspree.io/f/xanrrvyg";

export type SubscribePayload = {
  email: string;
  name?: string;
  source?: string;
  page?: string;
  website?: string; // honeypot
};

export async function subscribeEmail(payload: SubscribePayload) {
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      ...payload,
      ts: new Date().toISOString(),
    }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new Error(data?.error || "訂閱失敗，請稍後再試");
  }
}

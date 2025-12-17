export async function subscribeEmail(email: string) {
  const endpoint =
    (import.meta.env.VITE_FORMSPREE_ENDPOINT as string) ||
    "https://formspree.io/f/xanrrvyg";

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      source: "pixel-perfect site",
      ts: new Date().toISOString(),
    }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new Error(data?.error || "訂閱失敗，請稍後再試");
  }
}

// app/api/auth/reset-password/route.js

export async function POST(req) {
  const BASE_URL = "http://51.20.49.136:5000/v1";
  const body = await req.json();

  const res = await fetch(`${BASE_URL}/auth/reset-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), { status: res.status });
}

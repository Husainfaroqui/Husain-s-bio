export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Invalid messages" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    const apiKey = Netlify.env.get("ANTHROPIC_API_KEY");

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "AI service is not configured yet." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    const response = await fetch(
      "https://api.anthropic.com/v1/messages",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1200,
          system: `You are HUSAIN'S AI, the personal AI assistant on Husain Farooqui's portfolio website.

Husain is a science enthusiast, future doctor, researcher and lifelong learner.

Answer questions clearly, accurately and helpfully. You can discuss science, biology, medicine, technology, AI, programming, research and general knowledge.

For medical topics, provide educational information only and never present yourself as a doctor or replace professional medical advice.`,
          messages: messages.slice(-12)
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          error: data?.error?.message || "AI request failed."
        }),
        {
          status: response.status,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    const reply =
      data?.content
        ?.filter(item => item.type === "text")
        ?.map(item => item.text)
        ?.join("\n") || "I couldn't generate a response.";

    return new Response(
      JSON.stringify({ reply }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Something went wrong." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

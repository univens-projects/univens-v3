import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Gemini Client server-side
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (apiKey) {
  aiClient = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Gaurav AI Chat Assistant endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { messages, userQuestion } = req.body;
    
    if (!aiClient) {
      // Fallback if API key isn't present yet
      return res.json({
        reply: "Hello! I'm Gaurav from Univens. We help CXOs turn strategic roadmaps into live systems in about 3 months. Let me know what you're trying to build, improve, or scale, and I'll help you map out the required technology, specialists, and execution strategy."
      });
    }

    const systemInstruction = `You are Gaurav, Strategic Execution Partner at Univens (www.univens.in).
Univens tagline: "Strategic Execution for Ambitious Businesses — The Future Doesn't Build Itself. It's built by those who refuse to wait."

Key Information about Univens:
- What Univens does: Univens connects businesses with the right capabilities (technology, AI, specialists, systems, and execution) to turn strategic intent into working reality.
- We don't start with fixed packages. We start with the client's business objective, map what it requires, assemble the right specialist team, and execute together.
- Core Offerings:
  1. Digital Infrastructure (Websites, platforms, LMS, CRM, portals, digital ops)
  2. Product Development (Web apps, SaaS, custom platforms, APIs, technical implementation)
  3. AI & Automation (Workflow automation, AI processes, intelligent business systems, process optimization)
  4. IoT & Robotics (Connected systems, industrial automation, embedded tech, robotics)
  5. Marketing Systems (SEO, digital marketing, brand systems, campaigns, marketing infrastructure)
  6. Strategic Execution (Tech consulting, execution planning, specialist coordination)
- Engagement Models: Project-based, Ongoing monthly (MoM), White-label partner, Alongside internal team.
- Case Studies:
  - Spruce Lifeskills (Education · Nagpur, IN): Centralized LMS, CRM, IT infrastructure, recruitment, partnership management. (MoM + Revenue Sharing)
  - Zesh Agency (Agency · Pune, IN): Technical execution partner behind creative & ad client engagements (WordPress, Next.js, Headless CMS). (MoM)
- Contact: Phone (+91 91727 25217), Email (hello@univens.in), Location (Nagpur & Pune, IN).

Your tone is professional, direct, execution-focused, articulate, concise, friendly, and helpful. You speak to CXOs, founders, and business leaders. Keep answers concise, high-value, and actionable. Avoid buzzwords and unnecessary fluff. Encourage the user to share their business objective or book a call with the Univens team.`;

    const promptText = userQuestion || (messages && messages.length > 0 ? messages[messages.length - 1].content : "Hello");

    const response = await aiClient.models.generateContent({
      model: "gemini-3.6-flash",
      contents: promptText,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || "I'm here to help turn your roadmap into live systems. What is the core objective you are aiming to achieve?";
    return res.json({ reply });

  } catch (error: any) {
    console.error("Chat API error:", error);
    return res.json({
      reply: "At Univens, we specialize in taking complex business objectives and aligning technology, specialists, and execution to deliver live working systems. Tell me a bit about what you're building or scaling!"
    });
  }
});

// Search API endpoint
app.post("/api/search", async (req, res) => {
  const { query } = req.body;
  if (!query || query.trim() === "") {
    return res.json({ results: [] });
  }

  const q = query.toLowerCase();

  const items = [
    { title: "Digital Infrastructure", type: "Offering", category: "Solutions", description: "Business websites, digital platforms, LMS, CRM, business portals, operational infrastructure." },
    { title: "Product Development", type: "Offering", category: "Solutions", description: "Web applications, SaaS products, custom platforms, APIs & integrations, technical implementation." },
    { title: "AI & Automation", type: "Offering", category: "Solutions", description: "Workflow automation, AI-enabled processes, intelligent business systems, applied AI, process optimisation." },
    { title: "IoT & Robotics", type: "Offering", category: "Solutions", description: "Connected systems, industrial automation, robotics, embedded technology solutions." },
    { title: "Marketing Systems", type: "Offering", category: "Solutions", description: "SEO, digital marketing, brand systems, campaign execution, marketing infrastructure." },
    { title: "Strategic Execution", type: "Offering", category: "Solutions", description: "Technology consulting, execution planning, specialist coordination, implementation support." },
    { title: "Spruce Lifeskills", type: "Case Study", category: "Case Studies", description: "Education sector in Nagpur, IN. Centralised LMS, CRM, IT & recruitment partnership." },
    { title: "Zesh Agency", type: "Case Study", category: "Case Studies", description: "Creative agency in Pune, IN. Technical execution partner for WordPress, Next.js & Headless CMS." },
    { title: "4 Step Process", type: "How We Work", category: "Process", description: "1. Share objective -> 2. Map requirements -> 3. Assemble team -> 4. Execute together." },
    { title: "Engagement Models", type: "Overview", category: "How We Work", description: "Project-based, Ongoing monthly, White-label partner, Alongside internal team." },
    { title: "Book a Call", type: "Contact", category: "Action", description: "Schedule a direct strategy consultation call with Univens." },
    { title: "Email Univens", type: "Contact", category: "Action", description: "hello@univens.in — Direct email inquiry for projects and partnerships." },
  ];

  const results = items.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
  );

  return res.json({ results });
});

// Booking confirmation API stub
app.post("/api/book", (req, res) => {
  const { date, time, duration, note, email } = req.body;
  console.log("Call booking received:", { date, time, duration, note, email });
  res.json({
    success: true,
    message: `Call booked for ${date} at ${time} (${duration} min). A confirmation calendar invite will be sent.`,
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Univens server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

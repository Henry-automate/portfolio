// ============================================================
// YOUR SITE SETTINGS
// Fill in the blanks ("") and upload this file to GitHub.
// Anything left as "" stays hidden on the site, so nothing looks broken.
// ============================================================

window.SITE = {

  // ---------- CONTACT ----------
  // email:    the address clients should write to, e.g. "henry@example.com"
  // whatsapp: your number in international format with no + or spaces, e.g. "2348012345678"
  // linkedin: your full LinkedIn profile link, e.g. "https://www.linkedin.com/in/your-name"
  contact: {
    email: "",
    whatsapp: "2348147754921",
    linkedin: "https://www.linkedin.com/in/henry-oyedeji-0768295a",
    github: "https://github.com/Henry-automate"
  },

  // ---------- SERVICES ----------
  // price: a starting price shown on the card, e.g. "From $150".
  // Leave it as "" and the card shows "Get a quote" instead.
  services: [
    {
      title: "WhatsApp booking & enquiry bot",
      text: "Customers chat on WhatsApp to see options, book or reserve, and reach a human. Every booking lands in a sheet and your staff get an instant alert.",
      price: ""
    },
    {
      title: "Lead capture → CRM → instant alert",
      text: "Leads from your website or forms get cleaned, scored and saved, and the hot ones reach your phone on Telegram or WhatsApp in seconds.",
      price: ""
    },
    {
      title: "Telegram subscription bot",
      text: "Run a paid Telegram channel on autopilot: payment check, member access, renewal reminders and removal when a plan ends.",
      price: ""
    },
    {
      title: "Reports & reminders on autopilot",
      text: "Daily or weekly reports, booking reminders and follow-ups sent by email, Telegram or WhatsApp without anyone pressing a button.",
      price: ""
    }
  ],

  // ---------- PROJECTS ----------
  // status: "live", "wip" or "course"
  // image:  a screenshot you uploaded to the "images" folder, e.g. "images/hotel-bot.png". Leave "" for no image.
  // link / linkText: optional button, e.g. a live demo. Leave "" to hide it.
  // gallery: optional list of extra screenshots, shown under "See the N workflows".
  //          Each one is { src: "images/workflows/name.webp", caption: "what it does" }.
  projects: [
    {
      status: "live", title: "Henry Automate predictions",
      text: "A sports tips service run by n8n. Workflows build NBA, NFL and multi-league football picks from odds, standings, injuries and player stats, lock them before kick-off, grade them after the games and post them to a free Telegram channel. A separate workflow records closing odds so I can check whether the model really beats the market.",
      stack: ["n8n", "Odds API", "ESPN data", "JavaScript", "Google Sheets", "Telegram bot", "Netlify"],
      image: "images/workflows/cards/predictions.webp", link: "https://henryautomate.netlify.app", linkText: "Visit the site",
      gallery: [
        { src: "images/workflows/multi-league-predictions.webp", caption: "Multi-league football: team ratings, predictions and a Monday scorecard" },
        { src: "images/workflows/nba-predictions.webp", caption: "NBA picks: odds, standings, injuries and player stats into the model" },
        { src: "images/workflows/nfl-predictions.webp", caption: "NFL picks: the same engine adapted for the NFL" },
        { src: "images/workflows/nba-grading.webp", caption: "NBA grading: final scores, win/loss and the running scorecard" },
        { src: "images/workflows/nfl-grading.webp", caption: "NFL grading" },
        { src: "images/workflows/nba-closing-lines.webp", caption: "Closing lines: tracks closing odds against the price at pick time" }
      ]
    },
    {
      status: "live", title: "VIP Telegram gatekeeper",
      text: "Sells VIP channel access by bank transfer, with no manual inbox work. The bot shows the plans and bank details, Gemini reads each payment receipt, invalid and already-used receipts are turned away, and I approve real payments with one tap. Approval creates a one-time invite link and activates the member in the sheet.",
      stack: ["n8n", "Telegram Bot API", "Gemini", "Google Sheets", "ngrok"],
      image: "images/workflows/cards/vip-gatekeeper.webp", link: "", linkText: "",
      gallery: [
        { src: "images/workflows/vip-gatekeeper-receipts.webp", caption: "Receipts: AI receipt check, duplicate block, approve or reject" },
        { src: "images/workflows/vip-payments-bot.webp", caption: "Payments bot: plans, bank details, invite links and rejections" }
      ]
    },
    {
      status: "wip", title: "Hotel WhatsApp assistant",
      text: "A group project I'm leading for a demo hotel. Guests chat on WhatsApp to see the menu, hold a room or ask for the front desk. Each hold is checked against existing rooms and bookings, lands in Google Sheets and triggers an email alert. Scheduled jobs send an evening arrivals digest, pre-arrival reminders through approved WhatsApp templates (with a plain-message fallback) and check-out follow-ups.",
      stack: ["n8n", "Twilio WhatsApp", "Webhooks", "Google Sheets", "Gmail", "ngrok"],
      image: "images/workflows/cards/hotel-whatsapp-bot.webp", link: "https://grand-hotel-demo-ng.netlify.app", linkText: "Try the live demo",
      gallery: [
        { src: "images/workflows/hotel-whatsapp-bot.webp", caption: "Guest bot: one webhook routes every WhatsApp message" },
        { src: "images/workflows/hotel-scheduled-messages.webp", caption: "Scheduled messages: digest, reminders with fallback, follow-ups" }
      ]
    },
    {
      status: "course", title: "Supersaver supermarket ops",
      text: "Four workflows for a Lagos supermarket chain. Job applications are screened from emailed PDF CVs with AI, the bakery gets a bake plan from sales data, staff stock counts are checked and routed as Urgent, Warning or Count Error, and the end-of-day close is logged with an email alert when a check fails.",
      stack: ["n8n", "Gmail", "Gemini", "PDF extraction", "Forms", "Google Sheets"],
      image: "images/workflows/cards/supersaver.webp", link: "", linkText: "",
      gallery: [
        { src: "images/workflows/supersaver-cv-screener.webp", caption: "CV screener: Gmail → PDF → Gemini → sheet → auto-reply" },
        { src: "images/workflows/supersaver-bake-planner.webp", caption: "Bake planner: daily sales summary emailed to the bakery" },
        { src: "images/workflows/supersaver-stock-count.webp", caption: "Stock count: form → check → Urgent / Warning / Count Error" },
        { src: "images/workflows/supersaver-daily-close.webp", caption: "Daily close: form → sheet → alert when a check fails" }
      ]
    },
    {
      status: "wip", title: "Travel agency enquiries & flight quotes",
      text: "Enquiries for a Nigerian travel agency are scored Hot, Warm or Cold and saved to a CRM sheet, and hot leads alert the team at once. For flight requests, an AI agent searches live Google Flights fares, keeps the cheapest options, converts them to naira at today's rate and emails the customer a quote.",
      stack: ["n8n", "AI Agent", "Gemini", "SerpAPI", "Google Sheets", "Gmail"],
      image: "images/workflows/cards/travel.webp", link: "", linkText: "",
      gallery: [
        { src: "images/workflows/travel-enquiry-intake.webp", caption: "Enquiry intake: lead scoring, CRM and the flight-quote agent" },
        { src: "images/workflows/flight-finder-agent.webp", caption: "Flight finder: a chat agent with memory and a search tool" },
        { src: "images/workflows/flight-search-tool.webp", caption: "Flight search tool: fetch, clean, filter, sort and convert to naira" }
      ]
    },
    {
      status: "live", title: "Hotel room booking",
      text: "A guest books through a form and n8n checks every existing booking for date overlaps, holds the first free room in Google Sheets, and emails a confirmation with nights and total cost. If the room type is full, the guest gets an alternatives email instead.",
      stack: ["n8n", "Google Sheets", "Gmail", "JavaScript"],
      image: "", link: "", linkText: ""
    },
    {
      status: "live", title: "MFB lead generation",
      text: "Captures loan enquiries for a Lagos microfinance bank, cleans and scores each one, saves it to a sheet, and sends Hot leads to Telegram with one-tap call and WhatsApp links.",
      stack: ["n8n", "Google Sheets", "Telegram bot", "JavaScript"],
      image: "", link: "", linkText: ""
    },
    {
      status: "wip", title: "Business lead collector",
      text: "The outbound side of the same system: a sheet of local businesses to approach, with category, city, public contact details and source.",
      stack: ["n8n", "Google Sheets"],
      image: "", link: "", linkText: ""
    },
    {
      status: "course", title: "Lead qualification workflow",
      text: "My first n8n build: a webhook takes in a new lead, tidies the name, email and phone, and sorts it into Hot or Warm by budget and intent. A lead with a budget of ₦5,000,000 or more that asks to apply goes straight to Hot.",
      stack: ["n8n", "Webhook", "If logic", "curl"],
      image: "", link: "", linkText: ""
    }
  ],

  // ---------- FREE WORKFLOW ----------
  // Export a workflow from n8n (⋯ menu → Download), put the .json file in a "workflows" folder,
  // and type its path here, e.g. "workflows/lead-alert.json". Leave "" to hide this section.
  freeWorkflow: {
    file: "",
    title: "Free n8n workflow: lead → instant Telegram alert",
    text: "The same pattern behind my microfinance lead system. Import it into n8n, add your own Telegram bot, and new leads reach your phone in seconds."
  }
};

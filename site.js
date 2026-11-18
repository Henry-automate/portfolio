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
    whatsapp: "",
    linkedin: "",
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
  projects: [
    {
      status: "live", title: "Henry Automate predictions",
      text: "A sports tips service run by n8n. Workflows build NBA, NFL and multi-league football picks from odds data, grade them after the games, and post them to a free Telegram channel. VIP members sign up through a Telegram bot.",
      stack: ["n8n", "Odds API", "Google Sheets", "Telegram bot", "Paystack", "Netlify"],
      image: "", link: "https://henryautomate.netlify.app", linkText: "Visit the site"
    },
    {
      status: "wip", title: "Hotel WhatsApp assistant",
      text: "A group project I'm leading for a demo hotel. Guests chat on WhatsApp to see the menu, hold a room or ask for the front desk. Each hold lands in Google Sheets, staff get an email alert, and an evening digest lists the next day's arrivals.",
      stack: ["n8n", "Twilio WhatsApp", "Google Sheets", "Gmail", "ngrok"],
      image: "", link: "", linkText: "Try the live demo"
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

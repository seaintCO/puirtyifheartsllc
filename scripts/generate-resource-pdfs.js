const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const resources = [
  ["Welcome Guide", "Welcome to Purity OS"],
  ["Platform Roadmap", "Welcome to Purity OS"],
  ["Success Checklist", "Welcome to Purity OS"],

  ["Weekly KPI Tracker", "Benchmarks"],
  ["Business Scorecard", "Benchmarks"],
  ["Monthly Review Worksheet", "Benchmarks"],

  ["CEO Weekly Planner", "Leveling Up"],
  ["Time Blocking Worksheet", "Leveling Up"],
  ["Delegation Checklist", "Leveling Up"],

  ["Client Journey Checklist", "Client Experience"],
  ["Referral Strategy", "Client Experience"],
  ["Follow-Up Templates", "Client Experience"],

  ["30-Day Content Calendar", "Social Media"],
  ["Caption Library", "Social Media"],
  ["Daily Posting Checklist", "Social Media"],

  ["Hiring Checklist", "Accountant & Payroll"],
  ["Payroll Guide", "Accountant & Payroll"],
  ["Tax Preparation Worksheet", "Accountant & Payroll"],

  ["Daily Routine Planner", "The Three B's"],
  ["Boundary Worksheet", "The Three B's"],
  ["Weekly Balance Tracker", "The Three B's"],

  ["Assistant Handbook", "Ultimate Assistant Guide"],
  ["SOP Templates", "Ultimate Assistant Guide"],
  ["Onboarding Guide", "Ultimate Assistant Guide"],

  ["AU Welcome Guide", "Welcome to The AU"],
  ["Assistant University Roadmap", "Welcome to The AU"],
  ["Student Checklist", "Welcome to The AU"],

  ["Assistant Workbook", "Week 1 - The Foundation"],
  ["Payroll Calculator", "Week 1 - The Foundation"],
  ["Pay Worksheet", "Week 1 - The Foundation"],
  ["Goal Sheet", "Week 1 - The Foundation"],
  ["Earning Potential Calculator", "Week 1 - The Foundation"],

  ["Luxury Language Cheat Sheet", "Week 2 - Education"],
  ["Interview Sheet", "Week 2 - Education"],
  ["Onboarding Checklist", "Week 2 - Education"],
  ["Training Checklist", "Week 2 - Education"],
  ["39 Week Curriculum Template", "Week 2 - Education"],

  ["Conversation Scripts", "Week 3 - Coaching + Mentoring"],
  ["Leadership Workbook", "Week 3 - Coaching + Mentoring"],
  ["One-on-One Template", "Week 3 - Coaching + Mentoring"],
  ["Debrief Checklist", "Week 3 - Coaching + Mentoring"],

  ["Tracker Sheets", "Week 4 - Scaling"],
  ["Scheduling Planner", "Week 4 - Scaling"],
  ["Growth Workbook", "Week 4 - Scaling"],
  ["Workflow Templates", "Week 4 - Scaling"],
  ["Dream Income Worksheet", "Week 4 - Scaling"],

  ["Certificate Placeholder", "Celebrate"],
  ["Review Request", "Celebrate"],
  ["Next Steps Plan", "Celebrate"]
];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const outDir = path.join(process.cwd(), "public", "pdfs");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

resources.forEach(([title, module]) => {
  const file = path.join(outDir, `${slugify(title)}.pdf`);
  const doc = new PDFDocument({ margin: 50 });
  doc.pipe(fs.createWriteStream(file));

  doc.fontSize(26).text("Purity OS", { align: "center" });
  doc.moveDown();
  doc.fontSize(18).text(title, { align: "center" });
  doc.fontSize(12).fillColor("gray").text(module, { align: "center" });
  doc.moveDown(2);

  doc.fillColor("black").fontSize(14).text("Purpose", { underline: true });
  doc.moveDown();
  doc.fontSize(11).text(`This resource is part of the ${module} module inside Purity OS. Use it to organize, reflect, and apply the lesson to your business.`);
  doc.moveDown();

  doc.fontSize(14).text("Action Steps", { underline: true });
  doc.moveDown();
  doc.fontSize(11).list([
    "Review this resource before or after the lesson.",
    "Write down your current situation.",
    "Choose one action to implement this week.",
    "Track your progress inside the dashboard.",
    "Revisit this worksheet monthly."
  ]);

  doc.moveDown();
  doc.fontSize(14).text("Notes", { underline: true });
  doc.moveDown();
  doc.fontSize(11).text("1. ______________________________________________");
  doc.moveDown();
  doc.text("2. ______________________________________________");
  doc.moveDown();
  doc.text("3. ______________________________________________");

  doc.moveDown(2);
  doc.fontSize(10).fillColor("gray").text("Purity OS Beta • Powered by ALMA", { align: "center" });

  doc.end();
});

console.log("All resource PDFs created.");

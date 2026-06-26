const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const modules = [
  "Welcome to Purity OS",
  "Benchmarks",
  "Leveling Up",
  "Client Experience",
  "Social Media",
  "Accountant & Payroll",
  "The Three B's",
  "Ultimate Assistant Guide",
  "Welcome to The AU",
  "Week 1 - The Foundation",
  "Week 2 - Education",
  "Week 3 - Coaching + Mentoring",
  "Week 4 - Scaling",
  "Celebrate"
];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const outDir = path.join(process.cwd(), "public", "pdfs");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

modules.forEach((title) => {
  const doc = new PDFDocument({ margin: 50 });
  const filePath = path.join(outDir, `${slugify(title)}.pdf`);
  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(26).text("Purity OS", { align: "center" });
  doc.moveDown();
  doc.fontSize(20).text(title, { align: "center" });
  doc.moveDown(2);

  doc.fontSize(14).text("Workbook", { underline: true });
  doc.moveDown();
  doc.fontSize(11).text("This workbook is part of the Purity OS beta academy. Use it to take notes, reflect, and apply the lesson to your business.");
  doc.moveDown();

  doc.fontSize(14).text("Action Steps");
  doc.moveDown();
  doc.fontSize(11).list([
    "Watch the lesson.",
    "Take notes.",
    "Complete the quiz.",
    "Apply one thing to your business this week.",
    "Review your progress inside the dashboard."
  ]);

  doc.moveDown();
  doc.fontSize(14).text("Reflection");
  doc.moveDown();
  doc.fontSize(11).list([
    "What stood out to you?",
    "What needs to change?",
    "What action will you take today?"
  ]);

  doc.end();
});

console.log("PDFs generated.");

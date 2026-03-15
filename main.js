// ── Mobile nav toggle ──────────────────────────────────────
const nav       = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks  = document.querySelectorAll(".nav-links a");

if (nav && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

// ── Footer year ────────────────────────────────────────────
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Terminal typing effect ─────────────────────────────────
const lines = [
  "╭─────────────────────────────────────╮",
  "│  abhishek@redteam:~$ whoami         │",
  "│  ⚔  security analyst               │",
  "│  ⚔  vapt / red teaming             │",
  "│  ⚔  llm / ai security              │",
  "╰─────────────────────────────────────╯",
  "",
  "abhishek@redteam:~$ cat role.txt",
  "→ pragya cyber · bangalore · IST",
  "→ b.e ai & ml · bnmit · cgpa 8.08",
  "",
  "abhishek@redteam:~$ cat focus.txt",
  "→ break web, api, mobile, cloud & ai",
  "→ turn real attack paths into fixes",
  "→ map findings to detection gaps",
  "",
  "abhishek@redteam:~$ tail -f ops.log",
];

const outputEl = document.getElementById("terminal-output");
const cursorEl = document.querySelector(".terminal-cursor");

if (outputEl && cursorEl) {
  let lineIndex = 0;
  let charIndex = 0;
  let buffer    = "";

  const type = () => {
    if (lineIndex >= lines.length) {
      setTimeout(() => {
        lineIndex = 0;
        charIndex = 0;
        buffer    = "";
        outputEl.textContent = "";
        type();
      }, 3200);
      return;
    }

    const currentLine = lines[lineIndex];

    if (charIndex < currentLine.length) {
      buffer   += currentLine[charIndex];
      charIndex += 1;
      outputEl.textContent = buffer;
      setTimeout(type, 22);
    } else {
      buffer    += "\n";
      lineIndex += 1;
      charIndex  = 0;
      setTimeout(type, lineIndex < 6 ? 80 : 130);
    }
  };

  type();
}

// ── Smooth scroll offset for sticky header ─────────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    const offset = 72; // nav height + a little breathing room
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  });
});
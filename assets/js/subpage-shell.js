(function () {
    const root = document.documentElement;
    const body = document.body;
    const currentPage = body.dataset.page || "profile";

    const pageAliases = {
        profile: "profile",
        experience: "experience",
        projects: "projects",
        courses: "courses",
        socials: "socials",
        solutions: "solutions",
        powerbi: "powerbi",
    };

    function setTheme(theme) {
        root.classList.toggle("dark", theme === "dark");
        localStorage.setItem("profile-theme", theme);
        const toggle = document.getElementById("theme-toggle-btn");
        if (toggle) {
            toggle.textContent = theme === "dark" ? "dark_mode" : "light_mode";
        }
    }

    function applyTranslation(lang) {
        document.querySelectorAll(".t-lang").forEach((el) => {
            const translation = el.getAttribute(`data-${lang}`);
            if (translation) {
                el.innerHTML = translation;
            }
        });

        const langToggle = document.getElementById("lang-toggle-btn");
        if (langToggle) {
            langToggle.textContent = lang === "vi" ? "VI" : "EN";
        }

        localStorage.setItem("profile-lang", lang);
    }

    function markActiveNav() {
        document.querySelectorAll("[data-page-link]").forEach((el) => {
            const isActive = el.getAttribute("data-page-link") === pageAliases[currentPage];
            el.classList.toggle("active", isActive);
        });
    }

    function initCanvas() {
        const canvas = document.getElementById("bgCanvas");
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let width = 0;
        let height = 0;
        let particles = [];

        const rgb = () =>
            root.classList.contains("dark") ? "198,151,73" : "76,107,75";

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            const count = Math.min(Math.floor((width * height) / 10000), 160);
            particles = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                size: Math.random() * 2 + 0.7,
                opacity: Math.random() * 0.4 + 0.2,
            }));
        }

        function tick() {
            ctx.clearRect(0, 0, width, height);
            const color = rgb();
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
                ctx.fill();
            });

            ctx.strokeStyle = `rgba(${color}, 0.12)`;
            ctx.lineWidth = 0.6;

            for (let i = 0; i < particles.length; i += 1) {
                for (let j = i + 1; j < particles.length; j += 1) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(tick);
        }

        window.addEventListener("resize", resize);
        resize();
        tick();
    }

    function initPage() {
        const savedTheme = localStorage.getItem("profile-theme") || "dark";
        const savedLang = localStorage.getItem("profile-lang") || "vi";

        setTheme(savedTheme);
        applyTranslation(savedLang);
        markActiveNav();
        initCanvas();

        const themeToggle = document.getElementById("theme-toggle-btn");
        if (themeToggle) {
            themeToggle.addEventListener("click", () => {
                const nextTheme = root.classList.contains("dark") ? "light" : "dark";
                setTheme(nextTheme);
            });
        }

        const langToggle = document.getElementById("lang-toggle-btn");
        if (langToggle) {
            langToggle.addEventListener("click", () => {
                const nextLang = (localStorage.getItem("profile-lang") || "vi") === "vi" ? "en" : "vi";
                applyTranslation(nextLang);
            });
        }
    }

    document.addEventListener("DOMContentLoaded", initPage);
})();

document.addEventListener("DOMContentLoaded", () => {
    const skillLevels = document.querySelectorAll(".skill-level");
    skillLevels.forEach(skill => {
        const level = skill.getAttribute("data-skill-level");
        skill.style.width = level;
    });
});

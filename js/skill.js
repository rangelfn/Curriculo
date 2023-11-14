document.addEventListener("DOMContentLoaded", function() {
    var skillLevels = document.querySelectorAll(".skill-level");
    
    skillLevels.forEach(function(skillLevel) {
        var initialWidth = skillLevel.style.width || "40%";
        skillLevel.style.width = initialWidth;
        skillLevel.addEventListener("mouseover", function() {
            skillLevel.style.width = "100%";
            skillLevel.style.backgroundColor = "#0056b3"; // Cor azul mais escura
        });

        skillLevel.addEventListener("mouseout", function() {
            skillLevel.style.width = initialWidth;
            skillLevel.style.backgroundColor = "#007bff"; // Cor azul inicial
        });
    });
});

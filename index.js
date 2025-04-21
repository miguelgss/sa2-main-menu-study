const Duration = Object.freeze({
    MAX:Number = 18,
    MIN:Number = 6
});

const NumberBubbles = Object.freeze({
    MAX:Number = 90,
    MIN:Number = 84
})

const Delay = Object.freeze({
    MAX:Number = 12,
    MIN:Number = 1
});

function randomValue(min, max) {
    return (Math.random() * (max - min) + min).toFixed(3);
}

function startDuration(el, duration) {
    (el).style.setProperty("animation-duration", duration + "s")
}

function startDelay(el, delay) {
    (el).style.setProperty("animation-delay", delay + "s")
}

function startSizeAndPosition(el, length, spacing) {
    el.style.setProperty("width", length + "px");
    el.style.setProperty("height", length + "px");
    el.style.setProperty("left", spacing + "%");
}

function startValuesAnimation() {
    const bubblesGroup = document.getElementById('Bubbles');

    const limitBubbles = randomValue(NumberBubbles.MIN, NumberBubbles.MAX);
    for (let i = 0; i < limitBubbles; i++) {
        const newBubble = document.createElement("li");
        bubblesGroup?.appendChild(newBubble);
    }

    document.querySelectorAll("#Bubbles li").forEach(e => {
        const duration = randomValue(Duration.MIN, Duration.MAX);
        const delay = randomValue(Delay.MIN, Delay.MAX);
        const colorBubble = randomValue(0, 3);
        startDuration(
            e,
            duration)
        startDelay(
            e,
            delay)
        startSizeAndPosition(
            e,
            randomValue(10, 100),
            randomValue(-10, 100)
        );

        switch(Math.ceil(colorBubble)){
            case 1:
                e.classList.add("blue-bubble");
                break;
            case 2:
                e.classList.add("red-bubble");
                break;
            case 3:
                e.classList.add("lightblue-bubble");
                break;       
        }
    });
}

// Buttons

function animateButtons() {
    const buttons = document.querySelectorAll(".menu #ButtonBg");
    buttons.forEach(x => x.classList.add("fade-in"));
}

// Geral
 
function start() {
    startValuesAnimation();
    animateButtons();
}

function goToSecret() {
    window.location.href = 'secret/secret.html';
}

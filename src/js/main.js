document.addEventListener("DOMContentLoaded", () => {
    Typed.new(".my-job", {
        strings: ["computer scientist.", "developer.", 'researcher.', 'traveler.', 'nice guy.'],
        startDelay: 0,
        loop: true,
        backDelay: 1000,
        typeSpeed: 0
    });
});

function showEmail(el){
    el.outerHTML = '<em>femferrara@gmail.com</em>';
}

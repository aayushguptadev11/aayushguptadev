/**
 * script.js — Menu toggle, typing effect, tab switching
 */

(function () {
    "use strict";

    // DOM References (cached)
    var toggle = document.getElementById("menu-toggle");
    var typingText = document.getElementById("typing-span");
    var navlinks = document.querySelectorAll(".navlink");
    var tabs = document.querySelectorAll(".content");
    var backHome = document.getElementById("back-home");

    // Menu Toggle
    if (toggle) {
        toggle.addEventListener("change", function () {
            document.body.classList.toggle("no-scroll", this.checked);
        });
    }

    // Keyboard support for hamburger menu icon
    var menuIcon = document.querySelector(".menu-icon");
    if (menuIcon && toggle) {
        menuIcon.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle.checked = !toggle.checked;
                document.body.classList.toggle("no-scroll", toggle.checked);
            }
        });
    }

    // Close mobile menu helper
    function closeMobileMenu() {
        if (toggle && toggle.checked) {
            toggle.checked = false;
            document.body.classList.remove("no-scroll");
        }
    }

    // Typing Animation
    var words = ["Web Developer", "UI UX Designer", "Content Creator", "AI Engineer"];

    if (typingText && words.length > 0) {
        var wordIndex = 0;
        var charIndex = 0;
        var isDeleting = false;

        var TYPING_DELAY = 100;
        var ERASING_DELAY = 100;
        var NEXT_WORD_DELAY = 1000;
        var PAUSE_BEFORE_DELETE = 500;

        function type() {
            var currentWord = words[wordIndex];

            if (!isDeleting) {
                typingText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;

                if (charIndex === currentWord.length) {
                    isDeleting = true;
                    setTimeout(type, NEXT_WORD_DELAY);
                } else {
                    setTimeout(type, TYPING_DELAY);
                }
            } else {
                typingText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                    setTimeout(type, PAUSE_BEFORE_DELETE);
                } else {
                    setTimeout(type, ERASING_DELAY);
                }
            }
        }

        type();
    }

    // Tab / Pagination
    function switchTab(targetTab) {
        navlinks.forEach(function (link) {
            if (link.dataset.tab === targetTab) {
                link.classList.add("active");
                link.setAttribute("aria-current", "page");
            } else {
                link.classList.remove("active");
                link.removeAttribute("aria-current");
            }
        });

        tabs.forEach(function (tab) {
            if (tab.id === targetTab) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });
    }

    navlinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            switchTab(this.dataset.tab);
            closeMobileMenu();
        });

        link.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                switchTab(this.dataset.tab);
                closeMobileMenu();
            }
        });
    });

    // Back to Home
    if (backHome) {
        backHome.addEventListener("click", function (e) {
            e.preventDefault();
            switchTab("home");
            closeMobileMenu();
        });
    }
})();
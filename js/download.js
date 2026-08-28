/**
 * download.js — CV download progress animation
 */

(function () {
    "use strict";

    var downloadBtn = document.getElementById("downloadBtn");
    var progressBar = document.getElementById("progressBar");
    var downloadText = document.getElementById("downloadText");

    // Exit early if elements missing
    if (!downloadBtn || !progressBar || !downloadText) return;

    var topBtn = downloadBtn.querySelector(".top-btn");
    if (!topBtn) return;

    var RESUME_URL = "./assets/pdf/Ayush-Resume.pdf";
    var RESUME_FILENAME = "Ayush-Resume.pdf";
    var COMPLETE_DELAY = 1800;
    var RESET_DELAY = 650;
    var TICK_MS = 35;

    downloadBtn.addEventListener("click", function () {
        // Prevent double-click
        if (
            downloadBtn.classList.contains("downloading") ||
            downloadBtn.classList.contains("completed") ||
            downloadBtn.classList.contains("resetting")
        ) {
            return;
        }

        var progress = 0;

        // Start download animation
        downloadBtn.classList.add("downloading");
        downloadText.textContent = "0%";
        progressBar.style.width = "0%";
        topBtn.style.setProperty("--fill", "0%");

        // Update ARIA
        progressBar.setAttribute("aria-valuenow", "0");

        var progressInterval = setInterval(function () {
            progress++;

            progressBar.style.width = progress + "%";
            topBtn.style.setProperty("--fill", progress + "%");
            downloadText.textContent = progress + "%";
            progressBar.setAttribute("aria-valuenow", String(progress));

            if (progress >= 100) {
                clearInterval(progressInterval);

                // Completed state
                downloadBtn.classList.remove("downloading");
                downloadBtn.classList.add("completed");
                downloadText.innerHTML = '<i class="fa-solid fa-circle-check" aria-hidden="true"></i> Done';
                progressBar.setAttribute("aria-valuenow", "100");

                // Trigger actual file download
                triggerDownload(RESUME_URL, RESUME_FILENAME);

                // Reset after delay
                setTimeout(function () {
                    downloadBtn.classList.remove("completed");
                    downloadBtn.classList.add("resetting");
                    progressBar.style.width = "0%";
                    topBtn.style.setProperty("--fill", "0%");

                    setTimeout(function () {
                        downloadText.innerHTML = '<i class="fa-solid fa-cloud-arrow-down" aria-hidden="true"></i> Download CV';
                        downloadBtn.classList.remove("resetting");
                        progressBar.style.width = "0%";
                        topBtn.style.setProperty("--fill", "0%");
                        progressBar.setAttribute("aria-valuenow", "0");
                    }, RESET_DELAY);
                }, COMPLETE_DELAY);
            }
        }, TICK_MS);
    });

    // Keyboard support
    downloadBtn.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            downloadBtn.click();
        }
    });

    function triggerDownload(url, filename) {
        var link = document.createElement("a");
        link.href = url;
        link.download = filename;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
})();
/*! EmadulAi Javascript (NotificationServer.js) | Authors: Emadul Tarafdar (https://emadulai.in) | License: Unlicensed | Copyright (c) 2024-2025 EmadulAi */
"use strict";
((e, t, n) => {
    function setCookie(e, t, o) {
        let i = new Date;
        i.setTime(i.getTime() + 36e5 * o), n.cookie = e + "=" + encodeURIComponent(t) + ";expires=" + i.toUTCString() + ";path=/"
    }

    function getCookie(e) {
        let t = RegExp("(^| )" + e + "=([^;]+)"),
            o = n.cookie.match(t);
        return o ? decodeURIComponent(o[2]) : null
    }
    if (getCookie("hAn") === "true") return;

    // Find and set user name
    const userEl = n.querySelector(".nm");
    let userName = "";
    if (userEl) {
        let name = (userEl.dataset && userEl.dataset.text || "").trim();
        if (name) {
            userName = name;
        }
    }

    const {
        vw: U
    } = e || {};
    // Don't show notification to admin
    if (U && U.iAd) return;

    const wrp = n.createElement("div");
    wrp.className = "admin-wrapperX";
    wrp.innerHTML = `<div class='papW admin-notices'><div class='papB'><div class='papT'>Dear User ${userName ? userName : "User"},</div><div class='papC'>Stay updated with <strong>emadulai.in</strong>! Join our Telegram channel to get all the latest news and updates first.<div class="btnF"><a class='button ln close-btn' role="button">Maybe Later</a><a class='button update-btn' href='https://t.me/emadulai_24' target="_blank" rel="noopener">Join Telegram</a></div></div></div></div><style>.button{--linkB:#1976d2;flex:1;text-align:center;display:inline-flex;justify-content:center;align-items:center;gap:8px;padding:10px 12px;outline:0;border:0;border-radius:6px;line-height:20px;color:#fff;background:#3740ff;font-size:14px;white-space:nowrap;min-width:120px;text-decoration:none}.button.ln{background:0 0;border:1px solid var(--linkB,#3740ff);color:var(--linkB,#3740ff)}.button.ln:hover{border-color:#3740ff;box-shadow:0 0 0 1px #3740ff inset}.btnF{display:flex;justify-content:space-between;gap:12px;margin-top:12px}@keyframes fadeOut{from{opacity:1}to{opacity:0}}</style>`;
    n.body.appendChild(wrp);
    const closeBtn = wrp.querySelector(".close-btn");
    closeBtn && closeBtn.addEventListener("click", function() {
        setCookie("hAn", "true", 24), wrp.style.animation = "fadeOut 0.3s forwards", setTimeout(() => wrp.remove(), 300)
    });
})(PU, window, document);



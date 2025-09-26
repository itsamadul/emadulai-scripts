/*! EmadulAi Javascript (Admin NotificationServer.js) | Authors: Emadul Tarafdar (https://emadulai.in) | License: Unlicensed | Copyright (c) 2024-2025 EmadulAi */
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
    const adminEl = n.querySelector(".nm");
    let adminName = "";
    if (adminEl) {
        let a = (adminEl.dataset && adminEl.dataset.text || "").trim();
        a && (adminName = a)
    }
    const {
        vw: U
    } = e || {};
    if (!U || !U.iAd) return;
    const wrp = n.createElement("div");
    wrp.className = "admin-wrapperX";
    wrp.innerHTML = `<div class='papW admin-notices'><div class='papB'><div class='papT'>Dear Admin${adminName?" ("+adminName+")":""},</div><div class='papC'>A new version of <strong>Plus UI</strong> is available. Please update to enjoy the latest features and improvements.<br/><em style="color:#555;font-size:13px;margin-top: 12px;">( Note: This message is only visible to the admin of this blog. )</em><div class="btnF"><a class='button ln close-btn' role="button">Close</a><a class='button update-btn' href='https://t.me/emadulai_24' target="_blank" rel="noopener">Update Now!</a></div></div></div></div><style>.button{--linkB:#1976d2;flex:1;text-align:center;display:inline-flex;justify-content:center;align-items:center;gap:8px;padding:10px 12px;outline:0;border:0;border-radius:6px;line-height:20px;color:#fff;background:#3740ff;font-size:14px;white-space:nowrap;min-width:120px;text-decoration:none}.button.ln{background:0 0;border:1px solid var(--linkB,#3740ff);color:var(--linkB,#3740ff)}.button.ln:hover{border-color:#3740ff;box-shadow:0 0 0 1px #3740ff inset}.btnF{display:flex;justify-content:space-between;gap:12px;margin-top:12px}@keyframes fadeOut{from{opacity:1}to{opacity:0}}</style>`;
    n.body.appendChild(wrp);
    const closeBtn = wrp.querySelector(".close-btn");
    closeBtn && closeBtn.addEventListener("click", function() {
        setCookie("hAn", "true", 24), wrp.style.animation = "fadeOut 0.3s forwards", setTimeout(() => wrp.remove(), 300)
    });
})(PU, window, document);

/* Northstar Retail Co. — Login page logic (vanilla JS)
 * NOTE: All authentication here is MOCKED. See the marked
 * "BACKEND HOOK" comments for where to call the real auth API.
 */
(function () {
  "use strict";

  /* ---------------- Splash ---------------- */
  var splash = document.getElementById("splash");
  var splashDone = false;
  function hideSplash() {
    if (splashDone) return;
    splashDone = true;
    splash.classList.add("is-hidden");
    setTimeout(function () {
      splash.remove();
      document.getElementById("email").focus();
    }, 500);
  }
  splash.addEventListener("click", hideSplash);
  document.addEventListener("keydown", function (e) {
    if (!splashDone && (e.key === "Enter" || e.key === " " || e.key === "Escape")) hideSplash();
  });
  setTimeout(hideSplash, 2100);

  /* ---------------- Form toggle ---------------- */
  var loginForm = document.getElementById("login-form");
  var signupForm = document.getElementById("signup-form");
  var heading = document.getElementById("card-heading");
  var subtitle = document.getElementById("card-subtitle");
  var switchWrap = document.getElementById("switch-wrap");

  function showForm(mode) {
    var isLogin = mode === "login";
    loginForm.hidden = !isLogin;
    signupForm.hidden = isLogin;
    // retrigger the swap animation
    var active = isLogin ? loginForm : signupForm;
    active.style.animation = "none";
    void active.offsetWidth;
    active.style.animation = "";
    heading.textContent = isLogin ? "Welcome Back" : "Create Your Account";
    subtitle.textContent = isLogin
      ? "Log in to track orders, manage returns, and get support."
      : "Sign up to track orders, manage returns, and get support.";
    switchWrap.innerHTML = isLogin
      ? 'Don\'t have an account? <button type="button" data-mode="signup">Sign Up</button>'
      : 'Already have an account? <button type="button" data-mode="login">Log In</button>';
    active.querySelector("input").focus();
  }
  switchWrap.addEventListener("click", function (e) {
    var btn = e.target.closest("button[data-mode]");
    if (btn) showForm(btn.dataset.mode);
  });

  /* ---------------- Password visibility ---------------- */
  document.querySelectorAll(".toggle-pw").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var input = document.getElementById(btn.dataset.target);
      var show = input.type === "password";
      input.type = show ? "text" : "password";
      btn.setAttribute("aria-label", show ? "Hide password" : "Show password");
      btn.setAttribute("aria-pressed", String(show));
      btn.innerHTML = '<i class="fa-regular ' + (show ? "fa-eye-slash" : "fa-eye") + '"></i>';
    });
  });

  /* ---------------- Validation ---------------- */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

  function setError(input, message) {
    var el = document.getElementById(input.id + "-error");
    if (el) el.textContent = message || "";
    input.setAttribute("aria-invalid", message ? "true" : "false");
    return !message;
  }

  function validate(input) {
    var v = input.value.trim();
    if (!v) return setError(input, "This field is required.");
    if (input.type === "email" && !EMAIL_RE.test(v)) return setError(input, "Enter a valid email address.");
    if (input.dataset.rule === "password" && input.value.length < 8)
      return setError(input, "Password must be at least 8 characters.");
    if (input.dataset.rule === "confirm" && input.value !== document.getElementById("signup-password").value)
      return setError(input, "Passwords do not match.");
    if (input.dataset.rule === "name" && v.length < 2) return setError(input, "Enter your full name.");
    return setError(input, "");
  }

  document.querySelectorAll("input").forEach(function (input) {
    input.addEventListener("blur", function () { validate(input); });
    input.addEventListener("input", function () {
      if (input.getAttribute("aria-invalid") === "true") validate(input);
    });
  });

  /* ---------------- Toast ---------------- */
  var toast = document.getElementById("toast");
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(function () { toast.classList.remove("show"); }, 2600);
  }

  /* ---------------- Submit (mock auth) ---------------- */
  function handleSubmit(form, label) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var inputs = Array.prototype.slice.call(form.querySelectorAll("input"));
      var valid = inputs.map(validate).every(Boolean);
      if (!valid) {
        var firstBad = inputs.find(function (i) { return i.getAttribute("aria-invalid") === "true"; });
        if (firstBad) firstBad.focus();
        return;
      }

      var btn = form.querySelector(".btn");
      var original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner" aria-hidden="true"></span> Please wait…';

      /* ---- BACKEND HOOK ----------------------------------------------
       * Replace this setTimeout with the real call, e.g.:
       *   const res = await fetch('/api/auth/login', {
       *     method: 'POST',
       *     headers: { 'Content-Type': 'application/json' },
       *     body: JSON.stringify({ email, password })
       *   });
       * Handle 401 by calling setError(emailInput, 'Invalid credentials.')
       * and let the server set an httpOnly session cookie.
       * ---------------------------------------------------------------- */
      setTimeout(function () {
        btn.disabled = false;
        btn.innerHTML = original;

        // Demo-only flag so the placeholder dashboard can show a signed-in state.
        // NOTHING SENSITIVE is stored; a real backend uses an httpOnly cookie.
        try {
          localStorage.setItem(
            "northstar_demo_session",
            JSON.stringify({ email: form.querySelector('input[type="email"]').value.trim(), mock: true })
          );
        } catch (_) {}

        showToast(label + " successful — redirecting…");
        setTimeout(function () { window.location.href = "dashboard.html"; }, 900);
      }, 1000);
    });
  }
  handleSubmit(loginForm, "Log in");
  handleSubmit(signupForm, "Sign up");

  document.getElementById("forgot").addEventListener("click", function (e) {
    e.preventDefault();
    // BACKEND HOOK: POST /api/auth/forgot-password { email }
    showToast("Password reset link sent (demo).");
  });
})();

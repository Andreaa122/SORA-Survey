/* =========================================================
   SORA SURVEY — VANILLA JAVASCRIPT
   ========================================================= */

/* =========================================================
   GOOGLE APPS SCRIPT
   Replace this with your deployed /exec URL.
   ========================================================= */

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzhyWIBEbGhaJUETMx6tz-7mmB29uSEMwqs2ykGvB6H0XTdeLpSFOpevKG8ElNhVS9G7g/exec";


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {
  ar: {
    hero: "لحظتك. بطريقتك.",
    help: "ساعدنا نبني تجربة مختلفة لذكريات مناسباتك.",
    start: "ابدأ — شاركنا رأيك في دقيقتين",
    meta: "دقيقتين • من غير تسجيل • رأيك يهمنا",

    hook: "في كل مناسبة، في لحظات بتعدي من غير ما تتصور.",
    hookSmall: "لحظات حلوة. ناس مهمة. وذكريات تستاهل تفضل.",

    next: "التالي",
    back: "رجوع",

    select: "اختار كل اللي ينطبق",

    contact: "سيب بياناتك وهنكلمك أول ما نكون جاهزين.",

    name: "الاسم الأول",
    whatsapp: "رقم الواتساب",
    instagram: "Instagram (اختياري)",

    submit: "إرسال الطلب",
    submitting: "بنبعت...",
    retry: "حاول تاني",

    error: "حصلت مشكلة بسيطة. جرّب تاني.",

    in: "أنت معانا.",
    thanks:
      "شكرًا على وقتك. هنكون من أول الناس اللي نكلمك لما SORA تكون جاهزة.",

    request: "اطلب Early Access",

    founding:
      "إحنا بنفتح عدد محدود من الـEarly Events قبل الـLaunch.",

    discount: "خصم لحد 80% من سعر الإطلاق.",

    yes: "أيوه",
    no: "مش دلوقتي",
    maybeLater: "يمكن بعدين",

    earlyQuestion: "تحب تكون من أول الناس اللي تجربها؟",
    earlyIntro: "إحنا بنبني تجربة جديدة للـEvents.",

    upcoming: "عندك Event جاي قريب؟",
    when: "إمتى تقريبًا؟",
    guests: "كام Guest تقريبًا؟",

    q1: "إيه نوع الـEvents اللي بتحضرها غالبًا؟",
    q2: "لما بتكون في Event، بتصور عادةً إزاي؟",
    q3: "إيه أكتر حاجة بتحصل للصور بعد الـEvent؟ 👀",
    q4:
      "لو في طريقة تخلي ذكريات الـEvent أسهل في المشاركة والاحتفاظ بيها… هل ده يهمك؟",

    required:
      "اكتب اسمك ورقم واتساب صحيحين عشان نقدر نتواصل معاك.",

    landingTell: "قولنا رأيك",
    backHome: "ارجع للرئيسية"
  },

  en: {
    hero: "Your event. Your moments.",
    help: "Help us create a better way to experience events.",
    start: "Start — Take the 2-min survey",
    meta: "2 min • No sign-up • Your opinion matters",

    hook: "Every event has moments you didn't capture.",
    hookSmall:
      "The people, the energy, the memories worth keeping.",

    next: "Next",
    back: "Back",

    select: "Choose all that apply",

    contact:
      "Leave your details and we'll be in touch when we're ready.",

    name: "First name",
    whatsapp: "WhatsApp number",
    instagram: "Instagram (optional)",

    submit: "Send request",
    submitting: "Submitting...",
    retry: "Try again",

    error: "Something went wrong. Please try again.",

    in: "You're in.",
    thanks:
      "Thanks for helping us build SORA. We'll let you know when we're ready.",

    request: "Request Early Access",

    founding:
      "We're opening a limited number of early events before launch.",

    discount: "Get up to 80% off your launch price.",

    yes: "Yes",
    no: "Not yet",
    maybeLater: "Maybe later",

    earlyQuestion:
      "Want to be one of the first to try it?",

    earlyIntro:
      "We're building a new experience for events.",

    upcoming: "Do you have an upcoming event?",
    when: "When is it approximately?",
    guests: "Approximately how many guests?",

    q1: "What type of events do you usually attend?",
    q2: "How do you usually capture moments at events?",
    q3:
      "What usually happens to the photos after an event?",
    q4:
      "Would an easier way to share and keep event memories be valuable to you?",

    required:
      "Please enter your name and a valid WhatsApp number so we can reach you.",

    landingTell: "Tell us what you think",
    backHome: "Back to home"
  }
};


/* =========================================================
   SURVEY OPTIONS
   ========================================================= */

const eventTypesData = [
  {
    icon: "💍",
    ar: "حفلات زفاف",
    en: "Weddings",
    value: "Weddings"
  },
  {
    icon: "💫",
    ar: "خطوبة",
    en: "Engagements",
    value: "Engagements"
  },
  {
    icon: "🎂",
    ar: "أعياد ميلاد",
    en: "Birthdays",
    value: "Birthdays"
  },
  {
    icon: "🎓",
    ar: "حفلات تخرج",
    en: "Graduations",
    value: "Graduations"
  },
  {
    icon: "🎉",
    ar: "حفلات",
    en: "Parties",
    value: "Parties"
  },
  {
    icon: "＋",
    ar: "أخرى",
    en: "Other",
    value: "Other"
  }
];


const photoBehaviorData = [
  {
    icon: "📱",
    ar: "بصور بالموبايل",
    en: "I use my phone",
    value: "I use my phone"
  },
  {
    icon: "📸",
    ar: "حد تاني بيصور",
    en: "Someone else takes photos",
    value: "Someone else takes photos"
  },
  {
    icon: "🎥",
    ar: "Photographer محترف",
    en: "Professional photographer",
    value: "Professional photographer"
  },
  {
    icon: "🤷",
    ar: "مش بصور كتير",
    en: "I don't take many photos",
    value: "I don't take many photos"
  }
];


const problemsData = [
  {
    icon: "📱",
    ar: "بتفضل على موبايلي",
    en: "They stay on my phone",
    value: "They stay on my phone"
  },
  {
    icon: "📲",
    ar: "بتتوزع على كذا شخص",
    en: "They end up on different phones",
    value: "They end up on different phones"
  },
  {
    icon: "👀",
    ar: "مش بشوف صور الناس التانية",
    en: "I don't see other guests' photos",
    value: "I don't see other guests' photos"
  },
  {
    icon: "⏰",
    ar: "بننسى نصور لحظات مهمة",
    en: "We miss important moments",
    value: "We miss important moments"
  },
  {
    icon: "✅",
    ar: "مفيش مشكلة فعلًا",
    en: "I don't really have a problem",
    value: "I don't really have a problem"
  }
];


const interestData = [
  {
    icon: "🔥",
    ar: "أكيد",
    en: "Definitely",
    value: "Definitely"
  },
  {
    icon: "🙂",
    ar: "غالبًا",
    en: "Probably",
    value: "Probably"
  },
  {
    icon: "🤔",
    ar: "ممكن",
    en: "Maybe",
    value: "Maybe"
  },
  {
    icon: "🙅",
    ar: "مش قوي",
    en: "Not really",
    value: "Not really"
  }
];


/* =========================================================
   INITIAL STATE
   ========================================================= */

function createInitialData() {
  return {
    timestamp: "",
    ageRange: "",
    eventTypes: [],
    photoBehavior: "",
    photoProblem: "",
    productInterest: "",
    earlyAccess: "",
    upcomingEvent: "",
    eventTiming: "",
    guestCount: "",
    name: "",
    whatsapp: "",
    instagram: ""
  };
}


let state = {
  lang:
    localStorage.getItem("sora-language") === "en"
      ? "en"
      : localStorage.getItem("moment-language") === "en"
      ? "en"
      : localStorage.getItem("momnt-language") === "en"
      ? "en"
      : "ar",

  view: "landing",

  step: 1,

  submitting: false,

  error: "",

  contactError: "",

  data: createInitialData()
};


/* =========================================================
   DOM HELPERS
   ========================================================= */

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) =>
  Array.from(document.querySelectorAll(selector));


function getT() {
  return translations[state.lang];
}


/* =========================================================
   LANGUAGE
   ========================================================= */

function setLanguage(lang) {
  state.lang = lang;

  localStorage.setItem("sora-language", lang);

  document.documentElement.lang = lang;

  document.documentElement.dir =
    lang === "ar" ? "rtl" : "ltr";

  const app = $("#app");

  if (app) {
    app.setAttribute(
      "dir",
      lang === "ar" ? "rtl" : "ltr"
    );
  }

  render();
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function goToSurvey() {
  state.view = "survey";
  state.step = 1;
  state.error = "";
  state.contactError = "";

  hideError();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  render();
}


function goHome() {
  state.view = "landing";
  state.step = 1;

  state.submitting = false;
  state.error = "";
  state.contactError = "";

  state.data = createInitialData();

  hideError();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  render();
}


function goBack() {
  if (state.step <= 1) {
    return;
  }

  state.step -= 1;

  state.contactError = "";

  hideError();

  render();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function goNext() {
  if (state.step === 1) {
    if (!state.data.eventTypes.length) {
      return;
    }
  }

  if (state.step >= 6) {
    return;
  }

  state.step += 1;

  render();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================================
   STATE HELPERS
   ========================================================= */

function getNeedsContact() {
  return (
    state.data.earlyAccess === "Yes" ||
    state.data.upcomingEvent === "Yes"
  );
}


function toggleEventType(value) {
  const exists =
    state.data.eventTypes.includes(value);

  if (exists) {
    state.data.eventTypes =
      state.data.eventTypes.filter(
        (item) => item !== value
      );
  } else {
    state.data.eventTypes = [
      ...state.data.eventTypes,
      value
    ];
  }

  render();
}


function chooseSingle(
  key,
  value,
  advance = true
) {
  state.data[key] = value;

  if (!advance) {
    render();
    return;
  }

  setTimeout(() => {
    if (state.step < 6) {
      state.step += 1;
      render();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, 180);
}


/* =========================================================
   CHOICE BUTTON
   ========================================================= */

function buildChoiceButton(
  choice,
  selected = false
) {
  const label =
    choice[state.lang] || "";

  const icon =
    choice.icon || "";

  const checkmark = selected
    ? `
      <svg
        viewBox="0 0 20 20"
        aria-hidden="true"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        stroke-width="2.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5 10.5l3 3 7-7"/>
      </svg>
    `
    : "";

  return `
    <button
      type="button"
      class="choice ${selected ? "is-selected" : ""}"
      data-value="${escapeHtml(choice.value)}"
      aria-pressed="${selected}"
    >
      <span class="choice-icon">
        ${icon}
      </span>

      <span>
        ${escapeHtml(label)}
      </span>

      ${checkmark}
    </button>
  `;
}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* =========================================================
   RENDER SURVEY STEP
   ========================================================= */

function renderStep() {
  const t = getT();

  const stepTitles = [
    t.q1,
    t.q2,
    t.q3,
    t.q4,
    t.earlyQuestion,
    t.upcoming
  ];

  const title =
    stepTitles[state.step - 1] ||
    t.upcoming;

  const stepNum = $("#stepNum");
  const progress = $("#progBar");
  const questionTitle = $("#qTitle");
  const eyebrow = $("#eyeP");
  const choices = $("#choicesDiv");

  if (stepNum) {
    stepNum.textContent =
      String(state.step).padStart(2, "0");
  }

  if (progress) {
    progress.style.width =
      `${(state.step / 6) * 100}%`;
  }

  if (questionTitle) {
    questionTitle.textContent = title;
  }

  if (eyebrow) {
    eyebrow.textContent =
      state.step === 1
        ? t.select
        : `0${state.step} / 06`;
  }

  let html = "";

  /* STEP 1 */

  if (state.step === 1) {
    html = `
      <div class="choices grid">
        ${eventTypesData
          .map((choice) =>
            buildChoiceButton(
              choice,
              state.data.eventTypes.includes(
                choice.value
              )
            )
          )
          .join("")}
      </div>
    `;
  }

  /* STEP 2 */

  else if (state.step === 2) {
    html = `
      <div class="choices grid">
        ${photoBehaviorData
          .map((choice) =>
            buildChoiceButton(
              choice,
              state.data.photoBehavior ===
                choice.value
            )
          )
          .join("")}
      </div>
    `;
  }

  /* STEP 3 */

  else if (state.step === 3) {
    html = `
      <div class="choices grid">
        ${problemsData
          .map((choice) =>
            buildChoiceButton(
              choice,
              state.data.photoProblem ===
                choice.value
            )
          )
          .join("")}
      </div>
    `;
  }

  /* STEP 4 */

  else if (state.step === 4) {
    html = `
      <div class="choices grid">
        ${interestData
          .map((choice) =>
            buildChoiceButton(
              choice,
              state.data.productInterest ===
                choice.value
            )
          )
          .join("")}
      </div>
    `;
  }

  /* STEP 5 */

  else if (state.step === 5) {
    html = `
      <p class="intro">
        ${escapeHtml(t.earlyIntro)}
      </p>

      <div class="choices grid">

        ${buildChoiceButton(
          {
            icon: "🚀",
            ar: "أيوه — خليني أجرب",
            en: "YES — Let me try it",
            value: "Yes"
          },
          state.data.earlyAccess === "Yes"
        )}

        ${buildChoiceButton(
          {
            icon: "⏳",
            ar: translations.ar.maybeLater,
            en: translations.en.maybeLater,
            value: "Maybe later"
          },
          state.data.earlyAccess ===
            "Maybe later"
        )}

      </div>
    `;
  }

  /* STEP 6 */

  else if (state.step === 6) {
    html = `
      <div class="final-step">

        <div class="choices inline">

          ${buildChoiceButton(
            {
              icon: "📅",
              ar: t.yes,
              en: "Yes",
              value: "Yes"
            },
            state.data.upcomingEvent ===
              "Yes"
          )}

          ${buildChoiceButton(
            {
              icon: "⏳",
              ar: t.no,
              en: "Not yet",
              value: "Not yet"
            },
            state.data.upcomingEvent ===
              "Not yet"
          )}

        </div>
    `;

    if (
      state.data.upcomingEvent === "Yes"
    ) {
      html += `
        <label class="field-label">
          ${escapeHtml(t.when)}
        </label>

        <div class="pill-row">

          ${[
            "This month",
            "1–2 months",
            "3–6 months",
            "Later"
          ]
            .map(
              (item) => `
                <button
                  type="button"
                  class="pill ${
                    state.data.eventTiming === item
                      ? "selected"
                      : ""
                  }"
                  data-timing="${escapeHtml(item)}"
                >
                  ${escapeHtml(item)}
                </button>
              `
            )
            .join("")}

        </div>

        <label class="field-label">
          ${escapeHtml(t.guests)}
        </label>

        <div class="pill-row">

          ${[
            "<30",
            "30–50",
            "50–100",
            "100–200",
            "200+"
          ]
            .map(
              (item) => `
                <button
                  type="button"
                  class="pill ${
                    state.data.guestCount === item
                      ? "selected"
                      : ""
                  }"
                  data-guestcount="${escapeHtml(item)}"
                >
                  ${escapeHtml(item)}
                </button>
              `
            )
            .join("")}

        </div>

        <aside class="founding">

          <b>FOUNDING EVENTS</b>

          <p>
            ${escapeHtml(t.founding)}
          </p>

          <strong>
            ${escapeHtml(t.discount)}
          </strong>

        </aside>
      `;
    }

    if (getNeedsContact()) {
      html += `
        <div class="contact">

          <p>
            ${escapeHtml(t.contact)}
          </p>

          <label for="nameInput">
            <span>
              ${escapeHtml(t.name)}
            </span>

            <input
              type="text"
              name="given-name"
              id="nameInput"
              value="${escapeHtml(state.data.name)}"
              autocomplete="given-name"
              autocapitalize="words"
              spellcheck="false"
              maxlength="80"
            >
          </label>

          <label for="whatsappInput">
            <span>
              ${escapeHtml(t.whatsapp)}
            </span>

            <input
              type="tel"
              name="tel"
              id="whatsappInput"
              value="${escapeHtml(state.data.whatsapp)}"
              inputmode="tel"
              autocomplete="tel"
              maxlength="24"
            >
          </label>

          <label for="instagramInput">
            <span>
              ${escapeHtml(t.instagram)}
            </span>

            <input
              type="text"
              id="instagramInput"
              value="${escapeHtml(state.data.instagram)}"
              autocomplete="off"
            >
          </label>

          ${
            state.contactError
              ? `
                <p class="error">
                  ${escapeHtml(
                    state.contactError
                  )}
                </p>
              `
              : ""
          }

        </div>
      `;
    }

    html += `
      </div>
    `;
  }

  if (choices) {
    choices.innerHTML = html;
  }

  attachStepHandlers();
  updateFooter();
}


/* =========================================================
   STEP EVENT HANDLERS
   ========================================================= */

function attachStepHandlers() {
  /* Choice buttons */

  $$(".choices .choice").forEach(
    (button) => {
      button.addEventListener(
        "click",
        () => {
          const value =
            button.dataset.value;

          if (!value) {
            return;
          }

          switch (state.step) {
            case 1:
              toggleEventType(value);
              break;

            case 2:
              chooseSingle(
                "photoBehavior",
                value
              );
              break;

            case 3:
              chooseSingle(
                "photoProblem",
                value
              );
              break;

            case 4:
              chooseSingle(
                "productInterest",
                value
              );
              break;

            case 5:
              chooseSingle(
                "earlyAccess",
                value
              );
              break;

            case 6:
              state.data.upcomingEvent =
                value;

              state.contactError = "";

              render();
              break;
          }
        }
      );
    }
  );


  /* Timing pills */

  $$(".pill").forEach(
    (button) => {
      button.addEventListener(
        "click",
        () => {
          if (button.dataset.timing) {
            state.data.eventTiming =
              button.dataset.timing;
          }

          if (button.dataset.guestcount) {
            state.data.guestCount =
              button.dataset.guestcount;
          }

          render();
        }
      );
    }
  );


  /*
   * IMPORTANT:
   * Do NOT call render() while typing.
   * Doing so destroys the input and causes
   * focus/cursor problems.
   */

  const nameInput = $("#nameInput");
  const whatsappInput = $("#whatsappInput");
  const instagramInput = $("#instagramInput");

  if (nameInput) {
    nameInput.addEventListener(
      "input",
      (event) => {
        state.data.name =
          event.target.value;

        if (state.contactError) {
          state.contactError = "";
        }
      }
    );
  }

  if (whatsappInput) {
    whatsappInput.addEventListener(
      "input",
      (event) => {
        state.data.whatsapp =
          event.target.value;

        if (state.contactError) {
          state.contactError = "";
        }
      }
    );
  }

  if (instagramInput) {
    instagramInput.addEventListener(
      "input",
      (event) => {
        state.data.instagram =
          event.target.value;
      }
    );
  }
}


/* =========================================================
   FOOTER
   ========================================================= */

function updateFooter() {
  const t = getT();

  const backButton = $("#backBtn");
  const nextButton = $("#nextBtn");

  if (!backButton || !nextButton) {
    return;
  }

  /* BACK BUTTON */

  backButton.disabled =
    state.step === 1;

  backButton.innerHTML =
    state.lang === "ar"
      ? `
        <svg
          class="rtl-arrow"
          viewBox="0 0 24 24"
          aria-hidden="true"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          stroke-width="2.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M9 18l6-6-6-6"/>
        </svg>

        <span>
          ${escapeHtml(t.back)}
        </span>
      `
      : `
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          stroke-width="2.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M15 18l-6-6 6-6"/>
        </svg>

        <span>
          ${escapeHtml(t.back)}
        </span>
      `;


  /* NEXT / SUBMIT BUTTON */

  if (state.step === 1) {
    nextButton.type = "button";

    nextButton.disabled =
      state.data.eventTypes.length === 0;

    nextButton.innerHTML = `
      <span>
        ${escapeHtml(t.next)}
      </span>

      <svg
        class="rtl-arrow"
        viewBox="0 0 24 24"
        aria-hidden="true"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M15 18l-6-6 6-6"/>
      </svg>

      <svg
        class="ltr-arrow"
        viewBox="0 0 24 24"
        aria-hidden="true"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M9 18l6-6-6-6"/>
      </svg>
    `;

    return;
  }


  if (state.step === 6) {
    nextButton.type = "submit";

    nextButton.disabled =
      !state.data.upcomingEvent ||
      state.submitting;

    const buttonText =
      state.submitting
        ? t.submitting
        : state.data.upcomingEvent === "Yes"
        ? t.request
        : t.submit;

    nextButton.innerHTML = buildNextButtonHtml(buttonText);

    return;
  }

  nextButton.type = "button";
  nextButton.disabled = false;
  nextButton.innerHTML = buildNextButtonHtml(t.next);
}

function buildNextButtonHtml(label) {
  return `
    <span>
      ${escapeHtml(label)}
    </span>

    <svg
      class="rtl-arrow"
      viewBox="0 0 24 24"
      aria-hidden="true"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      stroke-width="2.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M15 18l-6-6 6-6"/>
    </svg>

    <svg
      class="ltr-arrow"
      viewBox="0 0 24 24"
      aria-hidden="true"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      stroke-width="2.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M9 18l6-6-6-6"/>
    </svg>
  `;
}


/* =========================================================
   VALIDATION
   ========================================================= */

function validateContact() {
  if (!getNeedsContact()) {
    return true;
  }

  const name =
    state.data.name.trim();

  const whatsapp =
    state.data.whatsapp.trim();

  const nameLooksValid =
    /^[\p{L}\p{M}][\p{L}\p{M}'’ -]{0,79}$/u.test(name);
  const phoneDigits = whatsapp.replace(/\D/g, "");
  const phoneLooksValid =
    /^[+]?[(\d][\d\s().-]*$/.test(whatsapp) &&
    phoneDigits.length >= 7 &&
    phoneDigits.length <= 15;

  if (!nameLooksValid || !phoneLooksValid) {
    state.contactError =
      getT().required;

    render();

    return false;
  }

  return true;
}


/* =========================================================
   SUBMIT
   ========================================================= */

function validateAndSubmit() {
  if (state.submitting) {
    return;
  }

  if (!validateContact()) {
    return;
  }

  state.contactError = "";
  state.error = "";
  state.submitting = true;

  hideError();

  render();

  submitSurvey();
}


/* =========================================================
   SEND TO GOOGLE APPS SCRIPT
   ========================================================= */

async function submitSurvey() {
  try {
    /* Check URL */

    if (
      !GOOGLE_SCRIPT_URL ||
      GOOGLE_SCRIPT_URL.includes(
        "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL"
      )
    ) {
      throw new Error(
        "Google Apps Script URL is not configured."
      );
    }


    /* Prepare data */

    const payload = {
      ...state.data,

      timestamp:
        new Date().toISOString(),

      eventTypes:
        Array.isArray(
          state.data.eventTypes
        )
          ? state.data.eventTypes.join(
              ", "
            )
          : state.data.eventTypes || ""
    };


    console.log(
      "[SORA] Sending survey..."
    );

    console.log(
      "[SORA] URL:",
      GOOGLE_SCRIPT_URL
    );

    console.log(
      "[SORA] Payload:",
      payload
    );


    /*
     * Submit through the hidden iframe instead of fetch.
     * Apps Script does not provide CORS headers, so the browser
     * blocks fetch responses even when the POST reaches Google.
     */
    const submitForm =
      document.getElementById("googleSubmitForm");
    const submitFrame =
      document.getElementById("googleSubmitFrame");

    if (!submitForm || !submitFrame) {
      throw new Error(
        "The hidden Google submission form is missing."
      );
    }

    submitForm.action = GOOGLE_SCRIPT_URL;
    submitForm.method = "POST";
    submitForm.enctype = "application/x-www-form-urlencoded";
    submitForm.replaceChildren();

    Object.entries(payload).forEach(
      ([key, value]) => {
        if (value === undefined || value === null) {
          return;
        }

        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = String(value);
        submitForm.appendChild(input);
      }
    );

    await new Promise((resolve, reject) => {
      let completed = false;
      let requestStarted = false;
      const finish = (callback, result) => {
        if (completed) return;
        completed = true;
        window.clearTimeout(timeoutId);
        submitFrame.removeEventListener("load", handleLoad);
        callback(result);
      };
      const handleLoad = () => {
        if (requestStarted) finish(resolve);
      };
      const timeoutId = window.setTimeout(
        () => finish(
          reject,
          new Error("Google Apps Script did not return a response. Check the latest execution in Apps Script.")
        ),
        30000
      );

      submitFrame.addEventListener("load", handleLoad);

      try {
        requestStarted = true;
        submitForm.submit();
      } catch (error) {
        finish(reject, error);
      }
    });


    /* SUCCESS */

    console.log(
      "[SORA] Survey submitted successfully."
    );

    state.submitting = false;
    state.error = "";
    state.view = "success";

    hideError();

    render();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  } catch (error) {

    console.error(
      "[SORA] Submission failed:",
      error
    );

    state.submitting = false;

    state.error =
      error?.message ||
      getT().error;

    showError(
      state.error
    );

    render();
  }
}


/* =========================================================
   ERROR UI
   ========================================================= */

function showError(message) {
  const errorMessage =
    $("#errorMsg");

  const errorToast =
    $("#errorToast");

  if (errorMessage) {
    errorMessage.textContent =
      message ||
      getT().error;
  }

  if (errorToast) {
    errorToast.style.display =
      "flex";
  }
}


function hideError() {
  const errorToast =
    $("#errorToast");

  if (errorToast) {
    errorToast.style.display =
      "none";
  }
}


/* =========================================================
   LANDING COPY
   ========================================================= */

function renderLandingCopy() {
  const t = getT();

  const heroTitle = $("#heroTitle");
  const heroHelp = $("#heroHelp");
  const startBtnText = $("#startBtnText");
  const heroMeta = $("#heroMeta");
  const hookTitle = $("#hookTitle");
  const hookSubtitle = $("#hookSubtitle");
  const tellUsText = $("#tellUsText");
  const homeText = $("#homeText");
  const retryBtn = $("#retryBtn");

  if (heroTitle) {
    heroTitle.textContent = t.hero;
  }

  if (heroHelp) {
    heroHelp.textContent = t.help;
  }

  if (startBtnText) {
    startBtnText.textContent = t.start;
  }

  if (heroMeta) {
    heroMeta.innerHTML =
      state.lang === "ar"
        ? `دقيقتين <bdi dir="ltr">•</bdi> من غير تسجيل <bdi dir="ltr">•</bdi> رأيك يهمنا`
        : `2 min <bdi dir="ltr">•</bdi> No sign-up <bdi dir="ltr">•</bdi> Your opinion matters`;
  }

  if (hookTitle) {
    hookTitle.textContent = t.hook;
  }

  if (hookSubtitle) {
    hookSubtitle.textContent = t.hookSmall;
  }

  if (tellUsText) {
    tellUsText.textContent = t.landingTell;
  }

  if (homeText) {
    homeText.textContent = t.backHome;
  }

  if (retryBtn) {
    retryBtn.textContent = t.retry;
  }
}


/* =========================================================
   MAIN RENDER
   ========================================================= */

function render() {
  const t = getT();

  document.body.classList.toggle(
    "landing-view",
    state.view === "landing"
  );

  /* Language button */

  const languageSpans =
    $$("#langBtn span");

  if (languageSpans.length >= 2) {
    languageSpans[0].classList.toggle(
      "active",
      state.lang === "ar"
    );

    languageSpans[1].classList.toggle(
      "active",
      state.lang === "en"
    );
  }

  renderLandingCopy();


  /* Landing */

  const landingPage =
    $("#landingPage");

  const surveyPage =
    $("#surveyPage");

  const successPage =
    $("#successPage");

  if (state.view === "landing") {

    if (landingPage) {
      landingPage.style.display =
        "block";
    }

    if (surveyPage) {
      surveyPage.style.display =
        "none";
    }

    if (successPage) {
      successPage.style.display =
        "none";
    }

    return;
  }


  /* Survey */

  if (state.view === "survey") {

    if (landingPage) {
      landingPage.style.display =
        "none";
    }

    if (surveyPage) {
      surveyPage.style.display =
        "block";
    }

    if (successPage) {
      successPage.style.display =
        "none";
    }

    renderStep();

    return;
  }


  /* Success */

  if (state.view === "success") {

    if (landingPage) {
      landingPage.style.display =
        "none";
    }

    if (surveyPage) {
      surveyPage.style.display =
        "none";
    }

    if (successPage) {
      successPage.style.display =
        "block";
    }

    const successTitle =
      $("#successTitle");

    const successMessage =
      $("#successMsg");

    if (successTitle) {
      successTitle.textContent =
        t.in;
    }

    if (successMessage) {
      successMessage.textContent =
        t.thanks;
    }

  }
}


/* =========================================================
   INITIALIZE
   ========================================================= */

function initializeApp() {

  /* Logo navigation */

  $$(".brand-mark").forEach((logo) => {
    logo.addEventListener("click", goHome);
    logo.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        goHome();
      }
    });
  });

  /* Set initial language */

  document.documentElement.lang =
    state.lang;

  document.documentElement.dir =
    state.lang === "ar"
      ? "rtl"
      : "ltr";

  const app = $("#app");

  if (app) {
    app.setAttribute(
      "dir",
      state.lang === "ar"
        ? "rtl"
        : "ltr"
    );
  }


  /* Language button */

  const langButton =
    $("#langBtn");

  if (langButton) {
    langButton.addEventListener(
      "click",
      () => {
        setLanguage(
          state.lang === "ar"
            ? "en"
            : "ar"
        );
      }
    );
  }


  /* Start survey */

  const startButton =
    $("#startBtn");

  if (startButton) {
    startButton.addEventListener(
      "click",
      goToSurvey
    );
  }


  /* Tell us button */

  const tellUsButton =
    $("#tellUsBtn");

  if (tellUsButton) {
    tellUsButton.addEventListener(
      "click",
      goToSurvey
    );
  }


  /* Back */

  const backButton =
    $("#backBtn");

  if (backButton) {
    backButton.addEventListener(
      "click",
      goBack
    );
  }


  /* Next */

  const nextButton =
    $("#nextBtn");

  if (nextButton) {
    nextButton.addEventListener(
      "click",
      (event) => {

        /*
         * If this is the submit button,
         * let the form submit handler
         * handle everything.
         */

        if (
          nextButton.type ===
          "submit"
        ) {
          return;
        }

        event.preventDefault();

        goNext();
      }
    );
  }


  /* Survey form */

  const surveyForm =
    $("#surveyForm");

  if (surveyForm) {
    surveyForm.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();

        if (
          state.submitting
        ) {
          return;
        }

        validateAndSubmit();
      }
    );
  }


  /* Retry */

  const retryButton =
    $("#retryBtn");

  if (retryButton) {
    retryButton.addEventListener(
      "click",
      () => {
        hideError();

        if (
          state.submitting
        ) {
          return;
        }

        validateAndSubmit();
      }
    );
  }


  /* Home */

  const homeButton =
    $("#homeBtn");

  if (homeButton) {
    homeButton.addEventListener(
      "click",
      goHome
    );
  }


  /* First render */

  render();
}


/* =========================================================
   START APP
   ========================================================= */

if (
  document.readyState ===
  "loading"
) { 
  document.addEventListener(
    "DOMContentLoaded",
    initializeApp
  );
} else {
  initializeApp();
}
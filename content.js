window.addEventListener("message", (event) => {
  if (event.data.type === "AUTO_FILL_FORM") {
    fillByQuestion();
    autoCheckSingleCheckbox();
  }
});

function fillByQuestion() {
  const questions = document.querySelectorAll('[role="listitem"]');

  const answers = {
    name: "CHO YU CHEUNG",
    id: "H23208444",
    phone: "0932935930"
  };

  questions.forEach(question => {
    const titleEl = question.querySelector('[role="heading"]');
    const input = question.querySelector('input, textarea');

    if (!titleEl || !input || input.value) return;

    const title = titleEl.innerText.toLowerCase();

    if (
      title.includes("ชื่อ") ||
      title.includes("name")
    ) {
      setValue(input, answers.name);
    }

    else if (
      title.includes("บัตรประชาชน") ||
      title.includes("พาสปอร์ต") ||
      title.includes("identification") ||
      title.includes("passport")
    ) {
      setValue(input, answers.id);
    }

    else if (
      title.includes("เบอร์") ||
      title.includes("phone")
    ) {
      setValue(input, answers.phone);
    }
  });
}

function setValue(input, value) {
  input.focus();
  input.value = value;
  input.dispatchEvent(new Event("input", { bubbles: true }));
}

function autoCheckSingleCheckbox() {
  const questions = document.querySelectorAll('[role="listitem"]');

  questions.forEach(q => {
    const options = q.querySelectorAll(
      '[role="checkbox"], [role="radio"]'
    );

    if (options.length === 1) {
      const option = options[0];
      if (option.getAttribute("aria-checked") !== "true") {
        option.click();
      }
    }
  });
}

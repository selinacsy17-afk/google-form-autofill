function fillByLabel(labelText, value) {
  const labels = document.querySelectorAll('div[role="heading"], label, span');

  for (const label of labels) {
    if (label.innerText.includes(labelText)) {
      const container = label.closest('div');
      if (!container) continue;

      const input = container.querySelector('input[type="text"], textarea');
      if (input) {
        input.value = value;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        return true;
      }
    }
  }
  return false;
}

function clickRadioByText(text) {
  const options = document.querySelectorAll('div[role="radio"]');
  for (const opt of options) {
    if (opt.innerText.includes(text)) {
      opt.click();
      return true;
    }
  }
  return false;
}

window.addEventListener("load", () => {
  setTimeout(() => {

    const DATA = {
      name: "CHO YU CHEUNG",
      id: "H23208444",
      phone: "0932935930"
    };

    fillByLabel("First Name", DATA.name);
    fillByLabel("ชื่อ-นามสกุล", DATA.name);

    fillByLabel("Identification Card", DATA.id);
    fillByLabel("Passport", DATA.id);

    fillByLabel("Phone Number", DATA.phone);
    fillByLabel("เบอร์โทรศัพท์", DATA.phone);

    clickRadioByText("Yes, I have reviewed");

    console.log("✅ Google Form auto filled");

  }, 2000); 
});

const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
  showRealtimeResult();
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
  showRealtimeResult();
}

function calculateResult() {
  try {
    if (display.value.trim() === "") {
      return;
    }
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function showRealtimeResult() {
  try {
    if (display.value === "") {
      return;
    }

    let expression = display.value;

    if (/[+\-*/%]$/.test(expression)) {
      return;
    }

    let result = eval(expression);
    console.log("Realtime Result:", result);
  } catch (error) {
    // ignore temporary invalid input
  }
}

// Keyboard Support
document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key) || key === "." || key === "+" || key === "-" || key === "*" || key === "/" || key === "%") {
    appendValue(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});


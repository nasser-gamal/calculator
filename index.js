let button = document.querySelectorAll("button");
output = document.querySelector(".display .nums");
result = document.querySelector(".display .result");

button.forEach((btn) => {
  btn.addEventListener("click", check);
});

function check() {
  if (this.innerHTML == "AC") {
    output.innerHTML = "";
      result.innerHTML = "0";
      output.style.animation = ""
      result.style.animation = "";
    return;
  }

  if (this.innerHTML == "DEL") {
      output.innerHTML = output.innerHTML.substr(0, output.innerHTML.length - 1);

    return;
  }

  if (output.innerHTML.length == "0") {
    result.innerHTML = "0";
  }

  if (this.innerHTML == "=") {
      result.innerHTML = eval(output.innerHTML);
      output.style.animation = "smaller 0.3s ease-in-out "
      output.style.animationFillMode = "forwards";
      result.style.animation = "biger 0.3s ease-in-out ";
      result.style.animationFillMode = "forwards";
  } else {
    output.innerHTML += this.innerHTML;
  }
}

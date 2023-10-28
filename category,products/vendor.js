const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const progressEl = document.querySelector(".progress-bar-front");
const stepsEl = document.querySelectorAll(".step");
const formSteps = document.querySelectorAll(".form-step");

let currentChecked = 1;

nextEl.addEventListener("click", () => {
  currentChecked++;
  if (currentChecked > stepsEl.length) {
    currentChecked = stepsEl.length;
  }
  updateStepProgress();
});

prevEl.addEventListener("click", () => {
  currentChecked--;
  if (currentChecked < 1) {
    currentChecked = 1;
  }
  updateStepProgress();
});

function updateStepProgress() {
  stepsEl.forEach((stepEl, idx) => {
    if (idx < currentChecked) {
      stepEl.classList.add("checked");
      stepEl.innerHTML = `
        <i class="fas fa-check"></i>
        <small>
          ${idx === 0
            ? "Start"
            : idx === stepsEl.length - 1
            ? "Final"
            : "Step " + idx}
        </small>
      `;
    } else {
      stepEl.classList.remove("checked");
      stepEl.innerHTML = `
        <i class="fas fa-times"></i>
      `;
    }
  });

  formSteps.forEach((formStep, idx) => {
    if (idx === currentChecked - 1) {
      formStep.style.display = "block";
    } else {
      formStep.style.display = "none";
    }
  });

  const checkedNumber = document.querySelectorAll(".checked");

  progressEl.style.width =
    ((checkedNumber.length - 1) / (stepsEl.length - 1)) * 100 + "%";

  if (currentChecked === 1) {
    prevEl.disabled = true;
  } else if (currentChecked === stepsEl.length) {
    nextEl.disabled = true;
  } else {
    prevEl.disabled = false;
    nextEl.disabled = false;
  }
}

updateStepProgress(); // Initialize the progress bar

document.getElementById('upload-icon').addEventListener('click', function() {
  document.getElementById('profile-pic').click();
});

document.getElementById('profile-pic').addEventListener('change', function() {
  const profileImage = document.getElementById('profile-image');
  const uploadIcon = document.getElementById('upload-icon');
  const file = this.files[0];
  if (file) {
    uploadIcon.style.display = 'none'; // Hide the camera icon
    const reader = new FileReader();
    reader.onload = function(e) {
      profileImage.src = e.target.result;
      profileImage.style.display = 'block'; // Show the image
    };
    reader.readAsDataURL(file);
  } else {
    uploadIcon.style.display = 'block'; // Show the camera icon
    profileImage.style.display = 'none'; // Hide the image
    profileImage.src = '';
  }
});
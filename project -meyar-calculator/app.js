function calcGpa() {
  const rows = document.querySelectorAll("#subjectsBody tr");
  let totalPoints = 0;
  let totalHours = 0;
  let maxQuality = 0;

  rows.forEach((row) => {
    const hoursInput = row.querySelector(".hours");
    const gradeSelect = row.querySelector(".grade");
    const qualityCell = row.querySelector(".quality");
    const pointsCell = row.querySelector(".points");

    const hours = Number(hoursInput.value) || 0;
    const quality = Number(gradeSelect.value) || 0;
    const points = hours * quality;

    qualityCell.textContent = quality.toFixed(2);
    pointsCell.textContent = points.toFixed(2);

    totalHours += hours;
    totalPoints += points;
    if (quality > maxQuality) maxQuality = quality;
  });

  const gpa = totalHours ? totalPoints / totalHours : 0;

  document.getElementById("totalPoints").textContent = totalPoints.toFixed(2);
  document.getElementById("totalHours").textContent = totalHours;
  document.getElementById("subjectsCount").textContent = rows.length;
  document.getElementById("finalGpa").textContent = gpa.toFixed(2);
  document.getElementById("currentGpa").textContent = gpa.toFixed(2);

  // تحويل المعدل إلى وصف
  let text = "";
  if (gpa >= 4.5) text = "ممتاز";
  else if (gpa >= 3.75) text = "جيد جداً";
  else if (gpa >= 2.75) text = "جيد";
  else if (gpa >= 2.0) text = "مقبول";
  else text = "ضعيف";

  document.getElementById("finalText").textContent = text;

  // أعلى تقدير
  let maxGradeText = "";
  switch (maxQuality) {
    case 4.75:
      maxGradeText = "A+";
      break;
    case 4.0:
      maxGradeText = "A";
      break;
    case 3.5:
      maxGradeText = "B+";
      break;
    case 3.0:
      maxGradeText = "B";
      break;
    case 2.5:
      maxGradeText = "C+";
      break;
    case 2.0:
      maxGradeText = "C";
      break;
    case 1.0:
      maxGradeText = "D";
      break;
    default:
      maxGradeText = "F";
  }
  document.getElementById("maxGrade").textContent = maxGradeText;
}

function resetForm() {
  const rows = document.querySelectorAll("#subjectsBody tr");
  rows.forEach((row, index) => {
    row.querySelector("input[type='text']").value = `مادة ${index + 1}`;
    const hoursInput = row.querySelector(".hours");
    const gradeSelect = row.querySelector(".grade");
    const qualityCell = row.querySelector(".quality");
    const pointsCell = row.querySelector(".points");

    hoursInput.value = index === 2 ? 2 : 3; // نفس المثال
    const defaultValues = [4.75, 4.0, 3.5, 3.0];
    gradeSelect.value = defaultValues[index];

    const hours = Number(hoursInput.value);
    const quality = Number(gradeSelect.value);
    const points = hours * quality;

    qualityCell.textContent = quality.toFixed(2);
    pointsCell.textContent = points.toFixed(2);
  });

  calcGpa();
}

document.getElementById("calcBtn").addEventListener("click", calcGpa);
document.getElementById("resetBtn").addEventListener("click", resetForm);

// حساب أولي عند فتح الصفحة
window.addEventListener("load", () => {
  calcGpa();
});

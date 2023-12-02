document.addEventListener("DOMContentLoaded", function() {
  const numQuestions = 10; // Adjust as needed

  for (let i = 1; i <= numQuestions; i++) {
    const questionName = `question${i}`;
    addRadioListener(questionName);
  }

  // Add event listener for the submit button
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", calculateTotal);
});

function addRadioListener(questionName) {
  const radios = document.querySelectorAll(`input[name="${questionName}"]`);

  radios.forEach(radio => {
    radio.addEventListener("change", function() {
      handleRadioChange(questionName, this.value);
    });
  });
}

function handleRadioChange(questionName, selectedOption) {
  console.log(`${questionName}: ${selectedOption}`);
  // Your code for each question and selected option
  // Example: if (questionName === "question1" && selectedOption === "option1") { /* Your code here */ }
}

function calculateTotal() {
  let total = 0;

  // Replace the following loop with your logic for calculating the total based on selected options
  for (let i = 1; i <= 10; i++) {
    const questionName = `question${i}`;
    const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);

    if (selectedOption) {
      // Example: Add numeric values for each selected option
      switch (selectedOption.value) {
        case "option1":
          total += 1;
          break;
        case "option2":
          total += 2;
          break;
        case "option3":
          total += 3;
          break;
        case "option4":
          total += 4;
          break;
        // Add cases for additional options as needed
      }
    }
  }
  

  console.log(`Total: ${total}`);
  // Add your code to display or use the total value as needed
  if (total == 10){
    console.log("YES");
    alert("Result: Yes. How are you not an entreprenuer already? Unless you cheated. Essentially you are an ideal candidate to start/run a business. ");
  } else if (total < 20 && total > 10) {
    alert("Result: Possibly. You got some good qualities for this sort of thing. You also have some flaws that wouldn't be great for a business. However, nobody's perfect. Give it a shot.");
    console.log("Maybe");
  } else if(total < 30 && total > 20) {
    alert("Results: Likely not. It's not an easy thing to do, but with some time and a lot of trial and error, it should work out for you in the end.");
    console.log("Unsure");
  }else if (total < 40 && total > 30) {
    console.log("NO");
    alert("Results: I advise against it. Running a business is often very difficult, and not everyone is mean to be one. However, nothing is impossible.");
  }else{
    alert("Please Answer All Questions")
  }
}

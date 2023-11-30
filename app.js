const data = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

let button = document.getElementById("test");
button.addEventListener("click", (event) => {
  // button.style.backgroundColor = "var(--Off-black)";
  //current day data
  let x = new Date();
  let currentDay = x.getDate();
  let currentMonth = x.getMonth() + 1;
  let currentYear = x.getFullYear();

  //birth Data
  let birthDay = document.querySelector("#day").value;
  let birthMonth = document.querySelector("#month").value;
  let birthYear = document.querySelector("#year").value;
  console.log(currentMonth);
  if (birthDay === "" && birthMonth === "" && birthYear === "") {
    let label = document.querySelectorAll("label");
    for (let i = 0; i<label.length; i++) {
      label[i].style.color = "var(--Light-red)";
    }
    let p = document.querySelectorAll("p");
    for (let i=0; i<p.length; i++) {
      p[i].innerText = "This field is required";
      
    }
    let input = document.querySelectorAll("input");
    for (let i=0; i<input.length; i++) {
       input[i].style.border = "1px solid var(--Light-red)"      
    }
    
    
    
  } else {
    let label = document.querySelectorAll("label");
    for (let i = 0; i<label.length; i++) {
      label[i].style.color = "";
    }
    let p = document.querySelectorAll("p");
    for (let i=0; i<p.length; i++) {
      p[i].innerText = "";
      
    }
    let input = document.querySelectorAll("input");
    for (let i=0; i<input.length; i++) {
       input[i].style.border = ""      
    }
    //logical age calculation
    let year = currentYear - birthYear;
    let month = currentMonth - birthMonth;
    let day = currentDay - birthDay;
    if (currentMonth < birthMonth) {
      year -= 1;
      month += 12;
    }
    if (currentDay < birthDay) {
      month -= 1;
      day += data[birthMonth];
    }
    let yyyy = document.querySelector("#yyyy");
    yyyy.innerText = year;
    let mm = document.querySelector("#mm");
    mm.innerText = month;
    let dd = document.querySelector("#dd");
    dd.innerText = day;
    
  }
});

let input1 = document.querySelector("#day");
let input2 = document.querySelector("#month");
let input3 = document.querySelector("#year");

input1.addEventListener("input", ()=> {
  if(+input1.value > 31) {
    let p = document.getElementById("d");
    p.innerText = "Must be a valid day"
  } else {
    let p = document.getElementById("d");
    p.innerText = "";
  }
});

input2.addEventListener("input", ()=> {
  if(+input2.value > 12) {
    let p = document.getElementById("m");
    p.innerText = "Must be a valid month"
  } else {
    let p = document.getElementById("m");
    p.innerText = "";
  }
});

input3.addEventListener("input", ()=> {
  if(+input3.value > 2023) {
    let p = document.getElementById("y");
    p.innerText = "Must be in the past"
  } else {
    let p = document.getElementById("y");
    p.innerText = "";
  }
});
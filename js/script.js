const playerRock = document.querySelector("#player .box-rock"),
  playerPaper = document.querySelector("#player .box-paper"),
  playerScissor = document.querySelector("#player .box-scissor"),
  computerRock = document.querySelector("#computer .box-rock"),
  computerPaper = document.querySelector("#computer .box-paper"),
  computerScissor = document.querySelector("#computer .box-scissor"),
  panel = document.querySelector(".panel"),
  boxes = document.querySelectorAll("#player button"),
  boxesComputer = document.querySelectorAll("#computer .box"),
  refresh = document.querySelector(".refresh");

// Start
var start = function () {
  // Initial condition
  panel.style.color = "#bd0000";

  for (let i = 0; i < 3; i++) {
    boxes[i].classList.add("box-hover");
    boxes[i].classList.add("box-active");
    // boxes[i].classList.toggle("box-style");
  }

  refresh.classList.add("box-hover");
  refresh.classList.add("box-active");
  refresh.classList.add("box");
  // End of initial condition

  // function to get computer's choice
  const getComputer = function () {
    const comp = Math.floor(Math.random() * 3) + 1;
    if (comp == 1) {
      return "rock";
    } else if (comp == 2) {
      return "paper";
    } else {
      return "scissor";
    }
  };
  // end of computer's choice function

  // Rules
  const draw = "draw",
    playerWin = "you<br>win",
    computerWin = "com<br>win";

  const rules = function (comp, player) {
    if (comp == player) {
      return draw;
    } else if (player == "rock" && comp == "scissor") {
      return playerWin;
    } else if (player == "paper" && comp == "rock") {
      return playerWin;
    } else if (player == "scissor" && comp == "paper") {
      return playerWin;
    } else {
      return computerWin;
    }
  };
  // end of rules

  // function to make boxes
  const box = function (element) {
    // element.addEventListener("mouseout", function () {
    //   element.style.backgroundColor = "#c4c4c4";
    // });
    element.style.backgroundColor = "#c4c4c4";
    element.style.borderRadius = "10px";
    element.style.width = "100px";
    element.style.boxShadow = "0 0 5px 5px rgba(0, 0, 0, 0.3)";
  };
  // end of boxes function

  // Mix
  const mix = function () {};

  // Engine v-2 --> for all player's options
  boxes.forEach(function (i) {
    i.addEventListener("click", function () {
      const computer = getComputer();
      const player = i.querySelector("img").className;
      const generate = rules(computer, player);
      console.log("comp:" + computer);
      console.log("player:" + player);
      console.log("hasil:" + generate);

      //   image computer
      boxesComputer.forEach(function (i) {
        i.style.backgroundColor = "#9c835f";
        i.style.boxShadow = "none";
        i.style.borderRadius = "none";
        i.style.width = "auto";
      });
      var lockedComputer = NaN;
      lockedComputer = document.querySelector("#computer .box-" + computer);
      box(lockedComputer);

      // image player
      box(i);

      // panel
      panel.style.color = "white";
      panel.style.backgroundColor = "#4C9654";
      panel.style.fontSize = "30px";
      panel.style.transform = "rotate(-28.87deg)";
      panel.style.boxShadow = "0 0 5px 5px rgba(0, 0, 0, 0.3)";

      if (generate == playerWin) {
        panel.innerHTML = playerWin;
      } else if (generate == computerWin) {
        panel.innerHTML = computerWin;
      } else {
        panel.innerHTML = draw;
      }
      playerRock.setAttribute("disabled", false);
      playerPaper.setAttribute("disabled", false);
      playerScissor.setAttribute("disabled", false);
    });
  });
  // end of engine v-2
};

start();

refresh.addEventListener("click", function () {
  window.location.reload();
  // boxes.forEach(function (i) {
  //   i.style.backgroundColor = "#9c835f";
  //   i.style.boxShadow = "none";
  // });
  // boxesComputer.forEach(function (i) {
  //   i.style.backgroundColor = "#9c835f";
  //   i.style.boxShadow = "none";
  //   i.style.borderRadius = "none";
  //   i.style.width = "auto";
  // });
  // panel.style.backgroundColor = "#9c835f";
  // panel.style.boxShadow = "none";
  // panel.style.backgroundColor = "#9c835f";
  // panel.style.transform = "rotate(0)";
  // panel.style.fontSize = "100px";
  // panel.innerHTML = "VS";
  // playerRock.removeAttribute("disabled");
  // playerPaper.removeAttribute("disabled");
  // playerScissor.removeAttribute("disabled");
  // start();
});

/*
// Initial condition
panel.style.color = "#bd0000";

for (let i = 0; i < 3; i++) {
  boxes[i].classList.add("box-hover");
  boxes[i].classList.add("box-active");
}
// End of initial condition

// function to get computer's choice
const getComputer = function () {
  const comp = Math.floor(Math.random() * 3) + 1;
  if (comp == 1) {
    return "rock";
  } else if (comp == 2) {
    return "paper";
  } else {
    return "scissor";
  }
};
// end of computer's choice function

// Rules
const draw = "draw",
  playerWin = "you<br>win",
  computerWin = "com<br>win";

const rules = function (comp, player) {
  if (comp == player) {
    return draw;
  } else if (player == "rock" && comp == "scissor") {
    return playerWin;
  } else if (player == "paper" && comp == "rock") {
    return playerWin;
  } else if (player == "scissor" && comp == "paper") {
    return playerWin;
  } else {
    return computerWin;
  }
};
// end of rules

// function to make boxes
const box = function (element) {
  // element.addEventListener("mouseout", function () {
  //   element.style.backgroundColor = "#c4c4c4";
  // });
  element.style.backgroundColor = "#c4c4c4";
  element.style.borderRadius = "10px";
  element.style.width = "100px";
  element.style.boxShadow = "0 0 5px 5px rgba(0, 0, 0, 0.3)";
};
// end of boxes function

// Mix
const mix = function () {};

// Engine v-2 --> for all player's options

boxes.forEach(function (i) {
  i.addEventListener("click", function () {
    const computer = getComputer();
    const player = i.querySelector("img").className;
    const generate = rules(computer, player);
    console.log("comp:" + computer);
    console.log("player:" + player);
    console.log("hasil:" + generate);

    //   image computer
    const lockedComputer = document.querySelector(".computer .box-" + computer);
    box(lockedComputer);

    // image player
    box(i);

    // panel
    if (generate == playerWin) {
      panel.innerHTML = playerWin;
    } else if (generate == computerWin) {
      panel.innerHTML = computerWin;
    } else {
      panel.innerHTML = draw;
    }
    panel.style.color = "white";
    panel.style.backgroundColor = "#4C9654";
    panel.style.fontSize = "30px";
    panel.style.transform = "rotate(-28.87deg)";
    panel.style.boxShadow = "0 0 5px 5px rgba(0, 0, 0, 0.3)";
  });
});
// end of engine v-2
*/

// // Engine v-1 --> for each player's option
// playerRock.addEventListener("click", function () {
//   const computer = getComputer();
//   const player = document.querySelector(".rock").className;
//   const generate = rules(computer, player);
//   console.log("comp:" + computer);
//   console.log("player:" + player);
//   console.log("hasil:" + generate);

//   //   image computer
//   const fixComputer = document.querySelector(".computer .box-" + computer);
//   box(fixComputer);

//   // image player
//   box(playerRock);

//   // panel
//   if (generate == playerWin) {
//     panel.innerHTML = playerWin;
//   } else if (generate == computerWin) {
//     panel.innerHTML = computerWin;
//   } else {
//     panel.innerHTML = draw;
//   }
//   panel.style.color = "white";
//   panel.style.backgroundColor = "#4C9654";
//   panel.style.fontSize = "30px";
//   panel.style.transform = "rotate(-28.87deg)";
// });

// // this is for initial condition
// boxes.forEach(function (i) {
//   i.addEventListener("mouseover", function () {
//     i.style.width = "100px";
//     i.style.backgroundColor = "#c4c4c4";
//     i.style.borderRadius = "10px";
//     i.style.cursor = "pointer";
//     i.style.transition = "0.3s";
//   });
// });

// boxes.forEach(function (i) {
//   i.addEventListener("mouseout", function () {
//     i.style.width = "100px";
//     i.style.backgroundColor = "";
//     i.style.borderRadius = "10px";
//     i.style.cursor = "pointer";
//     i.style.transition = "0.3s";
//   });
// });

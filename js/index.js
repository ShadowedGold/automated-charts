var chaosFactor = 9;

function pickFromArray(table) {
  let dSize = table[table.length - 1].chance;
  let randomDSize = Math.floor(Math.random() * dSize + 1);

  for (let i = 0; i < dSize; i++) {
    if (table[i].chance >= randomDSize) {
      return [randomDSize, table[i].name];
    }
  }
}

function pickFromObject(table) {
  let randomD100 = Math.floor(Math.random() * 100 + 1);

  return [randomD100, table[randomD100]];
}

function pickFromFateChart(odds) {
  let randomD100 = Math.floor(Math.random() * 100 + 1);

  for (let i = 0; i < 3; i++) {
    switch (i) {
      case 0:
        if (fateChart[chaosFactor][odds][i] >= randomD100)
          return [randomD100, "Exceptional Yes"];
        break;
      case 1:
        if (fateChart[chaosFactor][odds][i] >= randomD100)
          return [randomD100, "Yes"];
        break;
      case 2:
        if (fateChart[chaosFactor][odds][i] > randomD100) {
          return [randomD100, "No"];
        } else {
          return [
            randomD100,
            (fateChart[chaosFactor][odds][i] == 101) ? "No" : "Exceptional No"
          ];
        }
        break;
    }
  }
}

function createButton(table, parentEl, section) {
  let button = document.createElement('div');
  button.classList.add("button");

  let name = table.split("_");
  button.innerText = name[name.length - 1]
                     .replace(/([A-Z])/g, ' $1')
                     .replace('And', '&')
                     .replace(/^./, (str) => { return str.toUpperCase(); });

  button.onclick = () => {
    if (section == "fate chart") {
      let result = pickFromFateChart(table);
      results.innerHTML = "<b>" + section.toUpperCase() + " - " +
                          button.innerText + "</b>\n" +
                          result[1] + " (" + result[0] + ")";
    } else if (Array.isArray(window[table])) {
      let result = pickFromArray(window[table]);
      results.innerHTML = "<b>" + section.toUpperCase() + " - " +
                          button.innerText + "</b>\n" +
                          result[1] + " (" + result[0] + ")";
    } else {
      let result = pickFromObject(window[table]);
      results.innerHTML = "<b>" + section.toUpperCase() + " - " +
                          button.innerText + "</b>\n" +
                          result[1] + " (" + result[0] + ")";
    }
  };

  parentEl.appendChild(button);
}

function createSection(name, array) {
  let section = document.createElement('div');
  section.classList.add('section');

  let label = document.createElement('div');
  label.classList.add('label');
  label.innerText = name;
  section.appendChild(label);

  let buttonHolder = document.createElement('div');
  buttonHolder.classList.add('buttonHolder');

  array.forEach((table) => {
    createButton(table, buttonHolder, name);
  });

  section.appendChild(buttonHolder);

  document.body.appendChild(section);
}

/* --- Setting Up Elements ------------------------------- */

let results = document.createElement('div');
results.classList.add("section", "results");
document.body.appendChild(results);

createSection("fate chart", odds);

createSection("general", ["table_randomEventFocus",
                          "table_sceneAdjustment"]);

createSection("actions", table_meaning_actions);

createSection("descriptions", table_meaning_descriptions);

createSection("meaning elements", table_meaning_elements);
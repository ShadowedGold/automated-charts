var chaosFactor = 5;

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

  let answers = [
    '<span class="yes">Exceptional Yes</span>',
    '<span class="yes">Yes</span>',
    '<span class="no">No</span>',
    '<span class="no">Exceptional No</span>',
  ]

  for (let i = 0; i < 3; i++) {
    switch (i) {
      case 0:
        if (fateChart[chaosFactor][odds][i] >= randomD100)
          return [randomD100, answers[0]];
        break;
      case 1:
        if (fateChart[chaosFactor][odds][i] >= randomD100)
          return [randomD100, answers[1]];
        break;
      case 2:
        if (fateChart[chaosFactor][odds][i] > randomD100) {
          return [randomD100, answers[2]];
        } else {
          return [
            randomD100,
            (fateChart[chaosFactor][odds][i] == 101) ? answers[2] : answers[3]
          ];
        }
        break;
    }
  }
}

function createLabel(name, parentEl) {
  let label = document.createElement('div');
  label.classList.add('label');
  label.innerText = name;
  parentEl.appendChild(label);
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
    let result = [];
    if (section == "fate chart") {
      result = pickFromFateChart(table);
    } else if (Array.isArray(window[table])) {
      result = pickFromArray(window[table]);
    } else {
      result = pickFromObject(window[table]);
    }
    results.innerHTML = "<p><b>" + section.toUpperCase() + " - " +
                        button.innerText + "</b></p>" +
                        "<p>" + result[1] + " (" + result[0] + ")</p>";
  };

  parentEl.appendChild(button);
}

function createSection(name, array, parentEl) {
  let section = document.createElement('div');
  section.classList.add('section');

  let sectionHeader = document.createElement('div');
  sectionHeader.classList.add('sectionHeader', 'collapsed');

  createLabel(name, sectionHeader);

  let collapseButton = document.createElement('div');
  collapseButton.classList.add('collapseButton');
  collapseButton.innerText = "▲";

  let buttonHolder = document.createElement('div');
  buttonHolder.classList.add('buttonHolder', 'hidden');

  array.forEach((table) => {
    createButton(table, buttonHolder, name);
  });

  sectionHeader.onclick = () => {
    if (buttonHolder.classList.contains('hidden')) {
      collapseButton.innerText = "▼";
    } else {
      collapseButton.innerText = "▲";
    }
    sectionHeader.classList.toggle('collapsed');
    buttonHolder.classList.toggle('hidden');
  };
  sectionHeader.appendChild(collapseButton);

  section.appendChild(sectionHeader);
  section.appendChild(buttonHolder);

  parentEl.appendChild(section);
}

/* --- Chaos Factor ------------------------------------- */

let chaosFactorSection = document.createElement('div');
chaosFactorSection.classList.add("section", "chaosFactor");

createLabel("Chaos Factor", chaosFactorSection);

let chaosFactorHolder = document.createElement('div');
chaosFactorHolder.classList.add("chaosFactorHolder");

let chaosFactorDownBtn = document.createElement('div');
chaosFactorDownBtn.classList.add("button");
chaosFactorDownBtn.innerText = "-";
chaosFactorDownBtn.onclick = () => {
  if (chaosFactor > 1) {
    chaosFactor--;
    chaosFactorEl.innerText = chaosFactor;
  }
};
chaosFactorHolder.appendChild(chaosFactorDownBtn);

let chaosFactorEl = document.createElement('div');
chaosFactorEl.classList.add("tracked");
chaosFactorEl.innerText = chaosFactor;
chaosFactorHolder.appendChild(chaosFactorEl);

let chaosFactorUpBtn = document.createElement('div');
chaosFactorUpBtn.classList.add("button");
chaosFactorUpBtn.innerText = "+";
chaosFactorUpBtn.onclick = () => {
  if (chaosFactor < 9) {
    chaosFactor++;
    chaosFactorEl.innerText = chaosFactor;
  }
};
chaosFactorHolder.appendChild(chaosFactorUpBtn);

chaosFactorSection.appendChild(chaosFactorHolder);

document.body.appendChild(chaosFactorSection);

/* --- Results ------------------------------------------ */

let results = document.createElement('div');
results.classList.add("section", "results");

document.body.appendChild(results);

/* --- Buttons ------------------------------------------ */

let dropdownHolder = document.createElement('div');
dropdownHolder.classList.add("dropdownHolder");

createSection("fate chart", odds, dropdownHolder);

createSection("general", ["table_randomEventFocus",
                          "table_sceneAdjustment"], dropdownHolder);

createSection("actions", table_meaning_actions, dropdownHolder);

createSection("descriptions", table_meaning_descriptions, dropdownHolder);

createSection("meaning elements", table_meaning_elements, dropdownHolder);

document.body.appendChild(dropdownHolder);
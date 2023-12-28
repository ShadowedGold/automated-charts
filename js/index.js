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

function createButton(table, parentEl) {
  let button = document.createElement('div');
  button.classList.add("button");

  let name = table.split("_");
  button.innerText = name[name.length - 1]
                     .replace(/([A-Z])/g, ' $1')
                     .replace('And', '&')
                     .replace(/^./, (str) => { return str.toUpperCase(); });

  button.onclick = () => {
    if (Array.isArray(window[table])) {
      console.log(button.innerText + ": " +
                  pickFromArray(window[table]));
    } else {
      console.log(button.innerText + ": " +
                  pickFromObject(window[table]));
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
    createButton(table, buttonHolder);
  });

  section.appendChild(buttonHolder);

  document.body.appendChild(section);
}

/* --- Setting Up Elements ------------------------------- */

createSection("general", ["table_randomEventFocus", "table_sceneAdjustment"]);

createSection("actions", table_meaning_actions);

createSection("descriptions", table_meaning_descriptions);

createSection("elements", table_meaning_elements);
/* eslint-disable camelcase */
import './dropdown.css';
import Icon from './chevron-down-svgrepo-com.svg';

function Option(optionName, func) {
  const button = document.createElement('button');
  button.classList.add('option');
  button.textContent = optionName;

  button.addEventListener('click', () => {
    func();
  });

  return button;
}

function validName(optionName) {
  if (!optionName) {
    throw new Error('Option name cannot be null/undefined');
  } else if (optionName.length > 15) {
    throw new Error('Option name cannot exceed 15 characters');
  } else if (/[^\w\s]/.test(optionName)) {
    // Test for any non alpha-numeric characters excluding whitespace
    throw new Error('Option name must be alpha-numeric');
  } else if (/^(open|close)$/i.test(optionName)) {
    throw new Error("Custom option name cannot be 'open' or 'close'");
  } else {
    return true;
  }
}

function validFunc(func) {
  if (typeof func === 'function') {
    return true;
  } else
    throw new Error('Second parameter must be a function for click listener');
}

class Dropdown {
  constructor() {
    const container = document.createElement('div');
    container.classList.add('dropdownContainer');

    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('optionsContainer');

    const dropdownButton = document.createElement('div');
    dropdownButton.classList.add('dropdown');
    dropdownButton.textContent = 'Menu';

    const icon = document.createElement('i');
    const svg = document.createElement('svg');
    svg.innerHTML = Icon;

    icon.append(svg);
    dropdownButton.append(icon);
    container.append(dropdownButton, optionsContainer);

    // Listeners
    dropdownButton.addEventListener('click', (e) => {
      e.stopPropagation();
      if (optionsContainer.children.length) {
        this.open();
      }
    });
    window.addEventListener('click', () => {
      this.close();
    });

    this.button = dropdownButton;
    this.optionsContainer = optionsContainer;
    this.attach = (node) => {
      node.append(container);
    };
    this.remove = () => container.remove();
  }

  createOption(optionName, func) {
    if (validName(optionName) && validFunc(func)) {
      const option = Option(optionName, func);

      // Replace spaces with underscores if any are present
      const prop_name = optionName.toLowerCase().replace(' ', '_');
      this[prop_name] = option;

      this.optionsContainer.append(option);
    }
  }

  open() {
    this.optionsContainer.classList.remove('closeDropdown');
    this.optionsContainer.classList.add('show', 'openDropdown');
  }

  close() {
    this.optionsContainer.classList.remove('show', 'openDropdown');
    this.optionsContainer.classList.add('closeDropdown');
  }
}

export default Dropdown;

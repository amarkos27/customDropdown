# amarkos-customdropdown

This is a simple dropdown component built using JS bundled by Webpack.

## Setup & Methods

### Dropdown.createOption(optionName, function)

This method is responsible for adding new options to your dropdown menu.

It expects two parameters:

1. The name of your option
    - Constraints:
        - Cannot be null or undefined 
        - Cannot be 'Open' or 'Close' 
        - Alphanumeric 
        - 15 characters maximum

2. The function to execute when clicking on your option


### Dropdown.open() & Dropdown.close()

As their names suggest, these methods open and close the options container

## Relevant CSS

### Structure

- .dropdownContainer
    - .dropdown (button)
        - Menu Text
        - Dropdown Icon
    - .optionsContainer -- .optionsContainer::before (arrow at the top of the options menu)
        - .option(s)

### Other Classes
- .openDropdown
    - animation: showDropdown
- .closeDropdown
    - animation: closeDropdown



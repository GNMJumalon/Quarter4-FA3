const contacts = [];

  function updateDisplay() {
    document.getElementById('contacts').textContent = contacts.join(' ');
  }

  function addContact() {
    const input = document.getElementById('nameInput');
    const name = input.value.trim();
    if (name === "") return;

    if (contacts.length >= 7) {
      contacts.shift(); 
    }

    contacts.push(name);
    input.value = "";
    updateDisplay();
  }

  function removeContact() {
    contacts.pop(); 
    updateDisplay();
  }


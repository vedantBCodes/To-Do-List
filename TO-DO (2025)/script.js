let input = document.querySelector('input');
  let btn = document.querySelector('button');
  let ul = document.querySelector('ul');

  btn.addEventListener('click', () => {
    if (input.value.trim() == '') {
      alert("Please enter some task");
      input.value = '';
      input.placeholder = 'Enter some task';
    }
    else {
      let li = document.createElement('li');
      li.innerHTML = `<span><input type='checkbox' class="checkbox"/> &nbsp; <span> ${input.value} </span> </span> <span class="cut"><img src="Images/cutLogo.png" /></span>`;
      ul.appendChild(li);
      input.value = '';
    }
  });
  ul.addEventListener('click', (e) => {
    if (event.target.closest('.cut'))  // Check if cut button was clicked
    {
      event.target.closest('li').remove(); // Remove the task
    }
    else if (event.target.closest('.checkbox'))  // Check if check button was clicked
    {
      let li1 = event.target.closest('li');
      li1.classList.toggle('bg');
    }
  });

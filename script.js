
function copyCode(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Kod kopyalandı: " + text);
  });
}

function filterHiles() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toLowerCase();
  const hileList = document.getElementById('hileList');
  const sections = hileList.getElementsByTagName('section');

  for (let i = 0; i < sections.length; i++) {
    const lis = sections[i].getElementsByTagName('li');
    let sectionVisible = false;

    for (let j = 0; j < lis.length; j++) {
      const text = lis[j].textContent || lis[j].innerText;

      if (text.toLowerCase().indexOf(filter) > -1) {
        lis[j].style.display = '';
        sectionVisible = true;
      } else {
        lis[j].style.display = 'none';
      }
    }
 
    
    sections[i].style.display = sectionVisible ? '' : 'none';
  }
}




fetch('navbar.html')
  .then(res => {
    if (!res.ok) {
      throw new Error('Unable to fetch navbar.html');
    }
    return res.text();
  })
  .then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    if (!oldelem) {
      console.error("Element with id 'replace_with_navbar' not found.")
      return;
    }
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem, oldelem);
  })
  .catch(err => {
    console.error(err);
  });

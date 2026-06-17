async function loadLayout() {

```
const header = await fetch("header.html");
const headerHtml = await header.text();

document.getElementById("site-header").innerHTML =
    headerHtml;

const footer = await fetch("footer.html");
const footerHtml = await footer.text();

document.getElementById("site-footer").innerHTML =
    footerHtml;
```

}

loadLayout();

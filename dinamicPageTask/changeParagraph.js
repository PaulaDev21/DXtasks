function printParagraph(position) {
    const x = document.getElementById("main");
    const y = x.getElementsByTagName("p");

    document.getElementById("demo").innerHTML =
        'The first paragraph (index 0) inside "main" is: ' + y[position].innerHTML;
}


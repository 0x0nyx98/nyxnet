async function gen_template() {
    var pagecontent = document.getElementById("main").innerHTML;
    
    var fetched = await fetch('home-template.htmlesque');
    var pagebase = await fetched.text();
    document.getElementById("bg").innerHTML = pagebase;
    document.getElementById("main").innerHTML = pagecontent;
}
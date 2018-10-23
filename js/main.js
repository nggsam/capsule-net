// Author: Sam Ng - chanhnp@gmail.com, github.com/exfoxz

(() => {
    window.addEventListener("load", function(event) {
        console.log("All resources finished loading!");

        var sidebarEl = document.querySelector("#sidebar .inner");
        var expandBtn = document.getElementById("expand-sidebar");

        expandBtn.onclick = (e) => {
            let cl = document.querySelector("#right").classList;

            if(cl.contains("shrink")) {
                cl.remove("shrink");
                expandBtn.innerHTML = "Expand";
            } else {
                cl.add("shrink");
                expandBtn.innerHTML = "Close";
            }
        }

        // register event handlers to all spans
        var spans = document.getElementsByTagName('span');
        for(i=0;i<spans.length;i++) {

            if(spans[i].dataset["text"]) {
                spans[i].classList.add("hoverable");
                spans[i].onmouseover = doSomething;
                spans[i].onclick = doSomething;
            }

            if(spans[i].dataset["template"]) {
                spans[i].classList.add("hoverable");

                spans[i].onmouseover = loadTemplate;
                spans[i].onclick = loadTemplate;
            }
        }

        function loadTemplate(e) {
            var templatePath = e.target.dataset["template"];
            console.log(templatePath);

            fetch(templatePath)
            .then(response => response.text())
            .then(text => {
                sidebarEl.classList.add('pre-animation');

                setTimeout(function(){
                    sidebarEl.innerHTML = text; 
                    sidebarEl.classList.remove('pre-animation')
                }, 200)
            })
        }

        function doSomething(e) {
            var content = e.target.dataset["text"];

            if(content) {
                sidebarEl.classList.add('pre-animation');


                setTimeout(function(){
                    sidebarEl.innerHTML = "<p>" + content + "</p>";
                    sidebarEl.classList.remove('pre-animation')
                }, 200)
            }
        }
    });    
})();
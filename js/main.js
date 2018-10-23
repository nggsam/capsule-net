var a = new StickySidebar('#sidebar', {
	topSpacing: 20,
	bottomSpacing: 20,
	containerSelector: '.container',
	innerWrapperSelector: '.sidebar__inner'
});

window.addEventListener("load", function(event) {
	console.log("All resources finished loading!");
		var expandBtn = document.getElementById("expand-sidebar");
		console.log(expandBtn);

		expandBtn.onclick = (e) => {
			let sicl = document.querySelector(".sidebar__inner").classList;
            let scl = document.querySelector("#sidebar").classList;

			if(sicl.contains("popout")) {
				sicl.remove("popout");
                scl.remove("popout");
				expandBtn.innerHTML = "Expand";
			} else {
				sicl.add("popout");
                scl.add("popout");
				expandBtn.innerHTML = "Close";
			}
		}

		// document.getElementById("content").onclick = () => {
		// 	console.log("AKSJDKASJD");
		// 	document.querySelector(".sidebar__inner").classList.remove("popout");
		// }


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
			console.log('loading template')
			var templatePath = e.target.dataset["template"];
			console.log(templatePath);

			fetch(templatePath)
			  .then(response => response.text())
			  .then(text => {
				document.querySelector(".sidebar__inner .inner").classList.add('pre-animation');

				setTimeout(function(){
					document.querySelector(".sidebar__inner .inner").innerHTML = text; 
					document.querySelector(".sidebar__inner .inner").classList.remove('pre-animation')
				}, 200)

			  	console.log(text)
			  })

			  // outputs the content of the text file
		}

		function doSomething(e) {
			console.log('yess')
			var content = e.target.dataset["text"];
			console.log(content);

			if(content) {
				document.querySelector(".sidebar__inner .inner").classList.add('pre-animation');


				setTimeout(function(){
					document.querySelector(".sidebar__inner .inner").innerHTML = "<p>" + content + "</p>";
					document.querySelector(".sidebar__inner .inner").classList.remove('pre-animation')
				}, 200)
			}
		}
	});
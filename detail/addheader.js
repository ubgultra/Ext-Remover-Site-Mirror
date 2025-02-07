document.write("<header><div id='logo'><image id='icon' height='32px' src='assets/icon.png' ondblclick='spoobify(this);' onerror='this.remove();'></image> &nbsp ext remover</div>&nbsp&nbsp&nbsp&nbsp&nbsp<div class='tabs'><a class='tab' role='tab' href='index.html'><div id='tab-exploits'>Exploits</div></a><a class='tab' role='tab' href='tools.html'><div id='tab-tools'>Tools</div></a><a class='tab' role='tab' style='display: none;' href='blogs.html'><div id='tab-blogs'>Blogs</div></a><a class='tab' role='tab' href='https://github.com/3kh0/ext-remover/discussions'><div>Discussions</div></a><a class='tab' role='tab' href='about.html'><div id='tab-about'>About</div></a></div></header>");
const path = location.pathname.toLowerCase();
hrefStart = "";
if (path.includes("/detail/") || path.includes("/blog/")) {
    hrefStart = "../../";
    outline = document.body.appendChild(
        document.createElement("div"),
        {
            className: "outline"
        }
    );
}
if (path.includes("/blog")) {
    var tab = document.getElementById("tab-blogs");
} else {
    if (path.includes("/about") || path.includes("/feedback")) {
        var tab = document.getElementById("tab-about");
    } else {
        var tab = document.getElementById("tab-exploits");
    }
}
if (path.includes("/tool")) {
    var tab = document.getElementById("tab-tools");
    if (path.includes("/tool/")) {
        hrefStart = "../../../";
        if (path.includes("/archive/")) {
            hrefStart += "../../";
        }
    }
}
tab.parentElement.classList.add("tab-current");
document.getElementById("icon").src = hrefStart + "assets/icon.png";
document.getElementById("tab-exploits").parentElement.href = hrefStart + "index.html";
document.getElementById("tab-tools").parentElement.href = hrefStart + "tools.html";
document.getElementById("tab-blogs").parentElement.href = hrefStart + "blogs.html";
document.getElementById("tab-about").parentElement.href = hrefStart + "about.html";
var root = document.querySelector(":root");
var rootstyle = getComputedStyle(root);
// To get a root style:  rootstyle.getPropertyValue('--backgroundColor')
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 0) {
        document.querySelector("header").style.backgroundColor = "var(--headerColor)";
        document.querySelector("header").style.backdropFilter = "blur(5px)";
        document.querySelector("header").style.boxShadow = "0 1px 10px 0 var(--backgroundColor)";
    } else {
        document.querySelector("header").style.backgroundColor = "transparent";
        document.querySelector("header").style.backdropFilter = "none";
        document.querySelector("header").style.boxShadow = "none";
    }
});
if (localStorage.getItem("cloak") !== null && localStorage.getItem("cloak") !== undefined) {
    tabCloak(localStorage.getItem("cloak"));
}
function tabCloak(cloak) {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    if (cloak == "none") {
        localStorage.removeItem("cloak");
        link.href = "../../assets/icon.png";
    } else {
        document.title = cloak;
        link.href = "../../assets/" + cloak + ".png";
        localStorage.setItem("cloak", cloak);
    }
}
const dropdowns_content = document.querySelectorAll(".dropdown-content");
const summaries = document.querySelectorAll(".summary");
for (let i = 0; i < summaries.length; i++) {
    summaries[i].addEventListener("click",
        function() {
            if (this.getAttribute("aria-expanded") == "true") {
                dropdowns_content[i].style.display = "none";
            } else {
                dropdowns_content[i].style.display = "block";
            }
        }
    );
}
function spoobify(obj) {
    obj.src = "data:image/webp;base64,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";
    obj.style.filter = "none";
}
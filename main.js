(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) document.documentElement.classList.add("motion");

  var works = Array.prototype.slice.call(document.querySelectorAll(".work"));
  var filters = Array.prototype.slice.call(document.querySelectorAll(".filters button"));
  var empty = document.getElementById("empty");
  var status = document.getElementById("filter-status");
  var dialog = document.getElementById("lightbox");
  var spans = ["7", "5", "4", "8", "5", "7", "8", "4", "6", "6", "7", "5"];
  var opener = null;
  var index = 0;

  function visibleWorks() {
    return works.filter(function (work) { return !work.hidden; });
  }

  function layout() {
    var list = visibleWorks();
    list.forEach(function (work, i) {
      work.dataset.span = spans[i % spans.length];
    });
    if (status) {
      status.textContent = list.length === works.length
        ? "Showing all " + works.length + " works."
        : "Showing " + list.length + " of " + works.length + " works.";
    }
    if (empty) empty.hidden = list.length !== 0;
  }

  function apply(filter) {
    works.forEach(function (work) {
      var ok = filter === "all" || work.dataset.kind === filter || work.dataset.status === filter;
      work.hidden = !ok;
    });
    filters.forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
    });
    layout();
  }

  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      apply(button.dataset.filter);
    });
  });

  var showAll = document.getElementById("show-all");
  if (showAll) showAll.addEventListener("click", function () { apply("all"); });

  var lbImg = document.getElementById("lb-img");
  var lbTitle = document.getElementById("lb-title");
  var lbMedium = document.getElementById("lb-medium");
  var lbMeta = document.getElementById("lb-meta");
  var lbStatus = document.getElementById("lb-status");
  var lbLink = document.getElementById("lb-link");
  var lbCount = document.getElementById("lb-count");

  function render() {
    var list = visibleWorks();
    if (!list.length) return;
    index = (index + list.length) % list.length;
    var work = list[index];
    var img = work.querySelector("img");
    lbImg.src = img.getAttribute("data-full");
    lbImg.width = Number(img.getAttribute("data-full-width"));
    lbImg.height = Number(img.getAttribute("data-full-height"));
    lbImg.alt = img.alt;
    lbTitle.textContent = work.querySelector("h3").textContent;
    lbMedium.textContent = work.querySelector(".medium").textContent;
    lbMeta.textContent = work.querySelector(".meta").textContent;
    lbStatus.textContent = work.querySelector(".status").textContent;
    lbLink.href = work.querySelector(".wa").href;
    lbCount.textContent = (index + 1) + " of " + list.length;
  }

  function openAt(work, trigger) {
    var list = visibleWorks();
    var found = list.indexOf(work);
    if (found < 0) return;
    index = found;
    opener = trigger;
    render();
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    document.getElementById("lb-close").focus();
  }

  function step(delta) {
    var list = visibleWorks();
    if (!list.length) return;
    index = (index + delta + list.length) % list.length;
    render();
  }

  works.forEach(function (work) {
    var button = work.querySelector(".work-open");
    button.addEventListener("click", function (event) {
      openAt(work, event.currentTarget);
    });
  });

  document.getElementById("lb-prev").addEventListener("click", function () { step(-1); });
  document.getElementById("lb-next").addEventListener("click", function () { step(1); });
  document.getElementById("lb-close").addEventListener("click", function () {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  });

  dialog.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    }
  });

  dialog.addEventListener("close", function () {
    if (opener && typeof opener.focus === "function") opener.focus();
  });

  layout();
})();

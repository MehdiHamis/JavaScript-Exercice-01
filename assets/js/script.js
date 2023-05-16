const THUMBNAIL = Array.from(document.querySelectorAll("img"));
const VIDEO = document.querySelector("iframe");

for (let index of THUMBNAIL) {
  index.addEventListener("click", (event) => {
    const VIDEO_ID = event.currentTarget.dataset.url;
    VIDEO.setAttribute("src", `https://www.youtube.com/embed/${VIDEO_ID}`);
  });
}
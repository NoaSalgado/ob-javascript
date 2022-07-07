const paragraphs = document.querySelectorAll(".paragraph");
const sections = document.querySelectorAll(".section");
const icon = document.querySelector(".paperBin");

paragraphs.forEach((paragraph) => {
  paragraph.addEventListener("dragstart", (event) => {
    paragraph.classList.add("dragging");
    event.dataTransfer.setData("id", paragraph.id);
    const imgFantasma = document.querySelector(".img-fantasma");
    event.dataTransfer.setDragImage(imgFantasma, 0, 0);
  });
  paragraph.addEventListener("dragend", () => {
    paragraph.classList.remove("dragging");
  });
});

sections.forEach((section) => {
  section.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  });
  section.addEventListener("drop", (event) => {
    const idParagraph = event.dataTransfer.getData("id");
    const paragraph = document.getElementById(idParagraph);
    section.appendChild(paragraph);
  });
});

icon.addEventListener("dragover", (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
});

icon.addEventListener("drop", (event) => {
  const paragraphToRemoveId = event.dataTransfer.getData("id");
  const paragraphToRemove = document.getElementById(paragraphToRemoveId);
  paragraphToRemove.remove();
});

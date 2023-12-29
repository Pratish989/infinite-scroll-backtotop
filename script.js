const itemContainer = document.getElementById("item-container");
const loader = document.getElementById("loader");
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
const totalItems = 100;
const additionalItems = 10;
let loadedItems = 20;
let loading ;
const rootElement = document.documentElement;

// const staticList = (pages)=>{
//   for(let i = 1; i <= pages; i++){
//     const card = document.createElement("div")
//     const text = document.createElement("h1");
//     card.classList.add("card-item");
//     text.classList.add("text-item");
//     text.textContent = `Item ${i}`
//     card.appendChild(text)
//     itemContainer.appendChild(card)
//   }
// }

// staticList(loadedItems)

if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
  console.log(window)
}

const divItem = (first, last) => {
  for (let i = first; i <= last; i++) {
    const card = document.createElement("div");
    const text = document.createElement("h1");
    card.classList.add("card-item");
    text.classList.add("text-item");
    text.textContent = `Item ${i}`;
    card.appendChild(text);
    itemContainer.appendChild(card);
  }
};

window.onload = () => {
  divItem(1, loadedItems);
};

const scrollFunction = () => {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  rootElement.scrollTop / scrollTotal > .75? scrollToTopBtn.classList.add("isVisible"): scrollToTopBtn.classList.remove("isVisible")
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight  &&
    !loading && loadedItems < totalItems
  ) {
    loading = true;
    setTimeout(() => {
      loadedItems += additionalItems;
      if (loadedItems > totalItems) loadedItems = totalItems;
      divItem(loadedItems - additionalItems + 1, loadedItems);
      console.log(`Items added-> ${loadedItems}`)
      loading = false;
    }, 1000);
  } else if (loadedItems >= totalItems) {
    loader.style.display = "none";
    const endMessage = document.createElement("p");
    endMessage.textContent = "You have reached the end.";
    itemContainer.appendChild(endMessage);
    window.removeEventListener("scroll", scrollFunction);
  }
};

window.addEventListener("scroll", scrollFunction);



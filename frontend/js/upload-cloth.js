// Modifying input type file
let inputImage = document.getElementById("input-image");
let imageName = document.getElementById("image-name");

// event listener for image input
inputImage.addEventListener('change', () => {
    let total_files = document.querySelector("#input-image").files
    let new_list = document.createElement("ul");
    for (let i = 0; i < total_files.length; i++){
        let new_item = document.createElement("li");
        new_item.innerHTML = total_files[i].name;
        new_list.appendChild(new_item);
    }
    imageName.append(new_list);
});
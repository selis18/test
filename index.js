
function LetAdd(){
    let parent = document.getElementById('array');
    let elem = parent.querySelector('.parent-add-delete');
    
    let clone = elem.cloneNode(true);
    parent.appendChild(clone);
}

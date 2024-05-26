document.getElementById("imgContainer").addEventListener("click", function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentNode.remove()

    }
})
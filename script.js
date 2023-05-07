function someFunction(){
    const notification = document.getElementById('notification');
    const count = document.getElementById('notif-count');

    for(let i = 0; i < 3; i++){
        notification.children[i].classList.remove('bg-grayblue500');
        notification.children[i].lastElementChild.firstElementChild.lastElementChild.classList.add('hidden');

        count.innerText = '0';
    }
}
let list = document.querySelectorAll('.list');
let itembox = document.querySelectorAll('.item-box');

console.log(itembox);
console.log(list);
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function(){
        for (let a = 0; a < list.length; a++) {
                list[a].classList.remove('active');
            
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');
        console.log(dataFilter);
        for(let b = 0; b < itembox.length; b++){
            itembox[b].classList.remove('active');
            itembox[b].classList.add('hide');
            console.log(b);
            console.log(itembox[b].getAttribute('data-item'));

            if(itembox[b].getAttribute('data-item') == dataFilter || dataFilter == 'all'){
                itembox[b].classList.remove('hide');
                itembox[b].classList.add('active');

            }
        }
    })
    
}


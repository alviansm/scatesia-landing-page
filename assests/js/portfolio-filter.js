let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.portfolio-container').children;

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('filter-active');
        }

        this.classList.add('filter-active');
        
        let targetData = this.getAttribute('data-filter');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('portolio-active');
            sortItem[k].classList.add('portolio-delete');

            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('portolio-delete');
                sortItem[k].classList.add('portolio-active');
            }
        }
    });
}
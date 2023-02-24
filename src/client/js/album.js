const loadingCircle = document.querySelector(".loading-wrap");

window.addEventListener('load', ()=>{
  loadingCircle.classList.add("hidden");
});

const imageList = document.querySelector('.image-list'),
btns = document.querySelectorAll('.view-options button'),
imageListItems = document.querySelectorAll('.image-list li'),
active = 'active',
listView = 'list-view',
gridView = 'grid-view',
dNone = 'd-none';

//버튼 활성화
for (const btn of btns) {
btn.addEventListener('click', function () {
    const parent = this.parentElement;  //li
    document.querySelector('.view-options .active').classList.remove(active);
    parent.classList.add(active);

    if (parent.classList.contains('show-list')) {
        document.querySelector(".zoom").classList.add(dNone);
        imageList.classList.remove(gridView);
        imageList.classList.add(listView);
    } else {
        document.querySelector(".zoom").classList.remove(dNone);
        imageList.classList.remove(listView);
        imageList.classList.add(gridView);
    }
});
}

    const rangeInput = document.querySelector('input[type="range"]');
    rangeInput.addEventListener('input', function () {
    document.documentElement.style.setProperty('--minRangeValue', `${this.value}px`);
    // console.log(this.value);
    });

    const captions = document.querySelectorAll('.image-list figcaption p:first-child');
        const myArray = [];
        let counter = 1;

        for (const caption of captions) {
            myArray.push({
                id: counter++,
                text: caption.textContent
            });
        }
        console.log(myArray);

        const searchInput = document.querySelector('input[type="search"]');
        const photoCounter = document.querySelector('.toolbar .counter span');

        searchInput.addEventListener('keyup', keyupHandler);
        //keydown, keypress

        function keyupHandler() {
            for (const item of imageListItems) {
                item.classList.add(dNone);
            }
            const keywords = this.value;

            const filteredArray = myArray.filter(el => el.text.includes(keywords));

            if (filteredArray.length > 0) {
                for (const el of filteredArray) {
                    document.querySelector(`.image-list li:nth-child(${el.id})`).classList.remove(dNone);
                }
            }
            photoCounter.textContent = filteredArray.length;
        }

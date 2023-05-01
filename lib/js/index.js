const year = document.querySelector('select#date-select');
const month = document.querySelector('#monthValue');
const day = document.querySelector('#dayValue');
const calcBtn = document.querySelector('#calcBtn');


const getValue = (e) => {
    console.log(e.target.value);
};

function dayCount(){
    const dDay = new Date(`${yearValue}`);
    const today = new Date();
    const count = dDay - today;
}

const onCalcDate = () => {
    
}

calcBtn.addEventListener('click', onCalcDate);
year.addEventListener('change', function(e){
    console.log(e.target.value);
    let yearValue = e.target.value;
});
month.addEventListener('change', getValue);
day.addEventListener('change', getValue);
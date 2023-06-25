//          .INDEXOF METHOD



const  input = document.querySelector('input');

input.addEventListener('input', nameFilter);

function nameFilter() {
    const inputValue = input.value.toUpperCase().trim();
    const lis = document.querySelectorAll('li');

    lis.forEach(li => {
        const liText = li.innerHTML.toUpperCase();

        if (liText.indexOf(inputValue) > -1) {
            li.style.display = "";
        } else {
            li.style.display = "none";
        }
    })

}

//               .INCLUDES METHOD

// const input = document.getElementById("input");
// const lis = document.querySelectorAll("li");

// input.addEventListener('input', filterNames);

// function filterNames() {
//     const inputValue = input.value.toLowerCase();
//     console.log(inputValue);
//     lis.forEach(item=>{
//         const text = item.textContent.toLowerCase();

//         if (text.includes(inputValue)) {
//             item.style.display = '';
//         } else {
//             item.style.display = 'none';
//         }
//     })
// }



//         .INCLUDES METHOD option 2



// const input = document.getElementById('input');
// const lis = document.querySelectorAll('li');

// input.addEventListener('input', nameFilter);

// function nameFilter() {

//     const inputValue = input.value.toLowerCase().trim();

//     lis.forEach((li) => {

//         const liText = li.innerHTML.toLowerCase() || li.textContent.toLowerCase();

//         if (liText.includes(inputValue)) {
//             li.style.display = "";
//         } else {
//             li.style.display = 'none';
//         }
//     })
// }





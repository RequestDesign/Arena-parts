// document.addEventListener('DOMContentLoaded', function() {
//     const customSelects = document.querySelectorAll('.custom-select');

//     customSelects.forEach(select => {
//         const selectedOption = select.querySelector('.view-block_select');
//         const selectItems = select.querySelector('.select-items');

//         selectedOption.addEventListener('click', function() {
//             selectItems.classList.toggle('select-show');
//         });

//         window.addEventListener('click', function(event) {
//             if (!select.contains(event.target)) {
//                 selectItems.classList.remove('select-show');
//             }
//         });
//     });
// });

// function selectOption(item, selectedId) {
//     const selectedOption = document.getElementById(selectedId);
//     selectedOption.innerHTML = `${item.innerHTML} ${getSVGIcon()}`;
//     const selectItems = item.closest('.select-items');
//     selectItems.classList.remove('select-show'); 
// }

// function getSVGIcon() {
//     return `
//         <svg class="select-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M3 7L10 14L17 7" stroke="#121212" stroke-width="1.5" stroke-linecap="round"/>
//         </svg>
//     `;
// }

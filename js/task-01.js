const findLiItems = document.querySelectorAll('.item');
console.log(`Number of categories: `, findLiItems.length);

findLiItems.forEach(item => {
    let elementTitle = item.querySelector('h2').textContent;
    let oneTitleElements = item.querySelectorAll('li');

    console.log(`Category:`, elementTitle);
    console.log(`Elements:`, oneTitleElements.length);
});




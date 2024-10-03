const DRESSES = [
    {
        title: 'Anett Dress - Chianti',
        type: 'Anett Dress',
        price: 'kr 5,500',
        colors: 2,
        availability: 'Quick add',
        sizes: ['EU 30', 'EU 32', 'EU 34', 'EU 36', 'EU 38', 'EU 40', 'EU 42'],
        img: 'https://media.thereformation.com/image/list/fn_select:jq:first(.%5B%5D%7Cif%20has(%22metadata%22)%20then%20select(any(.metadata%5B%5D;%20.external_id%20==%20%22sfcc-gallery-position%22%20and%20.value%20==%202))%20else%20empty%20end)/f_auto,q_auto,dpr_1.0/w_600/1316493-CHN.json?_s=RAABAB0'
    },
    {
        title: 'Tommen Two Piece - Dark Mahogany',
        type: 'Tommen Two Piece',
        price: 'kr 6,200',
        colors: 2,
        availability: 'Quick add',
        sizes: ['EU 30', 'EU 32', 'EU 34', 'EU 36', 'EU 38', 'EU 40', 'EU 42'],
        img: 'https://media.thereformation.com/image/upload/f_auto,q_auto,dpr_2.0/w_600/PRD-SFCC/1316526/BLACK/1316526.1.BLACK?_s=RAABAB0'
    },
    {
        title: 'Katalina Dress - Grand Dame',
        type: 'Katalina Dress',
        price: 'kr 4,350',
        colors: 2,
        availability: 'Waitlist',
        sizes: ['EU 30', 'EU 32', 'EU 34', 'EU 36', 'EU 38', 'EU 40', 'EU 42'],
        img: 'https://media.thereformation.com/image/list/fn_select:jq:first(.%5B%5D%7Cif%20has(%22metadata%22)%20then%20select(any(.metadata%5B%5D;%20.external_id%20==%20%22sfcc-gallery-position%22%20and%20.value%20==%202))%20else%20empty%20end)/f_auto,q_auto,dpr_2.0/w_600/1316472-DAM.json?_s=RAABAB0'
    },
    {
        title: 'Barrow Silk Dress - Magnetic',
        type: 'Barrow Silk Dress',
        price: 'kr 5,800',
        colors: 4,
        availability: 'Available',
        sizes: ['EU 30', 'EU 32', 'EU 34', 'EU 36', 'EU 38', 'EU 40', 'EU 42'],
        img: 'https://media.thereformation.com/image/list/fn_select:jq:first(.%5B%5D%7Cif%20has(%22metadata%22)%20then%20select(any(.metadata%5B%5D;%20.external_id%20==%20%22sfcc-gallery-position%22%20and%20.value%20==%202))%20else%20empty%20end)/f_auto,q_auto,dpr_2.0/w_600/1310049-MGN.json?_s=RAABAB0'
    },
    {
        title: 'Pike Satin Dress - Magnetic',
        type: 'Pike Satin Dress',
        price: 'kr 3,600',
        colors: 4,
        availability: 'Quick add',
        sizes: ['EU 30', 'EU 32', 'EU 34', 'EU 36', 'EU 38', 'EU 40', 'EU 42'],
        img: 'https://media.thereformation.com/image/list/fn_select:jq:first(.%5B%5D%7Cif%20has(%22metadata%22)%20then%20select(any(.metadata%5B%5D;%20.external_id%20==%20%22sfcc-gallery-position%22%20and%20.value%20==%202))%20else%20empty%20end)/f_auto,q_auto,dpr_2.0/w_600/1313801-MGN.json?_s=RAABAB0'
    },
    {
        title: 'Parma Silk Dress - Stone Rose',
        type: 'Parma Silk Dress',
        price: 'kr 5,050',
        colors: 8,
        availability: 'Quick add',
        sizes: ['EU 30', 'EU 32', 'EU 34', 'EU 36', 'EU 38', 'EU 40', 'EU 42'],
        img: 'https://media.thereformation.com/image/list/fn_select:jq:first(.%5B%5D%7Cif%20has(%22metadata%22)%20then%20select(any(.metadata%5B%5D;%20.external_id%20==%20%22sfcc-gallery-position%22%20and%20.value%20==%202))%20else%20empty%20end)/f_auto,q_auto,dpr_2.0/w_600/1308597-SRE.json?_s=RAABAB0'
    },

];

// Function to display all dresses
const getDresses = (DressesArray) => {
    container.innerHTML = ''; // Clear container before appending

    DressesArray.forEach(dress => {
        container.innerHTML += `
        <div class="card">
          <h3>${dress.title}</h3>
          <img src="${dress.img}" alt="${dress.title}" /> <!-- Display the image -->
          <p>Type: ${dress.type}</p>
          <p>Price: ${dress.price}</p>
          <p>Colors: ${dress.colors}</p>
          <p>Availability: ${dress.availability}</p>
          <p>Sizes: ${dress.sizes ? dress.sizes.join(', ') : 'N/A'}</p>
        </div>`;
    });
}
getDresses(DRESSES);


// Function to handle sorting dresses
const sortDresses = (sortBy) => {
    let sortedDresses = [...DRESSES]; // Create a copy of the array to sort

    switch (sortBy) {
        case 'title':
            sortedDresses.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'price':
            sortedDresses.sort((a, b) => parseFloat(a.price.replace('kr ', '')) - parseFloat(b.price.replace('kr ', '')));
            break;
        case 'colors':
            sortedDresses.sort((a, b) => b.colors - a.colors);
            break;
        default:
            sortedDresses = DRESSES; // No sorting, return original order
            break;
    }

    getDresses(sortedDresses);
};

// Event listener for the dropdown to sort
document.getElementById('filterDropdown').addEventListener('change', (event) => {
    const selectedOption = event.target.value;
    sortDresses(selectedOption);
});
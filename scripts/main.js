$(document).ready(function() {

    var listItems = $('#listing');
    var listingItems;
    var itemTitle,
        itemImage,
        itemPrice,
        itemCurrency,
        listingItem,
        urlImage;

    listings.results.forEach(function(item) {
        urlImage = item.Images[0].url_170x135;
itemImage = '<a class="resultsImage"><img src="' + urlImage + '" /></a>';

        itemTitle = '<p>' + item.title + '</p>';

     itemCurrency = '<span>' + item.currency_code + '</span>';
        itemPrice = '<span>' + item.price + '</span>';


        listingItems = '<li>' +  itemImage + itemTitle + "$" + itemPrice + itemCurrency + '</li>';

        listItems.append(listingItems);
    });
});

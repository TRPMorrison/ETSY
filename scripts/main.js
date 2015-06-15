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

        itemTitle = '<p>' + item.title + '</p>';

        itemImage = '<a class="resultsImage"><img src="' + urlImage + '" /></a>';

        itemPrice = '<p>' + item.price + '</p>';

        itemCurrency = '<p>' + item.currency_code + '</p>';

        listingItems = '<li>' + itemTitle + itemImage + "$" + itemPrice + itemCurrency + '</li>';

        listItems.append(listingItems);
    });
});

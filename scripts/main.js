$(document).ready(function() {

    var listItems = $('#listing');
    //console.log(listing.title);
    // var listingItem = $('#item');

    var itemTitle,
        itemImage,
        itemPrice,
        itemCurrency,
        listingItem;

    etsyItems.results.forEach(function(item) {
        itemTitle = '<p>' + item.title + '</p>';
        itemImage = '<img src="' + item.url + '"/>';
        itemPrice = '<p>' + item.price + '</p>';
        itemCurrency = '<p>' + item.currency_code + '</p>';

        listingItem = '<li>' + itemTitle + itemImage + "$" + itemPrice + itemCurrency + '</li>';

        listItems.append('#item');
    });
});

$(document).ready(function() {

    var listItems = $('#listing');
         //console.log(listing.title);

    var itemTitle,
    itemImage,
    itemPrice,
    itemCurrency,
    itemHolder;

    etsyItems.forEach(function(item) {
      itemTitle = '<p>' + item.title + '</p>';
      itemImage = '<img src="' + item.url + '"/>';
      itemPrice='<p>' + item.price + '</p>';
      itemCurrency='<p>' + item.currency_code + '</p>';

      itemHolder = '<li>' + itemTitle + itemImage + "$" + itemPrice + itemCurrency + '</li>';
        etsyItems.append(itemHolder);
    });
});

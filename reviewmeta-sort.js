/**
 * Handles a non-amazon page/empty string/malicious reviewmeta report request
 * Parameters:
 *  url (string) - the url of the page to get the reviewmeta data for
 */
function get_reviewmeta_report(url) {
  var request = new XMLHttpRequest();
  var request_url = "";
  request.open('GET', 'request_url');

}

// Adjusts the current search page with the reviewmeta information added on, and the ordering based on that ranking (hopefully on pt 2)
function sort_your_search_with_reviewmeta_adjustments() {

}




//TODO does this need parens?
request.onload = sort_your_search_with_reviewmeta_adjustments
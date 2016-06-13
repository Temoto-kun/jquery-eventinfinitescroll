# jQuery Event Infinite Scroll
Event-driven infinite scroll plugin for jQuery.

## Installation

Through NPM:

    $ npm install --save jquery.eventinfinitescroll
    
Through Bower:

    $ bower install --save jquery.eventinfinitescroll
    
## Usage

```javascript

    function addItemsToList(data) {
        // some function to add data to the list
    }

    $('.long-list').infiniteScroll({
        boundarySelector: '.long-list__see-more',
        request: function (){
            return $.getJSON('some/api/endpoint');
        }
    });

    // to bind the loading event
    
    $('.long-list')
        .on('infinitescroll', function (event, xhr) {
            xhr.done(addItemsToList);
        });
    
```

## License

MIT. See LICENSE file for details.

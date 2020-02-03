    // DOC ready  
    document.addEventListener('DOMContentLoaded', function () {

        // Elements to track    
        let evtTracker = [
            {
                category: 'B2B',
                selector: '[href="/shop/b2blogin.html"]',
                label: 'B2B login click',
            },
            {
                category: 'Kontakt',
                selector: '[href="tel:12345678"]',
                label: 'Tlf click',
            }
        ];


        // Query each element selector
        evtTracker.forEach(evt => {
            // Add event listener to each element (1 selector can have multiple elements)
            document.querySelectorAll(evt.selector).forEach(element => {
                element.addEventListener('click', e => {
                    
                    gtag('event', e.type, {
                        'event_category': evt.category,
                        'event_label': evt.label,
                    });

                }, false);
            });
        });
    }, false);

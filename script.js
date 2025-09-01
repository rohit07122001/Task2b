   
     document.addEventListener('DOMContentLoaded', function() {
                if (document.documentElement.clientWidth > 1366) {
                    const topStripeWrapper = document.querySelector('.main__header');
                    if (sessionStorage.getItem('topStripeContent')) {
                        topStripeWrapper.innerHTML = sessionStorage.getItem('topStripeContent');
                    } else {
                        sessionStorage.setItem('topStripeContent', topStripeWrapper.innerHTML);
                    }
                }
            });
    
    
    
    document.addEventListener('DOMContentLoaded', function() {
                if (document.documentElement.clientWidth > 1366) {
                    const topStripeWrapper = document.querySelector('.main__header');
                    if (sessionStorage.getItem('topStripeContent')) {
                        topStripeWrapper.innerHTML = sessionStorage.getItem('topStripeContent');
                    } else {
                        sessionStorage.setItem('topStripeContent', topStripeWrapper.innerHTML);
                    }
                }
            });
   
   
 
            window.addEventListener('load', function() {
                const fetchScripts = function(SCRIPTURL, FULLURL) {
                    const URL = 'https://www.keyideasinfotech.com/wp-content/themes/keyideas';
                    let SCRIPT = document.createElement('script');
                    SCRIPT.src = FULLURL ? `${SCRIPTURL}` : `${URL}/${SCRIPTURL}`;
                    document.head.prepend(SCRIPT);
                }
                const loadLocation = document.querySelector('.not__location');
                let loadLocationSection = false;
                if (!window.location.href.includes('/careers/') && !window.location.href.includes('/blog/') && !loadLocation) {
                    fetchScripts('jsnew/location-pageDOM.js', false);
                }
                fetchScripts('jsnew/DOMLOADER.js', false);

                if (document.querySelector('body').classList.contains('blogLoad'))
                    return
                fetchScripts('jsnew/bootstrap.4.6.1.js', false);
            })
        















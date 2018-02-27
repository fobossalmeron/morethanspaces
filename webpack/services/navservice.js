
export function loadDiscount(externalThis) {
       var xhr = new XMLHttpRequest();
       xhr.open('get', '/assets/json/discount.js', true);
       xhr.onload = function() {
           var discountDigest = JSON.parse(xhr.responseText);
           console.log(discountDigest);
           var discountIsOn
           if (discountDigest.discountOn == 'true'){
             var discountIsOn = true
           } else if (discountDigest.discountOn == 'false'){
             var discountIsOn = false
           }
           externalThis.setState({
             discountOn: discountIsOn,
             discountNumber: discountDigest.discountNumber,
             discountType: discountDigest.discountType,
             discountText: discountDigest.discountText,
             discountSmallText: discountDigest.discountSmallText,
             discountBanner: discountDigest.discountBanner
           });
       }.bind(this);
       xhr.send();
      }
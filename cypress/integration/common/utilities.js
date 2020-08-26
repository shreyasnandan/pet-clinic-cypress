class CommonUtils {
  /**
 * Pseudo-random string generator
 * Default: return a random alpha-numeric string
 * 
 * @param {Integer} len Desired length
 * @param {String} arr Alphanumeric string to randomize
 * @return {String}
 */
  randomStr(len, arr) { 
    var ans = ''; 
    for (var i = len; i > 0; i--) { 
        ans +=  
          arr[Math.floor(Math.random() * arr.length)]; 
    } 
    return ans; 
  } 

  getText(cssSel){
    let text
    cy.get(cssSel)
      .invoke('val')
      .then(function($text){
        text = $text
      })
      return text
  }

}
export default CommonUtils;

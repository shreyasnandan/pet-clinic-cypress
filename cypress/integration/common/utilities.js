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

}
export default CommonUtils;

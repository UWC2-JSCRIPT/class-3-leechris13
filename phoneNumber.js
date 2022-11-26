// Create a function testPhoneNumber 
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid

const testPhoneNumber = function(phoneNumber) {
    const phoneRegex = new RegExp(/^\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/);

    if(phoneRegex.test(phoneNumber)) {
        return true;
    } else {
        return false;
    }
}

// Explanation of RegExp
// ^      start of line
// \(     optional start parenthesis
// \d{3}  exactly 3 digit characters
// \)     optional end parenthesis
// [-\s]  one of a space or a dash
// \d{3}  exactly 3 digit characters
// [-\s]  one of a space or a dash
// \d{4}  exactly 4 digit characters
// $      end of line

// check testPhoneNumber
console.log(testPhoneNumber('(206) 333-4444')); // should return true
console.log(testPhoneNumber('(206) 33-4444')); // should return false, missing a digit
console.log(testPhoneNumber('(206) 333 4444')); 
console.log(testPhoneNumber('2063334444')); 
console.log(testPhoneNumber('206-333-4444')); 
console.log(testPhoneNumber('206-333-44444')); 

// 1. Create a function parsePhoneNumber that takes in a phoneNumber string 
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}

const parsePhoneNumber = function(phoneNumber) {
    const phoneRegex2 = /\d+/g;
    let result;
    let resultCollect = [];
    // let result = phoneRegex2.exec(phoneNumber);
    // let digit = phoneRegex2.lastIndex;
    // let number2 = phoneNumber.slice(digit);
    // let result2 = phoneRegex2.exec(number2)
    while(result = phoneRegex2.exec(phoneNumber)) {
        resultCollect.push(result)
    }
    // console.log(resultCollect)
    // console.log(resultCollect[0][0])
    // console.log(resultCollect[1][0] + resultCollect[2][0])
    // resultCollect.push(null)
    // console.log(resultCollect[4])
        return `{ areaCode: '${resultCollect[0][0]}', phoneNumber: '${resultCollect[1][0] + resultCollect[2][0]}'}`

}
// // Check parsePhoneNumber
 console.log(parsePhoneNumber('206-123-4444'));
// // returns {areaCode: '206', phoneNumber: '3334444'}

 console.log(parsePhoneNumber('(222) 422-5353'));
// // returns {areaCode: '222', phoneNumber: '4225353'}
console.log(parsePhoneNumber('123 456 7890'));
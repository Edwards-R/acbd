export class osgr {
    public ToGBEasting(gridRef: string): number{
        // Regex string to find first 2 letters. We want index [1] of the results as that discounts letters other than the first 2
        const regexString = "^([A-H|J-Z]{2}(?:[0-9][0-9])+)(?:(?:[NS][EW])|[A-D])?$";
        const matches = gridRef.match(regexString);
        let preString;
        if (matches) {
            preString = matches[1];

            // We now have a valid grid reference, without quadrats. Now split out the letters and numbers
            const lettersMatch = (preString.match('[A-Z]+'))?.toString().toUpperCase();
            const numbersMatch = preString.match('[0-9]+')?.toString();

            console.log(lettersMatch);
            console.log(numbersMatch);
            

            // Now get the char code of each letter, minus the char code of 'A'
            // Letters match cannot be null, as we have to match to get here

            const letterA = lettersMatch!.charCodeAt(0) - 'A'.charCodeAt(0);
            const letterB = lettersMatch!.charCodeAt(1) - 'A'.charCodeAt(0);

            // Convert the letters into their 'number' format
            const letterConverted = (((letterA-2)%5)*5)+letterB%5;

            // If numbers are present (e.g. AA0000)
            if (numbersMatch){
                // Get the first half, which represents the easting
                const numbers = numbersMatch.substring(0,numbersMatch.length/2);

                // Now pad the numbers to the 'right' length
                // numbers * 10 ^ (4-numbers.length)
                //const paddedNumbers = numbers || '00000000'.substring(0,5-numbers.length);
            }
            // No numbers, just return the letters
            return (letterConverted * 100000)

            return 1
        } else {
            throw new Error("Invalid grid reference format supplied")
        }
        
    }
}
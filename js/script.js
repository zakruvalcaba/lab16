function getWords(text) {
    // REMOVE ALL NON ALPHA CHARACTERS
    text = text.replace(/\./g, '')
    text = text.replace(/\,/g, '')
    text = text.replace(/\:/g, '')
    text = text.toLowerCase()

    // CONVERT TEXT TO AN ARRAY
    let arrWords = text.split(' ')

    // SORT THE WORDS
    arrWords.sort()

    // RETURN THE ARRAY
    return arrWords
}

function getUniqueWords(words) {
    // CREATE AN EMPTY ARRAY TO STORE UNIQUE WORDS
    let arrUniqueWords = []

    // LOOP THROUGH THE WORDS AND EXTRACT ONLY
    // THE UNIQUE OCCURENCES OF THOSE WORDS
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== words[i - 1]) {
            arrUniqueWords.push(words[i])
        }
    }

    // RETURN THE UNIQUE WORDS ARRAY
    return arrUniqueWords
}

function init() {
    let text = 'With innovative approaches and advanced methodologies, Vecta Corporation provides scalable business solutions to help companies achieve success through revenue increase, cost management, and user satisfaction. Our approach stems from the three most important business growth aspects: helping companies reach prospects, assist in converting prospects to customers, and assist in retaining those customers. This is accomplished through our interactive solutions and expertise in providing a memorable and positive user experience.'

    console.log('Welcome to the Wordlist Application')

    // GET WORDS
    let words = getWords(text)

    // GET UNIQUE WORDS
    let uniqueWords = getUniqueWords(words)

    // DISPLAY NUMBER OF WORDS AND UNIQUE WORDS
    console.log(`Number of words: ${words.length}`)
    console.log(`Number of unique words: ${uniqueWords.length}`)

    // DISPLAY WORDS AND THEIR COUNTS
    console.log('Unique word occurences:')
    for (let word of uniqueWords) {
        console.log(`${word}\n`)
    }
}
init()
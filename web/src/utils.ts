export function createId (stringToConvert: string, addToString: string): string{
    const stringArray = stringToConvert.split('-')
    stringArray.push(addToString)
    stringArray.forEach((word, index) => {
        if (index === 0) {
            stringArray[index] = word.toLowerCase()
        }
        if (index > 0) {
            stringArray[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }
    })
    return stringArray.join('')
}

export const animationsCategories: {[index: string]: string[]} = {
	blur: [],
    bounce: [],
    contract: [],
    expand: [],
	fade: [],
	flip: [],
    roll: [],
	rotate: [],
	scale: [],
    skew: [],
	slide: [],
    'swing-drop': [],
	zoom: [],
	other: []
}
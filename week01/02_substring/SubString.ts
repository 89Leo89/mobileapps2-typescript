function findSubString(str: string, sub: string): number {
    let index: number = -1;
    if (sub.length === 0) return -1;
    for (let i = 0; i <= str.length - sub.length; i++) {
        if (str[i] === sub[0]) {
            let match = true;
            for (let j = 0; j < sub.length; j++) {
                if (str[i + j] !== sub[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                index = i;
                break;
            }
        }
    }

    return index;
}
console.log(findSubString("foobabbar", "bar"));

module.exports = findSubString;

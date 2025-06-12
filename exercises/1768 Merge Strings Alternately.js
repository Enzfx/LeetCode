function mergeAlternately(word1, word2) {
    let merged = "";
    let len1 = word1.length;
    let len2 = word2.length;
    let maxLength = Math.max(len1, len2);

    for (let i = 0; i < maxLength; i++) {
        if (i < len1) {
            merged += word1[i];
        }
        if (i < len2) {
            merged += word2[i];
        }
    }

    return merged;
}
export const nameMatch = (phrase_1, phrase_2) => {
    return (phrase_1.toLowerCase().search(phrase_2.toLowerCase()) != -1);
}
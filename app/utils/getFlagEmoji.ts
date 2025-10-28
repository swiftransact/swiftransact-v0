/**
 * getFlagEmoji
 * @param countryCode - The country code to get the flag emoji for
 * @returns The flag emoji for the country code
 */
export default (countryCode: string) => {
    const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0))
  return String.fromCodePoint(...codePoints)
}
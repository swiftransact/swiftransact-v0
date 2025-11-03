import { isValidNumber } from "libphonenumber-js"
import type { NetworkProvider } from "./types/types"

const prefixes: Record<NetworkProvider, readonly string[]> = {
  mtn: ['0803', '0806', '0703', '0706', '0810', '0813', '0814', '0816', '0903', '0906', '0913', '0916', '07025', '07026', '0704'],
  airtel: ['0802', '0808', '0708', '0812', '0701', '0901', '0902', '0907', '0904', '0912'],
  glo: ['0805', '0807', '0705', '0811', '0815', '0905', '0915'],
  '9mobile': ['0809', '0817', '0818', '0909', '0908']
}

export default (number: string, network: NetworkProvider) => {
  if (!prefixes[network]) {
    return { isValid: false, message: 'Invalid network type provided' }
  }

  // Normalize input
  let phoneNumber = number.trim().replace(/[^\d+]/g, '');
  if (phoneNumber.startsWith('234')) phoneNumber = '+' + phoneNumber;

  // Validate general number format
  const isValid = isValidNumber(phoneNumber, 'NG');
  if (!isValid) return { isValid: false, message: 'Invalid phone number' }

  // Replace +234 or 234 with 0 for prefix check
  phoneNumber = phoneNumber.replace(/^\+234/, '0').replace(/^234/, '0');

  // Check prefix
  const matchesNetwork = prefixes[network].some(prefix => phoneNumber.startsWith(prefix));

  if (!matchesNetwork) {
    return {
      isValid: false,
      message: `Phone number does not belong to ${network.toUpperCase()} network`
    }
  }

  return {
    isValid: true,
    normalizedNumber: phoneNumber,
  }
}

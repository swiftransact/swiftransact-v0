import { useQuery } from "@tanstack/vue-query"
import axios from "axios"
import type { Ref, ComputedRef } from "vue"

// using infinite cache to avoid re-fetching the data since the data is not expected to change frequently
export const useBank = () => {
    return useQuery({
        queryKey: ['bank_Lists'],
        queryFn: async () => {
            const res = await axios.get('https://api.paystack.co/bank')
            return res.data
        },
        staleTime: Infinity,
        gcTime: Infinity,
    })
}

/**
 * 
 * @param number - account number (reactive ref)
 * @param code - bank code (reactive ref)
 * @returns 
 */
export const verifyAccount = (number: Ref<string> | ComputedRef<string>, code: Ref<string> | ComputedRef<string>) => {
    const config = useRuntimeConfig();
    const secretKey = config.public.paystackSecretKey;
    
    return useQuery({
      queryKey: ['accountverification', number, code],
      enabled: computed(() => !!(unref(code) && unref(number) && unref(number).length === 10)),
      refetchOnMount: false,
      staleTime: 1000 * 60 * 60 * 24,
      gcTime: 1000 * 60 * 60 * 24,
      refetchOnWindowFocus: false,
      retry: 1,
      queryFn: async () => {
        const accountNumber = unref(number)
        const bankCode = unref(code)
        const url = `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`;
        const res = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${secretKey}`,
            'Content-Type': 'application/json'
          }
        })
        return res.data
      }
  
    })
  }
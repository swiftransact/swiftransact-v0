export const handleError = (error: any) => {
    log.error(error)
      if (error?.response?.data) {
      if(error.response.data.message) return error.response.data.message;
      return error.response.data
      } else if (error?.request) {
      return 'No response received from server. Please try again later.'
      } else {
      return 'Something went wrong. Please try again later.'
      }
  };
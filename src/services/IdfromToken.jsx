const IdFromToken = (token) => {
    if (!token) return null;
  
    try {
      const [, payload] = token.split('.');
  
      const decodedPayload = atob(payload);
  
      const payloadObj = JSON.parse(decodedPayload);
  
      return payloadObj.sub || null;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };
  
  export default IdFromToken;
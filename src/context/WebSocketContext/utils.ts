import { bitcoinKey, WEB_SOCKET_MESSAGE } from 'globalConstant';


export const getSocketMessage = (type: WEB_SOCKET_MESSAGE) => {
  return JSON.stringify({ type, instruments: [bitcoinKey] });
};

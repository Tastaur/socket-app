import { WEB_SOCKET_MESSAGE } from 'globalConstant';

import { getSocketMessage } from '../utils';


describe('websocketContext utils test',  () => {
  it('should return websocket message', function (){
    expect(getSocketMessage(WEB_SOCKET_MESSAGE.SUBSCRIBE)).toEqual('{"type":"SUBSCRIBE","instruments":["cc-btc-usd-cccagg"]}');
  });
});

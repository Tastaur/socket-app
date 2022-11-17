import React, {
  createContext, FC, useContext, useEffect, useState,
} from 'react';

import { Nullable } from '../../globalTypes';
import { getSocketMessage } from './utils';
import { bitcoinKey, WEB_SOCKET_MESSAGE } from '../../globalConstant';
import { parseJsonSafely } from '../../utils';
import { BitcoinData } from './types';


export interface WebSocketContextInterface {
  data: Nullable<BitcoinData>,
  isLoading: boolean,
  error: Nullable<Error>,
}

const Context = createContext<Nullable<WebSocketContextInterface>>(null);

export const useWebSocketContext = () => {
  const context = useContext(Context);
  
  if (null === context) {
    throw new Error('useDndContext must be used within DndContext');
  }
  
  return context;
};

export const WebSocketContext: FC = ({
  children,
}) => {
  const [data, setData] = useState<Nullable<BitcoinData>>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Nullable<Error>>(null);
  useEffect(() => {
    const socket = new WebSocket('wss://wstest.fxempire.com?token=btctothemoon');
    socket.onopen = () => {
      socket.send(getSocketMessage(WEB_SOCKET_MESSAGE.SUBSCRIBE));
    };
    socket.addEventListener('open', ()=>{
      setIsLoading(false);
    });
    socket.onerror = () =>{
      setData(null);
      setError(new Error('error in connection'));
    };
    const listener = (e) => {
      setData(parseJsonSafely(e.data, {})[bitcoinKey]);
    };
    const errorListener = (e) => {
      // eslint-disable-next-line no-console
      console.error(e);
      setError(new Error('Error listener'));
    };
    socket.addEventListener('message', listener);
    socket.addEventListener('error', errorListener);
    return () => {
      socket.send(getSocketMessage(WEB_SOCKET_MESSAGE.SUBSCRIBE));
      socket.removeEventListener('message', listener);
      socket.removeEventListener('error', errorListener);
    };
  }, []);
  
  
  return (
      <Context.Provider value={{ data, isLoading, error }}>
          {children}
      </Context.Provider>
  );
};

export const socketMiddleware = (wsUrl, wsActions) => {
  return (store) => {
    let socket = null;
    return (next) => (action) => {
      const { dispatch } = store;
      const { type } = action;
      const { wsInit, onOpen, onError, onMessage, onClose, wsClose } = wsActions;
      if (type === wsInit) {
        socket = new WebSocket(wsUrl);
      }
      if (socket) {
        socket.onopen = (e) => {
          dispatch({ type: onOpen, payload: e });
        };
        socket.onerror = (e) => {
          dispatch({ type: onError, payload: e });
        };
        socket.onmessage = (e) => {
          const { data } = e;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: onMessage, payload: restParsedData });
        };
        socket.onclose = (e) => {
          dispatch({ type: onClose, payload: e });
        };
      if (type === wsClose) {
        socket.close(1000, "работа закончена")
      }
      }
      next(action);
    };
  };
};

export const socketMiddleware = (wsUrl: string, wsActions) => {
  return (store) => {
    let socket: WebSocket | null = null;
    return (next) => (action) => {
      const { dispatch } = store;
      const { type, accessToken } = action;
      const { wsInit, onOpen, onError, onMessage, onClose, wsClose } =
        wsActions;
      if (type === wsInit) {
        socket = new WebSocket(wsUrl);
      }
      if (type === wsInit && accessToken) {
        socket = new WebSocket(`${wsUrl}?token=${accessToken}`);
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
          socket.close(1000, "работа закончена");
        }
      }
      next(action);
    };
  };
};

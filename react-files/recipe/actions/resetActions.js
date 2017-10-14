// Action Dispatcher for Reseting App to Initial

export const RESET = 'RESET';
export function reset() {
  return {
    type: RESET,
  };
}

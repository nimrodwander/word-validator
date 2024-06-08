export type ListenersMap = Map<string, ((args: any) => void)[]>;

export class MyActionListener {
  private _listenersMap: ListenersMap;

  constructor() {
    this._listenersMap = new Map();
  }

  //checks if a listener exists for a givven action
  public hasListener = (action: string): boolean => {
    return this._listenersMap.has(action);
  };

  // registerListener registers a function to an action name. In case the action already exists, the new
  //listener should be added to the
  // already existing listeners
  // action - Action name
  // listener - Function to invoke upon action call
  public registerListener(action: string, listener: (...args: any) => void) {
    let actionListenersList = this._listenersMap.get(action);

    if (actionListenersList) {
      actionListenersList.push(listener);
    } else {
      this._listenersMap.set(action, [listener]);
    }
  }

  // When calling the removeListener all listeners are removed from the action
  // and the action itself is removed and can no longer be called.
  // action - the Action to remove
  public removeListener(action: string) {
    this._listenersMap.delete(action);
  }

  // Invoke all registered listeners of the giving action with the passed data
  // In case the action is not registered,an exception thrown
  // action - The action name
  // data - The data to pass to all registered listeners as parameter
  public emit<S>(action: string, data: S) {
    if (!this.hasListener(action)) {
      throw new Error(`Can't emit an event. Event "${action}" doesn't exits.`);
    }

    const listeners = this._listenersMap.get(action);
    listeners?.forEach((callback, key, map) => {
      callback(data);
    });

    this.removeListener(action);
  }
}

export const eventhub = new MyActionListener();

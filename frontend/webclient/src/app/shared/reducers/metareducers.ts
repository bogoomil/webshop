import { ActionReducer, MetaReducer } from '@ngrx/store';

export function sessionStorageMetaReducer<T>(
  reducer: ActionReducer<T>
): ActionReducer<T> {
  return (state, action) => {
    // Az állapot visszaállítása a sessionStorage-ból
    const savedState = JSON.parse(sessionStorage.getItem('appState') || '{}');
    state = { ...state, ...savedState };

    // Az akció végrehajtása
    const nextState = reducer(state, action);

    // Az új állapot mentése a sessionStorage-ba
    sessionStorage.setItem('appState', JSON.stringify(nextState));

    return nextState;
  };
}

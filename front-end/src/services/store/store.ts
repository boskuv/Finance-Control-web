import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { rootReducer } from './rootReducer'
import { ActionCreator, AnyAction, configureStore, Dispatch } from '@reduxjs/toolkit'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = Dispatch<AnyAction> & ThunkDispatch<RootState, null, AnyAction>
export type AppThunk<ReturnType = void | Promise<Response>> = ActionCreator<ThunkAction<ReturnType, RootState, unknown, AnyAction>>

export const store = configureStore({
  reducer: {
    ...rootReducer
  },
  middleware: [
    thunk,
  ],
})

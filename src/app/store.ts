import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { userAPIs } from "../api/user.APIs";
import { History_settingAPIs } from "../api/setting_history.APIs";
import { Role_settingAPIs } from "../api/setting_role.APIs";
import { Service_APIs } from "../api/service.APIs";
import { deviceAPIs } from "../api/device.APIs";

const store = configureStore({
  reducer: {
    [userAPIs.reducerPath]: userAPIs.reducer,
    [History_settingAPIs.reducerPath]: History_settingAPIs.reducer,
    [Role_settingAPIs.reducerPath]: Role_settingAPIs.reducer,
    [deviceAPIs.reducerPath]: deviceAPIs.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat([
      userAPIs.middleware,
      History_settingAPIs.middleware,
      Role_settingAPIs.middleware,
      deviceAPIs.middleware,
    ]),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;

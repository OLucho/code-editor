import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import Loading from "../components/common/Loading/Loading";
import { persistor, store } from "./store";

export const ReduxProvider: React.FC = (props: PropsWithChildren<{}>) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading />}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};

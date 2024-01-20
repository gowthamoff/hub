import "./Index.scss";
import Router from "./router/Router";
import { React, Suspense } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./redux/store";

const persistorStore = persistStore(store);

function App() {
  return (
    <>
      {/* <React.StrictMode> */}
        <Suspense fallback={<div>loading</div>}>
          <Provider store={store}>
            <PersistGate persistor={persistorStore}>
              <Router />
            </PersistGate>
          </Provider>
        </Suspense>
      {/* </React.StrictMode> */}
    </>
  );
}

export default App;

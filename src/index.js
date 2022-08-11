// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import App from "./App";
// import store from "./Redux/store.js";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import MyRoutes from "./Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MyRoutes />);

// ReactDOM.render(
//   <React.StrictMode>
//     <MyRoutes />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

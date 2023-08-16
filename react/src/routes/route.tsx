import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Loading from "../components/Loading/Loading";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const componentsMap = {
  Login: lazy(() => delay(9000).then(() => import("src/pages/Login"))),
  Register: lazy(() => import("src/pages/Register")),
  Logout: lazy(() => import("src/pages/Logout")),
  Layout: Layout,
  Home: lazy(() => import("src/pages/Home")),
  SearchResults: lazy(() => import("src/pages/SearchResults")),
  EventPage: lazy(() => import("src/pages/EventPage")),
  Bookings: lazy(() => import("src/pages/Booking")),
};

const routeConfigs = [
  { path: "/login", component: componentsMap.Login },
  { path: "/register", component: componentsMap.Register },
  { path: "/logout", component: componentsMap.Logout },
  {
    path: "/",
    component: componentsMap.Layout,
    children: [
      { path: "/", component: componentsMap.Home, isIndex: true },
      { path: "search_results", component: componentsMap.SearchResults },
      { path: "properties/:id", component: componentsMap.EventPage },
      { path: "bookings", component: componentsMap.Bookings },
    ],
  },
];

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routeConfigs.map((route) => {
          if (route.children) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              >
                {route.children.map((child) => (
                  <Route
                    key={child.path}
                    path={child.path}
                    element={<child.component />}
                  />
                ))}
              </Route>
            );
          }
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

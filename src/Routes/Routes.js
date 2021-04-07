import { lazy } from "react";

const Gallery = lazy(() => import("../Views/Gallery/Gallery"));
const Work = lazy(() => import("../Views/Work/Work"));
const Home = lazy(() => import("../Views/LandingPage/Home"));
const Order = lazy(() => import("../Views/Order/Order"));
const Faq = lazy(() => import("../Views/Faq/Faq"));
const Contact = lazy(() => import("../Views/Contact/Contact"));
const Admin = lazy(() => import("../Views/Admin/Admin"));
const Login = lazy(() => import("../Views/Login/Login"));
const Signup = lazy(() => import("../Views/Signup/Signup"));

export const Routes = [
  { pathname: "/", component: Home },
  { pathname: "/contact", component: Contact },
  { pathname: "/faq", component: Faq },
  { pathname: "/order", component: Order },
  { pathname: "/work", component: Work },
  { pathname: "/gallery", component: Gallery },
  { pathname: "/admin", component: Admin },
  { pathname: "/login", component: Login },
  { pathname: "/signup", component: Signup },
];

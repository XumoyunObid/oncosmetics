import { Address } from "../pages/user/address";
import { Profile } from "../pages/user/profile";
import { ChangeProfile } from "../pages/user/change-profile";

export const user_pages = [
  {
    component: <Profile />,
  },
  {
    component: <Address />,
    path: "address",
  },
  {
    component: <ChangeProfile />,
    path: "change-profile",
  },
];

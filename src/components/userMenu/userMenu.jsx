import { useDispatch, useSelector } from "react-redux";

import { LogOut } from "../../redux/auth/operations.js";
import { selectUser } from "../../redux/auth/slice.js";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <p>{user.name}</p>
      <button type="button" onClick={() => dispatch(LogOut())}>
        Logout
      </button>
    </>
  );
};

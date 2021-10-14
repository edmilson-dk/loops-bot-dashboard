import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { API } from "../../services/fetch-api";
import { UserData } from "../../types";
import { setStoredToken, setStoredUser } from "../../utils/local-storage-utils";

type UserSignInData = {
  admin: UserData;
  token: string;
};

type UserSignInParams = {
  email: string;
  password: string;
  onSuccess: () => void;
  onError: () => void;
};

export function useAuth() {
  const history = useHistory();

  function signIn(props: UserSignInParams) {
    const mutation = useMutation(
      () => {
        return API.post<UserSignInData>("/admin/login", {
          email: props.email,
          password: props.password,
        });
      },
      {
        onSuccess: (data) => {
          setStoredUser(data.data.admin);
          setStoredToken(data.data.token);
          props.onSuccess();
        },
        onError: () => {
          props.onError();
        },
      }
    );

    return mutation;
  }

  function signOut() {
    localStorage.clear();
    history.replace("/login");
  }

  return {
    signIn,
    signOut,
  };
}
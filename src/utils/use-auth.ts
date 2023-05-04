import {useSelector} from "react-redux";
import {SetUserPayload} from "src/redux/reducers/@types";

type StateType = {
    user: SetUserPayload,
}
export const useAuth = ()=>{
    const {email, token, id} = useSelector((state: StateType) => state.user)
    return {
        isAuth: !!email,
        email,
        token,
        id,
    }
}
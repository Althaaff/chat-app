import { useUserStore } from "../../../lib/userStore";
import "./userInfo.css";

const UserInfo = () => {
  const { currentUser } = useUserStore();
  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} />
        <h2>{currentUser.username}</h2>
      </div>

      <div className="icons">
        <img src="./more.png" />
        <img src="./video.png" />
        <img src="./edit.png" />
      </div>
    </div>
  );
};

export default UserInfo;

import React from "react";
import Button from "../Components/Profile/Button.tsx";
import Input from "../Components/Profile/Input.tsx";
import ProfileAvatar from "../Components/Profile/ProfileAvatar.tsx";

const ProfileAccountDetailPage = () => {
  const userString = sessionStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;

  const credentials =
    user &&
    user.fullName
      .split(" ")
      .map((item) => item[0].toUpperCase())
      .join("");

  return (
    <section>
      <ProfileAvatar>{credentials}</ProfileAvatar>
      <form>
        <Input
          className="w-80"
          type="text"
          value={user?.fullName}
          label="Full name"
        />
        <Input
          className="w-80"
          type="email"
          value={user?.email}
          label="Email"
        />
        <Button>Save Changes</Button>
      </form>
    </section>
  );
};

export default ProfileAccountDetailPage;

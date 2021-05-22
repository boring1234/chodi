import React from "react";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import classes from "./ProfilePage.module.css";

export default function ProfilePage() {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

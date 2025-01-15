import User from "../models/user.model";

import { connect } from "../mongodb/mongoose";

export const createOrUpdateUser = async (id, email_addresses, image_url) => {
  try {
    await connect();

    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          email: email_addresses,
          avatar: image_url,
        },
      },
      { new: true, upsert: true }
    );

    return user;
  } catch (error) {
    console.log("error");
  }
};

export const deleteUser = async (id) => {
  try {
    await connect();

    await User.findOneAndDelete({
      clerkId: id,
    });
  } catch (error) {
    console.log("error ao excluir");
  }
};

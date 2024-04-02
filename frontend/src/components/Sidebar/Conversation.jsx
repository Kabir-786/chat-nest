import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex items-center gap-2 hover:bg-sky-400 cursor-pointer py-1 p-2 rounded">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src={"https://cdn0.iconfinder.com/data/icons/cryptocurrency-137/128/1_profile_user_avatar_account_person-132-256.png"}
              alt="User Avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-3">
            <p className="font-bold text-white">Jhon Doe</p>
            <span className="text-xl">😎</span>
          </div>
        </div>
      </div>

      <div className="divider m-0 p-0 h-1" />
    </>
  );
};

export default Conversation;

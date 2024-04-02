import React from "react";

const Message = () => {
  return (
    <>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              src={
                "https://cdn0.iconfinder.com/data/icons/cryptocurrency-137/128/1_profile_user_avatar_account_person-132-256.png"
              }
              alt="User Avatar"
            />
          </div>
        </div>
        <div className={`chat-bubble text-white bg-sky-500`}>
          Hy, what is up buddy?
        </div>
        <div className="chat-footer opacity-50 text-xs gap-1 flex items-center">
          23:45
        </div>
      </div>

      
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              src={
                "https://cdn0.iconfinder.com/data/icons/cryptocurrency-137/128/1_profile_user_avatar_account_person-132-256.png"
              }
              alt="User Avatar"
            />
          </div>
        </div>
        <div className={`chat-bubble text-white bg-sky-500`}>
          Fine bro, What's about you?
        </div>
        <div className="chat-footer opacity-80 text-xs gap-1 flex items-center">
          23:45
        </div>
      </div>
    </>
  );
};

export default Message;

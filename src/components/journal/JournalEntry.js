import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal_entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://static2.cbrimages.com/wordpress/wp-content/uploads/2021/04/luffy.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-tytle">Un nuevo dia</p>
        <p className="journal__entry-content">
          Es un gran dia para volar jajajaja
        </p>
      </div>
      <div className="journal__entry-date-box">
            <span>Monday</span>
            <h4>28</h4>
      </div>
    </div>
  );
};

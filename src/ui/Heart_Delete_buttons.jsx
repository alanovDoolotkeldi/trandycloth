import React from "react";
function Heart_Delete_buttons() {
  return (
    <div className="heart-delete-buttons">
      <button className="heart-delete-button-2">
        {/* <CiHeart className="text-[24px]" /> */}
        <span className="bg-[url('/assets/images/image003.svg')] bg-no-repeat bg-center bg-cover filter hover:invert"></span>
      </button>
      <button>
        <span className="bg-[url('/assets/images/image04.svg')] bg-no-repeat bg-center bg-cover filter hover:invert"></span>
      </button>
    </div>
  );
}

export default Heart_Delete_buttons;

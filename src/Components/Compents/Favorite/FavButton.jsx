import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

export default function FavButton() {
  return (
    <button>
      <FontAwesomeIcon className="text-3xl" icon={faHeartRegular} />
    </button>
  );
}

import React from "react";
import { imageService } from "../_services/image.service";

function Icon({ id }) {
  const Icon = imageService.getSvg(id);

  if (Icon) {
    return <Icon />;
  } else {
    return null;
  }
}

export default Icon;

import { ReactComponent as ambulance } from "../components/assets/ambulance.svg";
import { ReactComponent as barsSolid } from "../components/assets/bars-solid.svg";
import { ReactComponent as bcHorizontal } from "../components/assets/BCID_H_rgb_pos.svg";
import { ReactComponent as bcVertical } from "../components/assets/BCID_V_rgb_pos.svg";
import { ReactComponent as bookOpenSolid } from "../components/assets/book-open-solid.svg";
import { ReactComponent as breadcrumbDivider } from "../components/assets/breadcrumb-divider.svg";
import { ReactComponent as breadcrumbHead } from "../components/assets/breadcrumb-head.svg";
import { ReactComponent as breadcrumbTail } from "../components/assets/breadcrumb-tail.svg";
import { ReactComponent as carAltSolid } from "../components/assets/car-alt-solid.svg";
import { ReactComponent as dollarSignSolid } from "../components/assets/dollar-sign-solid.svg";
import { ReactComponent as externalLinkAltSolid } from "../components/assets/external-link-alt-solid.svg";
import { ReactComponent as handHoldingHeartSolid } from "../components/assets/hand-holding-heart-solid.svg";
import { ReactComponent as handsSolid } from "../components/assets/hands-solid.svg";
import { ReactComponent as heartSolid } from "../components/assets/heart-solid.svg";
import { ReactComponent as homeSolid } from "../components/assets/home-solid.svg";
import { ReactComponent as industrySolid } from "../components/assets/industry-solid.svg";
import { ReactComponent as ionicIosInfoCircle } from "../components/assets/ionic-ios-information-circle.svg";
import { ReactComponent as ionicMdClose } from "../components/assets/ionic-md-close.svg";
import { ReactComponent as ionicMdPerson } from "../components/assets/ionic-md-person.svg";
import { ReactComponent as iosArrowDown } from "../components/assets/ios-arrow-down.svg";
import { ReactComponent as iosFootball } from "../components/assets/ios-football.svg";
import { ReactComponent as leafSolid } from "../components/assets/leaf-solid.svg";
import { ReactComponent as localGovernment } from "../components/assets/local-government.svg";
import { ReactComponent as mapIconsLawyer } from "../components/assets/map-icons-lawyer.svg";
import { ReactComponent as materialWork } from "../components/assets/material-work.svg";
import { ReactComponent as nounAntlers } from "../components/assets/noun-project-antlers.svg";
import { ReactComponent as nounApartment } from "../components/assets/noun-project-apartment.svg";
import { ReactComponent as nounCertificate } from "../components/assets/noun-project-certificate.svg";
import { ReactComponent as nounCoins } from "../components/assets/noun-project-coins-with-hand.svg";
import { ReactComponent as nounFishing } from "../components/assets/noun-project-fishing.svg";
import { ReactComponent as nounMedicalCross } from "../components/assets/noun-project-medical-cross.svg";
import { ReactComponent as passportSolid } from "../components/assets/passport-solid.svg";
import { ReactComponent as planeSolid } from "../components/assets/plane-solid.svg";
import { ReactComponent as searchSolid } from "../components/assets/search-solid.svg";

const svgIcons = {
  "ambulance.svg": ambulance,
  "bars-solid.svg": barsSolid,
  "BCID_H_rgb_pos.svg": bcHorizontal,
  "BCID_V_rgb_pos.svg": bcVertical,
  "book-open-solid.svg": bookOpenSolid,
  "breadcrumb-divider.svg": breadcrumbDivider,
  "breadcrumb-head.svg": breadcrumbHead,
  "breadcrumb-tail.svg": breadcrumbTail,
  "car-alt-solid.svg": carAltSolid,
  "dollar-sign-solid.svg": dollarSignSolid,
  "external-link-alt-solid.svg": externalLinkAltSolid,
  "hand-holding-heart-solid.svg": handHoldingHeartSolid,
  "hands-solid.svg": handsSolid,
  "heart-solid.svg": heartSolid,
  "home-solid.svg": homeSolid,
  "industry-solid.svg": industrySolid,
  "ionic-ios-information-circle.svg": ionicIosInfoCircle,
  "ionic-md-close.svg": ionicMdClose,
  "ionic-md-person.svg": ionicMdPerson,
  "ios-arrow-down.svg": iosArrowDown,
  "ios-football.svg": iosFootball,
  "leaf-solid.svg": leafSolid,
  "local-government.svg": localGovernment,
  "map-icons-lawyer.svg": mapIconsLawyer,
  "material-work.svg": materialWork,
  "noun-project-antlers.svg": nounAntlers,
  "noun-project-apartment.svg": nounApartment,
  "noun-project-certificate.svg": nounCertificate,
  "noun-project-coins-with-hand.svg": nounCoins,
  "noun-project-fishing.svg": nounFishing,
  "noun-project-medical-cross.svg": nounMedicalCross,
  "passport-solid.svg": passportSolid,
  "plane-solid.svg": planeSolid,
  "search-solid.svg": searchSolid,
};

function getSvg(id) {
  if (svgIcons[id]) {
    return svgIcons[id];
  } else {
    return null;
  }
}

export const imageService = {
  getSvg,
};

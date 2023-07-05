import { iconsSocialMedia } from "./iconOptions";
import { Text } from "react-native";

const socialMediaIconize = (link) => {
  if (link.includes('linkedin')) return iconsSocialMedia.linkedin;
  if (link.includes('github')) return iconsSocialMedia.github
  if (link.includes('behance')) return iconsSocialMedia.behance
  if (link.includes('figma')) return iconsSocialMedia.figma
  if (link.includes('facebook')) return iconsSocialMedia.facebook
  if (link.includes('instagram')) return iconsSocialMedia.instagram
  return <Text style={{color: '#0D47A1'}}>{link}</Text>
};

export default socialMediaIconize;
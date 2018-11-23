import React from "react";
import ContentLoader from "react-content-loader";

const AvatarLoader = props => (
  <ContentLoader
    height={200}
    width={200}
    speed={2}
    primaryColor="#bebebe"
    secondaryColor="#e3e3e3"
    {...props}
  >
    <rect x="10" y="9" rx="5" ry="5" width="100%" height="100%" />
  </ContentLoader>
);

const CardLoader = props => (
  <ContentLoader
    height={77}
    width={353}
    speed={4}
    primaryColor="#d4d4d4"
    secondaryColor="#efefef"
    {...props}
  >
    <rect x="119.69" y="64.67" rx="0" ry="0" width="0" height="0" />
    <rect x="54.69" y="56.67" rx="0" ry="0" width="0" height="0" />
    <rect x="20.69" y="13.67" rx="0" ry="0" width="353" height="77" />
  </ContentLoader>
);

export default {
  AvatarLoader,
  CardLoader
};

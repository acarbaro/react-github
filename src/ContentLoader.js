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

export default AvatarLoader;

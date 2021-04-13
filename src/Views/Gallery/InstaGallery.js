import React, { Component } from "react";

const InstaGallery = ({ accessToken }) => {
  const [photos, setPhotos] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      try {
        // const response = await fetch(
        //   `https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"${this.props.userId}","first":${this.props.photoCount},"after":null}`
        // );
        // const { data } = await response.json();
        // console.log("Data", data);
        // const photos = data.user.edge_owner_to_timeline_media.edges.map(({ node }) => {
        //   const { id } = node;
        //   const caption = node.edge_media_to_caption.edges[0].node.text;
        //   const thumbnail = node.thumbnail_resources.find(
        //     (thumbnail) => thumbnail.config_width === this.props.thumbnailWidth
        //   );
        //   const { src, config_width: width, config_height: height } = thumbnail;
        //   const url = `https://www.instagram.com/p/${node.shortcode}`;
        //   return {
        //     id,
        //     caption,
        //     src,
        //     width,
        //     height,
        //     url,
        //   };
        // });
        if (accessToken) {
          const response = await fetch(
            `https://graph.instagram.com/me/media?access_token=${accessToken}&fields=media_url,media_type,caption,permalink`
          ).then((x) => x.json());
          if (response.data) {
            setPhotos(response.data.map((x) => ({ url: x.permalink, src: x.media_url })));
          }
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [accessToken]);

  return (
    <div className="photos">
      {photos.length
        ? photos.map(({ src, url }, i) => (
            <a href={url} target="_blank" key={`insta-mediaObj-${i}`}>
              <img className="photo" src={src} />
            </a>
          ))
        : null}
    </div>
  );
};

export default InstaGallery;

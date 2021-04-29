const FB = window.FB;

window.fbAsyncInit = function () {
  FB.init({
    appId: '1185887611851343',
    status: true,
    xfbml: true,
    version: 'v2.10'
  });
};

function postToFeed() {
  // calling the API ...
  console.log('trying to post to feed');
  const post = FB.ui(
    {
      method: 'feed',
      link: 'http://...',
      name: 'Some Title',
      caption: 'Some Caption',
      description: 'Some Description',
      picture: 'http://...'
    },
    function (response) {
      if (response && response.post_id) {
        alert('Post was published.');
      } else {
        alert('Post was not published.');
      }
    }
  );
  console.log(post);
}

module.exports = {
  postToFeed
};

// FB.ui(
//   {
//     method: 'feed',
//     name: 'Facebook Dialogs',
//     link: 'https://developers.facebook.com/docs/reference/dialogs/',
//     picture: 'http://fbrell.com/f8.jpg',
//     caption: 'Reference Documentation',
//     description:
//       'Dialogs provide a simple, consistent interface for applications to interface with users.'
//   },
//   function (response) {
//     if (response && response.post_id) {
//       alert('Post was published.');
//     } else {
//       alert('Post was not published.');
//     }
//   }
// );

const FB = window.FB;

//keeping for facebook like button

// window.fbAsyncInit = function () {
//   FB.init({
//     appId: '1185887611851343',
//     status: true,
//     xfbml: true,
//     version: 'v2.10'
//   });
// };

function postToFeed() {
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

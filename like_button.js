'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return '「いいじゃん」押してくれてありがとう！.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'いいじゃん'
    );
  }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

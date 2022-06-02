import React, { Component } from 'react';

export class ChatBot extends Component {
  componentDidMount() {
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"383a1307118ebfbafb28a720ce84d2d8b","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }

  render() {
    return (
      <div>
        <h1>THí is chat bot</h1>
      </div>
    );
  }
}

export default ChatBot;

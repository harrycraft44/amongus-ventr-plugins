export function register(PluginManager) {
    PluginManager.registerPlugin('afterProcessAnchor', (anchor, blockedUsers) => {
      console.log('Example Plugin - Processed anchor:', anchor, 'Blocked users:', blockedUsers);
    });
  
    PluginManager.registerPlugin('afterProcessTweet', (username, tweetContents) => {
      
        alert('Example Plugin - Processed tweet:', username, tweetContents);
    });
  }

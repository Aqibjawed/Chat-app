const randomEmojis = [
    "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇",
    "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚",
    "😋", "😜", "😝", "😛", "🤑", "🤗", "🤩", "🤔", "🤨", "😎",
    "🤓", "🧐", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️",
    "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡",
    "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓",
    "🤤", "😪", "😴", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "😵",
    "🤠", "🥳", "🥸", "😎", "😬", "🤥", "🤫", "🤭", "🫣", "🫠",
  ];
  

  export const getRandomEmoji = ()=> {
    return randomEmojis[Math.floor(Math.random() * randomEmojis.length)];
  }